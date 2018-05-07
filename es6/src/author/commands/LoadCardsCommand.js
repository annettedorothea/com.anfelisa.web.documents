import AbstractLoadCardsCommand from "../../../gen/author/commands/AbstractLoadCardsCommand";

export default class LoadCardsCommand extends AbstractLoadCardsCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            if (this.commandParam.parentCategoryId) {
                queryParams.push({
                    key: "categoryId",
                    value: this.commandParam.categoryId
                });
            };
            this.httpGet("api/cards/all", queryParams).then((data) => {
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
