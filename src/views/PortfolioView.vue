<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../types'

// 将作品按特效分类进行简单排序或过滤
const vfxProjects = projects.filter(p => p.isVFX);
const otherProjects = projects.filter(p => !p.isVFX);
</script>

<template>
  <div class="min-h-screen pt-15 pb-24 relative overflow-hidden bg-slate-950">
    <!-- 背景装饰 -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- 头部标题 -->
      <div class="mb-12 text-center md:text-left">
        <div class="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          Archives // 2023-2027
        </div>
        <h1 class="text-5xl md:text-7xl font-black text-white mb-6 italic uppercase tracking-tighter">
          PORTFOLIO <span class="text-blue-500">DATABASE</span>
        </h1>
        <p class="text-slate-400 max-w-2xl text-lg leading-relaxed font-medium">
          这里收录了我在特效和程序逻辑制作中的所有技术沉淀。
        </p>
      </div>

      <!-- 特效作品区域 (重点突出) -->
      <div class="mb-24">
        <div class="flex items-center gap-6 mb-12">
          <h2 class="text-2xl font-black text-white uppercase tracking-widest italic">
            01. <span class="text-blue-500">VFX</span> SPECIAL EFFECTS
          </h2>
          <div class="flex-grow h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="project in vfxProjects" 
            :key="project.id" 
            :project="project" 
          />
        </div>
      </div>

      <!-- 其他开发项目 -->
      <div>
        <div class="flex items-center gap-6 mb-12">
          <h2 class="text-2xl font-black text-white uppercase tracking-widest italic">
            02. <span class="text-slate-500">DEV</span> PROGRAMMING & LOGIC
          </h2>
          <div class="flex-grow h-px bg-gradient-to-r from-slate-500/50 to-transparent"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="project in otherProjects" 
            :key="project.id" 
            :project="project" 
          />
        </div>
      </div>
    </div>
  </div>
</template>
