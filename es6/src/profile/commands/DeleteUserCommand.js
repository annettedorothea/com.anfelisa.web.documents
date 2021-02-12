import AbstractDeleteUserCommand from "../../../gen/profile/commands/AbstractDeleteUserCommand";

export default class DeleteUserCommand extends AbstractDeleteUserCommand {

    validateCommandData() {
        this.commandData.usernameToBeDeleted = this.commandData.username;
        return true;
    }

    handleResponse(resolve) {
        this.addOkOutcome();
        this.commandData.showDeleteUserDialog = undefined;
    	resolve();
    }
    handleError(resolve, reject) {
        this.addErrorOutcome();
        this.commandData.showDeleteUserDialog = undefined;
        resolve();
    }
}

/*       S.D.G.       */
