

import AbstractInitBoxesForDayAction from "../../../gen/box/actions/AbstractInitBoxesForDayAction";

export default class InitBoxesForDayAction extends AbstractInitBoxesForDayAction {

    initActionData(data) {
        let date = new Date();
        date.setHours(0,0,0,0);
        data.todayAtMidnightInUTC = date.toISOString();
    }

}




/******* S.D.G. *******/



