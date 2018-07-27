import AbstractUsernameChangedCommand from "../../../gen/login/commands/AbstractUsernameChangedCommand";

export default class UsernameChangedCommand extends AbstractUsernameChangedCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
