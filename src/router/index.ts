// /**
//  * router/index.ts
//  *
//  * Automatic routes for `./src/pages/*.vue`
//  */


import { createRouter, createWebHistory } from 'vue-router';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';

const routes = setupLayouts(generatedRoutes); // ✅ Correct layout setup

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // ✅ Use import.meta.env.BASE_URL
  routes,
  // scrollBehavior() {
  //   return { x: 0, y: 0 };
  // }
  scrollBehavior() {
    return { left: 0, top: 0 }; // ✅ Înlocuiește `x` și `y` cu `left` și `top`
  }
});

// ✅ Require authentication for all pages except "/login"
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  const isAuthenticated = !!localStorage.getItem("token");

  if (!isAuthenticated && to.path !== "/login") {
    next("/login"); // 🚀 Redirect to login if not authenticated
  } else if (isAuthenticated && to.path === "/login") {
    next("/"); // 🚀 Redirect logged-in users away from login page
  } else {
    next(); // ✅ Allow navigation
  }
});

export default router;




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
