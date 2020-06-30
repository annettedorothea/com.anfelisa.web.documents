import AbstractDeleteUserCommand from "../../../gen/admin/commands/AbstractDeleteUserCommand";

export default class DeleteUserCommand extends AbstractDeleteUserCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve) {
        this.commandData.outcome = this.error;
        this.commandData.showDeleteUserDialog = false;
        resolve();
    }
}

/*       S.D.G.       */
