import AbstractSearchDuplicateCardsCommand from "../../../gen/author/commands/AbstractSearchDuplicateCardsCommand";

export default class SearchDuplicateCardsCommand extends AbstractSearchDuplicateCardsCommand {
    execute() {
        return new Promise((resolve, reject) => {
            if (this.commandParam.given && this.commandParam.given.length > 1) {
                let queryParams = [];
                queryParams.push({
                    key: "searchString",
                    value: this.commandParam.given
                });
                queryParams.push({
                    key: "categoryId",
                    value: this.commandParam.categoryId
                });
                this.httpGet("api/cards/search", queryParams).then((data) => {
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
            } else {
                this.commandData.outcome = this.tooShort;
                resolve();
            }
        });
    }
}

/*       S.D.G.       */
