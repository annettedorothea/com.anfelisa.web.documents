'use strict';

class CorrectWordCommand extends AbstractCorrectWordCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.solution = this.commandParam.solution.trim();
            this.commandData.answer = this.commandParam.answer.trim();
            this.commandData.id = this.commandParam.id;
            this.commandData.strikeCount = this.commandParam.strikeCount;
            this.commandData.points = this.commandParam.points;
            this.commandData.wordCount = this.commandParam.wordCount;
            this.commandData.strikesOfWord = this.commandParam.strikesOfWord;
            if (this.commandData.solution === this.commandData.answer) {
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
