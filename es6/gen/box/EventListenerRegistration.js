import ACEController from "../ace/ACEController";
import BoxesView from "../../src/box/views/BoxesView";
import CommonView from "../../src/common/views/CommonView";
import CreateBoxView from "../../src/box/views/CreateBoxView";

export default class EventListenerRegistrationBox {

	static init() {
		ACEController.registerListener('box.LoadBoxesOkEvent', BoxesView.render);
		ACEController.registerListener('box.LoadBoxesUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('box.LoadRootCategoriesOkEvent', CreateBoxView.render);
		ACEController.registerListener('box.LoadRootCategoriesUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('box.ToggleMaxIntervalOkEvent', CreateBoxView.toggleMaxInterval);
		ACEController.registerListener('box.MaxIntervalChangedOkEvent', CreateBoxView.maxIntervalChanged);
		ACEController.registerListener('box.CategorySelectedOkEvent', CreateBoxView.categorySelected);
		ACEController.registerListener('box.CreateBoxUnauthorizedEvent', CommonView.displayError);
	}

}

/*       S.D.G.       */
