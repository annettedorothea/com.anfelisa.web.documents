import React from 'react';
import Confirm from "../Confirm";
import Dictionary from "./Dictionary";
import NewCard from "./NewCard";
import EditCard from "./EditCard";
import CardItem from "./CardItem";
import DuplicateCardItem from "./DuplicateCardItem";
import {
    cancelDeleteCard,
    deleteCard,
    filterCards,
    scheduleSelectedCards,
    toggleAllScheduleCardSelection,
    toggleInputOrder
} from "../../../gen/card/ActionFunctions";

export default class CardList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const cardItems = this.props.cardView.cardList.filter((card) => card.given.indexOf(this.props.cardView.filter) >= 0 || card.wanted.indexOf(this.props.cardView.filter) >= 0).map((card) => {
            if (card.cardId === this.props.cardView.editedCard.cardId) {
                return <EditCard
                    key={card.cardId}
                    cardId={this.props.cardView.editedCard.cardId}
                    given={this.props.cardView.editedCard.given}
                    wanted={this.props.cardView.editedCard.wanted}
                    index={this.props.cardView.editedCard.index}
                    username={this.props.username}
                    password={this.props.password}
                    naturalInputOrder={this.props.cardView.naturalInputOrder}
                    image={this.props.cardView.editedCard.image}
                    texts={this.props.texts}
                    language={this.props.language}
                    selectedCardIds={this.props.cardView.selectedCardIds}
                    hasBox={this.props.categoryTree.selectedCategory.hasBox}
                />
            } else {
                return <CardItem
                    {...card}
                    key={card.cardId}
                    selectedCardIds={this.props.cardView.selectedCardIds}
                    texts={this.props.texts}
                    language={this.props.language}
                    username={this.props.username}
                    password={this.props.password}
                    userRole={this.props.role}
                    naturalInputOrder={this.props.cardView.naturalInputOrder}
                    hasBox={this.props.categoryTree.selectedCategory.hasBox}
                    editable={this.props.categoryTree.selectedCategory.editable}
                />
            }
        });
        if (this.props.categoryTree.selectedCategory.editable) {
            cardItems.push(
                <NewCard
                    key="new"
                    given={this.props.cardView.newCard.given}
                    wanted={this.props.cardView.newCard.wanted}
                    image={this.props.cardView.newCard.image}
                    file={this.props.cardView.newCard.file}
                    index={this.props.cardView.newCard.index}
                    displaySpinner={this.props.cardView.newCard.displaySpinner}
                    displayTranslateSpinner={this.props.cardView.newCard.displayTranslateSpinner}
                    cardList={this.props.cardView.cardList}
                    username={this.props.username}
                    password={this.props.password}
                    dictionaryLookup={this.props.categoryTree.selectedCategory.dictionaryLookup}
                    givenLanguage={this.props.categoryTree.selectedCategory.givenLanguage}
                    wantedLanguage={this.props.categoryTree.selectedCategory.wantedLanguage}
                    texts={this.props.texts}
                    language={this.props.language}
                    naturalInputOrder={this.props.cardView.naturalInputOrder}
                    ref={component => {
                        this.newCard = component;
                    }}
                    hasBox={this.props.categoryTree.selectedCategory.hasBox}
                />
            );
        }
        let duplicateCards = this.props.cardView.cardDuplicates.map((card) => {
            return <DuplicateCardItem
                {...card}
                key={card.cardId}
                texts={this.props.texts}
                language={this.props.language}
                username={this.props.username}
                password={this.props.password}
                userRole={this.props.role}
                naturalInputOrder={this.props.cardView.naturalInputOrder}
                hasBox={this.props.categoryTree.selectedCategory.hasBox}
            />
        });
        if (this.props.cardView.cardList.length === 0 && this.props.categoryTree.selectedCategory.editable === false) {
            return <h2>{this.props.texts.cardList.noCards[this.props.language]}</h2>
        }
        return (
            <div>
                {this.props.cardView.deleteCard.confirmDelete === true &&
                <div>
                    <Confirm {...
                        {
                            title: this.props.texts.cardList.confirmDelete.title[this.props.language],
                            message: this.props.texts.cardList.confirmDelete.message[this.props.language],
                            okText: this.props.texts.cardList.confirmDelete.ok[this.props.language],
                            cancelText: this.props.texts.cardList.confirmDelete.cancel[this.props.language],
                            ok: () => deleteCard(),
                            cancel: () => cancelDeleteCard()
                        }}/>
                </div>}

                <h1>{this.props.categoryTree.selectedCategory.categoryName}</h1>
                <table className="cardTable">
                    <thead>
                    <tr className="notPrinted">
                        <th colSpan={this.props.categoryTree.selectedCategory.hasBox === true ? 5 : 4}>
                            {this.props.categoryTree.selectedCategory.editable === true &&
                            <button title={this.props.texts.cardList.toggleInputOrder[this.props.language]} onClick={() => toggleInputOrder(this.props.cardView.naturalInputOrder)}><i className="fas fa-arrows-alt-h"/></button>}
                            <input
                                type={"text"}
                                onChange={(event) => filterCards(event.target.value)}
                                autoComplete="off"
                                value={this.props.cardView.filter}
                                placeholder={this.props.texts.cardList.filter[this.props.language]}
                            />
                        </th>
                    </tr>

                    {this.props.cardView.cardList.length > 0 && (this.props.categoryTree.selectedCategory.hasBox === true || this.props.categoryTree.selectedCategory.editable === true) &&
                    <tr className="notPrinted">
                        <th>
                            <input
                                type={"checkbox"}
                                onChange={() => toggleAllScheduleCardSelection()}
                                checked={this.props.cardView.selectedCardIds.length === this.props.cardView.cardList.length}
                            />
                        </th>
                        <th colSpan={4}>
                            {this.props.categoryTree.selectedCategory.hasBox === true &&
                            <button onClick={() => scheduleSelectedCards()}
                                    disabled={this.props.cardView.selectedCardIds.length === 0}>{this.props.texts.cardList.scheduleSelectedCards[this.props.language]}
                            </button>}
                        </th>
                    </tr>
                    }

                    </thead>

                    <tbody>
                    {cardItems}
                    {duplicateCards.length > 0 && <tr>
                        <td/>
                        <td colSpan={5}>{this.props.texts.cardList.duplicateCards[this.props.language]}</td>
                    </tr>}
                    {duplicateCards}

                    </tbody>
                </table>

                {!!this.props.categoryTree.selectedCategory.dictionaryLookup &&
                <Dictionary
                    given={this.props.cardView.newCard.given}
                    wanted={this.props.cardView.newCard.wanted}
                    givenLanguage={this.props.categoryTree.selectedCategory.givenLanguage}
                    wantedLanguage={this.props.categoryTree.selectedCategory.wantedLanguage}
                    naturalInputOrder={this.props.cardView.naturalInputOrder}
                    value={this.props.cardView.dictionaryValue}
                    setFocus={() => this.newCard.setFocus()}
                />
                }

            </div>
        );
    }
}


