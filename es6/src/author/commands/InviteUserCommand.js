import AbstractInviteUserCommand from "../../../gen/author/commands/AbstractInviteUserCommand";

export default class InviteUserCommand extends AbstractInviteUserCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                categoryId: this.commandData.categoryId,
                username: this.commandData.invitedUsername
            };
            this.httpPost("api/category/invite", [], data).then((data) => {
                this.commandData.outcome = this.ok;
                this.commandData.messageKey = "userAdded";
                resolve();
            }, (error) => {
                if (error.code === 400) {
                    error.errorKey = "userDoesNotExist";
                    this.commandData.error = error;
                    this.commandData.outcome = this.userDoesNotExist;
                    resolve();
                } else {
                    reject(error);
                }
            });
        });
    }
}

/*       S.D.G.       */
