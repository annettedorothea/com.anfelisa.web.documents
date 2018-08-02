import ACEController from "../ace/ACEController";
import BoxListView from "../../src/box/views/BoxListView";
import BoxView from "../../src/box/views/BoxView";
import BoxReinforceView from "../../src/box/views/BoxReinforceView";

export default class EventListenerRegistrationBox {

	static init() {
		ACEController.registerListener('box.LoadBoxesOkEvent', BoxListView.render);
		ACEController.registerListener('box.EditBoxOkEvent', BoxListView.editBox);
		ACEController.registerListener('box.ToggleMaxIntervalOfBoxOkEvent', BoxListView.toggleMaxInterval);
		ACEController.registerListener('box.MaxIntervalChangedOfBoxOkEvent', BoxListView.maxIntervalChanged);
		ACEController.registerListener('box.CancelEditBoxOkEvent', BoxListView.cancelEditBox);
		ACEController.registerListener('box.DeleteBoxClickOkEvent', BoxListView.displayConfirmDelete);
		ACEController.registerListener('box.CancelDeleteBoxOkEvent', BoxListView.hideConfirmDelete);
		ACEController.registerListener('box.LoadNextCardOkEvent', BoxView.render);
		ACEController.registerListener('box.LoadNextCardDoNotScheduleNextEvent', BoxView.render);
		ACEController.registerListener('box.ToggleScheduleNextOkEvent', BoxView.toggleScheduleNext);
		ACEController.registerListener('box.DisplayWantedAllEvent', BoxView.displayNextItem);
		ACEController.registerListener('box.DisplayWantedAllEvent', BoxView.enableScoreButtons);
		ACEController.registerListener('box.DisplayWantedNotAllEvent', BoxView.displayNextItem);
		ACEController.registerListener('box.DisplayWantedImageEvent', BoxView.displayImage);
		ACEController.registerListener('box.DisplayWantedImageEvent', BoxView.enableScoreButtons);
		ACEController.registerListener('box.LoadNextReinforceCardOkEvent', BoxReinforceView.render);
		ACEController.registerListener('box.DisplayWantedReinforceAllEvent', BoxReinforceView.displayNextItem);
		ACEController.registerListener('box.DisplayWantedReinforceAllEvent', BoxReinforceView.enableScoreButtons);
		ACEController.registerListener('box.DisplayWantedReinforceNotAllEvent', BoxReinforceView.displayNextItem);
		ACEController.registerListener('box.DisplayWantedReinforceImageEvent', BoxReinforceView.displayImage);
		ACEController.registerListener('box.DisplayWantedReinforceImageEvent', BoxReinforceView.enableScoreButtons);
		ACEController.registerListener('box.LoadBoxStatisticsOkEvent', BoxView.renderStatistics);
	}

}

/*       S.D.G.       */
