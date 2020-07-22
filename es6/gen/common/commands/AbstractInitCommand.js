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
 * generated with de.acegen 0.9.8
 *
 */




import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import InitUserEvent from "../../../gen/common/events/InitUserEvent";
import InitNoUserEvent from "../../../gen/common/events/InitNoUserEvent";
import InitialLoginAction from "../../../src/common/actions/InitialLoginAction";
import RouteChangedAction from "../../../src/common/actions/RouteChangedAction";

export default class AbstractInitCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.InitCommand");
        this.user = "user";
        this.noUser = "noUser";
        this.commandData.username = AppState.get_username();
        this.commandData.password = AppState.get_password();
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.user:
			new InitUserEvent(this.commandData).publish();
			new TriggerAction(new InitialLoginAction()).publish();
			break;
		case this.noUser:
			new InitNoUserEvent(this.commandData).publish();
			new TriggerAction(new RouteChangedAction()).publish();
			break;
		default:
			throw 'InitCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



