import AbstractUpdateCardCommand from "../../../gen/author/commands/AbstractUpdateCardCommand";

export default class UpdateCardCommand extends AbstractUpdateCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                cardId: this.commandParam.cardId,
                categoryId: this.commandParam.categoryId,
                given: this.commandParam.given,
                wanted: this.commandParam.wanted,
                index: this.commandParam.index
            };
            this.httpPut("api/card/update", [], data).then((data) => {
                this.commandData.outcome = this.ok;
                this.commandData.username = this.commandParam.username;
                this.commandData.password = this.commandParam.password;
                this.commandData.categoryId = this.commandParam.categoryId;
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
