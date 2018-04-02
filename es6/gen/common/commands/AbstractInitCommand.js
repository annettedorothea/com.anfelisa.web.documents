import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import InitPublicCoursesEvent from "../../../src/common/events/InitPublicCoursesEvent";
import InitPublicLessonsEvent from "../../../src/common/events/InitPublicLessonsEvent";
import InitPublicTestsEvent from "../../../src/common/events/InitPublicTestsEvent";
import InitPublicTestEvent from "../../../src/common/events/InitPublicTestEvent";
import InitPrivateCoursesEvent from "../../../src/common/events/InitPrivateCoursesEvent";
import InitPrivateLessonsEvent from "../../../src/common/events/InitPrivateLessonsEvent";
import InitPrivateTestsEvent from "../../../src/common/events/InitPrivateTestsEvent";
import InitPrivateTestEvent from "../../../src/common/events/InitPrivateTestEvent";
import InitResultEvent from "../../../src/common/events/InitResultEvent";
import InitBoxEvent from "../../../src/common/events/InitBoxEvent";
import InitReinforceEvent from "../../../src/common/events/InitReinforceEvent";
import InitProfileEvent from "../../../src/common/events/InitProfileEvent";
import InitProfileCoursesEvent from "../../../src/common/events/InitProfileCoursesEvent";
import InitProfileBoxCreateEvent from "../../../src/common/events/InitProfileBoxCreateEvent";
import InitProfileBoxEditEvent from "../../../src/common/events/InitProfileBoxEditEvent";
import InitProfileCourseAddEvent from "../../../src/common/events/InitProfileCourseAddEvent";
import InitProfilePasswordEvent from "../../../src/common/events/InitProfilePasswordEvent";
import InitForgotPasswordEvent from "../../../src/common/events/InitForgotPasswordEvent";
import InitNewPasswordEvent from "../../../src/common/events/InitNewPasswordEvent";
import InitRegisterEvent from "../../../src/common/events/InitRegisterEvent";
import ReadPublicCoursesAction from "../../../src/navigation/actions/ReadPublicCoursesAction";
import RenderLoginAction from "../../../src/common/actions/RenderLoginAction";
import RenderHomeAction from "../../../src/common/actions/RenderHomeAction";
import ReadPublicLessonsAction from "../../../src/navigation/actions/ReadPublicLessonsAction";
import ReadPublicTestsAction from "../../../src/navigation/actions/ReadPublicTestsAction";
import ReadPublicTestAction from "../../../src/navigation/actions/ReadPublicTestAction";
import ReadPrivateCoursesAction from "../../../src/navigation/actions/ReadPrivateCoursesAction";
import ReadStatisticsAction from "../../../src/navigation/actions/ReadStatisticsAction";
import ReadBoxesAction from "../../../src/navigation/actions/ReadBoxesAction";
import RenderLogoutAction from "../../../src/common/actions/RenderLogoutAction";
import ReadPrivateLessonsAction from "../../../src/navigation/actions/ReadPrivateLessonsAction";
import ReadPrivateTestsAction from "../../../src/navigation/actions/ReadPrivateTestsAction";
import ReadPrivateTestAction from "../../../src/navigation/actions/ReadPrivateTestAction";
import ReadResultAction from "../../../src/navigation/actions/ReadResultAction";
import ReadNextCardAction from "../../../src/navigation/actions/ReadNextCardAction";
import ReadReinforceCardsAction from "../../../src/navigation/actions/ReadReinforceCardsAction";
import OpenProfileAction from "../../../src/profile/actions/OpenProfileAction";
import OpenCourseSelectionAction from "../../../src/profile/actions/OpenCourseSelectionAction";
import OpenBoxCreationAction from "../../../src/profile/actions/OpenBoxCreationAction";
import LoadBoxAction from "../../../src/profile/actions/LoadBoxAction";
import LoadCoursesAction from "../../../src/profile/actions/LoadCoursesAction";
import OpenChangePasswordAction from "../../../src/profile/actions/OpenChangePasswordAction";
import OpenForgotPasswordAction from "../../../src/profile/actions/OpenForgotPasswordAction";
import OpenNewPasswordAction from "../../../src/profile/actions/OpenNewPasswordAction";
import OpenRegistrationAction from "../../../src/profile/actions/OpenRegistrationAction";
import ConfirmEmailAction from "../../../src/profile/actions/ConfirmEmailAction";

