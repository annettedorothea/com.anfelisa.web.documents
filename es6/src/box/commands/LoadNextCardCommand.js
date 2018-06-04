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
