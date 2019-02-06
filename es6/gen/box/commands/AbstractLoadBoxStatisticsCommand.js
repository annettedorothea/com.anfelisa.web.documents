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
				this.commandData.totalCards = data.totalCards;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
