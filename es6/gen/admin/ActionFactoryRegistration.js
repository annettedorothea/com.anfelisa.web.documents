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
 * generated with de.acegen 0.9.8
 *
 */




import ACEController from "../ace/ACEController";
import GetAllUsersAction from "../../src/admin/actions/GetAllUsersAction";
import SaveRoleAction from "../../src/admin/actions/SaveRoleAction";
import DeleteUserAction from "../../src/admin/actions/DeleteUserAction";
import DeleteUserClickAction from "../../src/admin/actions/DeleteUserClickAction";
import DeleteUserCancelAction from "../../src/admin/actions/DeleteUserCancelAction";

export default class ActionFactoryRegistrationAdmin {

	static init() {
		ACEController.registerFactory('admin.GetAllUsersAction', 
			(actionData) => new GetAllUsersAction());
		ACEController.registerFactory('admin.SaveRoleAction', 
			(actionData) => new SaveRoleAction(actionData.editedUserId, actionData.newRole));
		ACEController.registerFactory('admin.DeleteUserAction', 
			(actionData) => new DeleteUserAction());
		ACEController.registerFactory('admin.DeleteUserClickAction', 
			(actionData) => new DeleteUserClickAction(actionData.usernameToBeDeleted));
		ACEController.registerFactory('admin.DeleteUserCancelAction', 
			(actionData) => new DeleteUserCancelAction());
	}

}




/******* S.D.G. *******/



