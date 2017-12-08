'use strict';

class ShowWordCommand extends AbstractShowWordCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.outcome = this.showWord;
            this.commandData.solution = this.commandParam.solution;
            resolve();
        });
    }
}

/*       S.D.G.       */
