import ACEController from "../ace/ACEController";
import CommonView from "../../src/common/views/CommonView";
import ContentView from "../../src/navigation/views/ContentView";
import HeaderView from "../../src/common/views/HeaderView";
import BoxesView from "../../src/navigation/views/BoxesView";
import ErrorView from "../../src/common/views/ErrorView";
import TestView from "../../src/common/views/TestView";
import ValidationView from "../../src/common/views/ValidationView";
import ReallyDeleteDialogView from "../../src/common/views/ReallyDeleteDialogView";

export default class EventListenerRegistrationCommon {

	static init() {
		ACEController.registerListener('common.InitPublicCoursesEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitPublicCoursesEvent', ContentView.renderPublicCourses);
		ACEController.registerListener('common.InitPublicCoursesEvent', HeaderView.renderLogin);
		ACEController.registerListener('common.InitPublicCoursesEvent', BoxesView.hideBoxes);
		ACEController.registerListener('common.InitPublicLessonsEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitPublicLessonsEvent', HeaderView.renderLogin);
		ACEController.registerListener('common.InitPublicLessonsEvent', BoxesView.hideBoxes);
		ACEController.registerListener('common.InitPublicTestsEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitPublicTestsEvent', HeaderView.renderLogin);
		ACEController.registerListener('common.InitPublicTestsEvent', BoxesView.hideBoxes);
		ACEController.registerListener('common.InitPublicTestEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitPublicTestEvent', HeaderView.renderLogin);
		ACEController.registerListener('common.InitPublicTestEvent', BoxesView.hideBoxes);
		ACEController.registerListener('common.InitForgotPasswordEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitForgotPasswordEvent', HeaderView.renderLogin);
		ACEController.registerListener('common.InitForgotPasswordEvent', BoxesView.hideBoxes);
		ACEController.registerListener('common.InitNewPasswordEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitNewPasswordEvent', HeaderView.renderLogin);
		ACEController.registerListener('common.InitNewPasswordEvent', BoxesView.hideBoxes);
		ACEController.registerListener('common.InitRegisterEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitRegisterEvent', HeaderView.renderLogin);
		ACEController.registerListener('common.InitRegisterEvent', BoxesView.hideBoxes);
		ACEController.registerListener('common.InitPrivateCoursesEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitPrivateCoursesEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('common.InitPrivateLessonsEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitPrivateLessonsEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('common.InitPrivateTestsEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitPrivateTestsEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('common.InitPrivateTestEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitPrivateTestEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('common.InitResultEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitResultEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('common.InitBoxEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitBoxEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('common.InitReinforceEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitReinforceEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('common.InitProfileEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitProfileEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('common.InitProfileCoursesEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitProfileCoursesEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('common.InitProfileBoxCreateEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitProfileBoxCreateEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('common.InitProfileBoxEditEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitProfileBoxEditEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('common.InitProfileCourseAddEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitProfileCourseAddEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('common.InitProfilePasswordEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitProfilePasswordEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('common.InitAdminEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.InitAdminEvent', CommonView.initUserInLocalStorage);
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
		ACEController.registerListener('common.OpenReallyDeleteDialogDeleteUserEvent', ReallyDeleteDialogView.displayDeleteUserDialog);
		ACEController.registerListener('common.SwitchLanguageOkEvent', CommonView.initLanguageInLocalStorage);
		ACEController.registerListener('common.GetRoleOkEvent', CommonView.initRoleInLocalStorage);
		ACEController.registerListener('common.GetRoleOkEvent', HeaderView.renderLogout);
		ACEController.registerListener('common.GetRoleUnauthorizedEvent', ErrorView.renderError);
	}

}

/*       S.D.G.       */
