import AbstractSubmitRegistrationCommand from "../../../gen/profile/commands/AbstractSubmitRegistrationCommand";

export default class SubmitRegistrationCommand extends AbstractSubmitRegistrationCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.language = this.commandParam.language;
            if (!this.commandParam.password || !this.commandParam.passwordRepetition ||
                !this.commandParam.email || !this.commandParam.username || this.commandParam.usernameExists) {
                this.commandData.messageKey = "dataInvalid";
                this.commandData.outcome = this.dataInvalid;
                resolve();
            } else if (this.commandParam.password !== this.commandParam.passwordRepetition) {
                this.commandData.messageKey = "passwordMismatch";
                this.commandData.outcome = this.mismatch;
                resolve();
            } else {
                const data = {
                    password: this.commandParam.password,
                    username: this.commandParam.username,
                    email: this.commandParam.email,
                    language: this.commandParam.language
                };
                this.httpPost("api/users/register", [], data).then(() => {
                    this.commandData.outcome = this.saved;
                    this.commandData.hash = "profile";
                    this.commandData.password = this.commandParam.password;
                    this.commandData.username = this.commandParam.username;
                    resolve();
                }, (error) => {
                    this.commandData.messageKey = "registerUserFailed";
                    this.commandData.error = error;
                    this.commandData.outcome = this.error;
                    resolve();
                });
            }
        });
    }
}

/*       S.D.G.       */