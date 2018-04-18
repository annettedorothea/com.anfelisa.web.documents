import AbstractReadStatisticsCommand from "../../../gen/navigation/commands/AbstractReadStatisticsCommand";

export default class ReadStatisticsCommand extends AbstractReadStatisticsCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "month",
                value: this.commandParam.month
            });
            queryParams.push({
                key: "year",
                value: this.commandParam.year
            });
            this.httpGet("api/statistics", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                if (error.code === 401) {
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
