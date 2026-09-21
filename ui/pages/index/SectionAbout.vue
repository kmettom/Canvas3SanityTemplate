<template>
  <Container id="about" additional-class="about-section">
    <h2 class="body-s about-headline">About</h2>
    <div class="body-l">
      <div v-if="homePage" class="about-txt">
        {{ homePage.about }}
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from "~/components/common/Container.vue";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

import { homePageQuery } from "~/sanity/queries";
import type { Home } from "~/sanity/types.ts";

const { data: homePage } = await useSanityQuery<Home>(homePageQuery);

gsap.registerPlugin(SplitText);
</script>

<style lang="scss" scoped>
.about-section {
  display: grid;
  grid-template-columns: 10fr 14fr;
  text-transform: uppercase;
  padding-bottom: 125px;
  padding-top: 10vh;
  @include respond-width($w-xs) {
    grid-template-columns: 1fr;
    padding: 10vh 10px 125px 10px;
  }
}
.about-headline {
  margin-left: 20px;
  font-weight: lighter;
}
.about-txt {
  opacity: 0;
  @include respond-width($w-m) {
    margin-bottom: 10px;
  }
  @include respond-width($w-xs) {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  &.about-1 {
    margin-bottom: 30px;
  }
  div {
    opacity: 0;
    overflow: hidden;
  }
}
.features-headline {
  padding-top: 25vh;
  padding-bottom: 20px;
}
</style>
