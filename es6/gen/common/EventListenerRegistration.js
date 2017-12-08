import ACEController from "../ace/ACEController";
import CommonView from "../../src/common/views/CommonView";
import ErrorView from "../../src/common/views/ErrorView";
import MessageView from "../../src/common/views/MessageView";
import BoxesView from "../../src/navigation/views/BoxesView";
import TestView from "../../src/common/views/TestView";
import ValidationView from "../../src/common/views/ValidationView";
import ReallyDeleteDialogView from "../../src/common/views/ReallyDeleteDialogView";
import HeaderView from "../../src/common/views/HeaderView";
import ContentView from "../../src/navigation/views/ContentView";

export default class EventListenerRegistrationCommon {

	static init() {
	    	ACEController.registerListener('common.InitOKEvent', CommonView.initLanguageInLocalStorage);
	    	ACEController.registerListener('common.ServerErrorEvent', ErrorView.renderServerError);
	    	ACEController.registerListener('common.ErrorEvent', ErrorView.renderError);
	    	ACEController.registerListener('common.MessageEvent', MessageView.renderMessage);
	    	ACEController.registerListener('common.UpdateHashEvent', CommonView.updateHash);
	    	ACEController.registerListener('common.UserLoggedInEvent', CommonView.initUserInLocalStorage);
	    	ACEController.registerListener('common.UserLoggedOutEvent', CommonView.removeUserFromLocalStorage);
	    	ACEController.registerListener('common.UserLoggedOutEvent', BoxesView.hideBoxes);
	    	ACEController.registerListener('common.RenderResultEvent', TestView.renderResult);
	    	ACEController.registerListener('common.FieldEmptyEvent', ValidationView.fieldEmpty);
	    	ACEController.registerListener('common.FieldNotEmptyEvent', ValidationView.fieldNotEmpty);
	    	ACEController.registerListener('common.DisplayRemoveCourseFromUserDialogEvent', ReallyDeleteDialogView.displayRemoveCourseFromUserDialog);
	    	ACEController.registerListener('common.DisplayDeleteBoxDialogEvent', ReallyDeleteDialogView.displayDeleteBoxDialog);
	    	ACEController.registerListener('common.DisplayRemoveCardFromBoxDialogEvent', ReallyDeleteDialogView.displayRemoveCardFromBoxDialog);
	    	ACEController.registerListener('common.SwitchLanguageEvent', CommonView.initLanguageInLocalStorage);
	    	ACEController.registerListener('common.RenderLoginEvent', HeaderView.renderLogin);
	    	ACEController.registerListener('common.RenderLogoutEvent', HeaderView.renderLogout);
	    	ACEController.registerListener('common.RenderHomeEvent', ContentView.renderPublicCourses);
	}

}

/*       S.D.G.       */
