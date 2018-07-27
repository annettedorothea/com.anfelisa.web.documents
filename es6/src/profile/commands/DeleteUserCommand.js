import AbstractDeleteUserCommand from "../../../gen/profile/commands/AbstractDeleteUserCommand";

export default class DeleteUserCommand extends AbstractDeleteUserCommand {
    execute() {
        return new Promise((resolve) => {
            this.httpDelete("api/user/delete", [], this.commandData).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                if (error.code === 400) {
                    this.commandData.error = error;
                    this.commandData.outcome = this.badRequest;
                    resolve();
                }
            });
        });
    }
}

/*       S.D.G.       */
