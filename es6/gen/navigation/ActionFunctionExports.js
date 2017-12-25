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

export function readPublicCourses(actionParam) {
    new ReadPublicCoursesAction(actionParam).apply();
}

export function readPublicLessons(actionParam) {
    new ReadPublicLessonsAction(actionParam).apply();
}

export function readPublicTests(actionParam) {
    new ReadPublicTestsAction(actionParam).apply();
}

export function readPublicTest(actionParam) {
    new ReadPublicTestAction(actionParam).apply();
}

export function readPrivateCourses(actionParam) {
    new ReadPrivateCoursesAction(actionParam).apply();
}

export function readPrivateLessons(actionParam) {
    new ReadPrivateLessonsAction(actionParam).apply();
}

export function readPrivateTests(actionParam) {
    new ReadPrivateTestsAction(actionParam).apply();
}

export function readPrivateTest(actionParam) {
    new ReadPrivateTestAction(actionParam).apply();
}

export function readResult(actionParam) {
    new ReadResultAction(actionParam).apply();
}

export function readStatistics(actionParam) {
    new ReadStatisticsAction(actionParam).apply();
}

export function readBoxes(actionParam) {
    new ReadBoxesAction(actionParam).apply();
}

export function readNextCard(actionParam) {
    new ReadNextCardAction(actionParam).apply();
}

export function readReinforceCards(actionParam) {
    new ReadReinforceCardsAction(actionParam).apply();
}


/*       S.D.G.       */
