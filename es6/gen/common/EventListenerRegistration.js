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
 *
 * generated with de.acegen 0.9.5
 *
 */




import ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationCommon {

	static init() {
		ACEController.registerListener('common.InitUserEvent', AppState.set_loggedInUser);
		ACEController.registerListener('common.InitUserEvent', AppState.set_language);
		ACEController.registerListener('common.InitNoUserEvent', AppState.reset_loggedInUser);
		ACEController.registerListener('common.InitNoUserEvent', AppState.set_language);
		ACEController.registerListener('common.RouteChangedLoginEvent', AppState.set_loginView);
		ACEController.registerListener('common.RouteChangedRegistrationEvent', AppState.set_registrationView);
		ACEController.registerListener('common.RouteChangedForgotPasswordEvent', AppState.set_forgotPasswordView);
		ACEController.registerListener('common.RouteChangedResetPasswordEvent', AppState.set_resetPasswordView);
		ACEController.registerListener('common.RouteChangedNextCardEvent', AppState.set_cardView_boxId);
		ACEController.registerListener('common.RouteChangedBoxSettingsEvent', AppState.set_boxSettingsView_boxId);
		ACEController.registerListener('common.RouteChangedBoxCreateEvent', AppState.set_boxSettingsView);
		ACEController.registerListener('common.RouteOkEvent', AppState.set_hash);
		ACEController.registerListener('common.InitialLoginOkEvent', AppState.set_loggedInUser_role);
		ACEController.registerListener('common.LogoutOkEvent', AppState.reset_loggedInUser);
		ACEController.registerListener('common.LogoutOkEvent', AppState.reset_username);
		ACEController.registerListener('common.LogoutOkEvent', AppState.reset_password);
		ACEController.registerListener('common.DisplayErrorOkEvent', AppState.set_message);
		ACEController.registerListener('common.DisplayErrorAndLogoutOkEvent', AppState.set_message);
		ACEController.registerListener('common.DisplayMessageOkEvent', AppState.set_message);
		ACEController.registerListener('common.ClearToastOkEvent', AppState.reset_message);
		ACEController.registerListener('common.DisplaySaveBugDialogOkEvent', AppState.set_displaySaveBugDialog);
		ACEController.registerListener('common.CancelSaveBugDialogOkEvent', AppState.set_displaySaveBugDialog);
		ACEController.registerListener('common.HideSaveBugDialogOkEvent', AppState.set_displaySaveBugDialog);
	}

}




/******* S.D.G. *******/



