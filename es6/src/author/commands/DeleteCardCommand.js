import AbstractDeleteCardCommand from "../../../gen/author/commands/AbstractDeleteCardCommand";

export default class DeleteCardCommand extends AbstractDeleteCardCommand {
    execute() {
        return new Promise((resolve) => {
            let queryParams = [];
            queryParams.push({
                key: "cardId",
                value: this.commandData.cardId
            });
            this.httpDelete("api/card/delete", queryParams).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            }, error => {
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
