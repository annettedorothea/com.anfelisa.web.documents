import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import Confirm from "./Confirm";
import CreateCardAction from "../author/actions/CreateCardAction";
import DeleteCardAction from "../author/actions/DeleteCardAction";
import UpdateCardAction from "../author/actions/UpdateCardAction";
import IndexOfNewCardChangedAction from "../author/actions/IndexOfNewCardChangedAction";
import CancelNewCardAction from "../author/actions/CancelNewCardAction";
import IndexOfEditedCardChangedAction from "../author/actions/IndexOfEditedCardChangedAction";
import CancelEditCardAction from "../author/actions/CancelEditCardAction";
import EditCardAction from "../author/actions/EditCardAction";
import DeleteCardClickAction from "../author/actions/DeleteCardClickAction";
import CancelDeleteCardAction from "../author/actions/CancelDeleteCardAction";
import GivenOfNewCardChangedAction from "../author/actions/GivenOfNewCardChangedAction";
import WantedOfNewCardChangedAction from "../author/actions/WantedOfNewCardChangedAction";
import GivenOfEditedCardChangedAction from "../author/actions/GivenOfEditedCardChangedAction";
import WantedOfEditedCardChangedAction from "../author/actions/WantedOfEditedCardChangedAction";
import FilterCardsAction from "../author/actions/FilterCardsAction";
import TranslateAction from "../author/actions/TranslateAction";
import ToggelInputOrderAction from "../author/actions/ToggelInputOrderAction";

export default class CardList extends React.Component {

    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onDeleteCancel = this.onDeleteCancel.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.onToggleInputOrder = this.onToggleInputOrder.bind(this);
    }

    onDeleteClick(cardId) {
        new DeleteCardClickAction({cardId}).apply();
    }

    onEdit(cardId, given, wanted, index) {
        const data = {
            cardId,
            given,
            wanted,
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
        console.log("onToggleInputOrder");
        new ToggelInputOrderAction().apply();
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
                    texts={this.props.texts}
                />
            } else {
                return <CardItem
                    {...card}
                    key={card.cardId}
                    texts={this.props.texts}
                    onDeleteClick={this.onDeleteClick}
                    onEdit={() => this.onEdit(card.cardId, card.given, card.wanted, card.cardIndex)}
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
        cardItems.push(
            <tr key="hint">
                <td colSpan="5"><a href="http://translate.yandex.com/" target="yandex">Powered by Yandex.Translate</a>
                </td>
            </tr>
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

            </div>
        );
    }
}

class DuplicateCardItem extends React.Component {

    constructor(props) {
        super(props);
    }

    renderGiven() {
        return (
            <td>
                <pre>{this.props.given}</pre>
            </td>
        );
    }

    renderWanted() {
        return (
            <td>
                <pre>{this.props.wanted}</pre>
            </td>
        );
    }

    renderPath() {
        if (this.props.categoryId === this.props.parentCategoryId) {
            return <td>{this.props.path}</td>
        }
        return <td><a href={`#categories/${this.props.categoryId}`}>{this.props.path}</a></td>
    }

    render() {
        return (
            <tr>
                {this.props.naturalInputOrder === true && this.renderGiven()}
                {this.props.naturalInputOrder === true && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderGiven()}
                <td>{this.props.cardIndex}</td>
                <td>{this.props.cardAuthor}</td>
                {this.renderPath()}
            </tr>
        );
    }
}


class NewCard extends React.Component {

    constructor(props) {
        super(props);
        this.onGivenChange = this.onGivenChange.bind(this);
        this.onWantedChange = this.onWantedChange.bind(this);
        this.onIndexChange = this.onIndexChange.bind(this);
        this.onNewCard = this.onNewCard.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onAltKeyUp = this.onAltKeyUp.bind(this);
        this.onBlurGiven = this.onBlurGiven.bind(this);
        this.onBlurWanted = this.onBlurWanted.bind(this);
    }

    componentDidMount() {
        this.setFocus();
    }

    setFocus() {
        if (this.props.naturalInputOrder === true) {
            this.givenInput.focus();
        } else {
            this.wantedInput.focus();
        }
    }

    onGivenChange(event) {
        const given = event.target.value;
        new GivenOfNewCardChangedAction(
            {
                given,
                wanted: this.props.wanted,
                username: this.props.username,
                password: this.props.password,
                categoryId: this.props.categoryId,
                naturalInputOrder: this.props.naturalInputOrder
            }
        ).apply();
    }

