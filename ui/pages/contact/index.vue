<template>
  <div>
    <h2 v-if="contactPage" class="heading-1">
      {{ contactPage.header }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import type { Contact } from "~/sanity/types.ts";
import { contactPageQuery } from "~/sanity/queries";

const { data: contactPage } = await useSanityQuery<Contact>(contactPageQuery);
</script>

<style lang="scss"></style>
