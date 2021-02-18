import AbstractEditCategoryClickCommand from "../../../gen/category/commands/AbstractEditCategoryClickCommand";

export default class EditCategoryClickCommand extends AbstractEditCategoryClickCommand {
    execute() {
        this.commandData.categoryDialog = {
            display: true,
            categoryName: this.commandData.categoryName,
            newCategory: false
        };
        this.addOkOutcome();
    }
}

/*       S.D.G.       */
