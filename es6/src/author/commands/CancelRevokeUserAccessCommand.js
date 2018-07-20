import AbstractCancelRevokeUserAccessCommand from "../../../gen/author/commands/AbstractCancelRevokeUserAccessCommand";

export default class CancelRevokeUserAccessCommand extends AbstractCancelRevokeUserAccessCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
