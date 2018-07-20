import AbstractRevokeUserAccessClickCommand from "../../../gen/author/commands/AbstractRevokeUserAccessClickCommand";

export default class RevokeUserAccessClickCommand extends AbstractRevokeUserAccessClickCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
