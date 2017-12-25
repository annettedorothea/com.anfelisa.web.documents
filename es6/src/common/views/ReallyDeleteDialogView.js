import CommonView from "../views/CommonView";
import RemoveCourseAction from "../../profile/actions/RemoveCourseAction";
import DeleteBoxAction from "../../profile/actions/DeleteBoxAction";
import CloseAllDialogsAction from "../../common/actions/CloseAllDialogsAction";
import RemoveCardFromBoxAction from "../../card/actions/RemoveCardFromBoxAction";

export default class ReallyDeleteDialogView {
    static displayRemoveCourseFromUserDialog(eventData) {
        bootbox.confirm(CommonView.getTexts().user.reallyRemoveCourseFromUser, function(result) {
            if (result === true) {
                new RemoveCourseAction( {'courseId' : eventData.courseId} ).apply();
            } else {
                new CloseAllDialogsAction().apply();
            }
        });
    };

    static displayDeleteBoxDialog(eventData) {
        bootbox.confirm(CommonView.getTexts().user.reallyDeleteBox, function(result) {
            if (result === true) {
                new DeleteBoxAction( {'boxId' : eventData.boxId} ).apply();
            } else {
                new CloseAllDialogsAction().apply();
            }
        });
    };

    static displayRemoveCardFromBoxDialog(eventData) {
        bootbox.confirm(CommonView.getTexts().common.reallyRemoveCardFromBox, function(result) {
            if (result === true) {
                new RemoveCardFromBoxAction( {'boxId' : eventData.boxId, 'cardOfBoxId' : eventData.cardOfBoxId} ).apply();
            } else {
                new CloseAllDialogsAction().apply();
            }
        });
    };

}

/*                    S.D.G.                    */
