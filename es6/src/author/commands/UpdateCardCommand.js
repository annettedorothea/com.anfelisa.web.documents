import AbstractUpdateCardCommand from "../../../gen/author/commands/AbstractUpdateCardCommand";

export default class UpdateCardCommand extends AbstractUpdateCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                cardId: this.commandParam.cardId,
                given: this.commandParam.given,
                wanted: this.commandParam.wanted,
                cardIndex: this.commandParam.cardIndex
            };
            this.httpPut("api/card/update", [], data).then((data) => {
                this.commandData.outcome = this.ok;
                this.commandData.username = this.commandParam.username;
                this.commandData.password = this.commandParam.password;
                this.commandData.parentCategoryId = this.commandParam.categoryId;
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
