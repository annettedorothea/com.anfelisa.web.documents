import AbstractUpdateCategoryCommand from "../../../gen/category/commands/AbstractUpdateCategoryCommand";
import {getAppState} from "../../app/App";

export default class UpdateCategoryCommand extends AbstractUpdateCategoryCommand {

    initCommandData() {
        const data = getAppState().data;
        this.commandData.categoryId = data.selectedCategory.categoryId;
        this.commandData.categoryName = data.categoryName;
        this.commandData.dictionaryLookup = data.dictionaryLookup;
        this.commandData.givenLanguage = data.givenLanguage;
        this.commandData.wantedLanguage = data.wantedLanguage;
    }

    handleResponse(resolve, reject) {
        this.commandData.outcome = this.ok;
        this.commandData.dictionaryLookup = false;
        this.commandData.wantedLanguage = "";
        this.commandData.givenLanguage = "";
        this.commandData.displayEditCategory = false;
        this.commandData.selectedCategoryId = this.commandData.categoryId;
        resolve();
    }
    handleError(resolve, reject) {
        this.commandData.outcome = this.error;
        this.commandData.dictionaryLookup = false;
        this.commandData.wantedLanguage = "";
        this.commandData.givenLanguage = "";
        this.commandData.displayEditCategory = false;
        resolve();
    }
}

/*       S.D.G.       */
