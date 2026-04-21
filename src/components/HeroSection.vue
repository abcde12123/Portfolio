<script setup lang="ts">
// 游戏特效师 Hero 部分
</script>

<template>
  <header class="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-20">
    <!-- 背景光晕 -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
    <div class="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full -z-10"></div>

    <div class="container mx-auto px-6 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        VFX 特效师 & Unreal Engine 开发者
      </div>
      
      <h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-6">
        打造 <span class="vfx-gradient-text">沉浸式</span><br />
        虚拟视觉特效
      </h1>
      
      <p class="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
        专注于 Unreal Engine (UE5) 游戏特效设计，精通 Niagara 系统、高级材质与 Blueprint 逻辑。
        致力于通过极致的视觉冲击力提升游戏体验。
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#projects" class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-600/20">
          查看作品集
        </a>
        <a href="#contact" class="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 transition-all">
          联系我
        </a>
      </div>
    </div>
  </header>
</template>
