import AbstractUpdateCardCommand from "../../../gen/card/commands/AbstractUpdateCardCommand";
import {getAppState} from "../../app/App";

export default class UpdateCardCommand extends AbstractUpdateCardCommand {

    initCommandData() {
        const data = getAppState().data;
        this.commandData.cardId = data.editedCard.cardId;
        this.commandData.given = data.editedCard.given;
        this.commandData.wanted = data.editedCard.wanted;
        this.commandData.image = data.editedCard.image;
        return true;
    }

    handleResponse(resolve, reject) {
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
