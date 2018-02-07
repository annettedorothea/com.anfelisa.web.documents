import AbstractReadPublicTestCommand from "../../../gen/navigation/commands/AbstractReadPublicTestCommand";

export default class ReadPublicTestCommand extends AbstractReadPublicTestCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "testId",
                value: this.commandParam.testId
            });
            this.httpGet("api/tests/public/single", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                reject(error.text);
            });
        });
    }
}

/*       S.D.G.       */
