import { fetchContent } from "@/api/about";

export default {
	namespaced: true,
	state: {
		aboutLoaded: false,
		aboutError: false,
		aboutContent: [],
		aboutCurrentPost: 0
	},
	mutations: {
		aboutLoaded(state, loaded) {
			state.aboutLoaded = loaded;
		},
		saveContent(state, content) {
			state.aboutContent = content;
		},
		aboutError(state, error) {
			state.aboutError = error;
		},
		setCurrentPost(state, id) {
			state.aboutCurrentPost = id;
		}
	},
	actions: {
		async fetchContent({ commit }) {
			try {
				commit("aboutLoaded", false);
				let content = await fetchContent();
				commit("saveContent", content);
				commit("aboutLoaded", true);
			} catch (e) {
				commit("aboutError", true);
				commit("aboutLoaded", false);
			}
		}
	}
};
