import AbstractCheckUsernameCommand from "../../../gen/registration/commands/AbstractCheckUsernameCommand";

export default class CheckUsernameCommand extends AbstractCheckUsernameCommand {

    handleResponse(resolve) {
        if (this.commandData.available === true) {
            this.commandData.outcome = this.available;
        } else {
            this.commandData.outcome = this.notAvailable;
        }
        resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
