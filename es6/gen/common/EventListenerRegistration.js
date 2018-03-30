import ACEController from "../ace/ACEController";
import CommonView from "../../src/common/views/CommonView";
import ErrorView from "../../src/common/views/ErrorView";
import BoxesView from "../../src/navigation/views/BoxesView";
import TestView from "../../src/common/views/TestView";
import ValidationView from "../../src/common/views/ValidationView";
import ReallyDeleteDialogView from "../../src/common/views/ReallyDeleteDialogView";
import HeaderView from "../../src/common/views/HeaderView";
import ContentView from "../../src/navigation/views/ContentView";

export default class EventListenerRegistrationCommon {

	static init() {
		ACEController.registerListener('common.RouteOkEvent', CommonView.updateHash);
		ACEController.registerListener('common.RouteHomeOkEvent', CommonView.updateHash);
		ACEController.registerListener('common.LoginOkEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('common.LoginUnauthorizedEvent', ErrorView.renderError);
		ACEController.registerListener('common.LogoutOkEvent', CommonView.removeUserFromLocalStorage);
		ACEController.registerListener('common.LogoutOkEvent', BoxesView.hideBoxes);
		ACEController.registerListener('common.SaveResultNoCredentialsEvent', TestView.renderResult);
		ACEController.registerListener('common.ValidateRequiredFieldFieldEmptyEvent', ValidationView.fieldEmpty);
		ACEController.registerListener('common.ValidateRequiredFieldFieldNotEmptyEvent', ValidationView.fieldNotEmpty);
		ACEController.registerListener('common.OpenReallyDeleteDialogRemoveCourseFromUserEvent', ReallyDeleteDialogView.displayRemoveCourseFromUserDialog);
		ACEController.registerListener('common.OpenReallyDeleteDialogDeleteBoxEvent', ReallyDeleteDialogView.displayDeleteBoxDialog);
		ACEController.registerListener('common.OpenReallyDeleteDialogRemovedCardEvent', ReallyDeleteDialogView.displayRemoveCardFromBoxDialog);
		ACEController.registerListener('common.SwitchLanguageOkEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.RenderLoginOkEvent', HeaderView.renderLogin);
		ACEController.registerListener('common.RenderLogoutOkEvent', HeaderView.renderLogout);
		ACEController.registerListener('common.RenderHomeOkEvent', ContentView.renderPublicCourses);
	}

}

/*       S.D.G.       */
