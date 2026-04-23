<script setup lang="ts">
const gamingExperience = [
  { genre: "STG", description: "Apex 英雄 1401h，守望先锋OW 430h，三角洲行动 320h，无畏契约 275h，CS2 27h，逃离鸭科夫 25h，Kovaak's 19h，求生之路系列 14h，战地风云系列 13h，泰坦陨落2 9h，最终决战 8h" },
  { genre: "RPG", description: "黑神话悟空 36h，只狼影逝二度 30h，荒野大镖客2 28h，赛博朋克2077 28h，蝙蝠侠阿卡姆疯人院 16h，幽灵线东京 9h，霍格沃茨之遗 8h，巫师3狂猎 7h，无主之地3 6h" },
  { genre: "ACT", description: "精灵与萤火意志 33h，人类一败涂地 26h，双人成行 17h，幽灵行者系列 20h，正当防卫3 9h，机械迷城 4h" },
  { genre: "AVG", description: "侠盗猎车手系列 78h，逃离后室 28h，苏普拉兰 21h，传送门系列 12h，米塔 8h，小小梦魇系列 全通关，超阈限空间 7h" },
  { genre: "SLG", description: "植物大战僵尸 140h，瘟疫公司 24h，环形帝国 10h，城市：天际线 7h" },
  { genre: "SANDBOX", description: "泰拉瑞亚 600h，史莱姆牧场 43h，王国：两位君主 42h，星露谷物语 13h，木筏 11h，森林系列10h，饥荒联机版 5h" },
  { genre: "ROGUE", description: "吸血鬼幸存者 60h，R.E.P.O. 22h，土豆兄弟 19h，杀戮尖塔 9h，枪火重生 8h，巫婆 Noita 6h" }
];
</script>

<template>
  <div class="min-h-screen pt-15 pb-20 relative overflow-hidden bg-slate-950">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent)] pointer-events-none"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="mb-20 text-center">
        <div class="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          Gamer Profile // DNA
        </div>
        <h1 class="text-5xl md:text-7xl font-black text-white mb-6 italic uppercase tracking-tighter leading-none">
          GAMING <span class="text-blue-500">EXPERIENCE</span>
        </h1>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium italic">
          “深度的游戏阅历是理解特效设计的基石”
        </p>
      </div>

      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="exp in gamingExperience" :key="exp.genre" class="group p-8 bg-slate-900/40 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.1)]">
          <div class="flex items-center gap-4 mb-4">
            <div class="min-w-[4rem] h-12 px-3 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-black tracking-tighter italic">
              {{ exp.genre }}
            </div>
            <div class="h-px flex-grow bg-gradient-to-r from-blue-500/20 to-transparent"></div>
          </div>
          <div class="text-slate-300 text-sm leading-relaxed font-medium group-hover:text-white transition-colors">{{ exp.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
