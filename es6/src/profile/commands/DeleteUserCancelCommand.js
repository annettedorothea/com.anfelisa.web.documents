import AbstractDeleteUserCancelCommand from "../../../gen/profile/commands/AbstractDeleteUserCancelCommand";

export default class DeleteUserCancelCommand extends AbstractDeleteUserCancelCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
