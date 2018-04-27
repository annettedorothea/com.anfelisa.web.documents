import ACEController from "../ace/ACEController";
import InitAction from "../../src/common/actions/InitAction";
import RouteChangedAction from "../../src/common/actions/RouteChangedAction";
import RouteAction from "../../src/common/actions/RouteAction";
import CheckUsernameAction from "../../src/common/actions/CheckUsernameAction";
import CreateUserAction from "../../src/common/actions/CreateUserAction";
import LoginAction from "../../src/common/actions/LoginAction";
import LoadDashboardAction from "../../src/common/actions/LoadDashboardAction";
import LogoutAction from "../../src/common/actions/LogoutAction";

export default class ActionFactoryRegistrationCommon {

	static init() {
		ACEController.registerFactory('common.InitAction', (actionParam) => new InitAction(actionParam));
		ACEController.registerFactory('common.RouteChangedAction', (actionParam) => new RouteChangedAction(actionParam));
		ACEController.registerFactory('common.RouteAction', (actionParam) => new RouteAction(actionParam));
		ACEController.registerFactory('common.CheckUsernameAction', (actionParam) => new CheckUsernameAction(actionParam));
		ACEController.registerFactory('common.CreateUserAction', (actionParam) => new CreateUserAction(actionParam));
		ACEController.registerFactory('common.LoginAction', (actionParam) => new LoginAction(actionParam));
		ACEController.registerFactory('common.LoadDashboardAction', (actionParam) => new LoadDashboardAction(actionParam));
		ACEController.registerFactory('common.LogoutAction', (actionParam) => new LogoutAction(actionParam));
	}

}

/*       S.D.G.       */
