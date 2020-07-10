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
 * generated with de.acegen 0.9.6
 *
 */




import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import ACEController from "../../ace/ACEController";
import * as AppState from "../../ace/AppState";
import DisplayMessageAction from "../../../src/common/actions/DisplayMessageAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractForgotPasswordCommand extends Command {
    constructor(commandData) {
        super(commandData, "password.ForgotPasswordCommand");
        this.ok = "ok";
        this.commandData.language = AppState.get_language();
        this.commandData.username = AppState.get_forgotPasswordView_username();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new DisplayMessageAction(this.commandData.messageKey)).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData.hash)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ForgotPasswordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		uuid : this.commandData.uuid,
	    		username : this.commandData.username,
	    		language : this.commandData.language
	    	};
	
			this.httpPost(`/${Utils.getRootPath()}/users/forgot-password?uuid=${this.commandData.uuid}`, false, payload).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



