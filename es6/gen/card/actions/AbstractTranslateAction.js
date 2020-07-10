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




import Action from "../../ace/AsynchronousAction";
import TranslateCommand from "../../../src/card/commands/TranslateCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractTranslateAction extends Action {

    constructor() {
        super({}, 'card.TranslateAction');
		this.postCall = this.postCall.bind(this);
		}
		
	getCommand() {
		return new TranslateCommand(this.actionData);
	}

	preCall() {
		AppState.set_authorView_cardView_newCard_displayTranslateSpinner({displayTranslateSpinner: true});
	}
	
	postCall() {
		AppState.set_authorView_cardView_newCard_displayTranslateSpinner({displayTranslateSpinner: false});
	}

}




/******* S.D.G. *******/



