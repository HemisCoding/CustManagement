// /**
//  * router/index.ts
//  *
//  * Automatic routes for `./src/pages/*.vue`
//  */

// // Composables
// // @ts-ignore
// import { createRouter, createWebHistory, RouteLocationNormalized, NavigationGuardNext } from 'vue-router/auto'
// import { setupLayouts } from 'virtual:generated-layouts'

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   extendRoutes: setupLayouts,

//   scrollBehavior() {
//     return { x: 0, y: 0 };  // Scroll la începutul paginii la fiecare navigare
//   }
// });

// // Adăugăm o funcție care forțează resetarea scroll-ului înainte de fiecare navigare
// router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
//   window.scrollTo(0, 0);  // Forțează resetarea scroll-ului la începutul paginii
//   next();
// });

// export default router;

// /**
//  * router/index.ts
//  *
//  * Automatic routes for `./src/pages/*.vue`
//  */

import { createRouter, createWebHistory, RouteLocationNormalized, NavigationGuardNext } from 'vue-router/auto';
import { setupLayouts } from 'virtual:generated-layouts';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  extendRoutes: setupLayouts,

  scrollBehavior() {
    return { x: 0, y: 0 }; // Scroll la începutul paginii la fiecare navigare
  }
});

// ✅ Navigation Guard: Redirect to login if user is not authenticated
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  window.scrollTo(0, 0); // Reset scroll position

  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists

  if (to.path !== "/login" && !isAuthenticated) {
    next("/login"); // 🚀 Redirect to login if not authenticated
  } else if (to.path === "/login" && isAuthenticated) {
    next("/"); // 🚀 Redirect logged-in users away from login page
  } else {
    next(); // ✅ Allow navigation
  }
});

export default router;
