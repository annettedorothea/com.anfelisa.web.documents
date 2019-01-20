import AbstractEditCardCommand from "../../../gen/card/commands/AbstractEditCardCommand";
import {getState} from "../../../gen/ace/AppState";

export default class EditCardCommand extends AbstractEditCardCommand {
    execute() {
        const data = getState().data.cardView;
        const card = data.cardList.filter(c => c.cardId === this.commandData.cardId)[0];
        this.commandData.editedCard = {
            cardId: this.commandData.cardId,
            given: card.given,
            wanted: card.wanted,
            image: card.image
        };
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
