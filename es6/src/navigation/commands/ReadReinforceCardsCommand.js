import AbstractReadReinforceCardsCommand from "../../../gen/navigation/commands/AbstractReadReinforceCardsCommand";

export default class ReadReinforceCardsCommand extends AbstractReadReinforceCardsCommand {
    execute() {
        return new Promise((resolve) => {
            let queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandParam.boxId
            });
            this.httpGet("api/cards/reinforce", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "readReinforceCardsFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
