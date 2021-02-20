import AbstractCheckUsernameCommand from "../../../gen/registration/commands/AbstractCheckUsernameCommand";

export default class CheckUsernameCommand extends AbstractCheckUsernameCommand {

    validateCommandData() {
        if (this.commandData.username.length === 0) {
            this.addEmptyOutcome();
            this.commandData.available = null;
            return false;
        }
        return true;
    }

    handleResponse(resolve) {
        this.addOkOutcome();
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.message);
    }
}

/*       S.D.G.       */
