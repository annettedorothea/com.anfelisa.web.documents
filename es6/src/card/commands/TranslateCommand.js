import AbstractTranslateCommand from "../../../gen/card/commands/AbstractTranslateCommand";
import {getState} from "../../../gen/ace/AppState";

export default class TranslateCommand extends AbstractTranslateCommand {

    initCommandData() {
        const data = getState().data;
        if (!!data.cardView.naturalInputOrder) {
            if (!data.cardView.newCard.given) {
                this.commandData.outcome = this.empty;
                return false;
            }
            if (!!data.cardView.newCard.wanted) {
                this.commandData.outcome = this.targetNotEmtpy;
                return false;
            }
            this.commandData.sourceValue = data.cardView.newCard.given;
            this.commandData.sourceLanguage = data.categoryTree.selectedCategory.givenLanguage;
            this.commandData.targetLanguage = data.categoryTree.selectedCategory.wantedLanguage;
        } else {
            if (!data.cardView.newCard.wanted) {
                this.commandData.outcome = this.empty;
                return false;
            }
            if (!!data.cardView.newCard.given) {
                this.commandData.outcome = this.targetNotEmtpy;
                return false;
            }
            this.commandData.sourceValue = data.cardView.newCard.wanted;
            this.commandData.sourceLanguage = data.categoryTree.selectedCategory.wantedLanguage;
            this.commandData.targetLanguage = data.categoryTree.selectedCategory.givenLanguage;
        }
        return true;
    }

    handleResponse(resolve, reject) {
        const data = getState().data.cardView;
        if (!!data.naturalInputOrder) {
            this.commandData.wanted = this.commandData.targetValue;
            this.commandData.outcome = this.wantedFetched;
        } else {
            this.commandData.given = this.commandData.targetValue;
            this.commandData.outcome = this.givenFetched;
        }
    	resolve();
    }
    handleError(resolve, reject) {
        this.commandData.outcome = this.error;
        resolve();
    }
}

/*       S.D.G.       */
