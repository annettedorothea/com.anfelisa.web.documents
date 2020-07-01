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




import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import ACEController from "../../ace/ACEController";
import * as AppState from "../../ace/AppState";
import LoadCardsOkEvent from "../../../gen/card/events/LoadCardsOkEvent";
import LoadCardsNoCategorySelectedEvent from "../../../gen/card/events/LoadCardsNoCategorySelectedEvent";

export default class AbstractLoadCardsCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.LoadCardsCommand");
        this.ok = "ok";
        this.noCategorySelected = "noCategorySelected";
        this.commandData.selectedCategory = AppState.get_authorView_categoryTree_selectedCategory;
        this.commandData.naturalInputOrder = AppState.get_authorView_cardView_naturalInputOrder;
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadCardsOkEvent(this.commandData).publish());
			break;
		case this.noCategorySelected:
			promises.push(new LoadCardsNoCategorySelectedEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadCardsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	
			this.httpGet(`/${Utils.getRootPath()}/cards?uuid=${this.commandData.uuid}&categoryId=${this.commandData.categoryId}`, true).then((data) => {
				this.commandData.cardList = data.cardList;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



