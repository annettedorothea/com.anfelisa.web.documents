import AbstractMoveCardsStartedCommand from "../../../gen/card/commands/AbstractMoveCardsStartedCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class MoveCardsStartedCommand extends AbstractMoveCardsStartedCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    	this.commandData.movedCardIds = getState().data.cardView.selectedCardIds;
    }
}

/*       S.D.G.       */
