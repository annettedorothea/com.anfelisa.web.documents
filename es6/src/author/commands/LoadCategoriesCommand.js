import AbstractLoadCategoriesCommand from "../../../gen/author/commands/AbstractLoadCategoriesCommand";

export default class LoadCategoriesCommand extends AbstractLoadCategoriesCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            if (this.commandParam.parentCategoryId) {
                queryParams.push({
                    key: "parentCategoryId",
                    value: this.commandParam.parentCategoryId
                });
            };
            this.httpGet("api/category/all", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
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
