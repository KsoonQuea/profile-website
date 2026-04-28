<template>
  <section id="hero" class="min-h-screen flex items-center relative overflow-hidden">
    <span id="about" class="absolute top-0"></span>
    <!-- Background grid -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
    <!-- Radial glow -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(163,230,53,0.08),transparent)] pointer-events-none"></div>

    <div class="section-container w-full pt-24">
      <div class="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        <!-- Text -->
        <div class="flex-1 text-center md:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-medium mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
            Open to opportunities
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-100 leading-tight mb-4">
            Hi, I'm <span class="text-lime-400">{{ data.firstName }}</span> 👋
          </h1>

          <div class="text-xl md:text-2xl font-semibold text-zinc-400 mb-6 h-8">
            <span>{{ displayedRole }}</span><span class="animate-blink text-lime-400">|</span>
          </div>

          <p class="text-zinc-400 leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
            {{ data.about_me }}
          </p>

          <div class="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
            <a
              :href="data.resume_link"
              target="_blank"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-lime-400 text-zinc-900 font-semibold text-sm hover:bg-lime-300 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download Resume
            </a>
            <a
              href="#contact"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-800 text-zinc-100 font-semibold text-sm border border-zinc-700 hover:border-lime-400 hover:text-lime-400 transition-all"
            >
              Get in Touch
            </a>
          </div>

          <div class="flex items-center gap-2 text-zinc-500 text-sm justify-center md:justify-start">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <a :href="data.locationLink" target="_blank" class="hover:text-lime-400 transition-colors">
              {{ data.location }}
            </a>
          </div>
        </div>

        <!-- Avatar -->
        <div class="relative flex-shrink-0">
          <div class="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-zinc-700 ring-4 ring-lime-400/20 shadow-2xl shadow-lime-400/10">
            <img :src="data.avatarUrl" :alt="data.name" class="w-full h-full object-cover" />
          </div>
          <div class="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center shadow-lg">
            <span class="text-lg">💻</span>
          </div>
        </div>
      </div>

      <!-- Scroll hint -->
      <div class="flex justify-center mt-16 animate-bounce">
        <a href="#skills" class="text-zinc-600 hover:text-lime-400 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  data: { type: Object, required: true },
})

const displayedRole = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let timer = null

function typeWriter() {
  const roles = props.data.role
  const currentRole = roles[roleIndex]

  if (!isDeleting) {
    displayedRole.value = currentRole.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === currentRole.length) {
      isDeleting = true
      timer = setTimeout(typeWriter, 2000)
      return
    }
  } else {
    displayedRole.value = currentRole.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.length
    }
  }
  timer = setTimeout(typeWriter, isDeleting ? 60 : 100)
}

onMounted(() => { timer = setTimeout(typeWriter, 500) })
onUnmounted(() => clearTimeout(timer))
</script>