export default class AbstractInitCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.InitCommand");
        this.publicCourses = "publicCourses";
        this.publicLessons = "publicLessons";
        this.publicTests = "publicTests";
        this.publicTest = "publicTest";
        this.privateCourses = "privateCourses";
        this.privateLessons = "privateLessons";
        this.privateTests = "privateTests";
        this.privateTest = "privateTest";
        this.result = "result";
        this.box = "box";
        this.reinforce = "reinforce";
        this.profile = "profile";
        this.profileCourses = "profileCourses";
        this.profileBoxCreate = "profileBoxCreate";
        this.profileBoxEdit = "profileBoxEdit";
        this.profileCourseAdd = "profileCourseAdd";
        this.profilePassword = "profilePassword";
        this.forgotPassword = "forgotPassword";
        this.newPassword = "newPassword";
        this.register = "register";
        this.confirmEmail = "confirmEmail";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.publicCourses:
			promises.push(new InitPublicCoursesEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPublicCoursesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderHomeAction(this.commandData)).publish());
			break;
		case this.publicLessons:
			promises.push(new InitPublicLessonsEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPublicLessonsAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
			break;
		case this.publicTests:
			promises.push(new InitPublicTestsEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPublicTestsAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
			break;
		case this.publicTest:
			promises.push(new InitPublicTestEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPublicTestAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
			break;
		case this.privateCourses:
			promises.push(new InitPrivateCoursesEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadStatisticsAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
			break;
		case this.privateLessons:
			promises.push(new InitPrivateLessonsEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPrivateLessonsAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
			break;
		case this.privateTests:
			promises.push(new InitPrivateTestsEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPrivateTestsAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
			break;
		case this.privateTest:
			promises.push(new InitPrivateTestEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPrivateTestAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
			break;
		case this.result:
			promises.push(new InitResultEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadResultAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
			break;
		case this.box:
			promises.push(new InitBoxEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadNextCardAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
			break;
		case this.reinforce:
			promises.push(new InitReinforceEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadReinforceCardsAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
			break;
		case this.profile:
			promises.push(new InitProfileEvent(this.commandData).publish());
			promises.push(new TriggerAction(new OpenProfileAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
			break;
		case this.profileCourses:
			promises.push(new InitProfileCoursesEvent(this.commandData).publish());
			promises.push(new TriggerAction(new OpenCourseSelectionAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
			break;
		case this.profileBoxCreate:
			promises.push(new InitProfileBoxCreateEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new OpenBoxCreationAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
			break;
		case this.profileBoxEdit:
			promises.push(new InitProfileBoxEditEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new LoadBoxAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
			break;
		case this.profileCourseAdd:
			promises.push(new InitProfileCourseAddEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new LoadCoursesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
			break;
		case this.profilePassword:
			promises.push(new InitProfilePasswordEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new OpenChangePasswordAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
			break;
		case this.forgotPassword:
			promises.push(new InitForgotPasswordEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPublicCoursesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
			promises.push(new TriggerAction(new OpenForgotPasswordAction(this.commandData)).publish());
			break;
		case this.newPassword:
			promises.push(new InitNewPasswordEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPublicCoursesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
			promises.push(new TriggerAction(new OpenNewPasswordAction(this.commandData)).publish());
			break;
		case this.register:
			promises.push(new InitRegisterEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReadPublicCoursesAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
			promises.push(new TriggerAction(new OpenRegistrationAction(this.commandData)).publish());
			break;
		case this.confirmEmail:
			promises.push(new TriggerAction(new ConfirmEmailAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('InitCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
