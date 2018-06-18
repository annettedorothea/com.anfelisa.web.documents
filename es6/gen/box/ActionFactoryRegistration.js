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
import CancelDeleteBoxAction from "../../src/box/actions/CancelDeleteBoxAction";
import DeleteBoxAction from "../../src/box/actions/DeleteBoxAction";
import PostponeCardsOfBoxAction from "../../src/box/actions/PostponeCardsOfBoxAction";
import LoadNextCardAction from "../../src/box/actions/LoadNextCardAction";
import ScheduleNextCardAction from "../../src/box/actions/ScheduleNextCardAction";
import ToggleScheduleNextAction from "../../src/box/actions/ToggleScheduleNextAction";
import DisplayWantedAction from "../../src/box/actions/DisplayWantedAction";
import ScoreCardAction from "../../src/box/actions/ScoreCardAction";
import LoadNextReinforceCardAction from "../../src/box/actions/LoadNextReinforceCardAction";
import DisplayWantedReinforceAction from "../../src/box/actions/DisplayWantedReinforceAction";
import ScoreReinforceCardAction from "../../src/box/actions/ScoreReinforceCardAction";
import LoadBoxStatisticsAction from "../../src/box/actions/LoadBoxStatisticsAction";

export default class ActionFactoryRegistrationBox {

	static init() {
		ACEController.registerFactory('box.LoadBoxesAction', (actionData) => new LoadBoxesAction(actionData));
		ACEController.registerFactory('box.LoadRootCategoriesAction', (actionData) => new LoadRootCategoriesAction(actionData));
		ACEController.registerFactory('box.ToggleMaxIntervalAction', (actionData) => new ToggleMaxIntervalAction(actionData));
		ACEController.registerFactory('box.MaxIntervalChangedAction', (actionData) => new MaxIntervalChangedAction(actionData));
		ACEController.registerFactory('box.CategorySelectedAction', (actionData) => new CategorySelectedAction(actionData));
		ACEController.registerFactory('box.CreateBoxAction', (actionData) => new CreateBoxAction(actionData));
		ACEController.registerFactory('box.EditBoxAction', (actionData) => new EditBoxAction(actionData));
		ACEController.registerFactory('box.ToggleMaxIntervalOfBoxAction', (actionData) => new ToggleMaxIntervalOfBoxAction(actionData));
		ACEController.registerFactory('box.MaxIntervalChangedOfBoxAction', (actionData) => new MaxIntervalChangedOfBoxAction(actionData));
		ACEController.registerFactory('box.CancelEditBoxAction', (actionData) => new CancelEditBoxAction(actionData));
		ACEController.registerFactory('box.UpdateBoxAction', (actionData) => new UpdateBoxAction(actionData));
		ACEController.registerFactory('box.DeleteBoxClickAction', (actionData) => new DeleteBoxClickAction(actionData));
		ACEController.registerFactory('box.CancelDeleteBoxAction', (actionData) => new CancelDeleteBoxAction(actionData));
		ACEController.registerFactory('box.DeleteBoxAction', (actionData) => new DeleteBoxAction(actionData));
		ACEController.registerFactory('box.PostponeCardsOfBoxAction', (actionData) => new PostponeCardsOfBoxAction(actionData));
		ACEController.registerFactory('box.LoadNextCardAction', (actionData) => new LoadNextCardAction(actionData));
		ACEController.registerFactory('box.ScheduleNextCardAction', (actionData) => new ScheduleNextCardAction(actionData));
		ACEController.registerFactory('box.ToggleScheduleNextAction', (actionData) => new ToggleScheduleNextAction(actionData));
		ACEController.registerFactory('box.DisplayWantedAction', (actionData) => new DisplayWantedAction(actionData));
		ACEController.registerFactory('box.ScoreCardAction', (actionData) => new ScoreCardAction(actionData));
		ACEController.registerFactory('box.LoadNextReinforceCardAction', (actionData) => new LoadNextReinforceCardAction(actionData));
		ACEController.registerFactory('box.DisplayWantedReinforceAction', (actionData) => new DisplayWantedReinforceAction(actionData));
		ACEController.registerFactory('box.ScoreReinforceCardAction', (actionData) => new ScoreReinforceCardAction(actionData));
		ACEController.registerFactory('box.LoadBoxStatisticsAction', (actionData) => new LoadBoxStatisticsAction(actionData));
	}

}

/*       S.D.G.       */
