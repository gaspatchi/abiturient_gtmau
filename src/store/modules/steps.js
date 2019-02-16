import { fetchContent } from "@/api/steps";

export default {
	namespaced: true,
	state: {
		stepsLoaded: false,
		stepsError: false,
		stepsContent: {},
		stepsCurrent: 0
	},
	mutations: {
		stepsLoaded(state, loaded) {
			state.stepsLoaded = loaded;
		},
		stepsError(state, error) {
			state.stepsError = error;
		},
		saveContent(state, content) {
			state.stepsContent = content;
		},
		setStepsCurrent(state, index) {
			state.stepsCurrent = index;
		}
	},
	actions: {
		async fetchContent({ commit }) {
			try {
				commit("stepsLoaded", false);
				let content = await fetchContent();
				commit("saveContent", content);
				commit("stepsLoaded", true);
			} catch (e) {
				console.log(e);
				commit("stepsError", true);
				commit("stepsLoaded", false);
			}
		}
	}
};
