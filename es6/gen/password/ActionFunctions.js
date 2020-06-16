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
 */




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

export function resetPassword(password) {
    new ResetPasswordAction(password).apply();
}





/******* S.D.G. *******/



