import * as App from "../../app/App";

export default class CategoryTreeView {
	static render(eventData) {
		CategoryTreeView.setAllCollapsed(eventData.categoryList);
		App.mergeState({
			route: "category-tree",
			data: eventData
		});
	};
	
	static expandTreeItem(eventData) {
		const data = App.appState.data;
		let category = CategoryTreeView.findCategory(data.categoryList, eventData.categoryId);
		category.expanded = true;
		App.deepMergeState({
			data
		});
	};

	static findCategory(categoryList, categoryId) {
		for (let i=0; i<categoryList.length; i++) {
			const category = categoryList[i];
			if (category.categoryId === categoryId) {
				return category;
			}
			if (category.childCategories) {
				const child = CategoryTreeView.findCategory(category.childCategories, categoryId);
				if (child !== null) {
					return child;
				}
			}
		}
		return null;
	}

	static setAllCollapsed(categoryList) {
		for (let i=0; i<categoryList.length; i++) {
			const category = categoryList[i];
			category.expanded = false;
			if (category.childCategories) {
				CategoryTreeView.setAllCollapsed(category.childCategories);
			}
		}
	}

	static collapseTreeItem(eventData) {
		const data = App.appState.data;
		let category = CategoryTreeView.findCategory(data.categoryList, eventData.categoryId);
		category.expanded = false;
		App.deepMergeState({
			data
		});
	};

}

/*                    S.D.G.                    */
