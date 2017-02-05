'use strict';

class ValidatePasswordCommand extends AbstractValidatePasswordCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.emptyIds = [];
            if (this.commandParam.newPasswordEmpty === true) {
                this.commandData.outcome = this.empty;
                this.commandData.emptyIds.push("password");
            }
            if (this.commandParam.passwordRepetitionEmpty === true) {
                this.commandData.outcome = this.empty;
                this.commandData.emptyIds.push("passwordRepetition");
            }
            if (this.commandData.outcome != this.empty) {
                if (this.commandParam.newPassword != this.commandParam.passwordRepetition) {
                    this.commandData.outcome = this.mismatch;
                } else {
                    this.commandData.outcome = this.ok;
                }
            }
            resolve();
        });
    }
}

/*       S.D.G.       */
