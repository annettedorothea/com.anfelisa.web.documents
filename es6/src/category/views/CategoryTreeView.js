import {mergeState, getAppState, deepMergeState} from "../../app/App";

export default class CategoryTreeView {

	static mergeDataAndRoute(eventData) {
		mergeState({
			route: "category-tree",
			data: eventData
		});
	};

	static setSelectedCategory(eventData) {
		const data = getAppState().data;
		data.selectedCategory = eventData.selectedCategory;
		mergeState({
			data
		});
	};

	static setCategoryList(eventData) {
		const data = getAppState().data;
		data.categoryList = eventData.categoryList;
		mergeState({
			data
		});
	};

	static setDisplayDeleteCategory(eventData) {
		const data = getAppState().data;
		data.displayDeleteCategory = eventData.displayDeleteCategory;
		mergeState({
			data
		});
	};

	static setCategoryDialogData(eventData) {
		const data = getAppState().data;
		data.dictionaryLookup = eventData.dictionaryLookup;
		data.wantedLanguage = eventData.wantedLanguage;
		data.givenLanguage = eventData.givenLanguage;
		data.categoryName = eventData.categoryName;
		data.displayEditCategory = eventData.displayEditCategory;
		data.displayNewCategory = eventData.displayNewCategory;
		mergeState({
			data
		});
	};

	static mergeCategoryDialogData(eventData) {
		deepMergeState({
			data: eventData
		});
	};

	static setInviteUserDialogData(eventData) {
		const data = getAppState().data;
		data.displayInviteUser = eventData.displayInviteUser;
		data.invitedUsername = eventData.invitedUsername;
		data.userList = eventData.userList;
		mergeState({
			data
		});
	};

	static mergeInviteUserDialogData(eventData) {
		deepMergeState({
			data: eventData
		});
	};

	static setDropData(eventData) {
		const data = getAppState().data;
		data.dropAllowed = eventData.dropAllowed;
		data.dropTargetCategoryId = eventData.dropTargetCategoryId;
		mergeState({
			data
		});
	};

	static resetDropData(eventData) {
		const data = getAppState().data;
		data.dropAllowed = undefined;
		data.dropTargetCategoryId = undefined;
		mergeState({
			data
		});
	};

	static setMovedCategory(eventData) {
		let data = getAppState().data;
		data.movedCategory = eventData.movedCategory;
		mergeState({
			data
		});
	}

	static resetMovedCategory(eventData) {
		let data = getAppState().data;
		data.movedCategory = undefined;
		mergeState({
			data
		});
	}

	static collapseEmptyParent(eventData) {
		let data = getAppState().data;
		data.movedCategory = undefined;
		mergeState({
			data
		});
	}

}

/*                    S.D.G.                    */
