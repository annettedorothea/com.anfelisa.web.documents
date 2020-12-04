import AbstractEditCategoryClickCommand from "../../../gen/category/commands/AbstractEditCategoryClickCommand";

export default class EditCategoryClickCommand extends AbstractEditCategoryClickCommand {
    execute() {
        this.commandData.displayEditCategory = true;
        this.addOkOutcome();
    }
}

/*       S.D.G.       */
