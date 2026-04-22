<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const heroRef = ref<HTMLElement | null>(null)
const showFireflies = ref(false)
const showFireflyControls = ref(false)

type Firefly = {
  x: number
  y: number
  tx: number
  ty: number
  seed: number
  size: number
  alpha: number
}

const fireflies = ref<Firefly[]>(
  Array.from({ length: 7 }, () => ({
    x: 0,
    y: 0,
    tx: 0,
    ty: 0,
    seed: Math.random(),
    size: 6 + Math.random() * 6,
    alpha: 0,
  })),
)

let rafId: number | null = null
let lastMoveAt = 0
let onPointerMove: ((e: PointerEvent) => void) | null = null

const isFinePointer = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia?.('(pointer: fine)').matches ?? false
}

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return true
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

const setTargetFromPointer = (clientX: number, clientY: number) => {
  const el = heroRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const inside =
    clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom

  showFireflyControls.value = inside
  if (!inside) return

  lastMoveAt = performance.now()
  const x = clamp(clientX - rect.left, 0, rect.width)
  const y = clamp(clientY - rect.top, 0, rect.height)

  for (let i = 0; i < fireflies.value.length; i++) {
    fireflies.value[i].tx = x
    fireflies.value[i].ty = y
  }
}

const animate = (now: number) => {
  const el = heroRef.value
  if (!el) return

  const rect = el.getBoundingClientRect()
  const baseAlpha = showFireflyControls.value ? 0.75 : 0.0
  const idle = now - lastMoveAt > 1200

  for (let i = 0; i < fireflies.value.length; i++) {
    const f = fireflies.value[i]
    const t = now * 0.001
    const radius = 18 + i * 10
    const wobbleX = Math.sin(t * (1.2 + f.seed) + f.seed * 10) * radius
    const wobbleY = Math.cos(t * (1.05 + f.seed) + f.seed * 8) * (radius * 0.7)

    const targetX = clamp(f.tx + wobbleX, 0, rect.width)
    const targetY = clamp(f.ty + wobbleY, 0, rect.height)

    const follow = 0.06 + (fireflies.value.length - 1 - i) * 0.012
    f.x += (targetX - f.x) * follow
    f.y += (targetY - f.y) * follow

    const layer = 1 - i / (fireflies.value.length + 2)
    const idleFade = idle ? 0.25 : 1
    f.alpha += (baseAlpha * layer * idleFade - f.alpha) * 0.08
  }

  rafId = window.requestAnimationFrame(animate)
}

onMounted(() => {
  if (!isFinePointer() || prefersReducedMotion()) return

  const el = heroRef.value
  if (!el) return

  showFireflies.value = true
  const rect = el.getBoundingClientRect()
  const initX = rect.width * 0.5
  const initY = rect.height * 0.55

  for (let i = 0; i < fireflies.value.length; i++) {
    fireflies.value[i].x = initX
    fireflies.value[i].y = initY
    fireflies.value[i].tx = initX
    fireflies.value[i].ty = initY
  }

  onPointerMove = (e: PointerEvent) => setTargetFromPointer(e.clientX, e.clientY)
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  rafId = window.requestAnimationFrame(animate)
})

onUnmounted(() => {
  if (onPointerMove) window.removeEventListener('pointermove', onPointerMove)
  if (rafId !== null) window.cancelAnimationFrame(rafId)
})
</script>

<template>
  <header ref="heroRef" class="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 bg-slate-950">
    <!-- 动态背景网格 (高级 UI) -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      <!-- 扫描线效果 -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-[20%] w-full animate-scan pointer-events-none"></div>
    </div>

    <!-- 背景光晕 -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full z-0"></div>
    <div class="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full z-0"></div>

    <div v-if="showFireflies" class="absolute inset-0 z-0 pointer-events-none">
      <div
        v-for="(f, idx) in fireflies"
        :key="idx"
        class="firefly"
        :style="{
          width: `${f.size}px`,
          height: `${f.size}px`,
          opacity: f.alpha.toFixed(3),
          transform: `translate3d(${f.x}px, ${f.y}px, 0)`,
        }"
      ></div>
    </div>

    <div class="container mx-auto px-6 text-center relative z-10">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-xs font-bold mb-10 tracking-[0.3em] uppercase backdrop-blur-md">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        庹芮豪 (夏夜) // 正在寻找特效方向实习机会
      </div>
      
      <div class="relative mb-12 py-10">
        <div class="absolute inset-0 flex items-center justify-center -z-10 opacity-[0.14]">
          <span class="text-[12rem] md:text-[20rem] font-black uppercase tracking-tighter select-none leading-none">VFX</span>
        </div>
        <h1 class="text-6xl md:text-8xl font-black tracking-tight uppercase leading-[0.95]">
          <span class="block text-white mb-2">Unreal Engine</span>
          <span class="vfx-gradient-text block">Effects</span>
          <span class="block text-white mt-2">Artist</span>
        </h1>
      </div>
      
      <p class="max-w-2xl mx-auto text-lg text-slate-400 mb-12 leading-relaxed font-medium">
        湖北工业大学 · 数字媒体技术。熟悉 <span class="text-blue-400 border-b border-blue-500/30">UE5 Niagara</span> 与 <span class="text-blue-400 border-b border-blue-500/30">材质系统</span>。
        以视觉冲击力为核心，致力于将特效深度融入 Gameplay 中，创造极致的实时交互体验。
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <router-link to="/portfolio" class="group relative px-10 py-5 bg-blue-600 text-white font-black rounded overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.3)]">
          <span class="relative z-10 flex items-center gap-2 uppercase tracking-widest">
            进入作品集
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </router-link>
        <a href="#contact" class="px-10 py-5 bg-slate-900/50 hover:bg-slate-800 text-white font-black rounded border border-white/10 transition-all backdrop-blur-md uppercase tracking-widest">
          联络开发者
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.text-outline {
  -webkit-text-stroke: 1px white;
  color: transparent;
}

.firefly {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.9) 0%, rgba(59, 130, 246, 0.25) 35%, rgba(59, 130, 246, 0) 70%);
  filter: blur(0.25px);
  mix-blend-mode: screen;
  will-change: transform, opacity;
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(500%); }
}

.animate-scan {
  animation: scan 8s linear infinite;
}
</style>
