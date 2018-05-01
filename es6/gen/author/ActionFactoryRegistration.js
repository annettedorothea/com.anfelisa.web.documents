import ACEController from "../ace/ACEController";
import LoadCategoriesAction from "../../src/author/actions/LoadCategoriesAction";
import CreateCategoryAction from "../../src/author/actions/CreateCategoryAction";
import UpdateCategoryAction from "../../src/author/actions/UpdateCategoryAction";
import DeleteCategoryAction from "../../src/author/actions/DeleteCategoryAction";

export default class ActionFactoryRegistrationAuthor {

	static init() {
		ACEController.registerFactory('author.LoadCategoriesAction', (actionParam) => new LoadCategoriesAction(actionParam));
		ACEController.registerFactory('author.CreateCategoryAction', (actionParam) => new CreateCategoryAction(actionParam));
		ACEController.registerFactory('author.UpdateCategoryAction', (actionParam) => new UpdateCategoryAction(actionParam));
		ACEController.registerFactory('author.DeleteCategoryAction', (actionParam) => new DeleteCategoryAction(actionParam));
	}

}

/*       S.D.G.       */
