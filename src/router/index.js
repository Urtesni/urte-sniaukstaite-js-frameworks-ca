import Vue from "vue";
import VueRouter from "vue-router";
//import { component } from "vue/types/umd";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";
import Game from "@/views/Game.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/game/:id",
    name: "game",
    component: Game
  }
];

const router = new VueRouter({
  routes
});

export default router;
