'use strict';

var ReinforceCardList = {};

class ReinforceView {
    static saveReinforceCardList(eventData) {
        ReinforceCardList.reinforceCardList = eventData.data.list;
    };
    
    static removeCardFromReinforceCardList() {
        ReinforceCardList.reinforceCardList.shift();
    };

    static keepCardInReinforceCardList() {
        var card = ReinforceCardList.reinforceCardList.shift();
        ReinforceCardList.reinforceCardList.push(card);
    };

}

/*                    S.D.G.                    */
