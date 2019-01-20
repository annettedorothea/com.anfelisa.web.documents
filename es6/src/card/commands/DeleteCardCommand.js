import AbstractDeleteCardCommand from "../../../gen/card/commands/AbstractDeleteCardCommand";
import {getState} from "../../../gen/ace/AppState";

export default class DeleteCardCommand extends AbstractDeleteCardCommand {

    initCommandData() {
        const data = getState().data.cardView;
        this.commandData.cardId = data.deleteCard.cardId;
        return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.outcome = this.ok;
        this.commandData.deleteCard = {
            confirmDelete: false,
            cardId: ""
        };
    	resolve();
    }
    handleError(resolve, reject) {
        this.commandData.outcome = this.error;
        this.commandData.deleteCard = {
            confirmDelete: false,
            cardId: ""
        };
        resolve();
    }
}

/*       S.D.G.       */
