/********************************************************************************
 * generated by de.acegen 0.9.12
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import UpdateCardOkEvent from "../../../gen/card/events/UpdateCardOkEvent";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractUpdateCardCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.UpdateCardCommand");
        this.ok = "ok";
        this.commandData.wanted = AppState.get_authorView_cardView_editedCard_wanted();
        this.commandData.given = AppState.get_authorView_cardView_editedCard_given();
        this.commandData.image = AppState.get_authorView_cardView_editedCard_image();
        this.commandData.cardId = AppState.get_authorView_cardView_editedCard_cardId();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new UpdateCardOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCardsAction()).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('UpdateCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		cardId : this.commandData.cardId,
	    		given : this.commandData.given,
	    		image : this.commandData.image,
	    		wanted : this.commandData.wanted
	    	};
	
			AppUtils.httpPut(`${Utils.settings.rootPath}/card/update`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



