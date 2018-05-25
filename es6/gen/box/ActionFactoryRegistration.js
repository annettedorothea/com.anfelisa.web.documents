import ACEController from "../ace/ACEController";
import LoadBoxesAction from "../../src/box/actions/LoadBoxesAction";
import LoadRootCategoriesAction from "../../src/box/actions/LoadRootCategoriesAction";
import ToggleMaxIntervalAction from "../../src/box/actions/ToggleMaxIntervalAction";
import MaxIntervalChangedAction from "../../src/box/actions/MaxIntervalChangedAction";
import CategorySelectedAction from "../../src/box/actions/CategorySelectedAction";
import CreateBoxAction from "../../src/box/actions/CreateBoxAction";

export default class ActionFactoryRegistrationBox {

	static init() {
		ACEController.registerFactory('box.LoadBoxesAction', (actionParam) => new LoadBoxesAction(actionParam));
		ACEController.registerFactory('box.LoadRootCategoriesAction', (actionParam) => new LoadRootCategoriesAction(actionParam));
		ACEController.registerFactory('box.ToggleMaxIntervalAction', (actionParam) => new ToggleMaxIntervalAction(actionParam));
		ACEController.registerFactory('box.MaxIntervalChangedAction', (actionParam) => new MaxIntervalChangedAction(actionParam));
		ACEController.registerFactory('box.CategorySelectedAction', (actionParam) => new CategorySelectedAction(actionParam));
		ACEController.registerFactory('box.CreateBoxAction', (actionParam) => new CreateBoxAction(actionParam));
	}

}

/*       S.D.G.       */
