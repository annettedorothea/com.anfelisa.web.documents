import AbstractCheckUsernameCommand from "../../../gen/registration/commands/AbstractCheckUsernameCommand";

export default class CheckUsernameCommand extends AbstractCheckUsernameCommand {

    validateCommandData() {
        if (this.commandData.username.length === 0) {
            this.commandData.outcome = this.empty;
            return false;
        }
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
