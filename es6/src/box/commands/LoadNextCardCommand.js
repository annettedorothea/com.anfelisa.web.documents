import AbstractLoadNextCardCommand from "../../../gen/box/commands/AbstractLoadNextCardCommand";

export default class LoadNextCardCommand extends AbstractLoadNextCardCommand {
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
            this.httpGet("api/box/next-card", queryParams).then((data) => {
                console.log("data", data);
                console.log("this.commandData", this.commandData);
                this.commandData.data = data;
                if (data.scheduledCardId) {
                    this.commandData.outcome = this.ok;
                } else {
                    if (this.commandData.scheduleNext === true) {
                        this.commandData.outcome = this.scheduleNext;
                    } else {
                        this.commandData.outcome = this.doNotScheduleNext;
                    }
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
