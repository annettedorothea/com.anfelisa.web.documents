import AbstractRegisterUserCommand from "../../../gen/common/commands/AbstractRegisterUserCommand";

export default class RegisterUserCommand extends AbstractRegisterUserCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.language = this.commandParam.language;
            const data = {
                password: this.commandParam.password,
                username: this.commandParam.username,
                email: this.commandParam.email,
                language: this.commandParam.language
            };
            this.httpPost("api/users/register", [], data).then(() => {
                this.commandData.outcome = this.ok;
                this.commandData.password = this.commandParam.password;
                this.commandData.username = this.commandParam.username;
                this.commandData.hash = "#dashboard";
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
