<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import ProjectCard from './components/ProjectCard.vue'
import { projects } from './types'
</script>

<template>
  <div class="min-h-screen">
    <!-- 导航栏 -->
    <nav class="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div class="container mx-auto px-6 h-20 flex items-center justify-between">
        <div class="text-xl font-black tracking-tighter text-white">
          VFX<span class="text-blue-500">作品集</span>
        </div>
        <div class="hidden md:flex items-center gap-8">
          <a href="#" class="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">首页</a>
          <a href="#projects" class="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">作品展示</a>
          <a href="#skills" class="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">核心技能</a>
          <a href="#contact" class="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-all">合作咨询</a>
        </div>
      </div>
    </nav>

    <!-- Hero 部分 -->
    <HeroSection />

    <!-- 项目展示部分 -->
    <section id="projects" class="py-24 bg-slate-950">
      <div class="container mx-auto px-6">
        <div class="mb-16">
          <h2 class="text-3xl md:text-5xl font-black text-white mb-4">作品展示 <span class="text-blue-500">PROJECTS</span></h2>
          <div class="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <ProjectCard 
            v-for="project in projects" 
            :key="project.id" 
            :project="project" 
          />
        </div>
      </div>
    </section>

    <!-- 技能部分 -->
    <section id="skills" class="py-24 bg-slate-900/50">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row gap-16 items-center">
          <div class="flex-1">
            <h2 class="text-3xl md:text-5xl font-black text-white mb-6">核心技能 <span class="text-blue-500">SKILLS</span></h2>
            <p class="text-slate-400 text-lg mb-8 leading-relaxed">
              深耕游戏特效领域多年，能够独立完成从概念草图到最终游戏内集成的全流程。
              特别擅长在保持视觉质量的同时，进行严格的性能优化。
            </p>
            
            <div class="space-y-6">
              <div v-for="(skill, index) in [
                { name: 'Unreal Engine 5 / Niagara', level: '95%' },
                { name: 'HLSL / Shader Graph', level: '90%' },
                { name: 'Blueprints 逻辑控制', level: '85%' },
                { name: 'Substance Designer / Painter', level: '80%' }
              ]" :key="index">
                <div class="flex justify-between mb-2">
                  <span class="text-white font-bold">{{ skill.name }}</span>
                  <span class="text-blue-400">{{ skill.level }}</span>
                </div>
                <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div class="h-full bg-blue-600 rounded-full" :style="{ width: skill.level }"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex-1 grid grid-cols-2 gap-4">
            <div v-for="i in 4" :key="i" class="aspect-square bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
               <!-- 软件图标占位 -->
               <div class="text-slate-500 font-bold uppercase tracking-widest text-xs">软件图标 {{ i }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer id="contact" class="py-20 border-t border-slate-800">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-5xl font-black text-white mb-8">准备好开启下一个项目了吗？</h2>
        <p class="text-slate-400 mb-10">无论是 3A 大作还是独立精品，我都能提供顶尖的特效支持。</p>
        <div class="flex justify-center gap-6">
          <a href="#" class="text-slate-400 hover:text-white transition-colors">ArtStation</a>
          <a href="#" class="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" class="text-slate-400 hover:text-white transition-colors">电子邮件</a>
        </div>
        <p class="mt-16 text-slate-600 text-sm">© 2026 VFX 作品集. 使用 Vue & Tailwind CSS 构建.</p>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
