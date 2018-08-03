import AbstractPostponeCardsOfBoxCommand from "../../../gen/box/commands/AbstractPostponeCardsOfBoxCommand";

export default class PostponeCardsOfBoxCommand extends AbstractPostponeCardsOfBoxCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpPut("api/cards/postpone", [], this.commandData).then(() => {
                this.commandData.outcome = this.next;
                resolve();
            }, error => {
                reject(error)
            });
        });
    }
}

/*       S.D.G.       */
