import AbstractDeleteUserCommand from "../../../gen/admin/commands/AbstractDeleteUserCommand";

export default class DeleteUserCommand extends AbstractDeleteUserCommand {
    execute() {
        return new Promise((resolve) => {
            const data = {
                usernameToBeDeleted: this.commandData.usernameToBeDeleted
            };
            this.httpDelete("api/user/delete", [], data).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            }, error => {
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
