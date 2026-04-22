<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../types'

const gamingExperience = [
  { genre: "STG", description: "Apex (1401h), 守望先锋 (430h), 终焉之莉莉 (320h)" },
  { genre: "RPG", description: "黑神话:悟空 (36h), 艾尔登法环 (30h), 荒野大镖客2 (28h)" },
  { genre: "ACT", description: "精灵与萤火意志 (33h), 人类:一败涂地 (26h)" },
  { genre: "SLG/沙盒", description: "植物大战僵尸 (140h), 泰拉瑞亚 (600h), 史莱姆牧场 (43h)" }
];

// 首页只显示前两个项目，且优先显示特效类
const featuredProjects = [...projects].sort((a, b) => (b.isVFX ? 1 : 0) - (a.isVFX ? 1 : 0)).slice(0, 2);

const vfxSkills = [
  { name: '虚幻引擎', color: 'bg-slate-800 text-white border-slate-700', icon: 'UE' },
  { name: 'Unity', color: 'bg-slate-800 text-white border-slate-700', icon: 'Unity' },
  { name: 'C++', color: 'bg-blue-900/30 text-blue-400 border-blue-500/30', icon: 'C++' },
  { name: 'MAYA', color: 'bg-slate-800 text-white border-slate-700', icon: 'MY' },
  { name: 'Substance Painter', color: 'bg-red-900/30 text-red-400 border-red-500/30', icon: 'PT' },
  { name: 'AE平面设计与特效制作', color: 'bg-purple-900/30 text-purple-400 border-purple-500/30', icon: 'AE' },
  { name: 'PhotoShop', color: 'bg-blue-900/30 text-blue-400 border-blue-500/30', icon: 'PS' }
];

