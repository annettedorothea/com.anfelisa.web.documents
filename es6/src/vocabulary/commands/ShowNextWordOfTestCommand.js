'use strict';

class ShowNextWordOfTestCommand extends AbstractShowNextWordOfTestCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.nextRandomIndex = this.commandParam.nextRandomIndex;
            this.commandData.outcome = this.showNextWordOfTest;
            resolve();
        });
    }
}

/*       S.D.G.       */
