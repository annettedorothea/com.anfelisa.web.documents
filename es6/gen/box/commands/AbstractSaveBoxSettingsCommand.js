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
 * generated with de.acegen 0.9.2
 *
 */




import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import ACEController from "../../ace/ACEController";
import * as AppState from "../../ace/AppState";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractSaveBoxSettingsCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.SaveBoxSettingsCommand");
        this.ok = "ok";
        this.commandData.boxId = AppState.get_boxSettingsView_boxId();
        this.commandData.maxInterval = AppState.get_boxSettingsView_maxInterval();
        this.commandData.maxCardsPerDay = AppState.get_boxSettingsView_maxCardsPerDay();
        this.commandData.categoryId = AppState.get_boxSettingsView_categoryId();
        this.commandData.categoryName = AppState.get_boxSettingsView_categoryName();
        this.commandData.dictionaryLookup = AppState.get_boxSettingsView_dictionaryLookup();
        this.commandData.givenLanguage = AppState.get_boxSettingsView_givenLanguage();
        this.commandData.wantedLanguage = AppState.get_boxSettingsView_wantedLanguage();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new RouteAction(this.commandData.hash)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SaveBoxSettingsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		uuid : this.commandData.uuid,
	    		maxInterval : this.commandData.maxInterval,
	    		maxCardsPerDay : this.commandData.maxCardsPerDay,
	    		boxId : this.commandData.boxId,
	    		categoryId : this.commandData.categoryId,
	    		categoryName : this.commandData.categoryName,
	    		dictionaryLookup : this.commandData.dictionaryLookup,
	    		givenLanguage : this.commandData.givenLanguage,
	    		wantedLanguage : this.commandData.wantedLanguage
	    	};
	
			this.httpPut(`/${Utils.getRootPath()}/box/update?uuid=${this.commandData.uuid}`, true, payload).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



