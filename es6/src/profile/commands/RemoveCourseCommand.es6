'use strict';

class RemoveCourseCommand extends AbstractRemoveCourseCommand {
    execute() {
        return new Promise((resolve) => {
            var queryParams = [];
            queryParams.push({
                key: "courseId",
                value: this.commandParam.courseId
            });
            this.httpDelete("api/users/course", queryParams).then(() => {
                this.commandData.hash = "profile";
                this.commandData.outcome = this.deleted;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "removeCoursesFromUserFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
