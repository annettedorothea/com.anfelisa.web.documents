import AbstractCancelEditCategoryCommand from "../../../gen/category/commands/AbstractCancelEditCategoryCommand";

export default class CancelEditCategoryCommand extends AbstractCancelEditCategoryCommand {
    execute() {
        this.commandData.dictionaryLookup = false;
        this.commandData.wantedLanguage = "";
        this.commandData.givenLanguage = "";
        this.commandData.displayEditCategory = false;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
