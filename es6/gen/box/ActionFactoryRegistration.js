import ACEController from "../ace/ACEController";
import LoadBoxesAction from "../../src/box/actions/LoadBoxesAction";
import LoadRootCategoriesAction from "../../src/box/actions/LoadRootCategoriesAction";
import ToggleMaxIntervalAction from "../../src/box/actions/ToggleMaxIntervalAction";
import MaxIntervalChangedAction from "../../src/box/actions/MaxIntervalChangedAction";
import CategorySelectedAction from "../../src/box/actions/CategorySelectedAction";
import CreateBoxAction from "../../src/box/actions/CreateBoxAction";
import EditBoxAction from "../../src/box/actions/EditBoxAction";
import ToggleMaxIntervalOfBoxAction from "../../src/box/actions/ToggleMaxIntervalOfBoxAction";
import MaxIntervalChangedOfBoxAction from "../../src/box/actions/MaxIntervalChangedOfBoxAction";
import CancelEditBoxAction from "../../src/box/actions/CancelEditBoxAction";
import UpdateBoxAction from "../../src/box/actions/UpdateBoxAction";
import DeleteBoxClickAction from "../../src/box/actions/DeleteBoxClickAction";
import CancelDeleteCategoryAction from "../../src/box/actions/CancelDeleteCategoryAction";
import DeleteBoxAction from "../../src/box/actions/DeleteBoxAction";
import PostponeCardsOfBoxAction from "../../src/box/actions/PostponeCardsOfBoxAction";

export default class ActionFactoryRegistrationBox {

	static init() {
		ACEController.registerFactory('box.LoadBoxesAction', (actionParam) => new LoadBoxesAction(actionParam));
		ACEController.registerFactory('box.LoadRootCategoriesAction', (actionParam) => new LoadRootCategoriesAction(actionParam));
		ACEController.registerFactory('box.ToggleMaxIntervalAction', (actionParam) => new ToggleMaxIntervalAction(actionParam));
		ACEController.registerFactory('box.MaxIntervalChangedAction', (actionParam) => new MaxIntervalChangedAction(actionParam));
		ACEController.registerFactory('box.CategorySelectedAction', (actionParam) => new CategorySelectedAction(actionParam));
		ACEController.registerFactory('box.CreateBoxAction', (actionParam) => new CreateBoxAction(actionParam));
		ACEController.registerFactory('box.EditBoxAction', (actionParam) => new EditBoxAction(actionParam));
		ACEController.registerFactory('box.ToggleMaxIntervalOfBoxAction', (actionParam) => new ToggleMaxIntervalOfBoxAction(actionParam));
		ACEController.registerFactory('box.MaxIntervalChangedOfBoxAction', (actionParam) => new MaxIntervalChangedOfBoxAction(actionParam));
		ACEController.registerFactory('box.CancelEditBoxAction', (actionParam) => new CancelEditBoxAction(actionParam));
		ACEController.registerFactory('box.UpdateBoxAction', (actionParam) => new UpdateBoxAction(actionParam));
		ACEController.registerFactory('box.DeleteBoxClickAction', (actionParam) => new DeleteBoxClickAction(actionParam));
		ACEController.registerFactory('box.CancelDeleteCategoryAction', (actionParam) => new CancelDeleteCategoryAction(actionParam));
		ACEController.registerFactory('box.DeleteBoxAction', (actionParam) => new DeleteBoxAction(actionParam));
		ACEController.registerFactory('box.PostponeCardsOfBoxAction', (actionParam) => new PostponeCardsOfBoxAction(actionParam));
	}

}

/*       S.D.G.       */
