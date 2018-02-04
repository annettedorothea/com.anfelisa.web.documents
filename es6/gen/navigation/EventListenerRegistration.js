import ACEController from "../ace/ACEController";
import NavigationView from "../../src/navigation/views/NavigationView";
import BreadcrumbsView from "../../src/navigation/views/BreadcrumbsView";
import ContentView from "../../src/navigation/views/ContentView";
import BoxesView from "../../src/navigation/views/BoxesView";

export default class EventListenerRegistrationNavigation {

	static init() {
		ACEController.registerListener('navigation.PublicCoursesReadEvent', NavigationView.renderPublicCourses);
		ACEController.registerListener('navigation.PublicCoursesReadEvent', BreadcrumbsView.renderPublicCoursesBreadcrumbs);
		ACEController.registerListener('navigation.PublicLessonsReadEvent', NavigationView.renderPublicLessons);
		ACEController.registerListener('navigation.PublicLessonsReadEvent', ContentView.renderPublicLessons);
		ACEController.registerListener('navigation.PublicLessonsReadEvent', BreadcrumbsView.renderPublicLessonsBreadcrumbs);
		ACEController.registerListener('navigation.PublicTestsReadEvent', NavigationView.renderPublicTests);
		ACEController.registerListener('navigation.PublicTestsReadEvent', ContentView.renderPublicTests);
		ACEController.registerListener('navigation.PublicTestsReadEvent', BreadcrumbsView.renderPublicTestsBreadcrumbs);
		ACEController.registerListener('navigation.PublicTestReadEvent', NavigationView.renderPublicTest);
		ACEController.registerListener('navigation.PublicTestReadEvent', ContentView.renderPublicTest);
		ACEController.registerListener('navigation.PublicTestReadEvent', BreadcrumbsView.renderPublicTestsBreadcrumbs);
		ACEController.registerListener('navigation.PrivateCoursesReadEvent', NavigationView.renderPrivateCourses);
		ACEController.registerListener('navigation.PrivateCoursesReadEvent', BreadcrumbsView.renderPrivateCoursesBreadcrumbs);
		ACEController.registerListener('navigation.PrivateLessonsReadEvent', NavigationView.renderPrivateLessons);
		ACEController.registerListener('navigation.PrivateLessonsReadEvent', ContentView.renderPrivateLessons);
		ACEController.registerListener('navigation.PrivateLessonsReadEvent', BreadcrumbsView.renderPrivateLessonsBreadcrumbs);
		ACEController.registerListener('navigation.PrivateTestsReadEvent', NavigationView.renderPrivateTests);
		ACEController.registerListener('navigation.PrivateTestsReadEvent', ContentView.renderPrivateTests);
		ACEController.registerListener('navigation.PrivateTestsReadEvent', BreadcrumbsView.renderPrivateTestsBreadcrumbs);
		ACEController.registerListener('navigation.PrivateTestReadEvent', NavigationView.renderPrivateTest);
		ACEController.registerListener('navigation.PrivateTestReadEvent', ContentView.renderPrivateTest);
		ACEController.registerListener('navigation.PrivateTestReadEvent', BreadcrumbsView.renderPrivateTestsBreadcrumbs);
		ACEController.registerListener('navigation.ResultReadEvent', NavigationView.renderPrivateTest);
		ACEController.registerListener('navigation.ResultReadEvent', ContentView.renderPrivateTest);
		ACEController.registerListener('navigation.ResultReadEvent', BreadcrumbsView.renderPrivateTestsBreadcrumbs);
		ACEController.registerListener('navigation.ResultReadEvent', ContentView.renderResult);
		ACEController.registerListener('navigation.StatisticsReadEvent', ContentView.renderStatistics);
		ACEController.registerListener('navigation.BoxesReadEvent', BoxesView.renderBoxes);
		ACEController.registerListener('navigation.NextCardReadEvent', ContentView.renderCard);
		ACEController.registerListener('navigation.NextCardReadEvent', BoxesView.activateBox);
	}

}

/*       S.D.G.       */
