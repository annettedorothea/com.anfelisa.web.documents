import AbstractUsernameChangedInLoginCommand from "../../../gen/common/commands/AbstractUsernameChangedInLoginCommand";

export default class UsernameChangedInLoginCommand extends AbstractUsernameChangedInLoginCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
