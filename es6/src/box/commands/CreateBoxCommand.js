import AbstractCreateBoxCommand from "../../../gen/box/commands/AbstractCreateBoxCommand";

export default class CreateBoxCommand extends AbstractCreateBoxCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                categoryId: this.commandData.categoryId,
                maxInterval: this.commandData.maxInterval
            };
            this.httpPost("api/box/create", [], data).then((data) => {
                this.commandData.outcome = this.ok;
                this.commandData.hash = "#dashboard";
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
