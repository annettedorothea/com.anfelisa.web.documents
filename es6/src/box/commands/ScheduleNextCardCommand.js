import AbstractScheduleNextCardCommand from "../../../gen/box/commands/AbstractScheduleNextCardCommand";

export default class ScheduleNextCardCommand extends AbstractScheduleNextCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandData.boxId
            });
            this.httpPost("api/card/schedule-next", queryParams).then((data) => {
                this.commandData.outcome = this.ok;
                this.commandData.data = data;
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
