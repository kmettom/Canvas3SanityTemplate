<template>
  <div>
    <h2 v-if="contactPage" class="contact-header heading-1">
      {{ contactPage.header }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import type { Contact } from "~/sanity/types.ts";
import { contactPageQuery } from "~/sanity/queries";

const { data: contactPage } = await useSanityQuery<Contact>(contactPageQuery);
</script>

<style lang="scss">
.contact-header {
  text-align: center;
  padding: 150px;
}
</style>
