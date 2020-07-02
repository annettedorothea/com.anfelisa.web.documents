import AbstractEditCategoryClickCommand from "../../../gen/category/commands/AbstractEditCategoryClickCommand";

export default class EditCategoryClickCommand extends AbstractEditCategoryClickCommand {
    execute() {
        this.commandData.displayEditCategory = true;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
