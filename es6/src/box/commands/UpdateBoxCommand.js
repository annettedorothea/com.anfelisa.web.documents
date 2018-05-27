import AbstractUpdateBoxCommand from "../../../gen/box/commands/AbstractUpdateBoxCommand";

export default class UpdateBoxCommand extends AbstractUpdateBoxCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                boxId: this.commandParam.boxId,
                maxInterval: this.commandParam.maxInterval
            };
            this.httpPut("api/cards/postpone", [], data).then((data) => {
                this.commandData.outcome = this.ok;
                this.commandData.username = this.commandParam.username;
                this.commandData.password = this.commandParam.password;
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
