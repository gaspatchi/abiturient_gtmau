import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store/store";
import ru from "vee-validate/dist/locale/ru";
import VeeValidate, { Validator } from "vee-validate";
import "aos/dist/aos.css";
import AOS from "aos";
import VueScrollTo from "vue-scrollto";
AOS.init();
Vue.use(VeeValidate);
Validator.localize("ru", ru);
Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
