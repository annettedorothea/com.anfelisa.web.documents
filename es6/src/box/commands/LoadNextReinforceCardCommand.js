import AbstractLoadNextReinforceCardCommand from "../../../gen/box/commands/AbstractLoadNextReinforceCardCommand";

export default class LoadNextReinforceCardCommand extends AbstractLoadNextReinforceCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandData.boxId
            });
            this.httpGet("api/box/next-reinforce-card", queryParams).then((data) => {
                if (data.reinforceCardId) {
                    this.commandData.outcome = this.ok;
                    this.commandData.data = data;
                    this.commandData.data.index = 0;
                    this.commandData.data.enableScoreButtons = false;
                    this.commandData.data.displayImage = false;
                } else {
                    this.commandData.outcome = this.noCard;
                    this.commandData.hash = `#box/${this.commandData.boxId}`;
                }
                resolve();
            }, error => {
                reject(error)
            });
        });
    }
}

/*       S.D.G.       */
