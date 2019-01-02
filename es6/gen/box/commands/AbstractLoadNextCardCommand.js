import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadNextCardOkEvent from "../../../gen/box/events/LoadNextCardOkEvent";
import LoadNextCardDoNotScheduleNextEvent from "../../../gen/box/events/LoadNextCardDoNotScheduleNextEvent";
import LoadBoxStatisticsAction from "../../../src/box/actions/LoadBoxStatisticsAction";
import ScheduleNextCardAction from "../../../src/box/actions/ScheduleNextCardAction";

export default class AbstractLoadNextCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.LoadNextCardCommand");
        this.ok = "ok";
        this.scheduleNext = "scheduleNext";
        this.doNotScheduleNext = "doNotScheduleNext";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadNextCardOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadBoxStatisticsAction(this.commandData.boxId)).publish());
			break;
		case this.scheduleNext:
			promises.push(new TriggerAction(new ScheduleNextCardAction()).publish());
			break;
		case this.doNotScheduleNext:
			promises.push(new LoadNextCardDoNotScheduleNextEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadBoxStatisticsAction(this.commandData.boxId)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadNextCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
		    queryParams.push({key: "boxId",value: this.commandData.boxId});
		    queryParams.push({key: "today",value: this.commandData.today});
	        
			this.httpGet(`/api/box/next-card`, true, queryParams).then((data) => {
				this.commandData.cardId = data.cardId;
				this.commandData.categoryId = data.categoryId;
				this.commandData.count = data.count;
				this.commandData.given = data.given;
				this.commandData.image = data.image;
				this.commandData.lastQuality = data.lastQuality;
				this.commandData.rootCategoryId = data.rootCategoryId;
				this.commandData.scheduledCardId = data.scheduledCardId;
				this.commandData.scheduledDate = data.scheduledDate;
				this.commandData.scoredDate = data.scoredDate;
				this.commandData.wanted = data.wanted;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
