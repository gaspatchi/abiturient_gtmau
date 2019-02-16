import { professionsUrl } from "./config";
import axios from "axios";
import map from "lodash/map";
import pick from "lodash/pick";

export async function fetchContent() {
	let professions = await axios.get(professionsUrl);
	return map(professions.data, profession => pick(profession, ["acf", "id"]));
}
