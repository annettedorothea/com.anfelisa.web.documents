/* 
 * Copyright (c) 2020, Annette Pohl, Koblenz, Germany
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.

 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * generated with de.acegen 0.9.7
 *
 */




import CheckUsernameAction from "../../src/registration/actions/CheckUsernameAction";
import UsernameChangedAction from "../../src/registration/actions/UsernameChangedAction";
import EmailChangedAction from "../../src/registration/actions/EmailChangedAction";
import PasswordChangedAction from "../../src/registration/actions/PasswordChangedAction";
import RegisterUserAction from "../../src/registration/actions/RegisterUserAction";
import ConfirmEmailAction from "../../src/registration/actions/ConfirmEmailAction";

export function checkUsername() {
    new CheckUsernameAction().apply();
}

export function usernameChanged(username) {
    new UsernameChangedAction(username).apply();
}

export function emailChanged(email) {
    new EmailChangedAction(email).apply();
}

export function passwordChanged(password, passwordRepetition) {
    new PasswordChangedAction(password, passwordRepetition).apply();
}

export function registerUser(password) {
    new RegisterUserAction(password).apply();
}

export function confirmEmail(username, token) {
    new ConfirmEmailAction(username, token).apply();
}





/******* S.D.G. *******/



