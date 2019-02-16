import { postFeedbackForm } from "@/api/feedbackForm";

export default {
	namespaced: true,
	state: {
		formOpend: false,
		formProceed: false,
		formSended: false,
		formError: false
	},
	mutations: {
		openForm(state) {
			state.formOpend = true;
		},
		closeForm(state) {
			state.formOpend = false;
		},
		formError(state, error) {
			state.formError = error;
		},
		formSend(state, send) {
			state.formSended = send;
		},
		formProceed(state, proceed) {
			state.formProceed = proceed;
		}
	},
	actions: {
		async postFeedbackForm({ commit }, form) {
			try {
				commit("formProceed", true);
				await postFeedbackForm(form);
				commit("formProceed", false);
				commit("formSend", true);
			} catch (e) {
				commit("formProceed", false);
				commit("formSend", false);
				commit("formError", true);
			}
		}
	}
};
