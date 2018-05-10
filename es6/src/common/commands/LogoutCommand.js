import AbstractLogoutCommand from "../../../gen/common/commands/AbstractLogoutCommand";

export default class LogoutCommand extends AbstractLogoutCommand {
    execute() {
        this.commandData.outcome = this.ok;
        this.commandData.hash = "#";
    }
}

/*       S.D.G.       */
