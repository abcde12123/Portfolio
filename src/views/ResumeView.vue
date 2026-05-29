<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { publicUrl } from '../types'

const pdfPath = '/游戏特效实习生庹芮豪数字媒体技术本科湖北工业大学.pdf'
const pdfUrl = computed(() => publicUrl(encodeURI(pdfPath)))
const pdfEmbedUrl = computed(() => `${pdfUrl.value}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`)

const pdfFrameRef = ref<HTMLIFrameElement | null>(null)
const frameWidth = ref(0)
const pageCount = 2
const pdfHeight = computed(() => {
  const w = frameWidth.value
  if (!w) return 0
  const a4Ratio = 1.414
  const safePadding = 8
  return Math.max(900, Math.round(w * a4Ratio * pageCount) + safePadding)
})

let ro: ResizeObserver | null = null
onMounted(() => {
  const el = pdfFrameRef.value
  if (!el) return
  ro = new ResizeObserver((entries) => {
    const next = Math.round(entries[0]?.contentRect?.width ?? 0)
    if (next > 0) frameWidth.value = next
  })
  ro.observe(el)
})

onUnmounted(() => {
  ro?.disconnect()
  ro = null
})
</script>

<template>
  <div class="min-h-screen pt-15 pb-20 relative overflow-hidden bg-slate-950">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.06),transparent)] pointer-events-none"></div>
    <div class="container mx-auto px-6 relative z-10">
      <div class="mb-20 text-center">
        <div class="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          Resume // Profile
        </div>
        <h1 class="text-5xl md:text-7xl font-black text-white mb-6 italic uppercase tracking-tighter leading-none">
          RESUME <span class="text-blue-500">VIEW</span>
        </h1>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium italic">
          简历展示页
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="flex items-center justify-center gap-3 mb-6">
          <a :href="pdfUrl" class="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold transition-all uppercase tracking-widest">
            打开 PDF
          </a>
          <a :href="pdfUrl" download class="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-black transition-all uppercase tracking-widest shadow-lg shadow-blue-600/20">
            下载简历
          </a>
        </div>

        <div class="rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl p-4">
          <iframe
            ref="pdfFrameRef"
            :src="pdfEmbedUrl"
            class="block w-full bg-white rounded-xl"
            :style="{ height: `${pdfHeight}px` }"
            title="Resume PDF"
          ></iframe>
        </div>

        <p class="mt-4 text-xs text-slate-500 text-center italic">
          如果微信/部分浏览器无法内嵌预览，请点击上方“打开 PDF / 下载简历”。
        </p>
      </div>
    </div>
  </div>
</template>
