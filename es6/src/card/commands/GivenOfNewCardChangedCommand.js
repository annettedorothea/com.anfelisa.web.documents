import AbstractGivenOfNewCardChangedCommand from "../../../gen/card/commands/AbstractGivenOfNewCardChangedCommand";

export default class GivenOfNewCardChangedCommand extends AbstractGivenOfNewCardChangedCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
