import AbstractDeleteUserCancelCommand from "../../../gen/profile/commands/AbstractDeleteUserCancelCommand";

export default class DeleteUserCancelCommand extends AbstractDeleteUserCancelCommand {
    execute() {
        this.addOkOutcome();
        this.commandData.showDeleteUserDialog = false;
    }
}

/*       S.D.G.       */
