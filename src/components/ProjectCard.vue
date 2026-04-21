<script setup lang="ts">
import type { Project } from '../types';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <div class="group relative bg-slate-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]">
    <!-- 缩略图区域 -->
    <div class="relative aspect-video overflow-hidden">
      <img 
        :src="project.thumbnail" 
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <!-- 悬浮遮罩 -->
      <div class="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
        <a 
          :href="project.link || '#'" 
          target="_blank"
          class="px-6 py-2 bg-blue-600 text-white font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
        >
          {{ project.isVFX ? '观看特效演示' : '查看项目详情' }}
        </a>
      </div>
      <!-- 特效角标 -->
      <div v-if="project.isVFX" class="absolute top-3 left-3 px-2 py-1 bg-blue-600/90 text-white text-[10px] font-black uppercase tracking-tighter rounded backdrop-blur-md">
        VFX Showcase
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="p-6">
      <div class="flex items-center gap-2 mb-3">
        <span class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
        <span class="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">{{ project.category }}</span>
      </div>
      <h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">{{ project.title }}</h3>
      <p class="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">{{ project.description }}</p>
      
      <!-- 标签 -->
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in project.tags" 
          :key="tag"
          class="px-2 py-0.5 text-[9px] bg-white/5 text-slate-400 rounded-sm border border-white/5 group-hover:border-blue-500/30 group-hover:text-slate-300 transition-colors"
        >
          #{{ tag }}
        </span>
      </div>
    </div>

    <!-- 底部装饰线 -->
    <div class="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full"></div>
  </div>
</template>
