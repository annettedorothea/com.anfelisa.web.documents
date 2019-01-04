import AbstractTranslateCommand from "../../../gen/card/commands/AbstractTranslateCommand";
import {getAppState} from "../../app/App";

export default class TranslateCommand extends AbstractTranslateCommand {

    initCommandData() {
        const data = getAppState().data;
        if (!!data.naturalInputOrder) {
            if (!data.newCard.given) {
                this.commandData.outcome = this.empty;
                return false;
            }
            if (!!data.newCard.wanted) {
                this.commandData.outcome = this.targetNotEmtpy;
                return false;
            }
            this.commandData.sourceValue = data.newCard.given;
            this.commandData.sourceLanguage = data.selectedCategory.givenLanguage;
            this.commandData.targetLanguage = data.selectedCategory.wantedLanguage;
        } else {
            if (!data.newCard.wanted) {
                this.commandData.outcome = this.empty;
                return false;
            }
            if (!!data.newCard.given) {
                this.commandData.outcome = this.targetNotEmtpy;
                return false;
            }
            this.commandData.sourceValue = data.newCard.wanted;
            this.commandData.sourceLanguage = data.selectedCategory.wantedLanguage;
            this.commandData.targetLanguage = data.selectedCategory.givenLanguage;
        }
        return true;
    }

    handleResponse(resolve, reject) {
        const data = getAppState().data;
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
