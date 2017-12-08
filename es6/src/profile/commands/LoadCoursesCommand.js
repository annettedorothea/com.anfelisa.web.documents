'use strict';

class LoadCoursesCommand extends AbstractLoadCoursesCommand {
    execute() {
        return new Promise((resolve) => {
            var queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandParam.boxId
            });
            this.httpGet("api/boxes/courses", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.loaded;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "readCoursesOfBoxFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
