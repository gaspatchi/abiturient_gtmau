import { questionsUrl } from "./config";
import axios from "axios";
import map from "lodash/map";
import pick from "lodash/pick";

export async function fetchContent() {
	let slides = await axios.get(questionsUrl);
	return map(slides.data, slide => pick(slide, ["acf", "id"]));
}
