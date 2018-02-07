import AbstractReadPublicCoursesCommand from "../../../gen/navigation/commands/AbstractReadPublicCoursesCommand";

export default class ReadPublicCoursesCommand extends AbstractReadPublicCoursesCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpGet("api/courses/public").then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                reject(error.text);
            });
        });
    }
}

/*       S.D.G.       */
