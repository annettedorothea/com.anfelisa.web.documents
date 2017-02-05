'use strict';

class IsTestFinishedCommand extends AbstractIsTestFinishedCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.strikeCount = this.commandParam.strikeCount;
            this.commandData.points = this.commandParam.points;
            this.commandData.wordCount = this.commandParam.wordCount;
            if (this.commandParam.points === 0) {
                this.commandData.outcome = this.testFailed;
            } else if (this.commandParam.strikeCount < this.commandParam.wordCount) {
                this.commandData.outcome = this.goOnWithTest;
            } else {
                this.commandData.outcome = this.testFinishedSuccessfully;
            }
            resolve();
        });
    }
}

/*       S.D.G.       */
