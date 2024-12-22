/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
// @ts-ignore
import { createRouter, createWebHistory, RouteLocationNormalized, NavigationGuardNext } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  extendRoutes: setupLayouts,

  scrollBehavior() {
    return { x: 0, y: 0 };  // Scroll la începutul paginii la fiecare navigare
  }
});

// Adăugăm o funcție care forțează resetarea scroll-ului înainte de fiecare navigare
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  window.scrollTo(0, 0);  // Forțează resetarea scroll-ului la începutul paginii
  next();
});

export default router;
