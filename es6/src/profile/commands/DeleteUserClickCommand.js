import AbstractDeleteUserClickCommand from "../../../gen/profile/commands/AbstractDeleteUserClickCommand";

export default class DeleteUserClickCommand extends AbstractDeleteUserClickCommand {
    execute() {
        this.commandData.outcome = this.ok;
        this.commandData.showDeleteUserDialog = true;
    }
}

/*       S.D.G.       */
