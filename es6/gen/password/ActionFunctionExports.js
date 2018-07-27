import UsernameChangedAction from "../../src/password/actions/UsernameChangedAction";
import ForgotPasswordAction from "../../src/password/actions/ForgotPasswordAction";
import PasswordChangedAction from "../../src/password/actions/PasswordChangedAction";
import ResetPasswordAction from "../../src/password/actions/ResetPasswordAction";

export function usernameChanged(actionData) {
    new UsernameChangedAction(actionData).apply();
}

export function forgotPassword(actionData) {
    new ForgotPasswordAction(actionData).apply();
}

export function passwordChanged(actionData) {
    new PasswordChangedAction(actionData).apply();
}

export function resetPassword(actionData) {
    new ResetPasswordAction(actionData).apply();
}


/*       S.D.G.       */
