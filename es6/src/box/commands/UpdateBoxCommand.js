import AbstractUpdateBoxCommand from "../../../gen/box/commands/AbstractUpdateBoxCommand";

export default class UpdateBoxCommand extends AbstractUpdateBoxCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                boxId: this.commandData.boxId,
                maxInterval: this.commandData.maxInterval
            };
            this.httpPut("api/box/update", [], data).then((data) => {
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
