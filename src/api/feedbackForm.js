import { feedbackUrl } from "./config";
import axios from "axios";

export async function postFeedbackForm(form) {
	// let result = await axios.post(feedbackUrl, {
	// 	type: "feedback",
	// 	firstname: form.firstname,
	// 	lastname: form.lastname,
	// 	number: form.number,
	// 	email: form.email,
	// 	text: form.text
	// });
	return true;
}
