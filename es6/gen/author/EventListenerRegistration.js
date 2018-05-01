import ACEController from "../ace/ACEController";
import CategoriesView from "../../src/author/views/CategoriesView";
import CommonView from "../../src/common/views/CommonView";

export default class EventListenerRegistrationAuthor {

	static init() {
		ACEController.registerListener('author.LoadCategoriesOkEvent', CategoriesView.render);
		ACEController.registerListener('author.LoadCategoriesUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.CreateCategoryUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.UpdateCategoryUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.DeleteCategoryUnauthorizedEvent', CommonView.displayError);
	}

}

/*       S.D.G.       */
