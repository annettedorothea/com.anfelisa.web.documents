import Event from "../../../gen/ace/Event";

export default class AbstractShowCorrectMultipleChoiceLastEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'multiplechoice.ShowCorrectMultipleChoiceLastEvent');
    }
	getNotifiedListeners() {
	    return [ "multiplechoice.views.MultipleChoiceView.showCorrect", "multiplechoice.views.MultipleChoiceView.showCorrecture" ];
	}
}


/*       S.D.G.       */
