'use strict';

class DisplayNextQuestionCommand extends AbstractDisplayNextQuestionCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.multipleChoiceId = this.commandParam.multipleChoiceId;
            this.commandData.outcome = this.go;
			resolve();
        });
    }
}

/*       S.D.G.       */
