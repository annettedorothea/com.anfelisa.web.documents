import AbstractLoadUserCommand from "../../../gen/profile/commands/AbstractLoadUserCommand";

export default class LoadUserCommand extends AbstractLoadUserCommand {

    initCommandData() {
    	//add from appState to commandData 
    }

    handleResponse(resolve, reject) {
        this.commandData.showDeleteUserDialog = false;
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
