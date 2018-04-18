import ACEController from "../ace/ACEController";
import CommonView from "../../src/common/views/CommonView";
import LoginView from "../../src/common/views/LoginView";
import RegistrationView from "../../src/common/views/RegistrationView";
import DashboardView from "../../src/common/views/DashboardView";

export default class EventListenerRegistrationCommon {

	static init() {
		ACEController.registerListener('common.InitLoginEvent', CommonView.initTexts);
		ACEController.registerListener('common.InitLoginEvent', LoginView.render);
		ACEController.registerListener('common.InitRegistrationEvent', CommonView.initTexts);
		ACEController.registerListener('common.InitRegistrationEvent', RegistrationView.render);
		ACEController.registerListener('common.InitDashboardEvent', CommonView.initTexts);
		ACEController.registerListener('common.InitDashboardEvent', CommonView.initUser);
		ACEController.registerListener('common.RouteOkEvent', CommonView.updateHash);
		ACEController.registerListener('common.CheckUsernameAvailableEvent', RegistrationView.usernameAvailable);
		ACEController.registerListener('common.CheckUsernameNotAvailableEvent', RegistrationView.usernameNotAvailable);
		ACEController.registerListener('common.CreateUserOkEvent', CommonView.initUser);
		ACEController.registerListener('common.CreateUserErrorEvent', CommonView.displayError);
		ACEController.registerListener('common.LoginOkEvent', CommonView.initUser);
		ACEController.registerListener('common.LoadDashboardOkEvent', CommonView.initUser);
		ACEController.registerListener('common.LoadDashboardOkEvent', DashboardView.render);
		ACEController.registerListener('common.LoadDashboardUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('common.LoadDashboardUnauthorizedEvent', CommonView.resetUser);
		ACEController.registerListener('common.LogoutOkEvent', CommonView.resetUser);
	}

}

/*       S.D.G.       */
