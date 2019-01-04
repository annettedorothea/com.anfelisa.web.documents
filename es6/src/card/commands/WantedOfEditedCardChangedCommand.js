import AbstractWantedOfEditedCardChangedCommand from "../../../gen/card/commands/AbstractWantedOfEditedCardChangedCommand";

export default class WantedOfEditedCardChangedCommand extends AbstractWantedOfEditedCardChangedCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
