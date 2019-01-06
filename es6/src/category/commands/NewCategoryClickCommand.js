import AbstractNewCategoryClickCommand from "../../../gen/category/commands/AbstractNewCategoryClickCommand";
import {getAppState} from "../../app/App";

export default class NewCategoryClickCommand extends AbstractNewCategoryClickCommand {
    execute() {
        const appState = getAppState();
        const selectedCategory = appState.data.selectedCategory;
        this.commandData.dictionaryLookup = selectedCategory && selectedCategory.dictionaryLookup ? selectedCategory.dictionaryLookup : false;
        this.commandData.wantedLanguage = selectedCategory && selectedCategory.wantedLanguage ? selectedCategory.wantedLanguage : "";
        this.commandData.givenLanguage = selectedCategory && selectedCategory.givenLanguage ? selectedCategory.givenLanguage : "";
        this.commandData.displayNewCategory = true;
        this.commandData.categoryName = "";
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */