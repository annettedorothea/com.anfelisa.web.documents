import CheckUsernameAction from "../../src/registration/actions/CheckUsernameAction";
import EmailChangedAction from "../../src/registration/actions/EmailChangedAction";
import PasswordChangedAction from "../../src/registration/actions/PasswordChangedAction";
import RegisterUserAction from "../../src/registration/actions/RegisterUserAction";
import ConfirmEmailAction from "../../src/registration/actions/ConfirmEmailAction";

export function checkUsername(username) {
    new CheckUsernameAction(username).apply();
}

export function emailChanged(email) {
    new EmailChangedAction(email).apply();
}

export function passwordChanged(password, passwordRepetition) {
    new PasswordChangedAction(password, passwordRepetition).apply();
}

export function registerUser(username, password) {
    new RegisterUserAction(username, password).apply();
}

export function confirmEmail(username, token) {
    new ConfirmEmailAction(username, token).apply();
}


/*       S.D.G.       */
