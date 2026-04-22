<script setup lang="ts">
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
</script>

<template>
  <div class="min-h-screen pt-32 pb-24 relative overflow-hidden bg-slate-950">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="mb-20">
        <div class="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          Capabilities // Tech Stack
        </div>
        <h1 class="text-5xl md:text-7xl font-black text-white mb-6 italic uppercase tracking-tighter">
          SKILLS <span class="text-blue-500">&</span> EXPERTISE
        </h1>
        <p class="text-slate-400 max-w-2xl text-lg leading-relaxed font-medium">
          深耕 UE 引擎生态，专注于实时特效与程序的深度融合。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div v-for="group in skillGroups" :key="group.title" class="space-y-12">
          <div class="flex items-center gap-4">
            <h2 class="text-2xl font-black text-white uppercase tracking-widest italic">{{ group.title }}</h2>
            <div class="flex-grow h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          </div>
          
          <div class="space-y-10">
            <div v-for="skill in group.skills" :key="skill.name">
              <div class="flex justify-between mb-3">
                <span class="text-slate-200 font-bold tracking-wide">{{ skill.name }}</span>
                <span class="text-blue-400 font-mono text-sm font-black">{{ skill.level }}</span>
              </div>
              <div class="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-white/5 p-[1px]">
                <div class="h-full bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(37,99,235,0.5)]" :style="{ width: skill.level }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
