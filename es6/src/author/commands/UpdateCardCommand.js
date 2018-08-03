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
            }, error => {
                reject(error)
            });
        });
    }
}

/*       S.D.G.       */
