'use strict';

class OpenNewPasswordCommand extends AbstractOpenNewPasswordCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.outcome = this.ok;
            this.commandData.username = this.commandParam.username;
            this.commandData.password = this.commandParam.password;
			resolve();
        });
    }
}

/*       S.D.G.       */
