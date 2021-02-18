/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AbstractSortSelectedCardsOutCommand from "../../../gen/box/commands/AbstractSortSelectedCardsOutCommand";

export default class SortSelectedCardsOutCommand extends AbstractSortSelectedCardsOutCommand {

    validateCommandData() {
    	return true;
    }

    handleResponse(resolve, reject) {
    	this.addOkOutcome();
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.message);
    }
}




/******* S.D.G. *******/



