import ACEController from "../ace/ACEController";
import CorrectWordAction from "../../src/vocabulary/actions/CorrectWordAction";
import IsTestFinishedAction from "../../src/vocabulary/actions/IsTestFinishedAction";
import IsRatedTestFinishedAction from "../../src/vocabulary/actions/IsRatedTestFinishedAction";
import ShowNextWordOfTestAction from "../../src/vocabulary/actions/ShowNextWordOfTestAction";
import ShowWordAction from "../../src/vocabulary/actions/ShowWordAction";
import StartTestAction from "../../src/vocabulary/actions/StartTestAction";
import RateWordAction from "../../src/vocabulary/actions/RateWordAction";
import RepeatComplexCardAction from "../../src/vocabulary/actions/RepeatComplexCardAction";

export default class ActionFactoryRegistrationVocabulary {

	static init() {
		ACEController.registerFactory('vocabulary.CorrectWordAction', (actionParam) => new CorrectWordAction(actionParam));
		ACEController.registerFactory('vocabulary.IsTestFinishedAction', (actionParam) => new IsTestFinishedAction(actionParam));
		ACEController.registerFactory('vocabulary.IsRatedTestFinishedAction', (actionParam) => new IsRatedTestFinishedAction(actionParam));
		ACEController.registerFactory('vocabulary.ShowNextWordOfTestAction', (actionParam) => new ShowNextWordOfTestAction(actionParam));
		ACEController.registerFactory('vocabulary.ShowWordAction', (actionParam) => new ShowWordAction(actionParam));
		ACEController.registerFactory('vocabulary.StartTestAction', (actionParam) => new StartTestAction(actionParam));
		ACEController.registerFactory('vocabulary.RateWordAction', (actionParam) => new RateWordAction(actionParam));
		ACEController.registerFactory('vocabulary.RepeatComplexCardAction', (actionParam) => new RepeatComplexCardAction(actionParam));
	}

}

/*       S.D.G.       */
