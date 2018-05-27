import AbstractNameOfEditedCategoryChangedCommand
    from "../../../gen/author/commands/AbstractNameOfEditedCategoryChangedCommand";

export default class NameOfEditedCategoryChangedCommand extends AbstractNameOfEditedCategoryChangedCommand {
    execute() {
        const items = this.commandData.categoryList.filter(item => {
            return item.categoryName === this.commandData.name;
        });
        this.commandData.nameAlreadyExists = items.length > 0;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
