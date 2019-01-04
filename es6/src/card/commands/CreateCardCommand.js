import AbstractCreateCardCommand from "../../../gen/card/commands/AbstractCreateCardCommand";
import {getAppState} from "../../app/App";

export default class CreateCardCommand extends AbstractCreateCardCommand {

    initCommandData() {
        const data = getAppState().data;
        this.commandData.wanted = data.newCard.wanted;
        this.commandData.given = data.newCard.given;
        this.commandData.image = data.newCard.image;
        this.commandData.categoryId = data.selectedCategory.categoryId;;
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
