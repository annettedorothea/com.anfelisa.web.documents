import AbstractNewCategoryClickCommand from "../../../gen/category/commands/AbstractNewCategoryClickCommand";
import {getState} from "../../../gen/ace/AppState";

export default class NewCategoryClickCommand extends AbstractNewCategoryClickCommand {
    execute() {
        const selectedCategory = getState().data.categoryTree.selectedCategory;
        this.commandData.dictionaryLookup = selectedCategory && selectedCategory.dictionaryLookup ? selectedCategory.dictionaryLookup : false;
        this.commandData.wantedLanguage = selectedCategory && selectedCategory.wantedLanguage ? selectedCategory.wantedLanguage : "";
        this.commandData.givenLanguage = selectedCategory && selectedCategory.givenLanguage ? selectedCategory.givenLanguage : "";
        this.commandData.displayNewCategory = true;
        this.commandData.categoryName = "";
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
