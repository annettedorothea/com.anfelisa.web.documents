import AbstractReadPublicTestCommand from "../../../gen/navigation/commands/AbstractReadPublicTestCommand";

class ReadPublicTestCommand extends AbstractReadPublicTestCommand {
    execute() {
        return new Promise((resolve) => {
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
                this.commandData.messageKey = "readPublicTestFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
