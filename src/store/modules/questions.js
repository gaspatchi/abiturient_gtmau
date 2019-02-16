import { fetchContent } from "@/api/questions";

export default {
	namespaced: true,
	state: {
		questionsLoaded: false,
		questionsError: false,
		questionsContent: []
	},
	mutations: {
		questionsLoaded(state, loaded) {
			state.questionsLoaded = loaded;
		},
		questionsError(state, error) {
			state.questionsError = error;
		},
		saveContent(state, content) {
			state.questionsContent = content;
		}
	},
	actions: {
		async fetchContent({ commit }) {
			try {
				commit("questionsLoaded", false);
				let content = await fetchContent();
				commit("saveContent", content);
				commit("questionsLoaded", true);
			} catch (e) {
				console.log(e);
				commit("questionsError", true);
				commit("questionsLoaded", false);
			}
		}
	}
};
