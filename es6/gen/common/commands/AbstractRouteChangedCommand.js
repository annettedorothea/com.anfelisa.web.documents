import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RouteChangedLoginEvent from "../../../src/common/events/RouteChangedLoginEvent";
import RouteChangedRegistrationEvent from "../../../src/common/events/RouteChangedRegistrationEvent";
import RouteChangedDashboardEvent from "../../../src/common/events/RouteChangedDashboardEvent";
import RouteChangedForgotPasswordEvent from "../../../src/common/events/RouteChangedForgotPasswordEvent";
import RouteChangedResetPasswordEvent from "../../../src/common/events/RouteChangedResetPasswordEvent";
import LoadBoxesAction from "../../../src/box/actions/LoadBoxesAction";
import LoadUserAction from "../../../src/profile/actions/LoadUserAction";
import ConfirmEmailAction from "../../../src/common/actions/ConfirmEmailAction";
import GetAllUsersAction from "../../../src/admin/actions/GetAllUsersAction";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";
import LoadRootCategoriesAction from "../../../src/box/actions/LoadRootCategoriesAction";

export default class AbstractRouteChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.RouteChangedCommand");
        this.login = "login";
        this.registration = "registration";
        this.dashboard = "dashboard";
        this.profile = "profile";
        this.forgotPassword = "forgotPassword";
        this.confirmEmail = "confirmEmail";
        this.resetPassword = "resetPassword";
        this.userList = "userList";
        this.categories = "categories";
        this.createBox = "createBox";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.login:
			new RouteChangedLoginEvent(this.commandData).publish();
			break;
		case this.registration:
			new RouteChangedRegistrationEvent(this.commandData).publish();
			break;
		case this.dashboard:
			new RouteChangedDashboardEvent(this.commandData).publish();
			new TriggerAction(new LoadBoxesAction(this.commandData)).publish();
			break;
		case this.profile:
			new TriggerAction(new LoadUserAction(this.commandData)).publish();
			break;
		case this.forgotPassword:
			new RouteChangedForgotPasswordEvent(this.commandData).publish();
			break;
		case this.confirmEmail:
			new TriggerAction(new ConfirmEmailAction(this.commandData)).publish();
			break;
		case this.resetPassword:
			new RouteChangedResetPasswordEvent(this.commandData).publish();
			break;
		case this.userList:
			new TriggerAction(new GetAllUsersAction(this.commandData)).publish();
			break;
		case this.categories:
			new TriggerAction(new LoadCategoriesAction(this.commandData)).publish();
			break;
		case this.createBox:
			new TriggerAction(new LoadRootCategoriesAction(this.commandData)).publish();
			break;
		default:
			throw 'RouteChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
