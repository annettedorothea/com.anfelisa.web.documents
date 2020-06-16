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




import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RouteChangedLoginEvent from "../../../gen/common/events/RouteChangedLoginEvent";
import RouteChangedRegistrationEvent from "../../../gen/common/events/RouteChangedRegistrationEvent";
import RouteChangedForgotPasswordEvent from "../../../gen/common/events/RouteChangedForgotPasswordEvent";
import RouteChangedResetPasswordEvent from "../../../gen/common/events/RouteChangedResetPasswordEvent";
import ConfirmEmailAction from "../../../src/registration/actions/ConfirmEmailAction";
import InitBoxesForDayAction from "../../../src/box/actions/InitBoxesForDayAction";
import LoadCategoryTreeAction from "../../../src/category/actions/LoadCategoryTreeAction";
import LoadUserAction from "../../../src/profile/actions/LoadUserAction";
import GetAllUsersAction from "../../../src/admin/actions/GetAllUsersAction";
import LoadNextCardAction from "../../../src/box/actions/LoadNextCardAction";
import RouteAction from "../../../src/common/actions/RouteAction";
import LoadSettingsAction from "../../../src/box/actions/LoadSettingsAction";
import CreateNewBoxAction from "../../../src/box/actions/CreateNewBoxAction";

export default class AbstractRouteChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.RouteChangedCommand");
        this.login = "login";
        this.registration = "registration";
        this.confirmEmail = "confirmEmail";
        this.forgotPassword = "forgotPassword";
        this.resetPassword = "resetPassword";
        this.dashboard = "dashboard";
        this.categories = "categories";
        this.profile = "profile";
        this.userList = "userList";
        this.nextCard = "nextCard";
        this.invalid = "invalid";
        this.boxSettings = "boxSettings";
        this.boxCreate = "boxCreate";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.login:
			new RouteChangedLoginEvent(this.commandData).publish();
			break;
		case this.registration:
			new RouteChangedRegistrationEvent(this.commandData).publish();
			break;
		case this.confirmEmail:
			new TriggerAction(new ConfirmEmailAction(this.commandData.username, this.commandData.token)).publish();
			break;
		case this.forgotPassword:
			new RouteChangedForgotPasswordEvent(this.commandData).publish();
			break;
		case this.resetPassword:
			new RouteChangedResetPasswordEvent(this.commandData).publish();
			break;
		case this.dashboard:
			new TriggerAction(new InitBoxesForDayAction()).publish();
			break;
		case this.categories:
			new TriggerAction(new LoadCategoryTreeAction(this.commandData.rootCategoryId, this.commandData.selectedCategoryId)).publish();
			break;
		case this.profile:
			new TriggerAction(new LoadUserAction()).publish();
			break;
		case this.userList:
			new TriggerAction(new GetAllUsersAction()).publish();
			break;
		case this.nextCard:
			new TriggerAction(new LoadNextCardAction(this.commandData.boxId)).publish();
			break;
		case this.invalid:
			new TriggerAction(new RouteAction(this.commandData.hash)).publish();
			break;
		case this.boxSettings:
			new TriggerAction(new LoadSettingsAction(this.commandData.boxId)).publish();
			break;
		case this.boxCreate:
			new TriggerAction(new CreateNewBoxAction()).publish();
			break;
		default:
			throw 'RouteChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



