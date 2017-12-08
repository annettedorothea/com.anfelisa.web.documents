import ACEController from "../ace/ACEController";
import OpenProfileAction from "../../src/profile/actions/OpenProfileAction";
import SaveProfileAction from "../../src/profile/actions/SaveProfileAction";
import OpenCourseSelectionAction from "../../src/profile/actions/OpenCourseSelectionAction";
import SaveCourseSelectionAction from "../../src/profile/actions/SaveCourseSelectionAction";
import RemoveCourseAction from "../../src/profile/actions/RemoveCourseAction";
import SaveBoxAction from "../../src/profile/actions/SaveBoxAction";
import DeleteBoxAction from "../../src/profile/actions/DeleteBoxAction";
import LoadBoxAction from "../../src/profile/actions/LoadBoxAction";
import OpenBoxCreationAction from "../../src/profile/actions/OpenBoxCreationAction";
import LoadCoursesAction from "../../src/profile/actions/LoadCoursesAction";
import SaveBoxConfigAction from "../../src/profile/actions/SaveBoxConfigAction";
import FillBoxWithCardsAction from "../../src/profile/actions/FillBoxWithCardsAction";
import UpdatePasswordAction from "../../src/profile/actions/UpdatePasswordAction";
import OpenChangePasswordAction from "../../src/profile/actions/OpenChangePasswordAction";
import ValidatePasswordAction from "../../src/profile/actions/ValidatePasswordAction";
import OpenForgotPasswordAction from "../../src/profile/actions/OpenForgotPasswordAction";
import SubmitForgotPasswordRequestAction from "../../src/profile/actions/SubmitForgotPasswordRequestAction";
import OpenNewPasswordAction from "../../src/profile/actions/OpenNewPasswordAction";
import SubmitNewPasswordAction from "../../src/profile/actions/SubmitNewPasswordAction";
import OpenRegistrationAction from "../../src/profile/actions/OpenRegistrationAction";
import SubmitRegistrationAction from "../../src/profile/actions/SubmitRegistrationAction";
import CheckUsernameAction from "../../src/profile/actions/CheckUsernameAction";
import ConfirmEmailAction from "../../src/profile/actions/ConfirmEmailAction";

export default class ActionFactoryRegistrationProfile {

	static init() {
		ACEController.registerFactory('profile.OpenProfileAction', (actionParam) => new OpenProfileAction(actionParam));
		ACEController.registerFactory('profile.SaveProfileAction', (actionParam) => new SaveProfileAction(actionParam));
		ACEController.registerFactory('profile.OpenCourseSelectionAction', (actionParam) => new OpenCourseSelectionAction(actionParam));
		ACEController.registerFactory('profile.SaveCourseSelectionAction', (actionParam) => new SaveCourseSelectionAction(actionParam));
		ACEController.registerFactory('profile.RemoveCourseAction', (actionParam) => new RemoveCourseAction(actionParam));
		ACEController.registerFactory('profile.SaveBoxAction', (actionParam) => new SaveBoxAction(actionParam));
		ACEController.registerFactory('profile.DeleteBoxAction', (actionParam) => new DeleteBoxAction(actionParam));
		ACEController.registerFactory('profile.LoadBoxAction', (actionParam) => new LoadBoxAction(actionParam));
		ACEController.registerFactory('profile.OpenBoxCreationAction', (actionParam) => new OpenBoxCreationAction(actionParam));
		ACEController.registerFactory('profile.LoadCoursesAction', (actionParam) => new LoadCoursesAction(actionParam));
		ACEController.registerFactory('profile.SaveBoxConfigAction', (actionParam) => new SaveBoxConfigAction(actionParam));
		ACEController.registerFactory('profile.FillBoxWithCardsAction', (actionParam) => new FillBoxWithCardsAction(actionParam));
		ACEController.registerFactory('profile.UpdatePasswordAction', (actionParam) => new UpdatePasswordAction(actionParam));
		ACEController.registerFactory('profile.OpenChangePasswordAction', (actionParam) => new OpenChangePasswordAction(actionParam));
		ACEController.registerFactory('profile.ValidatePasswordAction', (actionParam) => new ValidatePasswordAction(actionParam));
		ACEController.registerFactory('profile.OpenForgotPasswordAction', (actionParam) => new OpenForgotPasswordAction(actionParam));
		ACEController.registerFactory('profile.SubmitForgotPasswordRequestAction', (actionParam) => new SubmitForgotPasswordRequestAction(actionParam));
		ACEController.registerFactory('profile.OpenNewPasswordAction', (actionParam) => new OpenNewPasswordAction(actionParam));
		ACEController.registerFactory('profile.SubmitNewPasswordAction', (actionParam) => new SubmitNewPasswordAction(actionParam));
		ACEController.registerFactory('profile.OpenRegistrationAction', (actionParam) => new OpenRegistrationAction(actionParam));
		ACEController.registerFactory('profile.SubmitRegistrationAction', (actionParam) => new SubmitRegistrationAction(actionParam));
		ACEController.registerFactory('profile.CheckUsernameAction', (actionParam) => new CheckUsernameAction(actionParam));
		ACEController.registerFactory('profile.ConfirmEmailAction', (actionParam) => new ConfirmEmailAction(actionParam));
	}

}

/*       S.D.G.       */
