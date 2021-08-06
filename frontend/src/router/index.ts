import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => 
      import("@/views/Main/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("@/views/Main/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("@/views/Main/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import("@/views/Main/Signup.vue"),
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: () =>
      import("@/views/Main/Profile.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
