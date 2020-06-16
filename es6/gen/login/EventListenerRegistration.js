/* 
 * Copyright (c) 2020, Annette Pohl, Koblenz, Germany
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

export default class EventListenerRegistrationLogin {

	static init() {
		ACEController.registerListener('login.UsernameChangedOkEvent', AppState.set_state_State_data_Login_username);
		ACEController.registerListener('login.ToggleSaveInLocalStorageOkEvent', AppState.set_state_State_data_Login_saveInLocalStorage);
		ACEController.registerListener('login.LoginSaveInLocalStorageEvent', AppState.set_state_State_loggedInUser);
		ACEController.registerListener('login.LoginSaveInLocalStorageEvent', AppState.set_state_State_username);
		ACEController.registerListener('login.LoginSaveInLocalStorageEvent', AppState.set_state_State_password);
		ACEController.registerListener('login.LoginDoNotSaveInLocalStorageEvent', AppState.set_state_State_loggedInUser);
		ACEController.registerListener('login.LoginDoNotSaveInLocalStorageEvent', AppState.reset_state_State_username);
		ACEController.registerListener('login.LoginDoNotSaveInLocalStorageEvent', AppState.reset_state_State_password);
		ACEController.registerListener('login.GetRoleOkEvent', AppState.merge_state_State_loggedInUser);
	}

}




/******* S.D.G. *******/