const extendedSkills = [
  { name: 'PR以及剪映剪辑', color: 'bg-purple-900/30 text-purple-400 border-purple-500/30', icon: 'PR' },
  { name: '达芬奇及LightRoom调色', color: 'bg-blue-900/30 text-blue-400 border-blue-500/30', icon: 'DV' },
  { name: 'AN', color: 'bg-red-900/30 text-red-400 border-red-500/30', icon: 'AN' },
  { name: 'PPT', color: 'bg-orange-900/30 text-orange-400 border-orange-500/30', icon: 'PPT' },
  { name: 'Word', color: 'bg-blue-900/30 text-blue-400 border-blue-500/30', icon: 'WD' },
  { name: 'Excle', color: 'bg-green-900/30 text-green-400 border-green-500/30', icon: 'XL' }
];
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <HeroSection />

    <!-- 教育经历 (简要) -->
    <section class="py-12 bg-slate-900/30 border-y border-slate-800">
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
             <span class="text-blue-400 font-bold">EDU</span>
          </div>
          <div>
            <h3 class="text-white font-bold">湖北工业大学</h3>
            <p class="text-slate-500 text-sm">数字媒体技术 · 本科 (2023 - 2027)</p>
          </div>
        </div>
        <div class="flex gap-8">
          <div class="text-center">
            <div class="text-2xl font-black text-white">2466w+</div>
            <div class="text-xs text-slate-500 uppercase">抖音运营播放量</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-black text-white">130w+</div>
            <div class="text-xs text-slate-500 uppercase">累计获赞</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 作品展示 -->
    <section id="projects" class="py-24">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 class="text-3xl md:text-5xl font-black text-white mb-4 italic">作品集</h2>
            <p class="text-slate-500">以 Niagara 特效为核心，结合材质系统的深度实践</p>
          </div>
          <router-link to="/portfolio" class="group flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-blue-600 text-white font-bold rounded-lg transition-all border border-slate-700 hover:border-blue-500">
            查看全部作品
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            v-for="project in featuredProjects" 
            :key="project.id" 
            :project="project" 
          />
        </div>
      </div>
    </section>

    <!-- 技能概览 (改为滚动展示) -->
    <section id="skills" class="py-24 bg-slate-900/50 overflow-hidden">
      <div class="container mx-auto px-6 text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-black text-white mb-8">技能 <span class="text-blue-500">矩阵</span></h2>
        <p class="text-slate-400 max-w-3xl mx-auto mb-12">
          熟悉 <span class="text-blue-400">UE5 Niagara</span> 特效系统，以及 <span class="text-blue-400">Unity</span> 与 <span class="text-blue-400">C++</span> 编程。
          在数字媒体创作领域，拥有从 <span class="text-blue-400">PR/AE/剪映</span> 影视剪辑、<span class="text-blue-400">达芬奇/LR</span> 调色到 <span class="text-blue-400">PS/AN/PT</span> 美术设计及 <span class="text-blue-400">Office</span> 全家桶的完整工作流。
        </p>
      </div>

      <!-- 无限滚动区域 -->
      <div class="relative flex flex-col gap-6 overflow-x-hidden py-10">
        <!-- 第一行：VFX 相关 (较大) -->
        <div class="flex whitespace-nowrap">
          <div class="flex animate-marquee">
            <div v-for="skill in vfxSkills" :key="skill.name" 
                 class="mx-4 flex items-center gap-5 px-8 py-5 bg-slate-800/40 backdrop-blur-sm border rounded-2xl transition-all hover:bg-white/10 hover:border-white/30"
                 :class="skill.color">
              <div class="w-12 h-12 flex items-center justify-center bg-slate-900/80 rounded-lg font-black text-sm shadow-inner">
                {{ skill.icon }}
              </div>
              <span class="text-xl font-black tracking-tight">{{ skill.name }}</span>
            </div>
          </div>
          <!-- 复制一份实现无缝滚动 -->
          <div class="flex animate-marquee" aria-hidden="true">
            <div v-for="skill in vfxSkills" :key="skill.name + '-clone'" 
                 class="mx-4 flex items-center gap-5 px-8 py-5 bg-slate-800/40 backdrop-blur-sm border rounded-2xl transition-all hover:bg-white/10 hover:border-white/30"
                 :class="skill.color">
              <div class="w-12 h-12 flex items-center justify-center bg-slate-900/80 rounded-lg font-black text-sm shadow-inner">
                {{ skill.icon }}
              </div>
              <span class="text-xl font-black tracking-tight">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- 第二行：拓展技能 (稍小) -->
        <div class="flex whitespace-nowrap">
          <div class="flex animate-marquee-reverse">
            <div v-for="skill in extendedSkills" :key="skill.name" 
                 class="mx-3 flex items-center gap-3 px-6 py-3 bg-slate-800/30 backdrop-blur-sm border rounded-xl transition-all hover:bg-white/10 hover:border-white/20"
                 :class="skill.color">
              <div class="w-8 h-8 flex items-center justify-center bg-slate-900/80 rounded-lg font-black text-[10px] shadow-inner">
                {{ skill.icon }}
              </div>
              <span class="text-base font-bold tracking-tight">{{ skill.name }}</span>
            </div>
          </div>
          <!-- 复制一份实现无缝滚动 -->
          <div class="flex animate-marquee-reverse" aria-hidden="true">
            <div v-for="skill in extendedSkills" :key="skill.name + '-clone'" 
                 class="mx-3 flex items-center gap-3 px-6 py-3 bg-slate-800/30 backdrop-blur-sm border rounded-xl transition-all hover:bg-white/10 hover:border-white/20"
                 :class="skill.color">
              <div class="w-8 h-8 flex items-center justify-center bg-slate-900/80 rounded-lg font-black text-[10px] shadow-inner">
                {{ skill.icon }}
              </div>
              <span class="text-base font-bold tracking-tight">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-16">
        <router-link to="/skills" class="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-blue-600 text-white font-bold rounded-lg transition-all border border-slate-700 hover:border-blue-500 group">
          查看详细技能树
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </section>

    <!-- 游戏经历概览 -->
    <section id="gaming" class="py-24">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-black text-white mb-4 italic uppercase tracking-widest">Gamer <span class="text-blue-500">DNA</span></h2>
          <p class="text-slate-400 mb-10 italic">“深度的游戏阅历是理解特效设计的基石”</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div v-for="exp in gamingExperience.slice(0, 4)" :key="exp.genre" class="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
              <div class="text-blue-500 font-black mb-1 text-sm">{{ exp.genre }}</div>
              <div class="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">Experienced</div>
            </div>
          </div>
          <router-link to="/gaming" class="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-blue-600 text-white font-bold rounded-lg transition-all border border-slate-700 hover:border-blue-500 group">
            查看完整游戏履历
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee-reverse {
  animation: marquee-reverse 35s linear infinite;
}

/* 移除鼠标悬停停止动画的逻辑 */
</style>
