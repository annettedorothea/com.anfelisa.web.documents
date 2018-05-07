import AbstractDeleteCategoryClickCommand from "../../../gen/author/commands/AbstractDeleteCategoryClickCommand";

export default class DeleteCategoryClickCommand extends AbstractDeleteCategoryClickCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.categoryId = this.commandParam.categoryId;
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */
