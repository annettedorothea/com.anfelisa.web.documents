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

export default class CardList extends React.Component {

    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onDeleteCancel = this.onDeleteCancel.bind(this);
    }

    onDeleteClick(cardId) {
        new DeleteCardClickAction({cardId}).apply();
    }

    onEdit(cardId, name, index) {
        const data = {
            cardId,
            name,
            index
        };
        this.setState({confirmDelete: false});
        new EditCardAction(data).apply();
    }

    onDelete() {
        const data = {
            username: this.props.username,
            cardId: this.props.data.deleteCard.cardId,
            password: this.props.password,
            parentCardId: this.props.data.parentCardId
        };
        new DeleteCardAction(data).apply();
    }

    onDeleteCancel() {
        new CancelDeleteCardAction().apply();
    }

    render() {
        console.log("CardList.render", this.props);

        const cardItems = this.props.data.cardList.map((card) => {
            if (card.cardId === this.props.data.editedCard.cardId) {
                return <EditCard
                    key={card.cardId}
                    cardId={this.props.data.editedCard.cardId}
                    given={this.props.data.editedCard.given}
                    wanted={this.props.data.editedCard.wanted}
                    index={this.props.data.editedCard.index}
                    cardList={this.props.data.cardList}
                    username={this.props.username}
                    password={this.props.password}
                    parentCardId={this.props.data.parentCardId}
                    texts={this.props.texts}
                />
            } else {
                return <CardItem
                    {...card}
                    key={card.cardId}
                    texts={this.props.texts}
                    onDeleteClick={this.onDeleteClick}
                    onEdit={() => this.onEdit(card.cardId, card.cardName, card.cardIndex)}
                    username={this.props.username}
                    password={this.props.password}
                    userRole={this.props.role}
                />
            }
        });
        cardItems.push(
            <NewCard
                key="new"
                given={this.props.data.newCard.given}
                wanted={this.props.data.newCard.wanted}
                index={this.props.data.newCard.index}
                cardList={this.props.data.cardList}
                username={this.props.username}
                password={this.props.password}
                parentCardId={this.props.data.parentCardId}
                texts={this.props.texts}
            />
        );
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
                <table>
                    <thead>

                    </thead>
                    <tbody>
                    {cardItems}
                    </tbody>
                </table>

            </div>
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
    }

    onGivenChange(event) {
        const given = event.target.value;
        new GivenOfNewCardChangedAction({given, cardList: this.props.cardList}).apply();
    }

    onWantedChange(event) {
        const wanted = event.target.value;
        new WantedOfNewCardChangedAction({wanted, cardList: this.props.cardList}).apply();
    }

    onIndexChange(event) {
        const index = event.target.value;
        new IndexOfNewCardChangedAction({index}).apply();
    }

    onCancel() {
        new CancelNewCardAction().apply();
    }

    onNewCard() {
        const data = {
            username: this.props.username,
            password: this.props.password,
            given: this.props.given,
            wanted: this.props.wanted,
            cardIndex: this.props.index,
            parentCategoryId: this.props.parentCategoryId
        };
        console.log(data);
        new CreateCardAction(data).apply();
    }


    render() {
        return (
            <tr>
                <td>
                    <input
                        type={"text"}
                        onChange={this.onGivenChange}
                        autoComplete="off"
                        value={this.props.given}
                        placeholder={this.props.texts.cardList.given}
                    />
                </td>
                <td>
                    <textarea
                        rows="4"
                        cols="50"
                        onChange={this.onWantedChange}
                        autoComplete="off"
                        value={this.props.wanted}
                        placeholder={this.props.texts.cardList.wanted}
                    >
                    </textarea>
                </td>
                <td>
                    <input
                        type={"number"}
                        onChange={this.onIndexChange}
                        autoComplete="off"
                        value={this.props.index}
                        placeholder={this.props.texts.cardList.index}
                    />
                </td>
                <td/>
                <td>
                    <button
                        disabled={this.props.given.length === 0 && this.props.wanted.length === 0}
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
        this.onNameChange = this.onNameChange.bind(this);
        this.onIndexChange = this.onIndexChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    onNameChange(event) {
        const name = event.target.value;
        new NameOfEditedCardChangedAction({name, cardList: this.props.cardList}).apply();
    }

    onIndexChange(event) {
        const index = event.target.value;
        new IndexOfEditedCardChangedAction({index}).apply();
    }

    onCancel() {
        new CancelEditCardAction().apply();
    }

    onUpdate() {
        const data = {
            username: this.props.username,
            password: this.props.password,
            cardId: this.props.cardId,
            cardName: this.props.name,
            cardIndex: this.props.index,
            parentCardId: this.props.parentCardId
        };
        new UpdateCardAction(data).apply();
    }

    render() {
        return (
            <tr>
                <td>
                    <input
                        type={"text"}
                        onChange={this.onNameChange}
                        autoComplete="off"
                        value={this.props.name}
                        placeholder={this.props.texts.cardList.name}
                    />
                    {this.props.nameAlreadyExists === true && this.props.name.length > 0 &&
                    <label>{this.props.texts.cardList.nameAlreadyExists}</label>}
                </td>
                <td>
                    <input
                        type={"number"}
                        onChange={this.onIndexChange}
                        autoComplete="off"
                        value={this.props.index}
                        placeholder={this.props.texts.cardList.index}
                    />
                </td>
                <td/>
                <td>
                    <button
                        disabled={this.props.nameAlreadyExists === true || this.props.name.length === 0}
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
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        new RouteAction(
            {
                username: this.props.username,
                password: this.props.password,
                hash: `#cards/${this.props.cardId}`
            }).apply();
    }

    render() {
        return (
            <tr>
                <td onClick={this.onClick}>{this.props.given}</td>
                <td onClick={this.onClick}>{this.props.wanted}</td>
                <td onClick={this.onClick}>{this.props.cardIndex}</td>
                <td onClick={this.onClick}>{this.props.cardAuthor}</td>
                <td>
                    {this.props.userRole === "ADMIN" &&
                    <button onClick={() => this.props.onDeleteClick(this.props.cardId)}>{"\u2717"}</button>}
                    <button onClick={() => this.props.onEdit(this.props)}>{"\u270E"}</button>
                </td>
            </tr>
        );
    }
}

