


import AbstractLoadBoxStatisticsAction from "../../../gen/box/actions/AbstractLoadBoxStatisticsAction";

export default class LoadBoxStatisticsAction extends AbstractLoadBoxStatisticsAction {

    initActionData(data) {
        let date = new Date();
        date.setHours(0,0,0,0);
        data.todayAtMidnightInUTC = date.toISOString();
    }

}




/******* S.D.G. *******/



