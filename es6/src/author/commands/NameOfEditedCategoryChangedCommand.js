import AbstractNameOfEditedCategoryChangedCommand from "../../../gen/author/commands/AbstractNameOfEditedCategoryChangedCommand";

export default class NameOfEditedCategoryChangedCommand extends AbstractNameOfEditedCategoryChangedCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.name = this.commandParam.name;
            const items = this.commandParam.categoryList.filter(item => {
                return item.categoryName === this.commandParam.name;
            });
            this.commandData.nameAlreadyExists = items.length > 0;
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
