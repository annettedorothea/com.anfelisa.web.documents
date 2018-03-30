import AbstractReadNextCardOkEvent from "../../../gen/navigation/events/AbstractReadNextCardOkEvent";
import AppUtils from "../../app/AppUtils";
import CommonView from "../../common/views/CommonView";

export default class ReadNextCardOkEvent extends AbstractReadNextCardOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
        this.eventData.data.formattedLast = this.formatDate(this.eventData.data.last);
        this.eventData.data.formattedNext = this.formatDate(this.eventData.data.next);
        if (this.eventData.data.daysBehind > 0) {
            this.eventData.data.showDaysBehind = true;
            this.eventData.data.formattedDaysBehindMessage = this.eventData.data.daysBehind === 1 ? CommonView.getTexts().common.dayBehindMessage : CommonView.getTexts().common.daysBehindMessage.replace("%number%", this.eventData.data.daysBehind);
        } else {
            this.eventData.data.showDaysBehind = false;
        }
    }

    formatDate(timestamp) {
        if (timestamp) {
            try {
                const date = new Date(timestamp);
                return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
            } catch (error) {
                return undefined;
            }
        } else {
            return undefined;
        }
    }
}

/*       S.D.G.       */
