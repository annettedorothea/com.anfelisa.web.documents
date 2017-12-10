import AbstractSaveCourseSelectionCommand from "../../../gen/profile/commands/AbstractSaveCourseSelectionCommand";

export default class SaveCourseSelectionCommand extends AbstractSaveCourseSelectionCommand {
    execute() {
        return new Promise((resolve) => {
            const data = {
                courseIdList: this.commandParam.courseIdList
            };
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
