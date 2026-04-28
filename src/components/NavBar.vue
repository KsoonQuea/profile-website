<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60' : 'bg-transparent'"
  >
    <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#hero" class="text-lg font-bold text-zinc-100 hover:text-lime-400 transition-colors">
        {{ initials }}
      </a>

      <div class="hidden md:flex items-center gap-6">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm text-zinc-400 hover:text-lime-400 transition-colors font-medium"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="flex items-center gap-2">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          :title="social.name"
          class="social-btn"
        >
          <SocialIcon :name="social.icon" class="w-4 h-4" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SocialIcon from './SocialIcons.vue'

defineProps({
  initials: { type: String, default: 'KS' },
  socials: { type: Array, default: () => [] },
})

const scrolled = ref(false)

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
