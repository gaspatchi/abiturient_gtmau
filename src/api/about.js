import { aboutUrl } from "./config";
import axios from "axios";
import map from "lodash/map";
import pick from "lodash/pick";

export async function fetchContent() {
	let posts = await axios.get(aboutUrl);
	return map(posts.data, post => pick(post, ["acf", "id"]));
}
