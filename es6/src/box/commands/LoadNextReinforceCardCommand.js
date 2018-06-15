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
                console.log("LoadNextReinforceCardCommand", data);
                if (data.reinforceCardId) {
                    this.commandData.outcome = this.ok;
                    this.commandData.data = data;
                } else {
                    this.commandData.outcome = this.noCard;
                    this.commandData.hash = `#box/${this.commandData.boxId}`;
                }
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
