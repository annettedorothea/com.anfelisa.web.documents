import AbstractDeleteMyUserCommand from "../../../gen/profile/commands/AbstractDeleteMyUserCommand";

export default class DeleteMyUserCommand extends AbstractDeleteMyUserCommand {

    initCommandData() {
    	//add from appState to commandData
    	return true;
    }

    handleResponse(resolve, reject) {
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
