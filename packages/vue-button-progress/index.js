import ButtonProgress from "./src/ButtonProgress.vue";

ButtonProgress.install = Vue => {
  Vue.component("vue-button-progress", ButtonProgress);
};

export default ButtonProgress;
