import AbstractMoveCardsStartedCommand from "../../../gen/card/commands/AbstractMoveCardsStartedCommand";

export default class MoveCardsStartedCommand extends AbstractMoveCardsStartedCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    	this.commandData.movedCardIds = this.commandData.selectedCardIds;
    }
}

/*       S.D.G.       */
