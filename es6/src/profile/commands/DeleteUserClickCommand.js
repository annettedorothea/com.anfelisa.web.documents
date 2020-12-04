import AbstractDeleteUserClickCommand from "../../../gen/profile/commands/AbstractDeleteUserClickCommand";

export default class DeleteUserClickCommand extends AbstractDeleteUserClickCommand {
    execute() {
        this.addOkOutcome();
        this.commandData.showDeleteUserDialog = true;
    }
}

/*       S.D.G.       */
