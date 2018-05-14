import AbstractToggelInputOrderCommand from "../../../gen/author/commands/AbstractToggelInputOrderCommand";

export default class ToggelInputOrderCommand extends AbstractToggelInputOrderCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
