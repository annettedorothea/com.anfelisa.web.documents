import {mergeState} from "../../app/App";

export default class CategoryTreeView {

	static render(eventData) {
		mergeState({
			route: "category-tree",
			data: eventData
		});
	};

}

/*                    S.D.G.                    */
