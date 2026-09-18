<template>
  <div class="body-xs navigation-bar">
    <nav class="navigation-items">
      <div
        v-for="(navItem, index) in navigationItems"
        :key="navItem.href"
        :ref="navItemRefs.set"
        class="navigation-item"
        :class="{ active: activeNav === navItem.href }"
        @mouseenter="navigationHoverAnimate(index)"
      >
        <nuxt-link :href="navItem.href">
          {{ navItem.name }}
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import {
  navigationFirstEnter,
  navigationShow,
} from "~/utils/animations/navigation";
import { gsap } from "gsap";
import { useTemplateRefsList } from "@vueuse/core";

const navItemRefs = useTemplateRefsList();
const navAniDuration = 0.15;
const navAniY = 10;

const route = useRoute();

const homePage = computed(() => {
  return route.name === "index";
});

const animateTextSpan = (text: HTMLElement) => {
  if (!text) return;
  const tl = gsap.timeline();
  tl.to(text, {
    duration: navAniDuration,
    y: navAniY,
  });
  tl.set(text, {
    y: -navAniY,
  });
  tl.to(text, {
    duration: navAniDuration,
    y: 0,
  });
};

const navigationHoverAnimate = (index: number) => {
  const text = navItemRefs.value[index]?.querySelector("span") as HTMLElement;
  animateTextSpan(text);
};

const navigationStore = useNavigationStore();

const navigationItems = computed(() => navigationStore.navigationItems);
const activeNav = computed(() => navigationStore.activeNavItem);

onMounted(() => {
  navigationFirstEnter();
});

watch(
  () => navigationStore.navVisible,
  (isVisible) => {
    navigationShow(isVisible);
  },
);
</script>
<style lang="scss">
.navigation-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  z-index: 99;
  opacity: 0;
  pointer-events: none;
}

.navigation-items {
  padding: 10px 15px 10px 0;
  display: flex;
  flex-direction: column;
  text-align: right;
}
.nav-play {
  color: inherit;
  text-decoration: none;
}

.navigation-item {
  line-height: 20px;
  pointer-events: auto;
  overflow-y: hidden;

  a {
    display: inline-block;
    position: relative;
  }

  &:hover a {
    font-weight: bold;
  }

  &:before {
    opacity: 0;
    content: "👉";
    display: inline-block;
    margin-right: 4px;
    position: relative;
    transform: translateX(-10px);
    transition: ease all 0.3s;
  }

  &.active {
    font-weight: bold;

    &::before {
      transform: translateX(0px);
      opacity: 1;
    }
  }
}

.location {
  display: flex;
  @include respond-width($w-xs) {
    flex-direction: column;
    #splitter {
      display: none;
    }
  }
}
</style>
