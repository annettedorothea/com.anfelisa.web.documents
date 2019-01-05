import AbstractMoveCardsStartedCommand from "../../../gen/card/commands/AbstractMoveCardsStartedCommand";

export default class MoveCardsStartedCommand extends AbstractMoveCardsStartedCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
