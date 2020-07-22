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




import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import ACEController from "../../ace/ACEController";
import * as AppState from "../../ace/AppState";
import LoadNextCardOkEvent from "../../../gen/box/events/LoadNextCardOkEvent";

export default class AbstractLoadNextCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.LoadNextCardCommand");
        this.ok = "ok";
        this.commandData.boxId = AppState.get_cardView_boxId();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadNextCardOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadNextCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	
			this.httpGet(`/${Utils.getRootPath()}/box/next-card?uuid=${this.commandData.uuid}&boxId=${this.commandData.boxId}&todayAtMidnightInUTC=${this.commandData.todayAtMidnightInUTC}`, true).then((data) => {
				this.commandData.cardId = data.cardId;
				this.commandData.categoryId = data.categoryId;
				this.commandData.count = data.count;
				this.commandData.given = data.given;
				this.commandData.image = data.image;
				this.commandData.lastQuality = data.lastQuality;
				this.commandData.rootCategoryId = data.rootCategoryId;
				this.commandData.scheduledCardId = data.scheduledCardId;
				this.commandData.reinforceCardId = data.reinforceCardId;
				this.commandData.scheduledDate = data.scheduledDate;
				this.commandData.scoredDate = data.scoredDate;
				this.commandData.wanted = data.wanted;
				this.commandData.openTodaysCards = data.openTodaysCards;
				this.commandData.allTodaysCards = data.allTodaysCards;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



