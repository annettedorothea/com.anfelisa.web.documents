'use strict';

class OpenBoxCreationCommand extends AbstractOpenBoxCreationCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
