<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { projects } from '../types';
import { computed, ref } from 'vue';

const route = useRoute();
const router = useRouter();
const projectId = computed(() => Number(route.params.id));
const project = computed(() => projects.find(p => p.id === projectId.value));

const selectedImage = ref<string | null>(null);

const openImage = (src: string) => {
  selectedImage.value = src;
  document.body.style.overflow = 'hidden';
};

const closeImage = () => {
  selectedImage.value = null;
  document.body.style.overflow = 'auto';
};

const goBack = () => {
  router.back();
};

const bilibiliBvid = computed(() => {
  if (!project.value?.link) return null;
  const match = project.value.link.match(/BV[a-zA-Z0-9]+/);
  return match ? match[0] : null;
});
</script>

<template>
  <div v-if="project" class="min-h-screen bg-slate-950 pt-20 pb-24 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- 返回按钮 -->
      <button 
        @click="goBack"
        class="group flex items-center gap-3 text-slate-500 hover:text-white transition-all mb-8"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        返回上一页
      </button>

      <div class="max-w-6xl mx-auto">
        <!-- 头部信息：更紧凑 -->
        <div class="mb-12 border-b border-white/10 pb-12">
          <div class="flex flex-wrap items-center gap-3 mb-6">
            <span class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest rounded">
              {{ project.category }}
            </span>
            <span v-if="project.isVFX" class="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-widest rounded">
              VFX WORK
            </span>
          </div>
          <h1 class="text-4xl md:text-7xl font-black text-white mb-4 italic uppercase tracking-tighter leading-none">
            {{ project.title }}
          </h1>
          <p class="text-slate-400 text-xl max-w-2xl font-medium leading-relaxed italic opacity-80">
            {{ project.description }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- 左侧：正文内容 (占据 8 列) -->
          <div class="lg:col-span-8 space-y-12">
            <div class="prose prose-invert prose-blue max-w-none">
              <div class="bg-slate-900/30 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-md">
                <div class="mb-12">
                  <h2 class="text-3xl font-black text-white mb-8 flex items-center gap-4">
                    <span class="w-1.5 h-8 bg-blue-500 rounded-full"></span>
                    项目展示 / Showcase
                  </h2>

                  <!-- 视频内嵌区域 -->
                  <div v-if="bilibiliBvid" class="mb-12">
                    <div class="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                      <iframe 
                        :src="`//player.bilibili.com/player.html?bvid=${bilibiliBvid}&page=1&high_quality=1&danmaku=0&autoplay=0&muted=1`" 
                        scrolling="no" 
                        border="0" 
                        frameborder="no" 
                        framespacing="0" 
                        allowfullscreen="true"
                        class="absolute inset-0 w-full h-full"
                      ></iframe>
                    </div>
                    <p class="text-slate-500 text-xs mt-4 text-center italic">若无法播放，请点击右侧按钮跳转至 Bilibili 观看</p>
                  </div>

                  <h2 class="text-3xl font-black text-white mb-8 flex items-center gap-4">
                    <span class="w-1.5 h-8 bg-blue-500 rounded-full"></span>
                    项目详情 / Project Breakdown
                  </h2>
                  <!-- 这里是将来放正文内容的地方 -->
                  <div class="space-y-6 text-slate-300 text-lg leading-relaxed">
                    <!-- 狼末项目特有的图片展示 -->
                    <template v-if="project.id === 7">
                      <div class="space-y-12 my-12">
                        <div class="space-y-4">
                          <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 cursor-pointer" @click="openImage('/images/LM_MAYA.webp')">
                            <img src="/images/LM_MAYA.webp" alt="Maya Modeling" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                          </div>
                          <p class="text-base text-slate-400 text-center italic font-medium">Maya 高低模建模阶段 / High & Low Poly Modeling</p>
                        </div>
                        <div class="space-y-4">
                          <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 cursor-pointer" @click="openImage('/images/LM_Material.webp')">
                            <img src="/images/LM_Material.webp" alt="Substance Painter Texturing" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                          </div>
                          <p class="text-base text-slate-400 text-center italic font-medium">Substance Painter 材质全流程制作 / PBR Texturing Workflow</p>
                        </div>
                      </div>
                    </template>

                    <!-- Neowise 项目特有的内容 -->
                    <template v-if="project.id === 4">
                      <div class="space-y-8 my-12 text-slate-300">
                        <!-- 项目图库展示：2个一行 -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                          <div class="space-y-4">
                            <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group cursor-pointer" @click="openImage('/images/Neowise.webp')">
                              <img src="/images/Neowise.webp" alt="Neowise Preview 1" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <p class="text-sm text-slate-400 text-center italic">游戏主界面</p>
                          </div>
                          <div class="space-y-4">
                            <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group cursor-pointer" @click="openImage('/images/Neowise2.webp')">
                              <img src="/images/Neowise2.webp" alt="Neowise Preview 2" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <p class="text-sm text-slate-400 text-center italic">核心战斗场景</p>
                          </div>
                          <div class="space-y-4">
                            <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group cursor-pointer" @click="openImage('/images/Neowise3.webp')">
                              <img src="/images/Neowise3.webp" alt="Neowise Preview 3" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <p class="text-sm text-slate-400 text-center italic">非对称合作机制展示</p>
                          </div>
                          <div class="space-y-4">
                            <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group cursor-pointer" @click="openImage('/images/Neowise4.webp')">
                              <img src="/images/Neowise4.webp" alt="Neowise Preview 4" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <p class="text-sm text-slate-400 text-center italic">BOSS 战与弹幕躲避</p>
                          </div>
                          <div class="space-y-4 md:col-span-2 md:w-1/2 md:mx-auto">
                            <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group cursor-pointer" @click="openImage('/images/Neowise5.webp')">
                              <img src="/images/Neowise5.webp" alt="Neowise Preview 5" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <p class="text-sm text-slate-400 text-center italic">游戏成功结算界面</p>
                          </div>
                        </div>

                        <!-- 核心玩法展示 -->
                        <div class="bg-indigo-600/5 border border-indigo-500/10 rounded-2xl p-8 md:p-10">
                          <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span class="w-1 h-6 bg-indigo-500 rounded-full"></span>
                            核心玩法 / Core Gameplay
                          </h3>
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="space-y-4">
                              <div class="flex items-center gap-3 text-indigo-400 font-bold">
                                <span class="w-8 h-8 flex items-center justify-center bg-indigo-500/10 rounded-lg">A</span>
                                玩家 A (方块管理)
                              </div>
                              <p class="text-sm leading-relaxed text-slate-400">
                                负责方块搭建任务。通过搭建方块来创建场地，或是搭建庇护空间。需要平衡场地清空速度与立足点的提供。
                              </p>
                            </div>
                            <div class="space-y-4">
                              <div class="flex items-center gap-3 text-indigo-400 font-bold">
                                <span class="w-8 h-8 flex items-center justify-center bg-indigo-500/10 rounded-lg">B</span>
                                玩家 B (角色生存)
                              </div>
                              <p class="text-sm leading-relaxed text-slate-400">
                                实时操控角色在掉落的方块间跳跃、躲避。必须在方块落地前寻找生存空间，并躲避 BOSS 的弹幕攻击。
                              </p>
                            </div>
                          </div>
                          <div class="mt-8 p-4 bg-slate-950/50 rounded-xl border border-white/5">
                            <p class="text-xs text-slate-500 italic text-center">
                              非对称合作体验：放置过快可能导致场地过挤，放置过慢则可能让队友无处落脚。
                            </p>
                          </div>
                        </div>

                        <!-- 技术亮点 -->
                        <div class="bg-blue-600/5 border border-blue-500/10 rounded-2xl p-8 md:p-10">
                          <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span class="w-1 h-6 bg-blue-500 rounded-full"></span>
                            核心技术点 / Technical Highlights
                          </h3>
                          <ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <li class="space-y-2">
                              <strong class="text-blue-400 block">碰撞与物理优化</strong>
                              <p class="text-sm leading-relaxed">实现了方块网格逻辑与角色物理碰撞的实时同步，确保“逻辑下落”转变为“静态平台”时反馈无缝衔接。</p>
                            </li>
                            <li class="space-y-2">
                              <strong class="text-blue-400 block">增益系统 (Buff System)</strong>
                              <p class="text-sm leading-relaxed">包含护盾、加速、二段跳等多种 Buff 系统，为极端环境下的生存提供策略选择。</p>
                            </li>
                            <li class="space-y-2">
                              <strong class="text-blue-400 block">程序化方块生成</strong>
                              <p class="text-sm leading-relaxed">自定义随机初始化生成算法，确保每一局游戏的方块序列样式具有多样性与公平性。</p>
                            </li>
                            <li class="space-y-2">
                              <strong class="text-blue-400 block">开发环境</strong>
                              <p class="text-sm leading-relaxed">基于 Unreal Engine 5.4 开发，使用 SVN 进行版本管理与多人协作。</p>
                            </li>
                          </ul>
                        </div>
                        
                        <!-- GitHub 引导 -->
                        <div class="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-xl">
                          <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-500/10 rounded-lg">
                            <svg class="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
                          </div>
                          <div>
                            <h4 class="text-white font-bold">项目开源仓库</h4>
                            <p class="text-sm text-slate-400">Neowise 已在 GitHub 开源，包含完整的 UE5 工程文件。</p>
                          </div>
                          <a href="https://github.com/abcde12123/Neowise" target="_blank" class="ml-auto px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold transition-all">访问 GitHub</a>
                        </div>
                      </div>
                    </template>

                    <!-- C++ 战斗系统项目特有的内容 -->
                    <template v-if="project.id === 2">
                      <div class="space-y-8 my-12 text-slate-300">
                        <!-- 项目图库展示 -->
                        <div class="space-y-12 mb-16">
                          <div class="space-y-6">
                            <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 cursor-pointer" @click="openImage('/images/Combat1.webp')">
                              <img src="/images/Combat1.webp" alt="Combat System Preview 1" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <p class="text-base text-slate-400 text-center italic font-medium">视角锁定功能</p>
                          </div>
                          <div class="space-y-6">
                            <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 cursor-pointer" @click="openImage('/images/Combat2.webp')">
                              <img src="/images/Combat2.webp" alt="Combat System Preview 2" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <p class="text-base text-slate-400 text-center italic font-medium">目标锁定与战斗 UI</p>
                          </div>
                          <div class="space-y-6">
                            <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 cursor-pointer" @click="openImage('/images/Combat3.webp')">
                              <img src="/images/Combat3.webp" alt="Combat System Preview 3" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <p class="text-base text-slate-400 text-center italic font-medium">基于球体拓展的碰撞检测调试</p>
                          </div>
                          <div class="space-y-6">
                            <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 cursor-pointer" @click="openImage('/images/Combat4.webp')">
                              <img src="/images/Combat4.webp" alt="Combat System Preview 4" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <p class="text-base text-slate-400 text-center italic font-medium">翻滚闪避动作衔接</p>
                          </div>
                          <div class="space-y-6">
                            <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 cursor-pointer" @click="openImage('/images/Combat5.webp')">
                              <img src="/images/Combat5.webp" alt="Combat System Preview 5" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <p class="text-base text-slate-400 text-center italic font-medium">设置菜单与参数交互</p>
                          </div>
                        </div>

                        <div class="bg-blue-600/5 border border-blue-500/10 rounded-2xl p-8 md:p-10">
                          <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span class="w-1 h-6 bg-blue-500 rounded-full"></span>
                            核心技术点 / Technical Highlights
                          </h3>
                          <ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <li class="space-y-2">
                              <strong class="text-blue-400 block">战斗逻辑</strong>
                              <p class="text-sm leading-relaxed">结合 Animation Montage 与 Notify 窗口实现精准的伤害判定。</p>
                            </li>
                            <li class="space-y-2">
                              <strong class="text-blue-400 block">目标锁定</strong>
                              <p class="text-sm leading-relaxed">实现了基于视野插值的平滑锁定系统。</p>
                            </li>
                            <li class="space-y-2">
                              <strong class="text-blue-400 block">攻击检测</strong>
                              <p class="text-sm leading-relaxed">实现了基于球体拓展的扇形碰撞检测。</p>
                            </li>
                            <li class="space-y-2">
                              <strong class="text-blue-400 block">动作衔接</strong>
                              <p class="text-sm leading-relaxed">包含轻重攻击连招（Combo）、翻滚闪避（Dodge）及受击硬直（Hit Stun）。</p>
                            </li>
                            <li class="space-y-2">
                              <strong class="text-blue-400 block">组件化设计</strong>
                              <p class="text-sm leading-relaxed">战斗属性（血量、体力）与行为逻辑高度解耦，易于扩展新角色。</p>
                            </li>
                          </ul>
                        </div>
                        
                        <div class="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-xl">
                          <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg">
                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
                          </div>
                          <div>
                            <h4 class="text-white font-bold">开源代码仓库</h4>
                            <p class="text-sm text-slate-400">项目已在 GitHub 开源，包含完整的 C++ 源代码与工程配置。</p>
                          </div>
                          <a href="https://github.com/abcde12123/Combat-System" target="_blank" class="ml-auto px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold transition-all">访问 GitHub</a>
                        </div>
                      </div>
                    </template>

                    <!-- 默认展示内容：当项目没有特定详情模板时显示 -->
                    <div v-if="![2, 4, 7].includes(project.id)" class="p-8 bg-blue-600/5 border border-blue-500/20 rounded-2xl text-center my-12">
                      <p class="text-slate-400 italic">“ 正在准备详细的文章内容与技术复盘，请稍候... ”</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：侧边栏信息 (占据 4 列) -->
          <div class="lg:col-span-4 space-y-8">
            <!-- 缩小的封面图 -->
            <div class="sticky top-32 space-y-8">
              <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img :src="project.thumbnail" :alt="project.title" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <!-- 项目规格 -->
              <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-8 backdrop-blur-md space-y-8">
                <div class="space-y-4">
                  <h3 class="text-blue-500 font-black uppercase tracking-[0.2em] text-[10px]">Technical Stack / 技术栈</h3>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in project.tags" :key="tag" class="px-3 py-1.5 bg-white/5 text-slate-300 rounded text-xs font-bold border border-white/10 hover:border-blue-500/50 transition-colors">
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <div class="space-y-4">
                  <h3 class="text-blue-500 font-black uppercase tracking-[0.2em] text-[10px]">Responsibility / 职责</h3>
                  <div class="text-white font-bold text-sm">
                    <!-- Neowise (id: 4) 和 C++ 项目 (id: 2) 的职责 -->
                    <template v-if="project.id === 4 || project.id === 2">
                      <div class="flex items-center gap-2 mb-2">
                        <span class="w-1 h-1 bg-blue-500 rounded-full"></span>
                        主程序 (Lead Programmer)
                      </div>
                      <div class="flex items-center gap-2 mb-2">
                        <span class="w-1 h-1 bg-blue-500 rounded-full"></span>
                        3C 设计 / 逻辑构建
                      </div>
                      <div v-if="project.id === 2" class="flex items-center gap-2">
                        <span class="w-1 h-1 bg-blue-500 rounded-full"></span>
                        系统架构设计
                      </div>
                      <div v-else class="flex items-center gap-2">
                        <span class="w-1 h-1 bg-blue-500 rounded-full"></span>
                        核心玩法实现
                      </div>
                    </template>
                    <!-- VFX 相关项目的职责 -->
                    <template v-else>
                      <div class="flex items-center gap-2 mb-2">
                        <span class="w-1 h-1 bg-blue-500 rounded-full"></span>
                        特效制作 (Niagara/VFX)
                      </div>
                      <div class="flex items-center gap-2 mb-2">
                        <span class="w-1 h-1 bg-blue-500 rounded-full"></span>
                        材质逻辑 (Material Shader)
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="w-1 h-1 bg-blue-500 rounded-full"></span>
                        渲染优化 (Rendering)
                      </div>
                    </template>
                  </div>
                </div>

                <div v-if="project.link && project.link !== '#'" class="pt-4">
                  <a :href="project.link" target="_blank" class="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all shadow-lg shadow-blue-600/20 uppercase tracking-widest text-xs">
                    查看演示视频 / Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 图片放大预览模态框 -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="selectedImage" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-slate-950/90 backdrop-blur-xl" @click="closeImage">
        <button class="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]" @click="closeImage">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="relative max-w-7xl max-h-full cursor-pointer" @click="closeImage">
          <img :src="selectedImage" class="w-auto h-auto max-w-full max-h-[90vh] rounded-xl shadow-2xl border border-white/10" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.prose {
  color: #94a3b8;
}
.prose h2 {
  color: white;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>
