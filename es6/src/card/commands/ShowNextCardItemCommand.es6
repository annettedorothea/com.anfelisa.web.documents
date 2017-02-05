'use strict';

class ShowNextCardItemCommand extends AbstractShowNextCardItemCommand {
    execute() {
        return new Promise((resolve) => {
            if (this.commandParam.flag === 'card') {
                this.commandData.outcome = this.showWanted;
            } else if (this.commandParam.flag === 'line') {
                this.commandData.outcome = this.showNextLine;
            } else if (this.commandParam.flag === 'word') {
                this.commandData.outcome = this.showNextWord;
            }
            resolve();
        });
    }
}

/*       S.D.G.       */
