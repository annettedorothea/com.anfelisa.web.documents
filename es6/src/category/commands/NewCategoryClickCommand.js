import AbstractNewCategoryClickCommand from "../../../gen/category/commands/AbstractNewCategoryClickCommand";

export default class NewCategoryClickCommand extends AbstractNewCategoryClickCommand {
    execute() {
        this.commandData.categoryDialog = {
            display: true,
            categoryName: "",
            newCategory: true
        };
        this.addOkOutcome();
    }
}

/*       S.D.G.       */
