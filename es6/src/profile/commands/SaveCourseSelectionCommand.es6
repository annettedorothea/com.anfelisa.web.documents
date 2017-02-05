'use strict';

class SaveCourseSelectionCommand extends AbstractSaveCourseSelectionCommand {
    execute() {
        return new Promise((resolve) => {
            var data = {
                courseIdList: this.commandParam.courseIdList,
                username: this.commandParam.username
            }
            this.httpPost("api/users/courses", [], data).then(() => {
                this.commandData.outcome = this.saved;
                this.commandData.hash = "profile";
                resolve();
            }, (error) => {
                this.commandData.messageKey = "addCoursesFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
