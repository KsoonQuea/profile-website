<template>
  <section id="experience">
    <div class="section-container">
      <h2 class="section-title">Work Experience</h2>
      <div class="section-divider"></div>

      <div class="relative">
        <div class="absolute left-6 top-0 bottom-0 w-px bg-zinc-800 hidden md:block"></div>

        <div class="space-y-8">
          <div v-for="(job, idx) in work" :key="idx" class="relative flex gap-6">
            <!-- Timeline dot -->
            <div class="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-zinc-900 border-2 border-zinc-700 items-center justify-center z-10">
              <img v-if="job.logoUrl" :src="job.logoUrl" :alt="job.company" class="w-7 h-7 object-contain rounded-full" />
              <span v-else class="text-xs font-bold text-lime-400">{{ job.company[0] }}</span>
            </div>

            <div class="flex-1 card group">
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 class="font-semibold text-zinc-100 group-hover:text-lime-400 transition-colors">{{ job.title }}</h3>
                  <a :href="job.href" target="_blank" rel="noopener noreferrer" class="text-sm text-zinc-400 hover:text-lime-400 transition-colors">
                    {{ job.company }}
                  </a>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  <span class="badge">{{ job.work_type }}</span>
                  <span class="badge">{{ job.work_mode }}</span>
                </div>
              </div>

              <p class="text-xs text-zinc-500 mb-3">{{ job.start }} — {{ job.end }}</p>

              <ul class="space-y-1.5">
                <li v-for="(point, i) in job.description" :key="i" class="flex gap-2 text-sm text-zinc-400">
                  <span class="text-lime-400 mt-0.5 flex-shrink-0">›</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  work: { type: Array, required: true },
})
</script>
