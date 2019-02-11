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
import LoadNextReinforceCardOkEvent from "../../../gen/box/events/LoadNextReinforceCardOkEvent";
import LoadBoxStatisticsAction from "../../../src/box/actions/LoadBoxStatisticsAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractLoadNextReinforceCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.LoadNextReinforceCardCommand");
        this.ok = "ok";
        this.noCard = "noCard";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadNextReinforceCardOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadBoxStatisticsAction(this.commandData.boxId)).publish());
			break;
		case this.noCard:
			promises.push(new TriggerAction(new RouteAction(this.commandData.hash)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadNextReinforceCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
		    queryParams.push({key: "boxId",value: this.commandData.boxId});
	        
			this.httpGet(this.adjustedUrl(`/api/box/next-reinforce-card`), true, queryParams).then((data) => {
				this.commandData.categoryId = data.categoryId;
				this.commandData.boxId = data.boxId;
				this.commandData.changeDate = data.changeDate;
				this.commandData.given = data.given;
				this.commandData.image = data.image;
				this.commandData.lastQuality = data.lastQuality;
				this.commandData.reinforceCardId = data.reinforceCardId;
				this.commandData.wanted = data.wanted;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



