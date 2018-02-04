import AbstractReadResultCommand from "../../../gen/navigation/commands/AbstractReadResultCommand";

export default class ReadResultCommand extends AbstractReadResultCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.language = this.commandParam.language;
            let queryParams = [];
            queryParams.push({
                key: "resultId",
                value: this.commandParam.resultId
            });
            this.httpGet("api/results/single", queryParams).then((data) => {
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
