'use strict';

class AbstractInitCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "InitCommand");
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
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPublicCoursesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderHomeAction(this.commandData)).publish());
        	break;
        case this.publicLessons:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPublicLessonsAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
        	break;
        case this.publicTests:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPublicTestsAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
        	break;
        case this.publicTest:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPublicTestAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
        	break;
        case this.privateCourses:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadStatisticsAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
        	break;
        case this.privateLessons:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPrivateLessonsAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
        	break;
        case this.privateTests:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPrivateTestsAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
        	break;
        case this.privateTest:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPrivateTestAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
        	break;
        case this.result:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadResultAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
        	break;
        case this.box:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadNextCardAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
        	break;
        case this.profile:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new OpenProfileAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
        	break;
        case this.profileCourses:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new OpenCourseSelectionAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
        	break;
        case this.profileBoxCreate:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new OpenBoxCreationAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
        	break;
        case this.profileBoxEdit:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new LoadBoxAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
        	break;
        case this.profileCourseAdd:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new LoadCoursesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
        	break;
        case this.profilePassword:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new OpenChangePasswordAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
        	break;
        case this.forgotPassword:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPublicCoursesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new OpenForgotPasswordAction(this.commandData)).publish());
        	break;
        case this.newPassword:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPublicCoursesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new OpenNewPasswordAction(this.commandData)).publish());
        	break;
        case this.register:
        	promises.push(new InitOKEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ReadPublicCoursesAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new OpenRegistrationAction(this.commandData)).publish());
        	break;
        case this.confirmEmail:
        	promises.push(new TriggerAction(new ConfirmEmailAction(this.commandData)).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
