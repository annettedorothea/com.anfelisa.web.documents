import AbstractUpdateCardCommand from "../../../gen/author/commands/AbstractUpdateCardCommand";

export default class UpdateCardCommand extends AbstractUpdateCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                cardId: this.commandData.cardId,
                given: this.commandData.given,
                wanted: this.commandData.wanted,
                image: this.commandData.image,
                cardIndex: this.commandData.cardIndex
            };
            this.httpPut("api/card/update", [], data).then((data) => {
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
