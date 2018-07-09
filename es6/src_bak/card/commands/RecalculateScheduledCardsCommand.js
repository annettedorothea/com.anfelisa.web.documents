import AbstractRecalculateScheduledCardsCommand
    from "../../../gen/card/commands/AbstractRecalculateScheduledCardsCommand";

export default class RecalculateScheduledCardsCommand extends AbstractRecalculateScheduledCardsCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandParam.boxId
            });
            queryParams.push({
                key: "daysBehind",
                value: this.commandParam.daysBehind
            });
            this.httpPut("api/boxes/recalculate", queryParams).then(() => {
                this.commandData.outcome = this.ok;
                this.commandData.boxId = this.commandParam.boxId;
                resolve();
            }, (error) => {
                reject(error);
            });
        });
    }
}

/*       S.D.G.       */
