<script setup lang="ts">
import type { Project } from '../types';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <div class="vfx-card group">
    <div class="aspect-video overflow-hidden">
      <img 
        :src="project.thumbnail" 
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div class="p-5">
      <span class="text-xs font-semibold text-blue-500 uppercase tracking-wider">{{ project.category }}</span>
      <h3 class="text-xl font-bold mt-2 text-white">{{ project.title }}</h3>
      <p class="text-slate-400 text-sm mt-2 line-clamp-2">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2 mt-4">
        <span 
          v-for="tag in project.tags" 
          :key="tag"
          class="px-2 py-1 text-[10px] bg-slate-800 text-slate-300 rounded border border-slate-700"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>
