import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RouteChangedLoginEvent from "../../../gen/common/events/RouteChangedLoginEvent";
import RouteChangedRegistrationEvent from "../../../gen/common/events/RouteChangedRegistrationEvent";
import RouteChangedForgotPasswordEvent from "../../../gen/common/events/RouteChangedForgotPasswordEvent";
import RouteChangedResetPasswordEvent from "../../../gen/common/events/RouteChangedResetPasswordEvent";
import ConfirmEmailAction from "../../../src/registration/actions/ConfirmEmailAction";
import LoadBoxesAction from "../../../src/box/actions/LoadBoxesAction";
import LoadCategoryTreeAction from "../../../src/category/actions/LoadCategoryTreeAction";
import LoadUserAction from "../../../src/profile/actions/LoadUserAction";
import GetAllUsersAction from "../../../src/admin/actions/GetAllUsersAction";
import LoadNextCardAction from "../../../src/box/actions/LoadNextCardAction";
import LoadNextReinforceCardAction from "../../../src/box/actions/LoadNextReinforceCardAction";
import RouteAction from "../../../src/common/actions/RouteAction";

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
        this.reinforceCard = "reinforceCard";
        this.invalid = "invalid";
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
			new TriggerAction(new LoadBoxesAction()).publish();
			break;
		case this.categories:
			new TriggerAction(new LoadCategoryTreeAction(this.commandData.pathToSelected, this.commandData.selectedCategoryId)).publish();
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
		case this.reinforceCard:
			new TriggerAction(new LoadNextReinforceCardAction(this.commandData.boxId)).publish();
			break;
		case this.invalid:
			new TriggerAction(new RouteAction(this.commandData.hash)).publish();
			break;
		default:
			throw 'RouteChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
