import ACEController from "../ace/ACEController";
import NavigationView from "../../src/navigation/views/NavigationView";
import BreadcrumbsView from "../../src/navigation/views/BreadcrumbsView";
import ContentView from "../../src/navigation/views/ContentView";
import ErrorView from "../../src/common/views/ErrorView";
import BoxesView from "../../src/navigation/views/BoxesView";
import ReinforceView from "../../src/card/views/ReinforceView";

export default class EventListenerRegistrationNavigation {

	static init() {
		ACEController.registerListener('navigation.ReadPublicCoursesOkEvent', NavigationView.renderPublicCourses);
		ACEController.registerListener('navigation.ReadPublicCoursesOkEvent', BreadcrumbsView.renderPublicCoursesBreadcrumbs);
		ACEController.registerListener('navigation.ReadPublicLessonsOkEvent', NavigationView.renderPublicLessons);
		ACEController.registerListener('navigation.ReadPublicLessonsOkEvent', ContentView.renderPublicLessons);
		ACEController.registerListener('navigation.ReadPublicLessonsOkEvent', BreadcrumbsView.renderPublicLessonsBreadcrumbs);
		ACEController.registerListener('navigation.ReadPublicTestsOkEvent', NavigationView.renderPublicTests);
		ACEController.registerListener('navigation.ReadPublicTestsOkEvent', ContentView.renderPublicTests);
		ACEController.registerListener('navigation.ReadPublicTestsOkEvent', BreadcrumbsView.renderPublicTestsBreadcrumbs);
		ACEController.registerListener('navigation.ReadPublicTestOkEvent', NavigationView.renderPublicTest);
		ACEController.registerListener('navigation.ReadPublicTestOkEvent', ContentView.renderPublicTest);
		ACEController.registerListener('navigation.ReadPublicTestOkEvent', BreadcrumbsView.renderPublicTestsBreadcrumbs);
		ACEController.registerListener('navigation.ReadPrivateCoursesOkEvent', NavigationView.renderPrivateCourses);
		ACEController.registerListener('navigation.ReadPrivateCoursesOkEvent', BreadcrumbsView.renderPrivateCoursesBreadcrumbs);
		ACEController.registerListener('navigation.ReadPrivateCoursesUnauthorizedEvent', ErrorView.renderError);
		ACEController.registerListener('navigation.ReadPrivateLessonsOkEvent', NavigationView.renderPrivateLessons);
		ACEController.registerListener('navigation.ReadPrivateLessonsOkEvent', ContentView.renderPrivateLessons);
		ACEController.registerListener('navigation.ReadPrivateLessonsOkEvent', BreadcrumbsView.renderPrivateLessonsBreadcrumbs);
		ACEController.registerListener('navigation.ReadPrivateLessonsUnauthorizedEvent', ErrorView.renderError);
		ACEController.registerListener('navigation.ReadPrivateTestsOkEvent', NavigationView.renderPrivateTests);
		ACEController.registerListener('navigation.ReadPrivateTestsOkEvent', ContentView.renderPrivateTests);
		ACEController.registerListener('navigation.ReadPrivateTestsOkEvent', BreadcrumbsView.renderPrivateTestsBreadcrumbs);
		ACEController.registerListener('navigation.ReadPrivateTestsUnauthorizedEvent', ErrorView.renderError);
		ACEController.registerListener('navigation.ReadPrivateTestOkEvent', NavigationView.renderPrivateTest);
		ACEController.registerListener('navigation.ReadPrivateTestOkEvent', ContentView.renderPrivateTest);
		ACEController.registerListener('navigation.ReadPrivateTestOkEvent', BreadcrumbsView.renderPrivateTestsBreadcrumbs);
		ACEController.registerListener('navigation.ReadPrivateTestUnauthorizedEvent', ErrorView.renderError);
		ACEController.registerListener('navigation.ReadResultOkEvent', NavigationView.renderPrivateTest);
		ACEController.registerListener('navigation.ReadResultOkEvent', ContentView.renderPrivateTest);
		ACEController.registerListener('navigation.ReadResultOkEvent', BreadcrumbsView.renderPrivateTestsBreadcrumbs);
		ACEController.registerListener('navigation.ReadResultOkEvent', ContentView.renderResult);
		ACEController.registerListener('navigation.ReadResultUnauthorizedEvent', ErrorView.renderError);
		ACEController.registerListener('navigation.ReadStatisticsOkEvent', ContentView.renderStatistics);
		ACEController.registerListener('navigation.ReadStatisticsUnauthorizedEvent', ErrorView.renderError);
		ACEController.registerListener('navigation.ReadBoxesOkEvent', BoxesView.renderBoxes);
		ACEController.registerListener('navigation.ReadBoxesUnauthorizedEvent', ErrorView.renderError);
		ACEController.registerListener('navigation.ReadNextCardOkEvent', ContentView.renderCard);
		ACEController.registerListener('navigation.ReadNextCardOkEvent', BoxesView.activateBox);
		ACEController.registerListener('navigation.ReadNextCardUnauthorizedEvent', ErrorView.renderError);
		ACEController.registerListener('navigation.ReadReinforceCardsOkEvent', ReinforceView.saveReinforceCardList);
		ACEController.registerListener('navigation.ReadReinforceCardsUnauthorizedEvent', ErrorView.renderError);
	}

}

/*       S.D.G.       */
