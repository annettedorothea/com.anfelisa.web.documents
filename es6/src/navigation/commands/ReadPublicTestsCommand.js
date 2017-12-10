import AbstractReadPublicTestsCommand from "../../../gen/navigation/commands/AbstractReadPublicTestsCommand";

export default class ReadPublicTestsCommand extends AbstractReadPublicTestsCommand {
    execute() {
        return new Promise((resolve) => {
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
                this.commandData.messageKey = "readPublicTestsFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
