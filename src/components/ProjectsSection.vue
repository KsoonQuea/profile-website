<template>
  <section id="projects" class="bg-zinc-900/40">
    <div class="section-container">
      <h2 class="section-title">Personal Projects</h2>
      <div class="section-divider"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(project, idx) in projects" :key="idx" class="card group overflow-hidden p-0">
          <div v-if="project.image" class="relative overflow-hidden h-44 bg-zinc-800">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div class="p-5">
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-semibold text-zinc-100 group-hover:text-lime-400 transition-colors">{{ project.title }}</h3>
              <a
                v-if="project.sourceUrl"
                :href="project.sourceUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-zinc-500 hover:text-lime-400 transition-colors"
                title="Source Code"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
            <p class="text-sm text-zinc-400 mb-3">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tech in project.technologies" :key="tech" class="badge">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  projects: { type: Array, required: true },
})
</script>
