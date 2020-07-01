import AbstractDeleteUserCancelCommand from "../../../gen/profile/commands/AbstractDeleteUserCancelCommand";

export default class DeleteUserCancelCommand extends AbstractDeleteUserCancelCommand {
    execute() {
        this.commandData.outcome = this.ok;
        this.commandData.showDeleteUserDialog = false;
    }
}

/*       S.D.G.       */
