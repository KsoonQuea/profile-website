<template>
  <section id="skills" class="bg-zinc-900/40">
    <div class="section-container">
      <h2 class="section-title">Skills</h2>
      <div class="section-divider"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 class="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Technical Skills</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Languages</h3>
          <div class="space-y-3">
            <div
              v-for="lang in languages"
              :key="lang.name"
              class="flex items-center justify-between card py-3 px-4"
            >
              <span class="font-medium text-zinc-200">{{ lang.name }}</span>
              <span class="text-xs text-zinc-500">{{ lang.level }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  skills: { type: Array, required: true },
  languages: { type: Array, required: true },
})
</script>
