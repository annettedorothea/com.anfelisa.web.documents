import AbstractLoadBoxesCommand from "../../../gen/box/commands/AbstractLoadBoxesCommand";

export default class LoadBoxesCommand extends AbstractLoadBoxesCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "today",
                value: this.commandData.today
            });
            this.httpGet("api/boxes/my", queryParams).then((data) => {
                this.commandData.data = data;
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
