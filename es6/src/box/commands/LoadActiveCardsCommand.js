/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AbstractLoadActiveCardsCommand from "../../../gen/box/commands/AbstractLoadActiveCardsCommand";

export default class LoadActiveCardsCommand extends AbstractLoadActiveCardsCommand {

    validateCommandData() {
    	return true;
    }

    handleResponse(resolve, reject) {
    	this.addOkOutcome();
    	this.commandData.selectedCardIds = [];
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}




/******* S.D.G. *******/



