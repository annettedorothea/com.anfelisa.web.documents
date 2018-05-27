import AbstractGivenOfNewCardChangedCommand from "../../../gen/author/commands/AbstractGivenOfNewCardChangedCommand";

export default class GivenOfNewCardChangedCommand extends AbstractGivenOfNewCardChangedCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
