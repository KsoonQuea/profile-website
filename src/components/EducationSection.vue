<template>
  <section id="education" class="bg-zinc-900/40">
    <div class="section-container">
      <h2 class="section-title">Education</h2>
      <div class="section-divider"></div>

      <div class="space-y-5">
        <div v-for="(edu, idx) in education" :key="idx" class="card flex gap-5 items-start">
          <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
            <img v-if="edu.logoUrl" :src="edu.logoUrl" :alt="edu.school" class="w-10 h-10 object-contain" />
          </div>

          <div class="flex-1">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
              <a :href="edu.href" target="_blank" rel="noopener noreferrer" class="font-semibold text-zinc-100 hover:text-lime-400 transition-colors">
                {{ edu.school }}
              </a>
              <span class="text-xs text-zinc-500">{{ edu.start }} — {{ edu.end }}</span>
            </div>
            <p class="text-sm text-zinc-400 mb-2">{{ edu.major }}</p>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-lime-400/10 border border-lime-400/20">
              <svg class="w-3.5 h-3.5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
              </svg>
              <span class="text-xs font-semibold text-lime-400">CGPA {{ edu.cgpa }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  education: { type: Array, required: true },
})
</script>
