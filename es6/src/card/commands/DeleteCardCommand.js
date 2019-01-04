import AbstractDeleteCardCommand from "../../../gen/card/commands/AbstractDeleteCardCommand";
import {getAppState} from "../../app/App";

export default class DeleteCardCommand extends AbstractDeleteCardCommand {

    initCommandData() {
        const data = getAppState().data;
        this.commandData.cardId = data.deleteCard.cardId;
        return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
        this.commandData.outcome = this.error;
        resolve();
    }
}

/*       S.D.G.       */
