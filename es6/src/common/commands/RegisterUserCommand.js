import AbstractRegisterUserCommand from "../../../gen/common/commands/AbstractRegisterUserCommand";

export default class RegisterUserCommand extends AbstractRegisterUserCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                password: this.commandData.password,
                username: this.commandData.username,
                email: this.commandData.email,
                language: this.commandData.language,
                token: this.commandData.token
            };
            this.httpPost("api/users/register", [], data).then(() => {
                this.commandData.outcome = this.ok;
                this.commandData.hash = "#";
                this.commandData.messageKey = "confirmEmail";
                resolve();
            }, (error) => {
                error.errorKey = "registerUserFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
