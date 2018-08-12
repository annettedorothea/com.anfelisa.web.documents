import CheckUsernameAction from "../../src/registration/actions/CheckUsernameAction";
import EmailChangedAction from "../../src/registration/actions/EmailChangedAction";
import PasswordChangedAction from "../../src/registration/actions/PasswordChangedAction";
import RegisterUserAction from "../../src/registration/actions/RegisterUserAction";
import ConfirmEmailAction from "../../src/registration/actions/ConfirmEmailAction";

export function checkUsername(actionData) {
    new CheckUsernameAction(actionData).apply();
}

export function emailChanged(actionData) {
    new EmailChangedAction(actionData).apply();
}

export function passwordChanged(actionData) {
    new PasswordChangedAction(actionData).apply();
}

export function registerUser(actionData) {
    new RegisterUserAction(actionData).apply();
}

export function confirmEmail(actionData) {
    new ConfirmEmailAction(actionData).apply();
}


/*       S.D.G.       */
