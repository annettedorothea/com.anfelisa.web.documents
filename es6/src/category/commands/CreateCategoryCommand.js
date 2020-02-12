import AbstractCreateCategoryCommand from "../../../gen/category/commands/AbstractCreateCategoryCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class CreateCategoryCommand extends AbstractCreateCategoryCommand {

    initCommandData() {
        const data = getState().data.categoryTree;
        this.commandData.categoryName = data.categoryName;
        this.commandData.parentCategoryId = data.selectedCategory ? data.selectedCategory.categoryId : null;
        this.commandData.dictionaryLookup = data.dictionaryLookup;
        this.commandData.givenLanguage = data.givenLanguage;
        this.commandData.wantedLanguage = data.wantedLanguage;
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
        this.commandData.dictionaryLookup = false;
        this.commandData.wantedLanguage = "";
        this.commandData.givenLanguage = "";
        this.commandData.displayNewCategory = false;
        this.commandData.selectedCategoryId = this.commandData.uuid;
        resolve();
    }

    handleError(resolve) {
        this.commandData.outcome = this.error;
        this.commandData.dictionaryLookup = false;
        this.commandData.wantedLanguage = "";
        this.commandData.givenLanguage = "";
        this.commandData.displayNewCategory = false;
        resolve();
    }
}

/*       S.D.G.       */
