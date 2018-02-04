import AbstractReadPrivateCoursesCommand from "../../../gen/navigation/commands/AbstractReadPrivateCoursesCommand";

export default class ReadPrivateCoursesCommand extends AbstractReadPrivateCoursesCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpGet("api/courses/private").then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                if (error.code === 401) {
                    this.commandData.outcome = this.unauthorized;
                    resolve();
                } else {
                    reject(error.text);
                }
            });
        });
    }
}

/*       S.D.G.       */
