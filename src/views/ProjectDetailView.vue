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
</script>

<template>
  <div v-if="project" class="min-h-screen bg-slate-950 pt-32 pb-24 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-blue-600/10 blur-[120px] rounded-full opacity-50"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- 导航 -->
      <button @click="goBack" class="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        返回上一页
      </button>

      <div class="max-w-4xl mx-auto">
        <!-- 头部信息 -->
        <div class="mb-12">
          <div class="flex items-center gap-3 mb-6">
            <span class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest rounded">
              {{ project.category }}
            </span>
            <span v-if="project.isVFX" class="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-widest rounded">
              VFX WORK
            </span>
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-white mb-8 italic uppercase tracking-tighter">
            {{ project.title }}
          </h1>
          
          <!-- 封面图 -->
          <div class="relative aspect-video rounded-2xl overflow-hidden border border-white/10 mb-12 shadow-2xl">
            <img :src="project.thumbnail" :alt="project.title" class="w-full h-full object-cover" />
          </div>

          <!-- 文章内容 (占位) -->
          <div class="prose prose-invert prose-blue max-w-none">
            <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-8 md:p-12 backdrop-blur-md">
              <h2 class="text-2xl font-bold text-white mb-6">项目介绍</h2>
              <p class="text-slate-300 text-lg leading-relaxed mb-8">
                {{ project.description }}
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="space-y-4">
                  <h3 class="text-blue-400 font-bold uppercase tracking-widest text-sm">核心技术栈</h3>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 bg-white/5 text-slate-300 rounded-full text-xs border border-white/10">
                      #{{ tag }}
                    </span>
                  </div>
                </div>
                <div class="space-y-4">
                  <h3 class="text-blue-400 font-bold uppercase tracking-widest text-sm">项目角色</h3>
                  <p class="text-slate-300 text-sm">特效制作 / 关卡设计 / 材质逻辑</p>
                </div>
              </div>

              <div class="p-8 bg-blue-600/5 border border-blue-500/20 rounded-xl text-center">
                <p class="text-slate-400 italic">文章内容正在同步中，请稍候...</p>
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
