import ACEController from "../ace/ACEController";
import LoadBoxesAction from "../../src/box/actions/LoadBoxesAction";
import CreateBoxAction from "../../src/box/actions/CreateBoxAction";
import EditBoxAction from "../../src/box/actions/EditBoxAction";
import CancelEditBoxAction from "../../src/box/actions/CancelEditBoxAction";
import MaxIntervalChangedAction from "../../src/box/actions/MaxIntervalChangedAction";
import UpdateBoxAction from "../../src/box/actions/UpdateBoxAction";
import DeleteBoxClickAction from "../../src/box/actions/DeleteBoxClickAction";
import CancelDeleteBoxAction from "../../src/box/actions/CancelDeleteBoxAction";
import DeleteBoxAction from "../../src/box/actions/DeleteBoxAction";
import PostponeCardsOfBoxAction from "../../src/box/actions/PostponeCardsOfBoxAction";
import LoadNextCardAction from "../../src/box/actions/LoadNextCardAction";
import ScheduleNextCardAction from "../../src/box/actions/ScheduleNextCardAction";
import ToggleScheduleNextAction from "../../src/box/actions/ToggleScheduleNextAction";
import DisplayWantedAction from "../../src/box/actions/DisplayWantedAction";
import ScoreCardAction from "../../src/box/actions/ScoreCardAction";
import LoadNextReinforceCardAction from "../../src/box/actions/LoadNextReinforceCardAction";
import ScoreReinforceCardAction from "../../src/box/actions/ScoreReinforceCardAction";
import LoadBoxStatisticsAction from "../../src/box/actions/LoadBoxStatisticsAction";

export default class ActionFactoryRegistrationBox {

	static init() {
		ACEController.registerFactory('box.LoadBoxesAction', 
			(actionData) => new LoadBoxesAction());
		ACEController.registerFactory('box.CreateBoxAction', 
			(actionData) => new CreateBoxAction());
		ACEController.registerFactory('box.EditBoxAction', 
			(actionData) => new EditBoxAction());
		ACEController.registerFactory('box.CancelEditBoxAction', 
			(actionData) => new CancelEditBoxAction());
		ACEController.registerFactory('box.MaxIntervalChangedAction', 
			(actionData) => new MaxIntervalChangedAction(actionData.editedMaxInterval));
		ACEController.registerFactory('box.UpdateBoxAction', 
			(actionData) => new UpdateBoxAction());
		ACEController.registerFactory('box.DeleteBoxClickAction', 
			(actionData) => new DeleteBoxClickAction(actionData.boxId));
		ACEController.registerFactory('box.CancelDeleteBoxAction', 
			(actionData) => new CancelDeleteBoxAction());
		ACEController.registerFactory('box.DeleteBoxAction', 
			(actionData) => new DeleteBoxAction(actionData.boxId));
		ACEController.registerFactory('box.PostponeCardsOfBoxAction', 
			(actionData) => new PostponeCardsOfBoxAction(actionData.boxId));
		ACEController.registerFactory('box.LoadNextCardAction', 
			(actionData) => new LoadNextCardAction(actionData.boxId));
		ACEController.registerFactory('box.ScheduleNextCardAction', 
			(actionData) => new ScheduleNextCardAction());
		ACEController.registerFactory('box.ToggleScheduleNextAction', 
			(actionData) => new ToggleScheduleNextAction());
		ACEController.registerFactory('box.DisplayWantedAction', 
			(actionData) => new DisplayWantedAction(actionData.wantedItemsLength));
		ACEController.registerFactory('box.ScoreCardAction', 
			(actionData) => new ScoreCardAction(actionData.scoredCardQuality));
		ACEController.registerFactory('box.LoadNextReinforceCardAction', 
			(actionData) => new LoadNextReinforceCardAction(actionData.boxId));
		ACEController.registerFactory('box.ScoreReinforceCardAction', 
			(actionData) => new ScoreReinforceCardAction(actionData.quality));
		ACEController.registerFactory('box.LoadBoxStatisticsAction', 
			(actionData) => new LoadBoxStatisticsAction(actionData.boxId));
	}

}

/*       S.D.G.       */
