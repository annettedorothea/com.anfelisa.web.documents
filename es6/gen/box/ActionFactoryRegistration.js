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
		ACEController.registerFactory('box.LoadBoxesAction', (actionData) => new LoadBoxesAction(actionData, 'box.LoadBoxesAction'));
		ACEController.registerFactory('box.CreateBoxAction', (actionData) => new CreateBoxAction(actionData, 'box.CreateBoxAction'));
		ACEController.registerFactory('box.EditBoxAction', (actionData) => new EditBoxAction(actionData, 'box.EditBoxAction'));
		ACEController.registerFactory('box.CancelEditBoxAction', (actionData) => new CancelEditBoxAction(actionData, 'box.CancelEditBoxAction'));
		ACEController.registerFactory('box.MaxIntervalChangedAction', (actionData) => new MaxIntervalChangedAction(actionData, 'box.MaxIntervalChangedAction'));
		ACEController.registerFactory('box.UpdateBoxAction', (actionData) => new UpdateBoxAction(actionData, 'box.UpdateBoxAction'));
		ACEController.registerFactory('box.DeleteBoxClickAction', (actionData) => new DeleteBoxClickAction(actionData, 'box.DeleteBoxClickAction'));
		ACEController.registerFactory('box.CancelDeleteBoxAction', (actionData) => new CancelDeleteBoxAction(actionData, 'box.CancelDeleteBoxAction'));
		ACEController.registerFactory('box.DeleteBoxAction', (actionData) => new DeleteBoxAction(actionData, 'box.DeleteBoxAction'));
		ACEController.registerFactory('box.PostponeCardsOfBoxAction', (actionData) => new PostponeCardsOfBoxAction(actionData, 'box.PostponeCardsOfBoxAction'));
		ACEController.registerFactory('box.LoadNextCardAction', (actionData) => new LoadNextCardAction(actionData, 'box.LoadNextCardAction'));
		ACEController.registerFactory('box.ScheduleNextCardAction', (actionData) => new ScheduleNextCardAction(actionData, 'box.ScheduleNextCardAction'));
		ACEController.registerFactory('box.ToggleScheduleNextAction', (actionData) => new ToggleScheduleNextAction(actionData, 'box.ToggleScheduleNextAction'));
		ACEController.registerFactory('box.DisplayWantedAction', (actionData) => new DisplayWantedAction(actionData, 'box.DisplayWantedAction'));
		ACEController.registerFactory('box.ScoreCardAction', (actionData) => new ScoreCardAction(actionData, 'box.ScoreCardAction'));
		ACEController.registerFactory('box.LoadNextReinforceCardAction', (actionData) => new LoadNextReinforceCardAction(actionData, 'box.LoadNextReinforceCardAction'));
		ACEController.registerFactory('box.ScoreReinforceCardAction', (actionData) => new ScoreReinforceCardAction(actionData, 'box.ScoreReinforceCardAction'));
		ACEController.registerFactory('box.LoadBoxStatisticsAction', (actionData) => new LoadBoxStatisticsAction(actionData, 'box.LoadBoxStatisticsAction'));
	}

}

/*       S.D.G.       */
