<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../types'

const skillGroups = [
  {
    title: "特效与引擎",
    skills: [
      { name: "Unreal Engine (熟悉 Niagara/C++/蓝图)", level: "95%" },
      { name: "VFX 材质系统与渲染管线", level: "90%" },
      { name: "Gameplay 逻辑与特效联动", level: "85%" }
    ]
  },
  {
    title: "美术与工作流",
    skills: [
      { name: "Maya / Substance Painter", level: "85%" },
      { name: "PBR 材质 / Shader 开发", level: "80%" },
      { name: "SVN / Git 版本管理", level: "90%" }
    ]
  }
];

const gamingExperience = [
  { genre: "STG", description: "Apex (1401h), 守望先锋 (430h), 终焉之莉莉 (320h)" },
  { genre: "RPG", description: "黑神话:悟空 (36h), 艾尔登法环 (30h), 荒野大镖客2 (28h)" },
  { genre: "ACT", description: "精灵与萤火意志 (33h), 人类:一败涂地 (26h)" },
  { genre: "SLG/沙盒", description: "植物大战僵尸 (140h), 泰拉瑞亚 (600h), 史莱姆牧场 (43h)" }
];

// 首页只显示前两个项目，且优先显示特效类
const featuredProjects = [...projects].sort((a, b) => (b.isVFX ? 1 : 0) - (a.isVFX ? 1 : 0)).slice(0, 2);
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
            <h2 class="text-3xl md:text-5xl font-black text-white mb-4 italic">FEATURED <span class="text-blue-500">VFX WORKS</span></h2>
            <p class="text-slate-500">以 Niagara 特效为核心，结合 C++ Gameplay 的深度实践</p>
          </div>
          <router-link to="/portfolio" class="group flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-blue-600 text-white font-bold rounded-lg transition-all border border-slate-700 hover:border-blue-500">
            查看全部作品
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="17 8l4 4m0 0l-4 4m4-4H3" />
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

    <!-- 技能与技术栈 -->
    <section id="skills" class="py-24 bg-slate-900/50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-5xl font-black text-white mb-16 text-center">核心 <span class="text-blue-500">技能</span></h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div v-for="group in skillGroups" :key="group.title" class="space-y-8">
            <h3 class="text-xl font-bold text-white flex items-center gap-3">
              <span class="w-8 h-px bg-blue-500"></span> {{ group.title }}
            </h3>
            <div class="space-y-6">
              <div v-for="skill in group.skills" :key="skill.name">
                <div class="flex justify-between mb-2">
                  <span class="text-slate-300 font-medium">{{ skill.name }}</span>
                  <span class="text-blue-400 font-mono text-sm">{{ skill.level }}</span>
                </div>
                <div class="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-1000" :style="{ width: skill.level }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 游戏经历 -->
    <section id="gaming" class="py-24">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-black text-white mb-4 italic uppercase tracking-widest">Gamer <span class="text-blue-500">DNA</span></h2>
            <p class="text-slate-500 italic">“深度的游戏阅历是理解特效设计的基石”</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="exp in gamingExperience" :key="exp.genre" class="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/30 transition-colors">
              <div class="text-blue-500 font-black mb-2">{{ exp.genre }}</div>
              <div class="text-slate-400 text-sm leading-relaxed">{{ exp.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
