import AbstractGivenOfEditedCardChangedCommand from "../../../gen/card/commands/AbstractGivenOfEditedCardChangedCommand";

export default class GivenOfEditedCardChangedCommand extends AbstractGivenOfEditedCardChangedCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
