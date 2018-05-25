import AbstractLoadBoxesCommand from "../../../gen/box/commands/AbstractLoadBoxesCommand";

export default class LoadBoxesCommand extends AbstractLoadBoxesCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpGet("api/boxes/all").then((data) => {
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
