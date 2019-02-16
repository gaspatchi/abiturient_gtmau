import { fetchContent } from "@/api/promoSlider";

export default {
	namespaced: true,
	state: {
		sliderOpen: false,
		sliderLoaded: false,
		sliderError: false,
		sliderContent: []
	},
	mutations: {
		openSlider(state) {
			state.sliderOpen = true;
		},
		closeSlider(state) {
			state.sliderOpen = false;
		},
		sliderLoaded(state, loaded) {
			state.sliderLoaded = loaded;
		},
		saveContent(state, content) {
			state.sliderContent = content;
		},
		sliderError(state, error) {
			state.sliderError = error;
		}
	},
	actions: {
		async loadContent({ commit }) {
			try {
				commit("sliderLoaded", false);
				let content = await fetchContent();
				commit("saveContent", content);
				commit("sliderLoaded", true);
			} catch (e) {
				console.log(e);
				commit("sliderError", true);
				commit("sliderLoaded", false);
			}
		}
	}
};
