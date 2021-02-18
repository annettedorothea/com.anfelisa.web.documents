import AbstractLoadCardsCommand from "../../../gen/card/commands/AbstractLoadCardsCommand";

export default class LoadCardsCommand extends AbstractLoadCardsCommand {

    validateCommandData() {
        if (!this.commandData.selectedCategory) {
            this.commandData.cardList = undefined;
            this.addNoCategorySelectedOutcome();
            return false;
        }
        this.commandData.categoryId = this.commandData.selectedCategory.categoryId;
        return true;
    }

    handleResponse(resolve) {
        this.addOkOutcome();
        if (this.commandData.naturalInputOrder === undefined) {
            this.commandData.naturalInputOrder = this.commandData.reverse === false;
        }
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
        reject(this.commandData.message);
    }
}

/*       S.D.G.       */
