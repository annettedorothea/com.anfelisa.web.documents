import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RouteChangedLoginEvent from "../../../src/common/events/RouteChangedLoginEvent";
import RouteChangedRegistrationEvent from "../../../src/common/events/RouteChangedRegistrationEvent";
import RouteChangedForgotPasswordEvent from "../../../src/common/events/RouteChangedForgotPasswordEvent";
import RouteChangedResetPasswordEvent from "../../../src/common/events/RouteChangedResetPasswordEvent";
import LoadDashboardAction from "../../../src/common/actions/LoadDashboardAction";
import LoadUserAction from "../../../src/profile/actions/LoadUserAction";
import ConfirmEmailAction from "../../../src/common/actions/ConfirmEmailAction";
import GetAllUsersAction from "../../../src/admin/actions/GetAllUsersAction";

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
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.login:
			promises.push(new RouteChangedLoginEvent(this.commandData).publish());
			break;
		case this.registration:
			promises.push(new RouteChangedRegistrationEvent(this.commandData).publish());
			break;
		case this.dashboard:
			promises.push(new TriggerAction(new LoadDashboardAction(this.commandData)).publish());
			break;
		case this.profile:
			promises.push(new TriggerAction(new LoadUserAction(this.commandData)).publish());
			break;
		case this.forgotPassword:
			promises.push(new RouteChangedForgotPasswordEvent(this.commandData).publish());
			break;
		case this.confirmEmail:
			promises.push(new TriggerAction(new ConfirmEmailAction(this.commandData)).publish());
			break;
		case this.resetPassword:
			promises.push(new RouteChangedResetPasswordEvent(this.commandData).publish());
			break;
		case this.userList:
			promises.push(new TriggerAction(new GetAllUsersAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('RouteChangedCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
