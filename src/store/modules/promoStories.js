export default {
	namespaced: true,
	state: {
		openStories: false,
		currentStory: 1
	},
	mutations: {
		openStories(state) {
			state.openStories = true;
		},
		closeStories(state) {
			state.openStories = false;
		},
		setCurrentStory(state, id) {
			state.currentStory = id;
		}
	},
	actions: {
		openStory({ commit }, storyId) {
			commit("openStories");
			commit("setCurrentStory", storyId);
		},
		closeStories({ commit }) {
			commit("closeStories");
			commit("setCurrentStory", 0);
		}
	}
};
