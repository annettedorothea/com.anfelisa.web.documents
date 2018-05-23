import AbstractLoadWantedImageOfEditedCardAction from "../../../gen/author/actions/AbstractLoadWantedImageOfEditedCardAction";

export default class LoadWantedImageOfEditedCardAction extends AbstractLoadWantedImageOfEditedCardAction {

    initActionData() {
        this.actionData.image = this.actionParam.image;
    }

}

/*       S.D.G.       */
