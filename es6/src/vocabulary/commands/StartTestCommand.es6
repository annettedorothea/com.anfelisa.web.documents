'use strict';

class StartTestCommand extends AbstractStartTestCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.wordCount = this.commandParam.wordCount;
            this.commandData.testMode = this.commandParam.testMode;
            this.commandData.outcome = this.testStarted;
            resolve();
        });
    }
}

/*       S.D.G.       */
