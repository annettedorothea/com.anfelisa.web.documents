import AbstractGivenOfEditedCardChangedCommand
    from "../../../gen/author/commands/AbstractGivenOfEditedCardChangedCommand";

export default class GivenOfEditedCardChangedCommand extends AbstractGivenOfEditedCardChangedCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
