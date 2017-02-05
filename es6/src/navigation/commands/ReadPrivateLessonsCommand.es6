'use strict';

class ReadPrivateLessonsCommand extends AbstractReadPrivateLessonsCommand {
    execute() {
        return new Promise((resolve) => {
            var queryParams = [];
            queryParams.push({
                key: "courseId",
                value: this.commandParam.courseId
            });
            this.httpGet("api/lessons/private", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "readPrivateLessonsFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
