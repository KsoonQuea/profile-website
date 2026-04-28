<template>
  <section id="portfolio">
    <div class="section-container">
      <h2 class="section-title">Portfolio</h2>
      <div class="section-divider"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(project, idx) in portfolios"
          :key="idx"
          class="card overflow-hidden group cursor-pointer p-0"
          @click="openModal(project)"
        >
          <div class="relative overflow-hidden h-48 bg-zinc-800">
            <img
              :src="project.main_image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-zinc-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span class="text-white text-sm font-medium flex items-center gap-2 bg-zinc-900/80 px-4 py-2 rounded-full">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                View Gallery
              </span>
            </div>
          </div>

          <div class="p-5">
            <h3 class="font-semibold text-zinc-100 mb-3 group-hover:text-lime-400 transition-colors">{{ project.title }}</h3>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tech in project.technologies" :key="tech" class="badge">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="selected"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm"
          @click.self="closeModal"
        >
          <div class="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div class="flex items-center justify-between p-5 border-b border-zinc-800 sticky top-0 bg-zinc-900 z-10">
              <h3 class="font-bold text-zinc-100">{{ selected.title }}</h3>
              <button @click="closeModal" class="text-zinc-400 hover:text-zinc-100 transition-colors p-1 rounded-lg hover:bg-zinc-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div class="p-5">
              <div class="flex flex-wrap gap-1.5 mb-5">
                <span v-for="tech in selected.technologies" :key="tech" class="badge">{{ tech }}</span>
              </div>
              <div class="space-y-3">
                <img
                  v-for="(img, i) in selected.images"
                  :key="i"
                  :src="img"
                  :alt="`${selected.title} screenshot ${i + 1}`"
                  class="w-full rounded-lg border border-zinc-800"
                />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  portfolios: { type: Array, required: true },
})

const selected = ref(null)

function openModal(project) {
  selected.value = project
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  selected.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
