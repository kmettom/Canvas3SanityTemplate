<template>
  <div>
    <h2 v-if="aboutPage" class="about-header heading-1">
      {{ aboutPage.header }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import type { About } from "~/sanity/types.ts";
import { aboutPageQuery } from "~/sanity/queries";

const { data: aboutPage } = await useSanityQuery<About>(aboutPageQuery);
</script>

<style lang="scss">
.about-header {
  text-align: center;
  padding: 150px;
}
</style>
