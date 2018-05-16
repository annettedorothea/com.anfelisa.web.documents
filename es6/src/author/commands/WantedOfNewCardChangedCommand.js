import AbstractWantedOfNewCardChangedCommand from "../../../gen/author/commands/AbstractWantedOfNewCardChangedCommand";

export default class WantedOfNewCardChangedCommand extends AbstractWantedOfNewCardChangedCommand {
    execute() {
        this.commandData.wanted = this.commandParam.wanted;
        this.commandData.naturalInputOrder = this.commandParam.naturalInputOrder;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
