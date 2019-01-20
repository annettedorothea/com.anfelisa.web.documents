import AbstractEditCategoryClickCommand from "../../../gen/category/commands/AbstractEditCategoryClickCommand";
import {getState} from "../../../gen/ace/AppState";

export default class EditCategoryClickCommand extends AbstractEditCategoryClickCommand {
    execute() {
        const selectedCategory = getState().data.categoryTree.selectedCategory;
        this.commandData.dictionaryLookup = selectedCategory && selectedCategory.dictionaryLookup ? selectedCategory.dictionaryLookup : false;
        this.commandData.wantedLanguage = selectedCategory && selectedCategory.wantedLanguage ? selectedCategory.wantedLanguage : "";
        this.commandData.givenLanguage = selectedCategory && selectedCategory.givenLanguage ? selectedCategory.givenLanguage : "";
        this.commandData.categoryName = selectedCategory.categoryName;
        this.commandData.displayEditCategory = true;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
