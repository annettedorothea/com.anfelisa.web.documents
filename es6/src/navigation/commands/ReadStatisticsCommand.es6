'use strict';

class ReadStatisticsCommand extends AbstractReadStatisticsCommand {
    execute() {
        return new Promise((resolve) => {
            var queryParams = [];
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
                this.commandData.messageKey = "readStatisticsFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
