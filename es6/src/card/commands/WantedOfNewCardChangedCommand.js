import AbstractWantedOfNewCardChangedCommand from "../../../gen/card/commands/AbstractWantedOfNewCardChangedCommand";

export default class WantedOfNewCardChangedCommand extends AbstractWantedOfNewCardChangedCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
