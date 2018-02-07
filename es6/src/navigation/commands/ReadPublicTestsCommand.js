import AbstractReadPublicTestsCommand from "../../../gen/navigation/commands/AbstractReadPublicTestsCommand";

export default class ReadPublicTestsCommand extends AbstractReadPublicTestsCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "lessonId",
                value: this.commandParam.lessonId
            });
            this.httpGet("api/tests/public", queryParams).then((data) => {
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
