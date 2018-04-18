import AbstractReadBoxesCommand from "../../../gen/navigation/commands/AbstractReadBoxesCommand";

export default class ReadBoxesCommand extends AbstractReadBoxesCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpGet("api/boxes").then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                if (error.code === 401) {
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
