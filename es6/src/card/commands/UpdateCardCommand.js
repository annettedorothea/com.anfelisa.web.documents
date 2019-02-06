import AbstractUpdateCardCommand from "../../../gen/card/commands/AbstractUpdateCardCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class UpdateCardCommand extends AbstractUpdateCardCommand {

    initCommandData() {
        const data = getState().data.cardView;
        this.commandData.cardId = data.editedCard.cardId;
        this.commandData.given = data.editedCard.given;
        this.commandData.wanted = data.editedCard.wanted;
        this.commandData.image = data.editedCard.image;
        return true;
    }

    handleResponse(resolve, reject) {
    	this.commandData.outcome = this.ok;
        this.commandData.editedCard = {
            cardId: "",
            given: "",
            wanted: "",
            image: ""
        };
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
