import AbstractReadPublicLessonsCommand from "../../../gen/navigation/commands/AbstractReadPublicLessonsCommand";

export default class ReadPublicLessonsCommand extends AbstractReadPublicLessonsCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "courseId",
                value: this.commandParam.courseId
            });
            this.httpGet("api/lessons/public", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                reject(error);
            });
        });
    }
}

/*       S.D.G.       */
