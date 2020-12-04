import AbstractDeleteUserCommand from "../../../gen/admin/commands/AbstractDeleteUserCommand";

export default class DeleteUserCommand extends AbstractDeleteUserCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.addOkOutcome();
    	resolve();
    }
    handleError(resolve) {
        this.addErrorOutcome();
        this.commandData.showDeleteUserDialog = false;
        this.commandData.usernameToBeDeleted = undefined;
        resolve();
    }
}

/*       S.D.G.       */
