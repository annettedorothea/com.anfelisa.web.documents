import AbstractCancelNewCategoryCommand from "../../../gen/category/commands/AbstractCancelNewCategoryCommand";

export default class CancelNewCategoryCommand extends AbstractCancelNewCategoryCommand {
    execute() {
        this.commandData.dictionaryLookup = false;
        this.commandData.wantedLanguage = "";
        this.commandData.givenLanguage = "";
        this.commandData.displayNewCategory = false;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
