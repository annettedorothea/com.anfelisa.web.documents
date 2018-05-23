import AbstractLoadWantedImageAction from "../../../gen/author/actions/AbstractLoadWantedImageOfNewCardAction";

export default class LoadWantedImageOfNewCardAction extends AbstractLoadWantedImageAction {

    initActionData() {
        this.actionData.image = this.actionParam.image;
    }

}

/*       S.D.G.       */
