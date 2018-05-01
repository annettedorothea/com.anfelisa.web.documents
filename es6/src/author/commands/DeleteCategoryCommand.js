import AbstractDeleteCategoryCommand from "../../../gen/author/commands/AbstractDeleteCategoryCommand";

export default class DeleteCategoryCommand extends AbstractDeleteCategoryCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "categoryId",
                value: this.commandParam.categoryId
            });
            this.httpDelete("api/category/delete", queryParams).then((data) => {
                this.commandData.outcome = this.ok;
                this.commandData.username = this.commandParam.username;
                this.commandData.password = this.commandParam.password;
                this.commandData.parentCategoryId = this.commandParam.parentCategoryId;
                resolve();
            }, (error) => {
                if (error.code === 401) {
                    error.errorKey = "unauthorized";
                    this.commandData.error = error;
                    this.commandData.outcome = this.unauthorized;
                    resolve();
                } else {
                    reject(error.text);
                }
            });
        });
    }
}

/*       S.D.G.       */
