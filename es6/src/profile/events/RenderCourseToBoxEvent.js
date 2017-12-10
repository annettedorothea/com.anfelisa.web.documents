import AbstractRenderCourseToBoxEvent from "../../../gen/profile/events/AbstractRenderCourseToBoxEvent";

export default class RenderCourseToBoxEvent extends AbstractRenderCourseToBoxEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        this.eventData.data.courseToBoxAdditionList.forEach((item) => {
            if (item.autoAdd === null) {
                item.nullSelected = true;
            } else if (item.autoAdd === false) {
                item.falseSelected = true;
            } else if (item.autoAdd === true) {
                item.trueSelected = true;
            }
        });
    }
}

/*       S.D.G.       */
