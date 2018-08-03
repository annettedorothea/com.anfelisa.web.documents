import AbstractScheduleNextCardCommand from "../../../gen/box/commands/AbstractScheduleNextCardCommand";

export default class ScheduleNextCardCommand extends AbstractScheduleNextCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandData.boxId
            });
            this.httpPost("api/card/schedule-next", [], {boxId: this.commandData.boxId}).then((data) => {
                this.commandData.outcome = this.ok;
                this.commandData.data = data;
                resolve();
            }, error => {
                reject(error)
            });
        });
    }
}

/*       S.D.G.       */
