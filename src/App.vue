<template>
  <div>
    <NavBar :initials="DATA.initials" :socials="navSocials" />
    <main>
      <HeroSection :data="DATA" />
      <SkillsSection :skills="DATA.skills" :languages="DATA.talking_language" />
      <ExperienceSection :work="DATA.work" />
      <EducationSection :education="DATA.education" />
      <PortfolioSection :portfolios="DATA.portfolios" />
      <ProjectsSection :projects="DATA.projects" />
      <ContactSection :contact="DATA.contact" />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { DATA } from '@/data/resume.js'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

const navSocials = computed(() =>
  DATA.contact.social.filter(s => s.navbar)
)
</script>
