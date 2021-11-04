import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import Chart from "chart.js";
import Chartick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";

import router from "@/router";
import { dollarFilter, percentfilter } from "@/filters";

Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart));

Vue.config.productionTip = false;

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentfilter);

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
