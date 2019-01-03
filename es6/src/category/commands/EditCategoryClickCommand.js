import AbstractEditCategoryClickCommand from "../../../gen/category/commands/AbstractEditCategoryClickCommand";
import {getAppState} from "../../app/App";

export default class EditCategoryClickCommand extends AbstractEditCategoryClickCommand {
    execute() {
        const appState = getAppState();
        const selectedCategory = appState.data.selectedCategory;
        this.commandData.dictionaryLookup = selectedCategory && selectedCategory.dictionaryLookup ? selectedCategory.dictionaryLookup : false;
        this.commandData.wantedLanguage = selectedCategory && selectedCategory.wantedLanguage ? selectedCategory.wantedLanguage : "";
        this.commandData.givenLanguage = selectedCategory && selectedCategory.givenLanguage ? selectedCategory.givenLanguage : "";
        this.commandData.categoryName = selectedCategory.categoryName;
        this.commandData.displayEditCategory = true;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
