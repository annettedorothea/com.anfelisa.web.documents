import AbstractDeleteUserCommand from "../../../gen/profile/commands/AbstractDeleteUserCommand";

export default class DeleteUserCommand extends AbstractDeleteUserCommand {

    validateCommandData() {
        this.commandData.usernameToBeDeleted = this.commandData.username;
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
        this.commandData.showDeleteUserDialog = undefined;
    	resolve();
    }
    handleError(resolve, reject) {
        this.commandData.outcome = this.error;
        this.commandData.showDeleteUserDialog = undefined;
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
