import AbstractDeleteCategoryCommand from "../../../gen/author/commands/AbstractDeleteCategoryCommand";

export default class DeleteCategoryCommand extends AbstractDeleteCategoryCommand {
    execute() {
        return new Promise((resolve) => {
            let queryParams = [];
            queryParams.push({
                key: "categoryId",
                value: this.commandData.categoryId
            });
            this.httpDelete("api/category/delete", queryParams).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            }, error => {
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
