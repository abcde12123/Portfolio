<script setup lang="ts">
const skillGroups = [
  {
    title: "引擎与核心开发",
    skills: [
      { name: "Unreal Engine (Niagara/C++/蓝图)", level: "95%" },
      { name: "Unity 引擎开发", level: "85%" },
      { name: "C++ 编程与 Gameplay 逻辑", level: "90%" },
      { name: "VFX 材质系统与渲染管线", level: "92%" }
    ]
  },
  {
    title: "后期与影视制作",
    skills: [
      { name: "After Effects (平面设计与特效制作)", level: "90%" },
      { name: "Premiere Pro & 剪映 (影视剪辑)", level: "95%" },
      { name: "DaVinci Resolve (专业调色)", level: "88%" },
      { name: "LightRoom (摄影后期)", level: "85%" }
    ]
  },
  {
    title: "美术与设计工具",
    skills: [
      { name: "Photoshop (图像处理)", level: "90%" },
      { name: "Substance Painter (PT/材质绘制)", level: "85%" },
      { name: "Animate (AN/动画制作)", level: "80%" }
    ]
  },
  {
    title: "办公与效率工具",
    skills: [
      { name: "Office 全家桶 (Word/Excel/PPT)", level: "95%" }
    ]
  }
];
</script>

<template>
  <div class="min-h-screen pt-32 pb-24 relative overflow-hidden bg-slate-950">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="mb-20">
        <div class="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          Capabilities // Tech Stack
        </div>
        <h1 class="text-5xl md:text-7xl font-black text-white mb-6 italic uppercase tracking-tighter leading-none">
          SKILLS <span class="text-blue-500">&</span> EXPERTISE
        </h1>
        <p class="text-slate-400 max-w-3xl text-lg leading-relaxed font-medium">
          熟悉 <span class="text-blue-400">UE5 Niagara</span> 实时特效系统，
          并具备 <span class="text-blue-400">数字媒体全流程</span> 创作能力，涵盖影视后期、美术设计与高效办公协作。
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
        <div v-for="group in skillGroups" :key="group.title" class="space-y-10">
          <div class="flex items-center gap-4">
            <h2 class="text-2xl font-black text-white uppercase tracking-widest italic shrink-0">{{ group.title }}</h2>
            <div class="flex-grow h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div v-for="skill in group.skills" :key="skill.name" class="group/item">
              <div class="flex justify-between mb-3">
                <span class="text-slate-300 font-bold tracking-wide text-sm group-hover/item:text-white transition-colors">{{ skill.name }}</span>
                <span class="text-blue-400 font-mono text-xs font-black">{{ skill.level }}</span>
              </div>
              <div class="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-white/5 p-[1px]">
                <div class="h-full bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(37,99,235,0.5)]" :style="{ width: skill.level }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 返回首页按钮 -->
      <div class="mt-24 text-center">
        <router-link to="/" class="inline-flex items-center gap-2 px-8 py-4 bg-slate-900/50 hover:bg-slate-800 text-white font-bold rounded-lg transition-all border border-white/10 group">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          返回首页
        </router-link>
      </div>
    </div>
  </div>
</template>
