<template>
  <section id="contact">
    <div class="section-container">
      <h2 class="section-title">Get In Touch</h2>
      <div class="section-divider"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p class="text-zinc-400 leading-relaxed mb-6">
            I'm currently open to new opportunities. Whether you have a project in mind,
            a question, or just want to say hi — my inbox is always open!
          </p>

          <div class="space-y-3">
            <a
              :href="`mailto:${contact.email}`"
              class="flex items-center gap-3 text-zinc-400 hover:text-lime-400 transition-colors group"
            >
              <span class="social-btn group-hover:bg-lime-400 group-hover:border-lime-400 group-hover:text-zinc-900">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </span>
              <span class="text-sm">{{ contact.email }}</span>
            </a>

            <a
              :href="`https://wa.me/${contact.tel}`"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-zinc-400 hover:text-lime-400 transition-colors group"
            >
              <span class="social-btn group-hover:bg-lime-400 group-hover:border-lime-400 group-hover:text-zinc-900">
                <SocialIcon name="whatsapp" class="w-4 h-4" />
              </span>
              <span class="text-sm">WhatsApp Me</span>
            </a>
          </div>
        </div>

        <div class="flex flex-col items-center md:items-end gap-4">
          <p class="text-sm text-zinc-500 uppercase tracking-wider">Find me on</p>
          <div class="flex flex-wrap gap-3 justify-center md:justify-end">
            <a
              v-for="s in contact.social"
              :key="s.name"
              :href="s.url"
              target="_blank"
              rel="noopener noreferrer"
              :title="s.name"
              class="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-400 hover:border-lime-400 hover:text-lime-400 transition-all text-sm font-medium"
            >
              <SocialIcon :name="s.icon" class="w-4 h-4" />
              <span>{{ s.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-zinc-800 mt-10">
      <div class="max-w-4xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-zinc-600">
          © {{ new Date().getFullYear() }} Quea Kuang Soon · Built with Vue 3 + Tailwind CSS
        </p>
        <div class="flex gap-2">
          <a
            v-for="s in contact.social"
            :key="s.name"
            :href="s.url"
            target="_blank"
            rel="noopener noreferrer"
            :title="s.name"
            class="social-btn w-8 h-8"
          >
            <SocialIcon :name="s.icon" class="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SocialIcon from './SocialIcons.vue'

defineProps({
  contact: { type: Object, required: true },
})
</script>
