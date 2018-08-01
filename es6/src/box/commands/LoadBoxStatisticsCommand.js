import AbstractLoadBoxStatisticsCommand from "../../../gen/box/commands/AbstractLoadBoxStatisticsCommand";

export default class LoadBoxStatisticsCommand extends AbstractLoadBoxStatisticsCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "today",
                value: this.commandData.today
            });
            queryParams.push({
                key: "boxId",
                value: this.commandData.boxId
            });
            this.httpGet("api/box/get", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.data.scheduleNext = this.commandData.scheduleNext === true && data.myCards === data.totalCards ? false : this.commandData.scheduleNext;
                console.log("LoadBoxStatisticsCommand", this.commandData.data.scheduleNext);
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
