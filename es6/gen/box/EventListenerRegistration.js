/* 
 * Copyright (c) 2019, Annette Pohl, Koblenz, Germany
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.

 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */




import ACEController from "../ace/ACEController";
import * as AppState from "../ace/WriteAppState";

export default class EventListenerRegistrationBox {

	static init() {
		ACEController.registerListener('box.LoadBoxesOkEvent', AppState.set_state_State_data);
		ACEController.registerListener('box.LoadBoxesOkEvent', AppState.set_state_State_data_Dashboard_boxList);
		ACEController.registerListener('box.LoadBoxesOkEvent', AppState.set_state_State_view);
		ACEController.registerListener('box.EditBoxOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.CancelEditBoxOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.MaxIntervalChangedOkEvent', AppState.set_state_State_data_Card_editedMaxInterval);
		ACEController.registerListener('box.EditMaxCardsPerDayOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.CancelEditMaxCardsPerDayOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.MaxCardsPerDayChangedOkEvent', AppState.set_state_State_data_Card_editedMaxCardsPerDay);
		ACEController.registerListener('box.DeleteBoxClickOkEvent', AppState.set_state_State_data_Dashboard_deleteBox);
		ACEController.registerListener('box.CancelDeleteBoxOkEvent', AppState.reset_state_State_data_Dashboard_deleteBox);
		ACEController.registerListener('box.DeleteBoxErrorEvent', AppState.reset_state_State_data_Dashboard_deleteBox_DeleteBox_confirmDelete);
		ACEController.registerListener('box.LoadNextCardOkEvent', AppState.set_state_State_view);
		ACEController.registerListener('box.LoadNextCardOkEvent', AppState.set_state_State_data);
		ACEController.registerListener('box.LoadNextCardOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.ToggleScheduleNextOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.DisplayWantedOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.LoadNextReinforceCardOkEvent', AppState.set_state_State_data);
		ACEController.registerListener('box.LoadNextReinforceCardOkEvent', AppState.set_state_State_view);
		ACEController.registerListener('box.LoadNextReinforceCardOkEvent', AppState.merge_state_State_data);
	}

}




/******* S.D.G. *******/



