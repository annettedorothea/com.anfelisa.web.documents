import ACEController from "../ace/ACEController";
import InitAction from "../../src/common/actions/InitAction";
import RouteAction from "../../src/common/actions/RouteAction";
import RouteHomeAction from "../../src/common/actions/RouteHomeAction";
import LoginAction from "../../src/common/actions/LoginAction";
import LogoutAction from "../../src/common/actions/LogoutAction";
import SaveResultAction from "../../src/common/actions/SaveResultAction";
import ValidateRequiredFieldAction from "../../src/common/actions/ValidateRequiredFieldAction";
import OpenReallyDeleteDialogAction from "../../src/common/actions/OpenReallyDeleteDialogAction";
import CloseAllDialogsAction from "../../src/common/actions/CloseAllDialogsAction";
import SwitchLanguageAction from "../../src/common/actions/SwitchLanguageAction";
import GetRoleAction from "../../src/common/actions/GetRoleAction";

export default class ActionFactoryRegistrationCommon {

	static init() {
		ACEController.registerFactory('common.InitAction', (actionParam) => new InitAction(actionParam));
		ACEController.registerFactory('common.RouteAction', (actionParam) => new RouteAction(actionParam));
		ACEController.registerFactory('common.RouteHomeAction', (actionParam) => new RouteHomeAction(actionParam));
		ACEController.registerFactory('common.LoginAction', (actionParam) => new LoginAction(actionParam));
		ACEController.registerFactory('common.LogoutAction', (actionParam) => new LogoutAction(actionParam));
		ACEController.registerFactory('common.SaveResultAction', (actionParam) => new SaveResultAction(actionParam));
		ACEController.registerFactory('common.ValidateRequiredFieldAction', (actionParam) => new ValidateRequiredFieldAction(actionParam));
		ACEController.registerFactory('common.OpenReallyDeleteDialogAction', (actionParam) => new OpenReallyDeleteDialogAction(actionParam));
		ACEController.registerFactory('common.CloseAllDialogsAction', (actionParam) => new CloseAllDialogsAction(actionParam));
		ACEController.registerFactory('common.SwitchLanguageAction', (actionParam) => new SwitchLanguageAction(actionParam));
		ACEController.registerFactory('common.GetRoleAction', (actionParam) => new GetRoleAction(actionParam));
	}

}

/*       S.D.G.       */
