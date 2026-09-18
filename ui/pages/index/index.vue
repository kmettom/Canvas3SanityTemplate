<template>
  <div>
    <div class="page-section">
      <SectionHero />
    </div>
    <div class="page-section">
      <SectionAbout />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import SectionHero from "~/pages/index/SectionHero.vue";
import SectionAbout from "~/pages/index/SectionAbout.vue";
import Footer from "~/components/common/Footer.vue";
</script>

<style lang="scss"></style>
