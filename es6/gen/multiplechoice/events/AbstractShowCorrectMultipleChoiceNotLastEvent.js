import Event from "../../../gen/ace/Event";

export default class AbstractShowCorrectMultipleChoiceNotLastEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'multiplechoice.ShowCorrectMultipleChoiceNotLastEvent');
    }
	getNotifiedListeners() {
	    return [ "multiplechoice.views.MultipleChoiceView.showCorrect", "multiplechoice.views.MultipleChoiceView.showCorrecture", "multiplechoice.views.MultipleChoiceView.enableNextButton" ];
	}
}


/*       S.D.G.       */
