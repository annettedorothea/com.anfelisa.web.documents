import ACEController from "../ace/ACEController";
import InitAction from "../../src/common/actions/InitAction";
import RouteChangedAction from "../../src/common/actions/RouteChangedAction";
import RouteAction from "../../src/common/actions/RouteAction";
import InitialLoginAction from "../../src/common/actions/InitialLoginAction";
import LogoutAction from "../../src/common/actions/LogoutAction";
import DisplayErrorAction from "../../src/common/actions/DisplayErrorAction";
import DisplayErrorAndLogoutAction from "../../src/common/actions/DisplayErrorAndLogoutAction";
import DisplayMessageAction from "../../src/common/actions/DisplayMessageAction";
import ClearToastAction from "../../src/common/actions/ClearToastAction";

export default class ActionFactoryRegistrationCommon {

	static init() {
		ACEController.registerFactory('common.InitAction', (actionData) => new InitAction(actionData, 'common.InitAction'));
		ACEController.registerFactory('common.RouteChangedAction', (actionData) => new RouteChangedAction(actionData, 'common.RouteChangedAction'));
		ACEController.registerFactory('common.RouteAction', (actionData) => new RouteAction(actionData, 'common.RouteAction'));
		ACEController.registerFactory('common.InitialLoginAction', (actionData) => new InitialLoginAction(actionData, 'common.InitialLoginAction'));
		ACEController.registerFactory('common.LogoutAction', (actionData) => new LogoutAction(actionData, 'common.LogoutAction'));
		ACEController.registerFactory('common.DisplayErrorAction', (actionData) => new DisplayErrorAction(actionData, 'common.DisplayErrorAction'));
		ACEController.registerFactory('common.DisplayErrorAndLogoutAction', (actionData) => new DisplayErrorAndLogoutAction(actionData, 'common.DisplayErrorAndLogoutAction'));
		ACEController.registerFactory('common.DisplayMessageAction', (actionData) => new DisplayMessageAction(actionData, 'common.DisplayMessageAction'));
		ACEController.registerFactory('common.ClearToastAction', (actionData) => new ClearToastAction(actionData, 'common.ClearToastAction'));
	}

}

/*       S.D.G.       */
