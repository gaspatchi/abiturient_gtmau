import { stepsUrl } from "./config";
import axios from "axios";
import pick from "lodash/pick";

export async function fetchContent() {
	let steps = await axios.get(stepsUrl);
	return pick(steps.data[0], ["acf", "id"]);
}
