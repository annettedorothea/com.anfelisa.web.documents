import AbstractLoadCardsCommand from "../../../gen/card/commands/AbstractLoadCardsCommand";
import {getState} from "../../../gen/ace/AppState";

export default class LoadCardsCommand extends AbstractLoadCardsCommand {

    initCommandData() {
        const selectedCategory = getState().data.categoryTree.selectedCategory;
        if (!selectedCategory) {
            this.commandData.outcome = this.noCategorySelected;
            return false;
        }
        this.commandData.categoryId = selectedCategory.categoryId;
        return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.outcome = this.ok;
        const cardView = getState().data.cardView;
        this.commandData.naturalInputOrder = cardView.naturalInputOrder === undefined ? true : cardView.naturalInputOrder;
        this.commandData.useDictionary = cardView.useDictionary === undefined ? false : cardView.useDictionary;
        this.commandData.newCard = {
            given: "",
            wanted: "",
            image: "",
            displaySpinner: false,
            displayTranslateSpinner: false
        };
        this.commandData.editedCard = {
            cardId: "",
            given: "",
            wanted: "",
            image: ""
        };
        this.commandData.filter = "";
        this.commandData.dictionaryValue = "";
        this.commandData.cardDuplicates = [];
        this.commandData.selectedCardIds = [];
        this.commandData.deleteCard = {
            confirmDelete: false,
            cardId: ""
        };
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
