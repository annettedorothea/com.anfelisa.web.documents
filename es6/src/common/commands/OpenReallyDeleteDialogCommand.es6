'use strict';

class OpenReallyDeleteDialogCommand extends AbstractOpenReallyDeleteDialogCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData = JSON.parse(JSON.stringify(this.commandParam));
            this.commandData.outcome = this.commandParam.dialog;
			resolve();
        });
    }
}

/*       S.D.G.       */
