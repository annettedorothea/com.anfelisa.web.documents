import AbstractDeleteUserClickCommand from "../../../gen/admin/commands/AbstractDeleteUserClickCommand";

export default class DeleteUserClickCommand extends AbstractDeleteUserClickCommand {
    execute() {
        this.commandData.showDeleteUserDialog = true;
    	this.addOkOutcome();
    }
}

/*       S.D.G.       */
