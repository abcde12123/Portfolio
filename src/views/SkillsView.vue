<script setup lang="ts">
type ToolKey =
  | 'UE'
  | 'Niagara'
  | 'Unity'
  | 'C++'
  | 'AE'
  | 'PR'
  | 'DV'
  | 'LR'
  | 'PS'
  | 'PT'
  | 'AN'
  | 'WD'
  | 'XL'
  | 'PPT'

type SkillItem = {
  name: string
  tool: ToolKey
}

const toolMeta: Record<
  ToolKey,
  {
    icon: string
    tileClass: string
    iconClass: string
  }
> = {
  UE: {
    icon: 'UE',
    tileClass: 'bg-slate-800/40 text-white border-slate-700/60',
    iconClass: 'bg-slate-950/40 border-slate-700/60 text-white',
  },
  Niagara: {
    icon: 'NG',
    tileClass: 'bg-blue-900/30 text-blue-200 border-blue-500/30',
    iconClass: 'bg-blue-950/30 border-blue-500/30 text-blue-200',
  },
  Unity: {
    icon: 'U',
    tileClass: 'bg-slate-800/35 text-slate-100 border-slate-600/50',
    iconClass: 'bg-slate-950/40 border-slate-600/50 text-slate-100',
  },
  'C++': {
    icon: 'C++',
    tileClass: 'bg-blue-900/25 text-blue-200 border-blue-500/25',
    iconClass: 'bg-blue-950/30 border-blue-500/25 text-blue-200',
  },
  AE: {
    icon: 'AE',
    tileClass: 'bg-purple-900/25 text-purple-200 border-purple-500/25',
    iconClass: 'bg-purple-950/30 border-purple-500/25 text-purple-200',
  },
  PR: {
    icon: 'PR',
    tileClass: 'bg-violet-900/25 text-violet-200 border-violet-500/25',
    iconClass: 'bg-violet-950/30 border-violet-500/25 text-violet-200',
  },
  DV: {
    icon: 'DV',
    tileClass: 'bg-sky-900/25 text-sky-200 border-sky-500/25',
    iconClass: 'bg-sky-950/30 border-sky-500/25 text-sky-200',
  },
  LR: {
    icon: 'LR',
    tileClass: 'bg-indigo-900/25 text-indigo-200 border-indigo-500/25',
    iconClass: 'bg-indigo-950/30 border-indigo-500/25 text-indigo-200',
  },
  PS: {
    icon: 'PS',
    tileClass: 'bg-blue-900/25 text-blue-200 border-blue-500/25',
    iconClass: 'bg-blue-950/30 border-blue-500/25 text-blue-200',
  },
  PT: {
    icon: 'PT',
    tileClass: 'bg-red-900/20 text-red-200 border-red-500/25',
    iconClass: 'bg-red-950/30 border-red-500/25 text-red-200',
  },
  AN: {
    icon: 'AN',
    tileClass: 'bg-rose-900/20 text-rose-200 border-rose-500/25',
    iconClass: 'bg-rose-950/30 border-rose-500/25 text-rose-200',
  },
  WD: {
    icon: 'W',
    tileClass: 'bg-blue-900/20 text-blue-200 border-blue-500/20',
    iconClass: 'bg-blue-950/30 border-blue-500/20 text-blue-200',
  },
  XL: {
    icon: 'XL',
    tileClass: 'bg-emerald-900/20 text-emerald-200 border-emerald-500/20',
    iconClass: 'bg-emerald-950/30 border-emerald-500/20 text-emerald-200',
  },
  PPT: {
    icon: 'PPT',
    tileClass: 'bg-orange-900/20 text-orange-200 border-orange-500/20',
    iconClass: 'bg-orange-950/30 border-orange-500/20 text-orange-200',
  },
}

const skillGroups = [
  {
    title: "引擎与核心开发",
    skills: [
      { name: "Unreal Engine 5", tool: "UE" },
      { name: "Niagara 特效系统", tool: "Niagara" },
      { name: "材质系统 / Shader", tool: "UE" },
      { name: "蓝图逻辑", tool: "UE" },
      { name: "C++ / Gameplay 逻辑", tool: "C++" },
      { name: "Unity 基础开发", tool: "Unity" }
    ]
  },
  {
    title: "后期与影视制作",
    skills: [
      { name: "After Effects 平面与特效", tool: "AE" },
      { name: "Premiere / 剪映 剪辑", tool: "PR" },
      { name: "DaVinci Resolve 调色", tool: "DV" },
      { name: "LightRoom 摄影后期", tool: "LR" }
    ]
  },
  {
    title: "美术与设计工具",
    skills: [
      { name: "Photoshop 图像处理", tool: "PS" },
      { name: "Substance Painter 材质绘制", tool: "PT" },
      { name: "Animate 动画制作", tool: "AN" }
    ]
  },
  {
    title: "办公与效率工具",
    skills: [
      { name: "Word 文档协作", tool: "WD" },
      { name: "Excel 数据整理", tool: "XL" },
      { name: "PPT 汇报表达", tool: "PPT" }
    ]
  }
] satisfies Array<{ title: string; skills: SkillItem[] }>;
</script>

<template>
  <div class="min-h-screen pt-15 pb-20 relative overflow-hidden bg-slate-950">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="mb-12">
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
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              v-for="skill in group.skills"
              :key="skill.name"
              class="flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-sm transition-colors hover:border-white/30"
              :class="toolMeta[skill.tool].tileClass"
            >
              <div
                class="w-9 h-9 rounded-lg border flex items-center justify-center font-black text-[11px] tracking-tight shrink-0"
                :class="toolMeta[skill.tool].iconClass"
              >
                {{ toolMeta[skill.tool].icon }}
              </div>
              <div class="text-sm font-bold text-slate-100 leading-snug">
                {{ skill.name }}
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
