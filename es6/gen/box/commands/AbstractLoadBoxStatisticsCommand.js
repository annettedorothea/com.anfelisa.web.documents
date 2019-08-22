/* 
 * Copyright (c) 2019, Annette Pohl, Koblenz, Germany
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
import LoadBoxStatisticsOkEvent from "../../../gen/box/events/LoadBoxStatisticsOkEvent";

export default class AbstractLoadBoxStatisticsCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.LoadBoxStatisticsCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadBoxStatisticsOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadBoxStatisticsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
		    queryParams.push({key: "boxId",value: this.commandData.boxId});
		    queryParams.push({key: "today",value: this.commandData.today});
	        
			this.httpGet(this.adjustedUrl(`/api/box/get`), true, queryParams).then((data) => {
				this.commandData.boxId = data.boxId;
				this.commandData.categoryName = data.categoryName;
				this.commandData.daysBehindSchedule = data.daysBehindSchedule;
				this.commandData.maxInterval = data.maxInterval;
				this.commandData.maxCardsPerDay = data.maxCardsPerDay;
				this.commandData.myCards = data.myCards;
				this.commandData.quality0Count = data.quality0Count;
				this.commandData.quality1Count = data.quality1Count;
				this.commandData.quality2Count = data.quality2Count;
				this.commandData.quality3Count = data.quality3Count;
				this.commandData.quality4Count = data.quality4Count;
				this.commandData.quality5Count = data.quality5Count;
				this.commandData.reinforceCards = data.reinforceCards;
				this.commandData.todaysCards = data.todaysCards;
				this.commandData.tomorrowsCards = data.tomorrowsCards;
				this.commandData.totalCards = data.totalCards;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



