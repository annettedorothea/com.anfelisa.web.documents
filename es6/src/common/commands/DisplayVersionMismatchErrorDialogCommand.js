/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractDisplayVersionMismatchErrorDialogCommand from "../../../gen/common/commands/AbstractDisplayVersionMismatchErrorDialogCommand";

export default class DisplayVersionMismatchErrorDialogCommand extends AbstractDisplayVersionMismatchErrorDialogCommand {
    execute(data) {
        data.display = true;
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