    onWantedChange(event) {
        const wanted = event.target.value;
        new WantedOfNewCardChangedAction(
            {
                wanted,
                given: this.props.given,
                username: this.props.username,
                password: this.props.password,
                categoryId: this.props.categoryId,
                naturalInputOrder: this.props.naturalInputOrder,
            }
        ).apply();
    }

    onIndexChange(event) {
        const index = event.target.value;
        new IndexOfNewCardChangedAction({index}).apply();
    }

    onCancel() {
        new CancelNewCardAction().apply();
        this.setFocus();
    }

    onNewCard() {
        const data = {
            username: this.props.username,
            password: this.props.password,
            given: this.props.given,
            wanted: this.props.wanted,
            cardIndex: this.props.index,
            categoryId: this.props.categoryId
        };
        new CreateCardAction(data).apply();
        this.setFocus();
    }

    onBlurGiven() {
        if (this.props.naturalInputOrder === true) {
            const data = {
                given: this.props.given,
                wanted: this.props.wanted,
                givenLanguage: this.props.givenLanguage,
                wantedLanguage: this.props.wantedLanguage,
                naturalInputOrder: this.props.naturalInputOrder,
                username: this.props.username,
                password: this.props.password,
                categoryId: this.props.categoryId
            };
            new TranslateAction(data).apply();
        }
    }

    onBlurWanted() {
        if (this.props.naturalInputOrder === false) {
            const data = {
                given: this.props.given,
                wanted: this.props.wanted,
                givenLanguage: this.props.givenLanguage,
                wantedLanguage: this.props.wantedLanguage,
                naturalInputOrder: this.props.naturalInputOrder,
                username: this.props.username,
                password: this.props.password,
                categoryId: this.props.categoryId
            };
            new TranslateAction(data).apply();
        }
    }

    onKeyUp(e) {
        e.preventDefault();
        if (e.keyCode === 13 && this.props.given && this.props.given.length > 0 && this.props.wanted && this.props.wanted.length > 0) {
            this.onNewCard();
        }
    }

    onAltKeyUp(e) {
        e.preventDefault();
        if (e.keyCode === 13 && e.altKey && this.props.given && this.props.given.length > 0 && this.props.wanted && this.props.wanted.length > 0) {
            this.onNewCard();
        }
    }

    renderGiven() {
        return (
            <td>
                <div>
                    <textarea
                        rows="4"
                        cols="40"
                        onChange={this.onGivenChange}
                        autoComplete="off"
                        value={this.props.given}
                        placeholder={`${this.props.texts.cardList.given} ${this.props.dictionaryLookup ? "(" + this.props.texts.categoryList.languages[this.props.givenLanguage] + ")" : "" }`}
                        ref={textarea => {
                            this.givenInput = textarea;
                        }}
                        onKeyUp={this.onAltKeyUp}
                        onBlur={this.onBlurGiven}
                    >
                    </textarea>
                </div>
                {this.props.displaySpinner === true &&
                <label>{this.props.texts.cardList.searchingDuplicates}</label>}
                {this.props.displayTranslateSpinner === true &&
                <label>{this.props.texts.cardList.loadingTranslation}</label>}
            </td>
        )
    }

    renderWanted() {
        return (
            <td>
                <div>
                    <textarea
                        rows="4"
                        cols="40"
                        onChange={this.onWantedChange}
                        autoComplete="off"
                        value={this.props.wanted}
                        placeholder={`${this.props.texts.cardList.wanted} ${this.props.dictionaryLookup ? "(" + this.props.texts.categoryList.languages[this.props.wantedLanguage] + ")" : "" }`}
                        ref={textarea => {
                            this.wantedInput = textarea;
                        }}
                        onKeyUp={this.onAltKeyUp}
                        onBlur={this.onBlurWanted}
                    >
                    </textarea>
                </div>
            </td>
        )
    }

