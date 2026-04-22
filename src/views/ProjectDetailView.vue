<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { projects } from '../types';
import { computed } from 'vue';

const route = useRoute();
const router = useRouter();
const projectId = computed(() => Number(route.params.id));
const project = computed(() => projects.find(p => p.id === projectId.value));

const goBack = () => {
  router.back();
};

const bilibiliBvid = computed(() => {
  if (!project.value?.link) return null;
  const match = project.value.link.match(/BV[a-zA-Z0-9]+/);
  return match ? match[0] : null;
});
</script>

<template>
  <div v-if="project" class="min-h-screen bg-slate-950 pt-20 pb-24 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- 返回按钮 -->
      <button 
        @click="goBack"
        class="group flex items-center gap-3 text-slate-500 hover:text-white transition-all mb-8"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        返回上一页
      </button>

      <div class="max-w-6xl mx-auto">
        <!-- 头部信息：更紧凑 -->
        <div class="mb-12 border-b border-white/10 pb-12">
          <div class="flex flex-wrap items-center gap-3 mb-6">
            <span class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest rounded">
              {{ project.category }}
            </span>
            <span v-if="project.isVFX" class="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-widest rounded">
              VFX WORK
            </span>
          </div>
          <h1 class="text-4xl md:text-7xl font-black text-white mb-4 italic uppercase tracking-tighter leading-none">
            {{ project.title }}
          </h1>
          <p class="text-slate-400 text-xl max-w-2xl font-medium leading-relaxed italic opacity-80">
            {{ project.description }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- 左侧：正文内容 (占据 8 列) -->
          <div class="lg:col-span-8 space-y-12">
            <div class="prose prose-invert prose-blue max-w-none">
              <div class="bg-slate-900/30 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-md">
                <div class="mb-12">
                  <h2 class="text-3xl font-black text-white mb-8 flex items-center gap-4">
                    <span class="w-1.5 h-8 bg-blue-500 rounded-full"></span>
                    项目展示 / Showcase
                  </h2>

                  <!-- 视频内嵌区域 -->
                  <div v-if="bilibiliBvid" class="mb-12">
                    <div class="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                      <iframe 
                        :src="`//player.bilibili.com/player.html?bvid=${bilibiliBvid}&page=1&high_quality=1&danmaku=0`" 
                        scrolling="no" 
                        border="0" 
                        frameborder="no" 
                        framespacing="0" 
                        allowfullscreen="true"
                        class="absolute inset-0 w-full h-full"
                      ></iframe>
                    </div>
                    <p class="text-slate-500 text-xs mt-4 text-center italic">若无法播放，请点击右侧按钮跳转至 Bilibili 观看</p>
                  </div>

                  <h2 class="text-3xl font-black text-white mb-8 flex items-center gap-4">
                    <span class="w-1.5 h-8 bg-blue-500 rounded-full"></span>
                    项目详情 / Project Breakdown
                  </h2>
                  <!-- 这里是将来放正文内容的地方 -->
                  <div class="space-y-6 text-slate-300 text-lg leading-relaxed">
                    <!-- 狼末项目特有的图片展示 -->
                    <template v-if="project.id === 7">
                      <div class="space-y-12 my-12">
                        <div class="space-y-4">
                          <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                            <img src="/images/LM_MAYA.webp" alt="Maya Modeling" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                          </div>
                          <p class="text-base text-slate-400 text-center italic font-medium">Maya 高低模建模阶段 / High & Low Poly Modeling</p>
                        </div>
                        <div class="space-y-4">
                          <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                            <img src="/images/LM_Material.webp" alt="Substance Painter Texturing" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                          </div>
                          <p class="text-base text-slate-400 text-center italic font-medium">Substance Painter 材质全流程制作 / PBR Texturing Workflow</p>
                        </div>
                      </div>
                    </template>

                    <div class="p-8 bg-blue-600/5 border border-blue-500/20 rounded-2xl text-center my-12">
                      <p class="text-slate-400 italic">“ 正在准备详细的文章内容与技术复盘，请稍候... ”</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：侧边栏信息 (占据 4 列) -->
          <div class="lg:col-span-4 space-y-8">
            <!-- 缩小的封面图 -->
            <div class="sticky top-32 space-y-8">
              <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img :src="project.thumbnail" :alt="project.title" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <!-- 项目规格 -->
              <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-8 backdrop-blur-md space-y-8">
                <div class="space-y-4">
                  <h3 class="text-blue-500 font-black uppercase tracking-[0.2em] text-[10px]">Technical Stack / 技术栈</h3>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in project.tags" :key="tag" class="px-3 py-1.5 bg-white/5 text-slate-300 rounded text-xs font-bold border border-white/10 hover:border-blue-500/50 transition-colors">
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <div class="space-y-4">
                  <h3 class="text-blue-500 font-black uppercase tracking-[0.2em] text-[10px]">Responsibility / 职责</h3>
                  <div class="text-white font-bold text-sm">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="w-1 h-1 bg-blue-500 rounded-full"></span>
                      特效制作 (Niagara/VFX)
                    </div>
                    <div class="flex items-center gap-2 mb-2">
                      <span class="w-1 h-1 bg-blue-500 rounded-full"></span>
                      材质逻辑 (Material Shader)
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-blue-500 rounded-full"></span>
                      渲染优化 (Rendering)
                    </div>
                  </div>
                </div>

                <div v-if="project.link && project.link !== '#'" class="pt-4">
                  <a :href="project.link" target="_blank" class="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all shadow-lg shadow-blue-600/20 uppercase tracking-widest text-xs">
                    查看演示视频 / Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose {
  color: #94a3b8;
}
.prose h2 {
  color: white;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>
