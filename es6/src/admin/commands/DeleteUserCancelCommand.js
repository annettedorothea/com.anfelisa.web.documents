import AbstractDeleteUserCancelCommand from "../../../gen/admin/commands/AbstractDeleteUserCancelCommand";

export default class DeleteUserCancelCommand extends AbstractDeleteUserCancelCommand {
    execute() {
        this.commandData.showDeleteUserDialog = false;
        this.commandData.usernameToBeDeleted = undefined;
    	this.addOkOutcome();
    }
}

/*       S.D.G.       */
