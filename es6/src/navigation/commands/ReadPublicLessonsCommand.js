import AbstractReadPublicLessonsCommand from "../../../gen/navigation/commands/AbstractReadPublicLessonsCommand";

class ReadPublicLessonsCommand extends AbstractReadPublicLessonsCommand {
    execute() {
        return new Promise((resolve) => {
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
                this.commandData.messageKey = "readPublicLessonsFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
