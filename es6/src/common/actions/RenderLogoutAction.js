import AbstractRenderLogoutAction from "../../../gen/common/actions/AbstractRenderLogoutAction";
import CommonView from "../views/CommonView";

export default class RenderLogoutAction extends AbstractRenderLogoutAction {

    captureActionParam() {
        this.actionParam.username = CommonView.getUsername();
    }

}

/*       S.D.G.       */
