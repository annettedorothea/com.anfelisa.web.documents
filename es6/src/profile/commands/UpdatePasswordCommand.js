import AbstractUpdatePasswordCommand from "../../../gen/profile/commands/AbstractUpdatePasswordCommand";

export default class UpdatePasswordCommand extends AbstractUpdatePasswordCommand {
    execute() {
        return new Promise((resolve) => {
            if (this.commandParam.newPasswordEmpty || this.commandParam.passwordRepetitionEmpty) {
                this.commandData.messageKey = "dataInvalid";
                this.commandData.outcome = this.dataInvalid;
                resolve();
            } else if (this.commandParam.newPassword !== this.commandParam.passwordRepetition) {
                this.commandData.messageKey = "passwordMismatch";
                this.commandData.outcome = this.mismatch;
                resolve();
            } else {
                const data = {
                    password: this.commandParam.newPassword
                };
                this.httpPut("api/users/password", [], data).then(() => {
                    this.commandData.outcome = this.saved;
                    this.commandData.hash = "profile";
                    this.commandData.password = this.commandParam.newPassword;
                    this.commandData.username = this.commandParam.username;
                    resolve();
                }, (error) => {
                    this.commandData.messageKey = "updatePasswordFailed";
                    this.commandData.error = error;
                    this.commandData.outcome = this.error;
                    resolve();
                });
            }
        });
    }
}

/*       S.D.G.       */
