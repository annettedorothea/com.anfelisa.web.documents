import AbstractWantedOfEditedCardChangedCommand
    from "../../../gen/author/commands/AbstractWantedOfEditedCardChangedCommand";

export default class WantedOfEditedCardChangedCommand extends AbstractWantedOfEditedCardChangedCommand {
    execute() {
        this.commandData.wanted = this.commandParam.wanted;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
