import React from 'react';
import Confirm from "./Confirm";
import DeleteCardAction from "../author/actions/DeleteCardAction";
import EditCardAction from "../author/actions/EditCardAction";
import DeleteCardClickAction from "../author/actions/DeleteCardClickAction";
import CancelDeleteCardAction from "../author/actions/CancelDeleteCardAction";
import FilterCardsAction from "../author/actions/FilterCardsAction";
import ToggleInputOrderAction from "../author/actions/ToggleInputOrderAction";
import ToggleUseDictionaryAction from "../author/actions/ToggleUseDictionaryAction";
import Dictionary from "./CardList/Dictionary";
import DuplicateCardItem from "./CardList/DuplicateCardItem";
import NewCard from "./CardList/NewCard";
import EditCard from "./CardList/EditCard";
import CardItem from "./CardList/CardItem";

export default class CardList extends React.Component {

    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onDeleteCancel = this.onDeleteCancel.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.onToggleInputOrder = this.onToggleInputOrder.bind(this);
        this.onUseDictionaryChange = this.onUseDictionaryChange.bind(this);
    }

    onDeleteClick(cardId) {
        new DeleteCardClickAction({cardId}).apply();
    }

    onEdit(cardId, given, wanted, image, index) {
        const data = {
            cardId,
            given,
            wanted,
            image,
            index
        };
        new EditCardAction(data).apply();
    }

    onDelete() {
        const data = {
            username: this.props.username,
            cardId: this.props.data.deleteCard.cardId,
            password: this.props.password,
            categoryId: this.props.data.parentCategoryId
        };
        new DeleteCardAction(data).apply();
    }

    onDeleteCancel() {
        new CancelDeleteCardAction().apply();
    }

    onFilterChange(event) {
        const filter = event.target.value;
        new FilterCardsAction(
            {
                filter
            }
        ).apply();
    }

    onToggleInputOrder() {
        new ToggleInputOrderAction().apply();
    }

    onUseDictionaryChange() {
        new ToggleUseDictionaryAction().apply();
    }

    render() {
        const cardItems = this.props.data.cardList.filter((card) => card.given.indexOf(this.props.data.filter) >= 0 || card.wanted.indexOf(this.props.data.filter) >= 0).map((card) => {
            if (card.cardId === this.props.data.editedCard.cardId) {
                return <EditCard
                    key={card.cardId}
                    cardId={this.props.data.editedCard.cardId}
                    given={this.props.data.editedCard.given}
                    wanted={this.props.data.editedCard.wanted}
                    index={this.props.data.editedCard.index}
                    username={this.props.username}
                    password={this.props.password}
                    categoryId={this.props.data.parentCategoryId}
                    naturalInputOrder={this.props.data.naturalInputOrder}
                    image={this.props.data.editedCard.image}
                    texts={this.props.texts}
                />
            } else {
                return <CardItem
                    {...card}
                    key={card.cardId}
                    texts={this.props.texts}
                    onDeleteClick={this.onDeleteClick}
                    onEdit={() => this.onEdit(card.cardId, card.given, card.wanted, card.image, card.cardIndex)}
                    username={this.props.username}
                    password={this.props.password}
                    userRole={this.props.role}
                    naturalInputOrder={this.props.data.naturalInputOrder}
                />
            }
        });
        cardItems.push(
            <NewCard
                key="new"
                given={this.props.data.newCard.given}
                wanted={this.props.data.newCard.wanted}
                image={this.props.data.newCard.image}
                file={this.props.data.newCard.file}
                index={this.props.data.newCard.index}
                displaySpinner={this.props.data.newCard.displaySpinner}
                displayTranslateSpinner={this.props.data.newCard.displayTranslateSpinner}
                cardList={this.props.data.cardList}
                username={this.props.username}
                password={this.props.password}
                categoryId={this.props.data.parentCategoryId}
                dictionaryLookup={this.props.data.newCard.dictionaryLookup}
                givenLanguage={this.props.data.newCard.givenLanguage}
                wantedLanguage={this.props.data.newCard.wantedLanguage}
                texts={this.props.texts}
                naturalInputOrder={this.props.data.naturalInputOrder}
            />
        );
        let duplicateCards = this.props.data.cardDuplicates.map((card) => {
            return <DuplicateCardItem
                {...card}
                key={card.cardId}
                texts={this.props.texts}
                username={this.props.username}
                password={this.props.password}
                userRole={this.props.role}
                naturalInputOrder={this.props.data.naturalInputOrder}
                parentCategoryId={this.props.data.parentCategoryId}
            />

        });
        return (
            <div>
                {this.props.data.deleteCard.confirmDelete === true &&
                <div>
                    <Confirm {...
                        {
                            title: this.props.texts.cardList.confirmDelete.title,
                            message: this.props.texts.cardList.confirmDelete.message,
                            okText: this.props.texts.cardList.confirmDelete.ok,
                            cancelText: this.props.texts.cardList.confirmDelete.cancel,
                            ok: this.onDelete,
                            cancel: this.onDeleteCancel
                        }}/>
                </div>}
                <h1>
                    {this.props.data.cardList.length === 0 && this.props.texts.cardList.title.noCards}
                    {this.props.data.cardList.length === 1 &&
                    this.props.texts.cardList.title.oneCard.replace("{0}", this.props.data.cardList.filter((card) => card.given.indexOf(this.props.data.filter) >= 0 || card.wanted.indexOf(this.props.data.filter) >= 0).length)}
                    {this.props.data.cardList.length > 1 &&
                    this.props.texts.cardList.title.cards.replace("{1}", this.props.data.cardList.length)
                        .replace("{0}", this.props.data.cardList.filter((card) => card.given.indexOf(this.props.data.filter) >= 0 || card.wanted.indexOf(this.props.data.filter) >= 0).length)}
                </h1>
                <input
                    type={"text"}
                    onChange={this.onFilterChange}
                    autoComplete="off"
                    value={this.props.data.filter}
                    placeholder={this.props.texts.cardList.filter}
                />
                {this.props.data.newCard.dictionaryLookup === true &&
                <span>
                        <input
                            type={"checkbox"}
                            onChange={this.onUseDictionaryChange}
                            checked={this.props.data.useDictionary}
                            id="useDictionaryCheckbox"
                        />
                        <label htmlFor="useDictionaryCheckbox">{this.props.texts.cardList.useDictionary}</label>
                    </span>
                }
                <button onClick={this.onToggleInputOrder}>{"\u21c4"}</button>
                <table>
                    <thead>

                    </thead>
                    <tbody>
                    {cardItems}
                    {duplicateCards.length > 0 && <tr>
                        <td colSpan="5">{this.props.texts.cardList.duplicateCards}</td>
                    </tr>}
                    {duplicateCards}
                    </tbody>
                </table>

                {this.props.data.useDictionary &&
                <Dictionary
                    given={this.props.data.newCard.given}
                    wanted={this.props.data.newCard.wanted}
                    givenLanguage={this.props.data.newCard.givenLanguage}
                    wantedLanguage={this.props.data.newCard.wantedLanguage}
                    naturalInputOrder={this.props.data.naturalInputOrder}
                    displayDictionary={this.props.data.displayDictionary}
                />
                }

            </div>
        );
    }
}


