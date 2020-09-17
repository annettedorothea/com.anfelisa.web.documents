/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import AbstractAsynchronousCommand from "../../../gen/ace/AbstractAsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import ACEController from "../../ace/ACEController";
import * as AppState from "../../ace/AppState";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractSortSelectedCardsOutCommand extends AbstractAsynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.SortSelectedCardsOutCommand");
        this.ok = "ok";
        this.commandData.selectedCardIds = AppState.get_authorView_cardView_selectedCardIds();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadCardsAction()).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SortSelectedCardsOutCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		cardIds : this.commandData.cardIds
	    	};
	
			this.doHttpPost(`/${Utils.getRootPath()}/cards/sort-out`, true, payload).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



