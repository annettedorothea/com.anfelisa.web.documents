import AbstractUsernameChangedCommand from "../../../gen/login/commands/AbstractUsernameChangedCommand";

export default class UsernameChangedCommand extends AbstractUsernameChangedCommand {
    execute() {
        this.addOkOutcome();
    }
}

/*       S.D.G.       */
