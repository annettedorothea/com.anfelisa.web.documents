'use strict';

class ReadPrivateCoursesCommand extends AbstractReadPrivateCoursesCommand {
    execute() {
        return new Promise((resolve) => {
            this.httpGet("api/courses/private").then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "readPrivateCoursesFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
