import AbstractSearchDuplicateCardsAction from "../../../gen/author/actions/AbstractSearchDuplicateCardsAction";

export default class SearchDuplicateCardsAction extends AbstractSearchDuplicateCardsAction {

    initActionData() {
        this.actionData.given = this.actionParam.given;
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.categoryId = this.actionParam.categoryId;
    }

}

/*       S.D.G.       */
