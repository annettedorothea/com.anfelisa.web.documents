import AbstractCreateCardCommand from "../../../gen/card/commands/AbstractCreateCardCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class CreateCardCommand extends AbstractCreateCardCommand {

    initCommandData() {
        const data = getState().data;
        this.commandData.wanted = data.cardView.newCard.wanted;
        this.commandData.given = data.cardView.newCard.given;
        this.commandData.image = data.cardView.newCard.image;
        this.commandData.categoryId = data.categoryTree.selectedCategory.categoryId;;
        return true;
    }

    handleResponse(resolve, reject) {
    	this.commandData.outcome = this.ok;
        this.commandData.newCard = {
            given: "",
            wanted: "",
            image: "",
            displaySpinner: false,
            displayTranslateSpinner: false
        };
        this.commandData.cardDuplicates = [];
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
