import AbstractToggleInputOrderCommand from "../../../gen/author/commands/AbstractToggleInputOrderCommand";

export default class ToggleInputOrderCommand extends AbstractToggleInputOrderCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
