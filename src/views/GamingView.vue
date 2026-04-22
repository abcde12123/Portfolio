<script setup lang="ts">
const gamingExperience = [
  { genre: "STG", description: "Apex (1401h), 守望先锋 (430h), 终焉之莉莉 (320h)" },
  { genre: "RPG", description: "黑神话:悟空 (36h), 艾尔登法环 (30h), 荒野大镖客2 (28h)" },
  { genre: "ACT", description: "精灵与萤火意志 (33h), 人类:一败涂地 (26h)" },
  { genre: "SLG/沙盒", description: "植物大战僵尸 (140h), 泰拉瑞亚 (600h), 史莱姆牧场 (43h)" }
];
</script>

<template>
  <div class="min-h-screen pt-32 pb-24 relative overflow-hidden bg-slate-950">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent)] pointer-events-none"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="mb-20 text-center">
        <div class="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          Gamer Profile // DNA
        </div>
        <h1 class="text-5xl md:text-7xl font-black text-white mb-6 italic uppercase tracking-tighter">
          GAMING <span class="text-blue-500">EXPERIENCE</span>
        </h1>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium italic">
          “深度的游戏阅历是理解特效设计的基石”
        </p>
      </div>

      <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div v-for="exp in gamingExperience" :key="exp.genre" class="group p-8 bg-slate-900/40 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.1)]">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-black tracking-tighter italic">
              {{ exp.genre }}
            </div>
            <div class="h-px flex-grow bg-gradient-to-r from-blue-500/20 to-transparent"></div>
          </div>
          <div class="text-slate-300 text-lg leading-relaxed font-medium group-hover:text-white transition-colors">{{ exp.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
