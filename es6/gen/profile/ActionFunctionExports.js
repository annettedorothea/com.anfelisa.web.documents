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

export function openProfile(actionParam) {
    new OpenProfileAction(actionParam).apply();
}

export function saveProfile(actionParam) {
    new SaveProfileAction(actionParam).apply();
}

export function openCourseSelection(actionParam) {
    new OpenCourseSelectionAction(actionParam).apply();
}

export function saveCourseSelection(actionParam) {
    new SaveCourseSelectionAction(actionParam).apply();
}

export function removeCourse(actionParam) {
    new RemoveCourseAction(actionParam).apply();
}

export function saveBox(actionParam) {
    new SaveBoxAction(actionParam).apply();
}

export function deleteBox(actionParam) {
    new DeleteBoxAction(actionParam).apply();
}

export function loadBox(actionParam) {
    new LoadBoxAction(actionParam).apply();
}

export function openBoxCreation(actionParam) {
    new OpenBoxCreationAction(actionParam).apply();
}

export function loadCourses(actionParam) {
    new LoadCoursesAction(actionParam).apply();
}

export function saveBoxConfig(actionParam) {
    new SaveBoxConfigAction(actionParam).apply();
}

export function fillBoxWithCards(actionParam) {
    new FillBoxWithCardsAction(actionParam).apply();
}

export function updatePassword(actionParam) {
    new UpdatePasswordAction(actionParam).apply();
}

export function openChangePassword(actionParam) {
    new OpenChangePasswordAction(actionParam).apply();
}

export function validatePassword(actionParam) {
    new ValidatePasswordAction(actionParam).apply();
}

export function openForgotPassword(actionParam) {
    new OpenForgotPasswordAction(actionParam).apply();
}

export function submitForgotPasswordRequest(actionParam) {
    new SubmitForgotPasswordRequestAction(actionParam).apply();
}

export function openNewPassword(actionParam) {
    new OpenNewPasswordAction(actionParam).apply();
}

export function submitNewPassword(actionParam) {
    new SubmitNewPasswordAction(actionParam).apply();
}

export function openRegistration(actionParam) {
    new OpenRegistrationAction(actionParam).apply();
}

export function submitRegistration(actionParam) {
    new SubmitRegistrationAction(actionParam).apply();
}

export function checkUsername(actionParam) {
    new CheckUsernameAction(actionParam).apply();
}

export function confirmEmail(actionParam) {
    new ConfirmEmailAction(actionParam).apply();
}


/*       S.D.G.       */
