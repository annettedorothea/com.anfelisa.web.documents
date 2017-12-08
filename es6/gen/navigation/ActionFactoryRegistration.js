import ACEController from "../ace/ACEController";
import ReadPublicCoursesAction from "../../src/navigation/actions/ReadPublicCoursesAction";
import ReadPublicLessonsAction from "../../src/navigation/actions/ReadPublicLessonsAction";
import ReadPublicTestsAction from "../../src/navigation/actions/ReadPublicTestsAction";
import ReadPublicTestAction from "../../src/navigation/actions/ReadPublicTestAction";
import ReadPrivateCoursesAction from "../../src/navigation/actions/ReadPrivateCoursesAction";
import ReadPrivateLessonsAction from "../../src/navigation/actions/ReadPrivateLessonsAction";
import ReadPrivateTestsAction from "../../src/navigation/actions/ReadPrivateTestsAction";
import ReadPrivateTestAction from "../../src/navigation/actions/ReadPrivateTestAction";
import ReadResultAction from "../../src/navigation/actions/ReadResultAction";
import ReadStatisticsAction from "../../src/navigation/actions/ReadStatisticsAction";
import ReadBoxesAction from "../../src/navigation/actions/ReadBoxesAction";
import ReadNextCardAction from "../../src/navigation/actions/ReadNextCardAction";
import ReadReinforceCardsAction from "../../src/navigation/actions/ReadReinforceCardsAction";

export default class ActionFactoryRegistrationNavigation {

	static init() {
		ACEController.registerFactory('navigation.ReadPublicCoursesAction', (actionParam) => new ReadPublicCoursesAction(actionParam));
		ACEController.registerFactory('navigation.ReadPublicLessonsAction', (actionParam) => new ReadPublicLessonsAction(actionParam));
		ACEController.registerFactory('navigation.ReadPublicTestsAction', (actionParam) => new ReadPublicTestsAction(actionParam));
		ACEController.registerFactory('navigation.ReadPublicTestAction', (actionParam) => new ReadPublicTestAction(actionParam));
		ACEController.registerFactory('navigation.ReadPrivateCoursesAction', (actionParam) => new ReadPrivateCoursesAction(actionParam));
		ACEController.registerFactory('navigation.ReadPrivateLessonsAction', (actionParam) => new ReadPrivateLessonsAction(actionParam));
		ACEController.registerFactory('navigation.ReadPrivateTestsAction', (actionParam) => new ReadPrivateTestsAction(actionParam));
		ACEController.registerFactory('navigation.ReadPrivateTestAction', (actionParam) => new ReadPrivateTestAction(actionParam));
		ACEController.registerFactory('navigation.ReadResultAction', (actionParam) => new ReadResultAction(actionParam));
		ACEController.registerFactory('navigation.ReadStatisticsAction', (actionParam) => new ReadStatisticsAction(actionParam));
		ACEController.registerFactory('navigation.ReadBoxesAction', (actionParam) => new ReadBoxesAction(actionParam));
		ACEController.registerFactory('navigation.ReadNextCardAction', (actionParam) => new ReadNextCardAction(actionParam));
		ACEController.registerFactory('navigation.ReadReinforceCardsAction', (actionParam) => new ReadReinforceCardsAction(actionParam));
	}

}

/*       S.D.G.       */
