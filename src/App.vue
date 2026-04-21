<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const transitionName = ref('slide-right')

// 监听路由变化，决定滑动方向
watch(() => route?.meta?.index, (toIndex, fromIndex) => {
  if (toIndex && fromIndex) {
    transitionName.value = (toIndex as number) > (fromIndex as number) ? 'slide-left' : 'slide-right'
  } else {
    transitionName.value = 'fade'
  }
})

// 顶部进度条状态
const isLoading = ref(false)
watch(() => route?.path, () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 600)
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">
    <!-- 顶部加载进度条 (高级 UI 效果) -->
    <div 
      class="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-400 to-blue-600 z-[100] transition-all duration-500 ease-out pointer-events-none"
      :style="{ width: isLoading ? '100%' : '0%', opacity: isLoading ? '1' : '0' }"
    ></div>

    <!-- 导航栏 (增强毛玻璃与动态边框) -->
    <nav class="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-xl border-b border-white/5">
      <div class="container mx-auto px-6 h-20 flex items-center justify-between">
        <router-link to="/" class="group flex items-center gap-2">
          <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-black group-hover:rotate-12 transition-transform">庹</div>
          <span class="text-xl font-black tracking-tighter text-white">
            VFX<span class="text-blue-500 italic ml-1">LAB</span>
          </span>
        </router-link>
        
        <div class="hidden md:flex items-center gap-8">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/portfolio" class="nav-link">全部作品</router-link>
          <router-link to="/#skills" class="nav-link">技能</router-link>
          <router-link to="/#gaming" class="nav-link">游戏经历</router-link>
          <a href="#contact" class="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20">
            联系我
          </a>
        </div>
      </div>
    </nav>

    <!-- 路由视图与滑动动画 -->
    <main class="relative pt-20">
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 页脚/联系 (增强背景纹理) -->
    <footer id="contact" class="relative py-24 border-t border-white/5 bg-slate-950 overflow-hidden">
      <!-- 背景装饰网格 -->
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-black text-white mb-6 leading-tight">探索<br/><span class="text-blue-500">特效与逻辑的融合</span></h2>
            <p class="text-slate-400 mb-8 max-w-md">正在寻找特效/程序相关的实习或项目合作机会。随时欢迎交流技术或游戏心得。</p>
            <div class="space-y-4">
              <div class="flex items-center gap-4 text-slate-300">
                <span class="text-blue-500 font-bold w-12 text-xs uppercase opacity-50">Email</span>
                <span class="font-mono">xieye12123@qq.com</span>
              </div>
              <div class="flex items-center gap-4 text-slate-300">
                <span class="text-blue-500 font-bold w-12 text-xs uppercase opacity-50">Phone</span>
                <span class="font-mono">180-1177-2015</span>
              </div>
              <div class="flex items-center gap-4 text-slate-300">
                <span class="text-blue-500 font-bold w-12 text-xs uppercase opacity-50">City</span>
                <span>湖北 · 武汉</span>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 justify-center md:justify-end">
             <a href="https://github.com/abcde12123" target="_blank" class="px-8 py-4 bg-white/5 border border-white/10 rounded text-white font-bold hover:bg-white/10 transition-all">GitHub</a>
             <a href="https://space.bilibili.com/39316523" target="_blank" class="px-8 py-4 bg-blue-600 rounded text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">Bilibili</a>
          </div>
        </div>
        <div class="mt-24 pt-8 border-t border-white/5 text-center text-slate-600 text-xs tracking-widest uppercase">
          © 2026 庹芮豪 PORTFOLIO. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* 导航链接样式 */
.nav-link {
  @apply text-sm font-medium text-slate-400 hover:text-white transition-all relative py-1;
}
.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300;
}
.nav-link:hover::after {
  @apply w-full;
}
.router-link-active.nav-link {
  @apply text-white;
}
.router-link-active.nav-link::after {
  @apply w-full;
}

/* 左右滑动切换动画 */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* Slide Left (前进) */
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Slide Right (后退) */
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 基础 Fade 动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 隐藏滚动条 */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  @apply bg-slate-800 rounded-full hover:bg-blue-600/50 transition-colors;
}
</style>
