import AbstractUsernameChangedCommand from "../../../gen/common/commands/AbstractUsernameChangedCommand";

export default class UsernameChangedCommand extends AbstractUsernameChangedCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
