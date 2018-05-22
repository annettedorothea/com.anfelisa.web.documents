import AbstractLoadWantedImageAction from "../../../gen/author/actions/AbstractLoadWantedImageAction";

export default class LoadWantedImageAction extends AbstractLoadWantedImageAction {

    initActionData() {
        this.actionData.image = this.actionParam.image;
    }

}

/*       S.D.G.       */
