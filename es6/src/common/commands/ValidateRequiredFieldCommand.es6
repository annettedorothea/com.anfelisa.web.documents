'use strict';

class ValidateRequiredFieldCommand extends AbstractValidateRequiredFieldCommand {
    execute() {
        return new Promise((resolve) => {
            if (!this.commandParam.value) {
                this.commandData.outcome = this.fieldEmpty;
                this.commandData.id = this.commandParam.id;
            } else {
                this.commandData.outcome = this.fieldNotEmpty;
                this.commandData.id = this.commandParam.id;
            }
            resolve();
        });
    }
}

/*       S.D.G.       */
