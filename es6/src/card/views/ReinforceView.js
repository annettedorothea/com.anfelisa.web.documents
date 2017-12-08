
let ReinforceCardList = {};

export default class ReinforceView {
    static saveReinforceCardList(eventData) {
        ReinforceCardList.reinforceCardList = eventData.data.list;
    };

    static removeCardFromReinforceCardList() {
        ReinforceCardList.reinforceCardList.shift();
    };

    static keepCardInReinforceCardList() {
        let card = ReinforceCardList.reinforceCardList.shift();
        ReinforceCardList.reinforceCardList.push(card);
    };

}

/*                    S.D.G.                    */
