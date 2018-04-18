import AbstractRemoveCourseCommand from "../../../gen/profile/commands/AbstractRemoveCourseCommand";

export default class RemoveCourseCommand extends AbstractRemoveCourseCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "courseId",
                value: this.commandParam.courseId
            });
            this.httpDelete("api/users/course", queryParams).then(() => {
                this.commandData.hash = "profile";
                this.commandData.outcome = this.deleted;
                resolve();
            }, (error) => {
                reject(error);
            });
        });
    }
}

/*       S.D.G.       */
