/********************************************************************************
 * generated by de.acegen 1.0.0
 ********************************************************************************/




import ACEController from "./ACEController";
import Command from "./Command";

export default class SynchronousCommand extends Command {
    executeCommand() {
		ACEController.addItemToTimeLine({command: this});
	    this.execute();
		this.publishEvents();
    }

}




/******* S.D.G. *******/





