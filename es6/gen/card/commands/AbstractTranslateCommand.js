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




import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import ACEController from "../../ace/ACEController";
import * as AppState from "../../ace/AppState";
import TranslateWantedFetchedEvent from "../../../gen/card/events/TranslateWantedFetchedEvent";
import TranslateGivenFetchedEvent from "../../../gen/card/events/TranslateGivenFetchedEvent";
import SearchDuplicateCardsAction from "../../../src/card/actions/SearchDuplicateCardsAction";

export default class AbstractTranslateCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.TranslateCommand");
        this.wantedFetched = "wantedFetched";
        this.givenFetched = "givenFetched";
        this.error = "error";
        this.empty = "empty";
        this.targetNotEmtpy = "targetNotEmtpy";
        this.commandData.naturalInputOrder = AppState.get_authorView_cardView_naturalInputOrder();
        this.commandData.given = AppState.get_authorView_cardView_newCard_given();
        this.commandData.wanted = AppState.get_authorView_cardView_newCard_wanted();
        this.commandData.givenLanguage = AppState.get_authorView_categoryTree_selectedCategory_givenLanguage();
        this.commandData.wantedLanguage = AppState.get_authorView_categoryTree_selectedCategory_wantedLanguage();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.wantedFetched:
			promises.push(new TranslateWantedFetchedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new SearchDuplicateCardsAction()).publish());
			break;
		case this.givenFetched:
			promises.push(new TranslateGivenFetchedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new SearchDuplicateCardsAction()).publish());
			break;
		case this.error:
			break;
		case this.empty:
			break;
		case this.targetNotEmtpy:
			break;
		default:
			return new Promise((resolve, reject) => {reject('TranslateCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	
			this.httpGet(`/${Utils.getRootPath()}/card/translation?uuid=${this.commandData.uuid}&sourceValue=${this.commandData.sourceValue}&sourceLanguage=${this.commandData.sourceLanguage}&targetLanguage=${this.commandData.targetLanguage}`, true).then((data) => {
				this.commandData.targetValue = data.targetValue;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



