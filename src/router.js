import Vue from "vue";
import Router from "vue-router";
import Home from "@/containers/Home";

Vue.use(Router);

export default new Router({
	mode: "history",
	// eslint-disable-next-line no-undef
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "HomePage",
			component: Home
		}
	]
});
