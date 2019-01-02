import ACEController from "../ace/ACEController";
import BoxListView from "../../src/box/views/BoxListView";
import BoxView from "../../src/box/views/BoxView";
import BoxReinforceView from "../../src/box/views/BoxReinforceView";

export default class EventListenerRegistrationBox {

	static init() {
		ACEController.registerListener('box.LoadBoxesOkEvent', BoxListView.render);
		ACEController.registerListener('box.EditBoxOkEvent', BoxView.editBox);
		ACEController.registerListener('box.CancelEditBoxOkEvent', BoxView.cancelEditBox);
		ACEController.registerListener('box.MaxIntervalChangedOkEvent', BoxView.maxIntervalChanged);
		ACEController.registerListener('box.DeleteBoxClickOkEvent', BoxListView.displayConfirmDelete);
		ACEController.registerListener('box.CancelDeleteBoxOkEvent', BoxListView.hideConfirmDelete);
		ACEController.registerListener('box.DeleteBoxErrorEvent', BoxListView.hideConfirmDelete);
		ACEController.registerListener('box.LoadNextCardOkEvent', BoxView.render);
		ACEController.registerListener('box.LoadNextCardDoNotScheduleNextEvent', BoxView.render);
		ACEController.registerListener('box.ToggleScheduleNextOkEvent', BoxView.toggleScheduleNext);
		ACEController.registerListener('box.DisplayWantedAllEvent', BoxView.displayNextItem);
		ACEController.registerListener('box.DisplayWantedAllEvent', BoxView.enableScoreButtons);
		ACEController.registerListener('box.DisplayWantedNotAllEvent', BoxView.displayNextItem);
		ACEController.registerListener('box.DisplayWantedImageEvent', BoxView.displayImage);
		ACEController.registerListener('box.DisplayWantedImageEvent', BoxView.enableScoreButtons);
		ACEController.registerListener('box.LoadNextReinforceCardOkEvent', BoxReinforceView.render);
		ACEController.registerListener('box.LoadBoxStatisticsOkEvent', BoxView.renderStatistics);
	}

}

/*       S.D.G.       */
