import AbstractNameOfEditedCategoryChangedCommand
    from "../../../gen/author/commands/AbstractNameOfEditedCategoryChangedCommand";

export default class NameOfEditedCategoryChangedCommand extends AbstractNameOfEditedCategoryChangedCommand {
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
