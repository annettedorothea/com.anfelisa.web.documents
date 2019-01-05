import UsernameForgotPasswordChangedAction from "../../src/password/actions/UsernameForgotPasswordChangedAction";
import ForgotPasswordAction from "../../src/password/actions/ForgotPasswordAction";
import PasswordChangedAction from "../../src/password/actions/PasswordChangedAction";
import ResetPasswordAction from "../../src/password/actions/ResetPasswordAction";

export function usernameForgotPasswordChanged(username) {
    new UsernameForgotPasswordChangedAction(username).apply();
}

export function forgotPassword() {
    new ForgotPasswordAction().apply();
}

export function passwordChanged(password, passwordRepetition) {
    new PasswordChangedAction(password, passwordRepetition).apply();
}

export function resetPassword(password, token) {
    new ResetPasswordAction(password, token).apply();
}


/*       S.D.G.       */
