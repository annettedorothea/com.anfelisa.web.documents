import AbstractDisplayErrorAndLogoutCommand from "../../../gen/common/commands/AbstractDisplayErrorAndLogoutCommand";

export default class DisplayErrorAndLogoutCommand extends AbstractDisplayErrorAndLogoutCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
