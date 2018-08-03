import AbstractSearchDuplicateCardsCommand from "../../../gen/author/commands/AbstractSearchDuplicateCardsCommand";

export default class SearchDuplicateCardsCommand extends AbstractSearchDuplicateCardsCommand {
    execute() {
        return new Promise((resolve, reject) => {
            if (this.commandData.given && this.commandData.given.length > 2 || this.commandData.wanted && this.commandData.wanted.length > 2) {
                let queryParams = [];
                queryParams.push({
                    key: "given",
                    value: this.commandData.given
                });
                queryParams.push({
                    key: "wanted",
                    value: this.commandData.wanted
                });
                queryParams.push({
                    key: "categoryId",
                    value: this.commandData.categoryId
                });
                queryParams.push({
                    key: "naturalInputOrder",
                    value: this.commandData.naturalInputOrder
                });
                this.httpGet("api/cards/search", queryParams).then((data) => {
                    this.commandData.data = data;
                    this.commandData.outcome = this.ok;
                    resolve();
                }, error => {
                    reject(error)
                });
            } else {
                this.commandData.outcome = this.tooShort;
                resolve();
            }
        });
    }
}

/*       S.D.G.       */
