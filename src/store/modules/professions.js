import { fetchContent } from "@/api/professions";

export default {
	namespaced: true,
	state: {
		professionsLoaded: false,
		professionsError: false,
		professionsContent: [],
		professionsCurrent: 0
	},
	mutations: {
		professionsLoaded(state, loaded) {
			state.professionsLoaded = loaded;
		},
		professionsError(state, error) {
			state.professionsError = error;
		},
		saveContent(state, content) {
			state.professionsContent = content;
		},
		setCurrentProfession(state, id) {
			state.professionsCurrent = id;
		}
	},
	actions: {
		async fetchContent({ commit }) {
			try {
				commit("professionsLoaded", false);
				let content = await fetchContent();
				commit("saveContent", content);
				commit("professionsLoaded", true);
			} catch (e) {
				commit("professionsLoaded", false);
				commit("professionsError", true);
			}
		}
	}
};
