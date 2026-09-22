<template>
  <div>
    <h2 v-if="projectsPage" class="projects-header heading-1">
      {{ projectsPage.projectsHeadline }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import type { ProjectsPage } from "~/sanity/types.ts";
import { projectsPageQuery } from "~/sanity/queries";

const { data: projectsPage } =
  await useSanityQuery<ProjectsPage>(projectsPageQuery);
</script>

<style lang="scss">
.projects-header {
  text-align: center;
  padding: 150px;
}
</style>
