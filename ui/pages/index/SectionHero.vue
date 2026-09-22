<template>
  <div v-if="homePage" class="hero-section-wrapper">
    <Container additional-class="hero-section">
      <div class="hero-content-line hero-line-canvas">
        <h2 class="heading-1">
          <PortableText :value="homePage.header" />
        </h2>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { PortableText } from "@portabletext/vue";
import Container from "~/components/common/Container.vue";
import { homePageQuery } from "~/sanity/queries";
import type { Home } from "~/sanity/types.ts";

const { data: homePage } = await useSanityQuery<Home>(homePageQuery);
</script>

<style lang="scss" scoped>
.hero-section-wrapper {
  position: relative;
  @include respond-width($w-s) {
    height: 550px;
  }
}
.hero-section {
  padding: 125px;
  position: relative;
  text-align: center;
  @include respond-width($w-s) {
    padding: 200px 0 0 0;
  }
}

.hero-content-line {
  position: relative;
  text-align: center;
  margin: 0 auto;
  justify-content: center;
}
.hero-line-canvas {
  //color: var(--light-color);
  color: var(--dark-color);
}

.hero-content-sm {
  padding: 0 20px;
  opacity: 0;
  &.hero-services {
    text-align: right;
  }
  &.hero-summary {
    text-align: left;
    @include respond-width($w-m-s) {
      display: none;
    }
  }
  p {
    position: relative;
  }
}
</style>
