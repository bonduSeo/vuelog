import { createWebHistory, createRouter } from "vue-router";
import ListVue from "./components/ListVue.vue";
import HomeVue from "./components/HomeVue.vue";
import DetailVue from "./components/DetailVue.vue";
import AuthorVue from "./components/AuthorVue.vue";
import CommentVue from "./components/CommentVue.vue";

const routes = [
  {
    path: "/",
    component: HomeVue,
  },
  {
    path: "/list",
    component: ListVue,
  },
  {
    path: "/detail/:id",
    component: DetailVue,
    children: [
      {
        path: "author",
        component: AuthorVue,
      },
      {
        path: "comment",
        component: CommentVue,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
