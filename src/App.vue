<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import ProjectCard from './components/ProjectCard.vue'
import { projects } from './types'

const skillGroups = [
  {
    title: "引擎与编程",
    skills: [
      { name: "Unreal Engine (Niagara/C++/蓝图)", level: "95%" },
      { name: "C++ / OOP 设计模式", level: "90%" },
      { name: "Gameplay 框架设计", level: "85%" }
    ]
  },
  {
    title: "美术与工作流",
    skills: [
      { name: "Maya / Substance Painter", level: "85%" },
      { name: "PBR 渲染管线 / Shader", level: "80%" },
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
</script>

<template>
  <div class="min-h-screen">
    <!-- 导航栏 -->
    <nav class="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div class="container mx-auto px-6 h-20 flex items-center justify-between">
        <div class="text-xl font-black tracking-tighter text-white">
          席丙豪<span class="text-blue-500">PORTFOLIO</span>
        </div>
        <div class="hidden md:flex items-center gap-8">
          <a href="#" class="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">首页</a>
          <a href="#projects" class="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">作品</a>
          <a href="#skills" class="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">技能</a>
          <a href="#gaming" class="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">游戏经历</a>
          <a href="#contact" class="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-all">联系我</a>
        </div>
      </div>
    </nav>

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
        <div class="mb-16">
          <h2 class="text-3xl md:text-5xl font-black text-white mb-4 italic">SELECTED <span class="text-blue-500">WORKS</span></h2>
          <p class="text-slate-500">涵盖 UE 逻辑、C++ Gameplay 及虚拟环境制作</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            v-for="project in projects" 
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
            <p class="text-slate-500 italic">“深度的游戏阅历是理解游戏设计的基石”</p>
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

    <!-- 页脚/联系 -->
    <footer id="contact" class="py-24 border-t border-slate-800 bg-slate-950">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-black text-white mb-6 leading-tight">一起探索<br/><span class="text-blue-500">游戏的无限可能</span></h2>
            <p class="text-slate-400 mb-8 max-w-md">正在寻找特效/程序相关的实习或项目合作机会。随时欢迎交流技术或游戏心得。</p>
            <div class="space-y-4">
              <div class="flex items-center gap-4 text-slate-300">
                <span class="text-blue-500 font-bold w-12 text-xs uppercase">Email</span>
                <span>xieye12123@qq.com</span>
              </div>
              <div class="flex items-center gap-4 text-slate-300">
                <span class="text-blue-500 font-bold w-12 text-xs uppercase">Phone</span>
                <span>180-1177-2015</span>
              </div>
              <div class="flex items-center gap-4 text-slate-300">
                <span class="text-blue-500 font-bold w-12 text-xs uppercase">City</span>
                <span>湖北 · 武汉</span>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 justify-center md:justify-end">
             <a href="https://github.com/abcde12123" target="_blank" class="px-8 py-4 bg-slate-900 border border-slate-800 rounded-xl text-white font-bold hover:bg-slate-800 transition-all">GitHub</a>
             <a href="https://space.bilibili.com/39316523" target="_blank" class="px-8 py-4 bg-blue-600 rounded-xl text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">Bilibili</a>
          </div>
        </div>
        <div class="mt-24 pt-8 border-t border-slate-900 text-center text-slate-600 text-xs">
          © 2026 席丙豪 PORTFOLIO. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
