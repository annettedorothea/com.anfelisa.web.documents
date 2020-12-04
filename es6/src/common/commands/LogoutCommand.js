import AbstractLogoutCommand from "../../../gen/common/commands/AbstractLogoutCommand";

export default class LogoutCommand extends AbstractLogoutCommand {
    execute() {
        this.addOkOutcome();
        this.commandData.loggedInUser = null;
        this.commandData.username = null;
        this.commandData.password = null;
        this.commandData.hash = "#";
    }
}

/*       S.D.G.       */
