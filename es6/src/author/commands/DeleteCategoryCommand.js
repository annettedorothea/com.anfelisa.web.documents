import AbstractDeleteCategoryCommand from "../../../gen/author/commands/AbstractDeleteCategoryCommand";

export default class DeleteCategoryCommand extends AbstractDeleteCategoryCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "categoryId",
                value: this.commandData.categoryId
            });
            this.httpDelete("api/category/delete", queryParams).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
