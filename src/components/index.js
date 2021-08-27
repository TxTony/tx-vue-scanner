import Vue from "vue";
import TxVueScanner from "./TxVueScanner.vue";

const Components = {
  TxVueScanner
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
