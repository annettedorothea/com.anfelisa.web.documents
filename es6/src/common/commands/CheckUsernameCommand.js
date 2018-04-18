import AbstractCheckUsernameCommand from "../../../gen/common/commands/AbstractCheckUsernameCommand";

export default class CheckUsernameCommand extends AbstractCheckUsernameCommand {
    execute() {
        return new Promise((resolve, reject) => {
            if (!this.commandParam.username) {
                this.commandData.outcome = this.empty;
                resolve();
            } else {
                let queryParams = [];
                queryParams.push({
                    key: "username",
                    value: this.commandParam.username
                });
                this.httpGet("api/users/username", queryParams).then((data) => {
                    if (data.available === true) {
                        this.commandData.outcome = this.available;
                    } else {
                        this.commandData.outcome = this.notAvailable;
                    }
                    resolve();
                }, (error) => {
                    reject(error);
                });
            }
        });
    }
}

/*       S.D.G.       */
