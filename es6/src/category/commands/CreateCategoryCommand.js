import AbstractCreateCategoryCommand from "../../../gen/category/commands/AbstractCreateCategoryCommand";
import {getAppState} from "../../app/App";

export default class CreateCategoryCommand extends AbstractCreateCategoryCommand {

    initCommandData() {
        const data = getAppState().data;
        let categoryIndex;
        if (data.selectedCategory) {
            categoryIndex = data.selectedCategory.childCategories.length+1;
        } else {
            categoryIndex = data.categoryList.length+1;
        }
        this.commandData.categoryName = data.newCategoryName;
        this.commandData.categoryIndex = categoryIndex;
        this.commandData.parentCategoryId = data.selectedCategory ? data.selectedCategory.categoryId : null;
        this.commandData.dictionaryLookup = data.dictionaryLookup;
        this.commandData.givenLanguage = data.givenLanguage;
        this.commandData.wantedLanguage = data.wantedLanguage;
    }

    handleResponse(resolve, reject) {
    	this.commandData.outcome = this.ok;
        this.commandData.dictionaryLookup = false;
        this.commandData.wantedLanguage = "";
        this.commandData.givenLanguage = "";
        this.commandData.displayNewCategory = false;
        this.commandData.selectedCategoryId = this.commandData.uuid;
    	resolve();
    }
    handleError(resolve, reject) {
        this.commandData.outcome = this.error;
        this.commandData.dictionaryLookup = false;
        this.commandData.wantedLanguage = "";
        this.commandData.givenLanguage = "";
        this.commandData.displayNewCategory = false;
        resolve();
    }
}

/*       S.D.G.       */
