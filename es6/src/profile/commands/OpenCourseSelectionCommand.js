'use strict';

class OpenCourseSelectionCommand extends AbstractOpenCourseSelectionCommand {
    execute() {
        return new Promise((resolve) => {
            this.httpGet("api/users/courses").then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.coursesRead;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "readProfileCoursesFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
