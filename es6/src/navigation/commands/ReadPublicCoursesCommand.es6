'use strict';

class ReadPublicCoursesCommand extends AbstractReadPublicCoursesCommand {
    execute() {
        return new Promise((resolve) => {
            this.httpGet("api/courses/public").then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "readPublicCoursesFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
