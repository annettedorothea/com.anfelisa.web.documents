import AbstractRemoveCardFromBoxCommand from "../../../gen/card/commands/AbstractRemoveCardFromBoxCommand";

export default class RemoveCardFromBoxCommand extends AbstractRemoveCardFromBoxCommand {
    execute() {
        return new Promise((resolve) => {
            let queryParams = [];
            queryParams.push({
                key: "scheduledCardId",
                value: this.commandParam.cardOfBoxId
            });
            this.httpDelete("api/cards/removeFromBox", queryParams).then(() => {
                this.commandData.outcome = this.scored;
                this.commandData.hash = "box/" + this.commandParam.boxId;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "removeFromBoxFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