    render() {
        return (
            <tr>
                {this.props.naturalInputOrder === true && this.renderGiven()}
                {this.props.naturalInputOrder === true && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderGiven()}
                <td>
                    <input
                        type={"number"}
                        onChange={this.onIndexChange}
                        autoComplete="off"
                        value={this.props.index}
                        placeholder={this.props.texts.cardList.index}
                        onKeyUp={this.onKeyUp}
                    />
                </td>
                <td/>
                <td>
                    <button
                        disabled={this.props.given && this.props.given.length === 0 && this.props.wanted && this.props.wanted.length === 0}
                        onClick={this.onNewCard}
                    >{this.props.texts.cardList.ok}</button>
                    <button
                        onClick={this.onCancel}
                    >{this.props.texts.cardList.cancel}</button>
                </td>
            </tr>
        );
    }
}

class EditCard extends React.Component {

    constructor(props) {
        super(props);
        this.onGivenChange = this.onGivenChange.bind(this);
        this.onWantedChange = this.onWantedChange.bind(this);
        this.onIndexChange = this.onIndexChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onAltKeyUp = this.onAltKeyUp.bind(this);
    }

    onGivenChange(event) {
        const given = event.target.value;
        new GivenOfEditedCardChangedAction({given}).apply();
    }

    onWantedChange(event) {
        const wanted = event.target.value;
        new WantedOfEditedCardChangedAction({wanted}).apply();
    }

    onIndexChange(event) {
        const index = event.target.value;
        new IndexOfEditedCardChangedAction({index}).apply();
    }

    onCancel() {
        new CancelEditCardAction().apply();
    }

    onKeyUp(e) {
        e.preventDefault();
        if (e.keyCode === 13 && this.props.given && this.props.given.length > 0 && this.props.wanted && this.props.wanted.length > 0) {
            this.onUpdate();
        }
    }

    onAltKeyUp(e) {
        e.preventDefault();
        if (e.keyCode === 13 && e.altKey && this.props.given && this.props.given.length > 0 && this.props.wanted && this.props.wanted.length > 0) {
            this.onUpdate();
        }
    }

    onUpdate() {
        const data = {
            username: this.props.username,
            password: this.props.password,
            cardId: this.props.cardId,
            given: this.props.given,
            wanted: this.props.wanted,
            cardIndex: this.props.index,
            categoryId: this.props.categoryId
        };
        new UpdateCardAction(data).apply();
    }

    renderGiven() {
        return (
            <td>
                <input
                    type={"text"}
                    onChange={this.onGivenChange}
                    autoComplete="off"
                    value={this.props.given}
                    placeholder={this.props.texts.cardList.given}
                    onKeyUp={this.onKeyUp}
                />
            </td>
        );
    }

    renderWanted() {
        return (
            <td>
                    <textarea
                        rows="4"
                        cols="40"
                        onChange={this.onWantedChange}
                        autoComplete="off"
                        value={this.props.wanted}
                        placeholder={this.props.texts.cardList.wanted}
                        onKeyUp={this.onAltKeyUp}
                    >
                    </textarea>
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.props.naturalInputOrder === true && this.renderGiven()}
                {this.props.naturalInputOrder === true && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderGiven()}
                <td>
                    <input
                        type={"number"}
                        onChange={this.onIndexChange}
                        autoComplete="off"
                        value={this.props.index}
                        placeholder={this.props.texts.cardList.index}
                        onKeyUp={this.onKeyUp}
                    />
                </td>
                <td/>
                <td>
                    <button
                        disabled={this.props.given && this.props.given.length === 0 && this.props.wanted && this.props.wanted.length === 0}
                        onClick={this.onUpdate}
                    >{this.props.texts.cardList.ok}</button>
                    <button
                        onClick={this.onCancel}
                    >{this.props.texts.cardList.cancel}</button>
                </td>
            </tr>
        );
    }
}

class CardItem extends React.Component {

    constructor(props) {
        super(props);
    }

    renderGiven() {
        return (
            <td>{this.props.given}</td>
        );
    }

    renderWanted() {
        return (
            <td>
                <pre>{this.props.wanted}</pre>
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.props.naturalInputOrder === true && this.renderGiven()}
                {this.props.naturalInputOrder === true && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderGiven()}
                <td>{this.props.cardIndex}</td>
                <td>{this.props.cardAuthor}</td>
                <td>
                    {this.props.userRole === "ADMIN" &&
                    <button onClick={() => this.props.onDeleteClick(this.props.cardId)}>{"\u2717"}</button>}
                    <button onClick={() => this.props.onEdit(this.props)}>{"\u270E"}</button>
                </td>
            </tr>
        );
    }
}

