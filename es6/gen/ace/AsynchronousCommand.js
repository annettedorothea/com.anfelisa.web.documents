/********************************************************************************
 * generated by de.acegen 0.9.12
 ********************************************************************************/




import ACEController from "./ACEController";
import Command from "./Command";

export default class AsynchronousCommand extends Command {
    executeCommand() {
        ACEController.addItemToTimeLine({command: this});
        return new Promise((resolve, reject) => {
			if (this.validateCommandData()) {
			    this.execute().then(() => {
			        this.publishEvents();
			        resolve();
			    }, (error) => {
			        reject(error);
			    });
			} else {
		        this.publishEvents();
				resolve();
			}
        });
    }

    validateCommandData() {
    	return true;
    }

}




/******* S.D.G. *******/





