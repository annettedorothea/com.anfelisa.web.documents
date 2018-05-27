import AbstractNameOfNewCategoryChangedCommand
    from "../../../gen/author/commands/AbstractNameOfNewCategoryChangedCommand";

export default class NameOfNewCategoryChangedCommand extends AbstractNameOfNewCategoryChangedCommand {
    execute() {
        const items = this.commandData.categoryList.filter(item => {
            return item.categoryName === this.commandData.name;
        });
        this.commandData.nameAlreadyExists = items.length > 0;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
