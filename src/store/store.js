import Vue from "vue";
import Vuex from "vuex";

import mobileMenu from "./modules/mobileMenu";
import promoSlider from "./modules/promoSlider";
import promoStories from "./modules/promoStories";
import about from "./modules/about";
import professions from "./modules/professions";
import steps from "./modules/steps";
import questions from "./modules/questions";
import feedbackForm from "./modules/feedbackForm";
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		mobileMenu,
		promoSlider,
		promoStories,
		about,
		professions,
		steps,
		questions,
		feedbackForm
	}
});
