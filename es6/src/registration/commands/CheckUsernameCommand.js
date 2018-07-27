import AbstractCheckUsernameCommand from "../../../gen/registration/commands/AbstractCheckUsernameCommand";

export default class CheckUsernameCommand extends AbstractCheckUsernameCommand {
    execute() {
        return new Promise((resolve) => {
            if (!this.commandData.username) {
                this.commandData.outcome = this.empty;
                resolve();
            } else {
                let queryParams = [];
                queryParams.push({
                    key: "username",
                    value: this.commandData.username
                });
                this.httpGet("api/users/username", queryParams).then((data) => {
                    if (data.available === true) {
                        this.commandData.outcome = this.available;
                    } else {
                        this.commandData.outcome = this.notAvailable;
                    }
                    resolve();
                });
            }
        });
    }
}

/*       S.D.G.       */
