import AbstractReadPrivateLessonsCommand from "../../../gen/navigation/commands/AbstractReadPrivateLessonsCommand";

export default class ReadPrivateLessonsCommand extends AbstractReadPrivateLessonsCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "courseId",
                value: this.commandParam.courseId
            });
            this.httpGet("api/lessons/private", queryParams).then((data) => {
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
