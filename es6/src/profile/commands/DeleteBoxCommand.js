'use strict';

class DeleteBoxCommand extends AbstractDeleteBoxCommand {
    execute() {
        return new Promise((resolve) => {
            var queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandParam.boxId
            });
            this.httpDelete("api/boxes/delete", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.deleted;
                this.commandData.hash = "profile";
                resolve();
            }, (error) => {
                this.commandData.messageKey = "deleteBoxFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
