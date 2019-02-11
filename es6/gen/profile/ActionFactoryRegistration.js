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
import LoadUserAction from "../../src/profile/actions/LoadUserAction";
import DeleteUserAction from "../../src/profile/actions/DeleteUserAction";
import DeleteUserClickAction from "../../src/profile/actions/DeleteUserClickAction";
import DeleteUserCancelAction from "../../src/profile/actions/DeleteUserCancelAction";

export default class ActionFactoryRegistrationProfile {

	static init() {
		ACEController.registerFactory('profile.LoadUserAction', 
			(actionData) => new LoadUserAction());
		ACEController.registerFactory('profile.DeleteUserAction', 
			(actionData) => new DeleteUserAction(actionData.usernameToBeDeleted));
		ACEController.registerFactory('profile.DeleteUserClickAction', 
			(actionData) => new DeleteUserClickAction());
		ACEController.registerFactory('profile.DeleteUserCancelAction', 
			(actionData) => new DeleteUserCancelAction());
	}

}




/******* S.D.G. *******/



