import AbstractNameOfNewCategoryChangedCommand
    from "../../../gen/author/commands/AbstractNameOfNewCategoryChangedCommand";

export default class NameOfNewCategoryChangedCommand extends AbstractNameOfNewCategoryChangedCommand {
    execute() {
        this.commandData.name = this.commandParam.name;
        const items = this.commandParam.categoryList.filter(item => {
            return item.categoryName === this.commandParam.name;
        });
        this.commandData.nameAlreadyExists = items.length > 0;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
