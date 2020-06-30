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




import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import WantedLanguageChangedOkEvent from "../../../gen/box/events/WantedLanguageChangedOkEvent";

export default class AbstractWantedLanguageChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.WantedLanguageChangedCommand");
        this.ok = "ok";
        this.commandData.givenLanguage = AppState.get_boxSettingsView_givenLanguage;
        this.commandData.dictionaryLookup = AppState.get_boxSettingsView_dictionaryLookup;
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new WantedLanguageChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'WantedLanguageChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



