'use strict';

class SubmitNewPasswordCommand extends AbstractSubmitNewPasswordCommand {
    execute() {
        return new Promise((resolve) => {
            if (!this.commandParam.newPassword || !this.commandParam.passwordRepetition) {
                this.commandData.messageKey = "dataInvalid";
                this.commandData.outcome = this.dataInvalid;
                resolve();
            } else if (this.commandParam.newPassword != this.commandParam.passwordRepetition) {
                this.commandData.messageKey = "passwordMismatch";
                this.commandData.outcome = this.mismatch;
                resolve();
            } else {
                var data = {
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
