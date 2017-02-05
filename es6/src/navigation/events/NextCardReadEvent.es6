'use strict';

class NextCardReadEvent extends AbstractNextCardReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        this.eventData.data.formattedLast = this.formatDate(this.eventData.data.last);
        this.eventData.data.formattedNext = this.formatDate(this.eventData.data.next);
    }
    formatDate(timestamp) {
        if (timestamp) {
            try {
                var date = new Date(timestamp);
                return date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear();
            } catch(error) {
                return undefined;
            }
        } else {
            return undefined;
        }
    }
}

/*       S.D.G.       */
