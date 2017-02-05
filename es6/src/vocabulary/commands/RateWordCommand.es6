'use strict';

class RateWordCommand extends AbstractRateWordCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.knewIt = this.commandParam.knewIt;
            this.commandData.id = this.commandParam.id;
            this.commandData.strikeCount = this.commandParam.strikeCount;
            this.commandData.points = this.commandParam.points;
            this.commandData.wordCount = this.commandParam.wordCount;
            this.commandData.strikesOfWord = this.commandParam.strikesOfWord;
            if (this.commandData.knewIt ) {
                this.commandData.strikesOfWord++;
                if (this.commandData.strikesOfWord === 3) {
                    this.commandData.strikeCount++;
                    this.commandData.outcome = this.wordIsCorrectAndFinished;
                } else {
                    this.commandData.outcome = this.wordIsCorrectAndNotFinished;
                }
            } else {
                if (this.commandData.points > 0) {
                    this.commandData.points--;
                }
                this.commandData.outcome = this.wordIsNotCorrect;
            }
            resolve();
        });
    }
}

/*       S.D.G.       */
