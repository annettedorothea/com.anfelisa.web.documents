import AbstractCreateCardCommand from "../../../gen/author/commands/AbstractCreateCardCommand";

export default class CreateCardCommand extends AbstractCreateCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                given: this.commandData.given,
                wanted: this.commandData.wanted,
                cardIndex: this.commandData.cardIndex,
                categoryId: this.commandData.categoryId,
                image: this.commandData.image,
            };
            this.httpPost("api/card/create", [], data).then((data) => {
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
