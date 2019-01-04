import React from 'react';
import Confirm from "../Confirm";
import DeleteCardAction from "../../card/actions/DeleteCardAction";
import EditCardAction from "../../card/actions/EditCardAction";
import DeleteCardClickAction from "../../card/actions/DeleteCardClickAction";
import CancelDeleteCardAction from "../../card/actions/CancelDeleteCardAction";
import FilterCardsAction from "../../card/actions/FilterCardsAction";
import ToggleInputOrderAction from "../../card/actions/ToggleInputOrderAction";
import ToggleUseDictionaryAction from "../../card/actions/ToggleUseDictionaryAction";
import Dictionary from "./Dictionary";
import DuplicateCardItem from "./DuplicateCardItem";
import NewCard from "./NewCard";
import EditCard from "./EditCard";
import CardItem from "./CardItem";
import ToggleAllScheduleCardSelectionAction from "../../card/actions/ToggleAllScheduleCardSelectionAction";
import ScheduleSelectedCardsAction from "../../card/actions/ScheduleSelectedCardsAction";

export default class CardList extends React.Component {

    constructor(props) {
        super(props);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.onToggleInputOrder = this.onToggleInputOrder.bind(this);
        this.onUseDictionaryChange = this.onUseDictionaryChange.bind(this);
        this.toggleAllScheduleCardSelection = this.toggleAllScheduleCardSelection.bind(this);
        this.onSchedule = this.onSchedule.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteCancel = this.onDeleteCancel.bind(this);
    }

    onSchedule() {
        new ScheduleSelectedCardsAction().apply();
    }

    toggleAllScheduleCardSelection() {
        new ToggleAllScheduleCardSelectionAction().apply();
    }

    onFilterChange(event) {
        new FilterCardsAction(event.target.value).apply();
    }

    onToggleInputOrder() {
        new ToggleInputOrderAction(this.props.data.naturalInputOrder).apply();
    }

    onUseDictionaryChange() {
        new ToggleUseDictionaryAction().apply();
    }

    onDelete() {
        new DeleteCardAction().apply();
    }

    onDeleteCancel() {
        new CancelDeleteCardAction().apply();
    }

    render() {
        //console.log("CardList", this.props);
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
                    language={this.props.language}
                    scheduleCardSelection={this.props.data.scheduleCardSelection}
                    hasBox={this.props.data.selectedCategory.hasBox}
                />
            } else {
                return <CardItem
                    {...card}
                    key={card.cardId}
                    scheduleCardSelection={this.props.data.scheduleCardSelection}
                    texts={this.props.texts}
                    language={this.props.language}
                    onDeleteClick={this.onDeleteClick}
                    username={this.props.username}
                    password={this.props.password}
                    userRole={this.props.role}
                    naturalInputOrder={this.props.data.naturalInputOrder}
                    hasBox={this.props.data.selectedCategory.hasBox}
                    editable={this.props.data.selectedCategory.editable}
                />
            }
        });
        if (this.props.data.selectedCategory.editable) {
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
                    dictionaryLookup={this.props.data.selectedCategory.dictionaryLookup}
                    givenLanguage={this.props.data.selectedCategory.givenLanguage}
                    wantedLanguage={this.props.data.selectedCategory.wantedLanguage}
                    texts={this.props.texts}
                    language={this.props.language}
                    naturalInputOrder={this.props.data.naturalInputOrder}
                    useDictionary={this.props.data.useDictionary}
                    ref={component => {
                        this.newCard = component;
                    }}
                    hasBox={this.props.data.selectedCategory.hasBox}
                />
            );
        }
        let duplicateCards = this.props.data.cardDuplicates.map((card) => {
            return <DuplicateCardItem
                {...card}
                key={card.cardId}
                texts={this.props.texts}
                language={this.props.language}
                username={this.props.username}
                password={this.props.password}
                userRole={this.props.role}
                naturalInputOrder={this.props.data.naturalInputOrder}
                parentCategoryId={this.props.data.parentCategoryId}
                hasBox={this.props.data.selectedCategory.hasBox}
            />

        });
        if (this.props.data.cardList.length === 0 && this.props.data.selectedCategory.editable === false) {
            return <h2>{this.props.texts.cardList.noCards[this.props.language]}</h2>
        }
        return (
            <div>
                {this.props.data.deleteCard.confirmDelete === true &&
                <div>
                    <Confirm {...
                        {
                            title: this.props.texts.cardList.confirmDelete.title[this.props.language],
                            message: this.props.texts.cardList.confirmDelete.message[this.props.language],
                            okText: this.props.texts.cardList.confirmDelete.ok[this.props.language],
                            cancelText: this.props.texts.cardList.confirmDelete.cancel[this.props.language],
                            ok: this.onDelete,
                            cancel: this.onDeleteCancel
                        }}/>
                </div>}

                <table className="cardTable">
                    <thead>
                    <tr>
                        {this.props.data.selectedCategory.hasBox === true &&<th/>}
                        <th colSpan={4}>
                            {this.props.data.selectedCategory.editable === true &&
                            <button onClick={this.onToggleInputOrder}><i className="fas fa-arrows-alt-h"/></button>}
                            <input
                                type={"text"}
                                onChange={this.onFilterChange}
                                autoComplete="off"
                                value={this.props.data.filter}
                                placeholder={this.props.texts.cardList.filter[this.props.language]}
                            />
                        </th>
                    </tr>

                    {this.props.data.selectedCategory.dictionaryLookup === true && this.props.data.selectedCategory.editable === true &&
                    <tr>
                        {this.props.data.selectedCategory.hasBox === true &&<th/>}
                        <th colSpan={4}>
                            <input
                                type={"checkbox"}
                                onChange={this.onUseDictionaryChange}
                                checked={this.props.data.useDictionary}
                                id="useDictionaryCheckbox"
                            />
                            <label
                                htmlFor="useDictionaryCheckbox">{this.props.texts.cardList.useDictionary[this.props.language]}
                            </label>
                        </th>
                        <th/>
                    </tr>
                    }

                    {this.props.data.cardList.length > 0 && this.props.data.selectedCategory.hasBox === true &&
                    <tr>
                        <th>
                            <input
                                type={"checkbox"}
                                onChange={this.toggleAllScheduleCardSelection}
                                checked={this.props.data.scheduleCardSelection.length === this.props.data.cardList.length}
                            />
                        </th>
                        <th colSpan={4}>
                            <button onClick={this.onSchedule}
                                    disabled={this.props.data.scheduleCardSelection.length === 0}>{this.props.texts.cardList.scheduleSelectedCards[this.props.language]}
                            </button>
                        </th>
                    </tr>
                    }

                    </thead>

                    <tbody>
                    {cardItems}
                    {duplicateCards.length > 0 && <tr>
                        {this.props.hasBox === true && <td/>}
                        <td colSpan={5}>{this.props.texts.cardList.duplicateCards[this.props.language]}</td>
                    </tr>}
                    {duplicateCards}

                    </tbody>
                </table>

                {!!this.props.data.useDictionary && !!this.props.data.selectedCategory.dictionaryLookup &&
                <Dictionary
                    given={this.props.data.newCard.given}
                    wanted={this.props.data.newCard.wanted}
                    givenLanguage={this.props.data.selectedCategory.givenLanguage}
                    wantedLanguage={this.props.data.selectedCategory.wantedLanguage}
                    naturalInputOrder={this.props.data.naturalInputOrder}
                    value={this.props.data.dictionaryValue}
                    setFocus={() => this.newCard.setFocus()}
                />
                }

            </div>
        );
    }
}


