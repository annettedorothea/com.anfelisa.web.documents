import UpdateCardAction from "../../author/actions/UpdateCardAction";
import React from "react";
import CancelEditCardAction from "../../author/actions/CancelEditCardAction";
import IndexOfEditedCardChangedAction from "../../author/actions/IndexOfEditedCardChangedAction";
import WantedOfEditedCardChangedAction from "../../author/actions/WantedOfEditedCardChangedAction";
import GivenOfEditedCardChangedAction from "../../author/actions/GivenOfEditedCardChangedAction";
import RemoveEditedCardImageAction from "../../author/actions/RemoveEditedCardImageAction";
import DisplayErrorAction from "../../common/actions/DisplayErrorAction";
import LoadWantedImageOfEditedCardAction from "../../author/actions/LoadWantedImageOfEditedCardAction";

export default class EditCard extends React.Component {

    constructor(props) {
        super(props);
        this.onGivenChange = this.onGivenChange.bind(this);
        this.onWantedChange = this.onWantedChange.bind(this);
        this.onIndexChange = this.onIndexChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onAltKeyUp = this.onAltKeyUp.bind(this);
        this.onRemoveImage = this.onRemoveImage.bind(this);
        this.onWantedFileChange = this.onWantedFileChange.bind(this);
    }

    onGivenChange(event) {
        const given = event.target.value;
        new GivenOfEditedCardChangedAction({given}).apply();
    }

    onWantedChange(event) {
        const wanted = event.target.value;
        new WantedOfEditedCardChangedAction({wanted}).apply();
    }

    onWantedFileChange(event) {
        let files = event.target.files;

        if (files.length > 0) {
            const file = files[0];
            event.target.value = null;
            if (!file.type.match('image.*')) {
                new DisplayErrorAction({error: {errorKey: "noImageFile"}}).apply();
                return;
            }
            if (file.size > 2000000) {
                new DisplayErrorAction({error: {errorKey: "fileTooBig"}}).apply();
                return;
            }
            const reader = new FileReader();
            reader.onload = function (e) {
                new LoadWantedImageOfEditedCardAction({
                    image: e.target.result
                }).apply();
            };
            reader.readAsDataURL(file);
        }
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
        if (e.keyCode === 13 && this.isValid()) {
            this.onUpdate();
        }
    }

    onAltKeyUp(e) {
        e.preventDefault();
        if (e.keyCode === 13 && this.isValid()) {
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
            image: this.props.image,
            cardIndex: this.props.index,
            categoryId: this.props.categoryId
        };
        new UpdateCardAction(data).apply();
    }

    onRemoveImage() {
        new RemoveEditedCardImageAction().apply();
    }

    renderGiven() {
        return (
            <td>
                <textarea
                    rows="4"
                    cols="40"
                    onChange={this.onGivenChange}
                    autoComplete="off"
                    value={this.props.given}
                    placeholder={this.props.texts.cardList.given}
                    onKeyUp={this.onAltKeyUp}
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
                />
            </td>
        );
    }

    renderImage() {
        if (this.props.image.length > 0) {
            return (
                <td>
                    <img className="preview" src={this.props.image}/>
                    <button onClick={this.onRemoveImage}>{"\u2717"}</button>
                </td>
            )
        }
        return (
            <td>
                <input type="file" onChange={this.onWantedFileChange} value={this.props.file}/>
            </td>
        )
    }

    isValid() {
        return this.props.given.length > 0 && (this.props.wanted.length > 0 || this.props.image.length > 0);
    }

    render() {
        return (
            <tr>
                {this.props.naturalInputOrder === true && this.renderGiven()}
                {this.props.naturalInputOrder === true && this.renderWanted()}
                {this.props.naturalInputOrder === true && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderImage()}
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
                        disabled={!this.isValid()}
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
