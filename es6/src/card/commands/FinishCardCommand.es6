'use strict';

class FinishCardCommand extends AbstractFinishCardCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.points  = this.commandParam.points;
            this.commandData.maxPoints  = this.commandParam.maxPoints;
            this.commandData.outcome = this.cardFinished;
            resolve();
        });
    }
}

/*       S.D.G.       */
