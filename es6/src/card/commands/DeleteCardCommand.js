import AbstractDeleteCardCommand from "../../../gen/card/commands/AbstractDeleteCardCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class DeleteCardCommand extends AbstractDeleteCardCommand {

    validateCommandData() {
        const data = getState().data.cardView;
        this.commandData.cardId = data.deleteCard.cardId;
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
        this.commandData.deleteCard = {
            confirmDelete: false,
            cardId: ""
        };
    	resolve();
    }
    handleError(resolve) {
        this.commandData.outcome = this.error;
        this.commandData.deleteCard = {
            confirmDelete: false,
            cardId: ""
        };
        resolve();
    }
}

/*       S.D.G.       */
