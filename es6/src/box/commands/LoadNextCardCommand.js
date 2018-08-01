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
                this.commandData.data = data;
                this.commandData.data.index = 0;
                this.commandData.data.enableScoreButtons = false;
                this.commandData.data.displayImage = false;
                this.commandData.data.scheduleNext = this.commandData.scheduleNext;
                console.log("LoadNextCardCommand", this.commandData.data.scheduleNext);
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
