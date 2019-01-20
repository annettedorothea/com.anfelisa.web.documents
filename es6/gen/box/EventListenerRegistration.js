import ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationBox {

	static init() {
		ACEController.registerListener('box.LoadBoxesOkEvent', AppState.set_state_State_data);
		ACEController.registerListener('box.LoadBoxesOkEvent', AppState.set_state_State_data_Dashboard_boxList);
		ACEController.registerListener('box.LoadBoxesOkEvent', AppState.set_state_State_view);
		ACEController.registerListener('box.EditBoxOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.CancelEditBoxOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.MaxIntervalChangedOkEvent', AppState.set_state_State_data_Card_editedMaxInterval);
		ACEController.registerListener('box.UpdateBoxOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.DeleteBoxClickOkEvent', AppState.set_state_State_data_Dashboard_deleteBox);
		ACEController.registerListener('box.CancelDeleteBoxOkEvent', AppState.reset_state_State_data_Dashboard_deleteBox);
		ACEController.registerListener('box.DeleteBoxErrorEvent', AppState.reset_state_State_data_Dashboard_deleteBox_DeleteBox_confirmDelete);
		ACEController.registerListener('box.LoadNextCardOkEvent', AppState.set_state_State_view);
		ACEController.registerListener('box.LoadNextCardOkEvent', AppState.set_state_State_data);
		ACEController.registerListener('box.LoadNextCardOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.LoadNextCardDoNotScheduleNextEvent', AppState.set_state_State_view);
		ACEController.registerListener('box.LoadNextCardDoNotScheduleNextEvent', AppState.set_state_State_data);
		ACEController.registerListener('box.LoadNextCardDoNotScheduleNextEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.ToggleScheduleNextOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.DisplayWantedOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.LoadNextReinforceCardOkEvent', AppState.set_state_State_data);
		ACEController.registerListener('box.LoadNextReinforceCardOkEvent', AppState.set_state_State_view);
		ACEController.registerListener('box.LoadNextReinforceCardOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.LoadBoxStatisticsOkEvent', AppState.merge_state_State_data);
	}

}

/*       S.D.G.       */
