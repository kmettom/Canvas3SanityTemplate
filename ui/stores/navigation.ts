import { defineStore } from "pinia";

export const useNavigationStore = defineStore("navigationStore", {
  state: () => ({
    canvas3zIndex: -1,
    canvasInitiated: false,
    activeNavItem: "home",
    navVisible: true,
    navContrastSwitched: false,
    pageTransitionInProgress: false,
    webFirstLoadDone: false,
    navigationItems: [
      { name: "Home", href: "/" },
      { name: "About", href: "about" },
      { name: "Projects", href: "projects" },
      { name: "Contact", href: "contact" },
    ],
  }),
  actions: {
    setActiveNavItem(id: string) {
      this.activeNavItem = id;
    },
    setNavContrast(contrastSwitched: boolean) {
      this.navContrastSwitched = contrastSwitched;
    },
    setPageTransitionInProgress(status: boolean) {
      this.pageTransitionInProgress = status;
    },
    setCanvas3zIndex(zIndex: number) {
      this.canvas3zIndex = zIndex;
    },
    setWebFirstLoadDone(status: boolean) {
      this.webFirstLoadDone = status;
    },
  },
});
