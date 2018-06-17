import React from "react";

export default class Dictionary extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const value = this.props.value;

        if (!value || value.length === 0) {
            return <div className="iframePlaceholder" />;
        }

        const languageMap = {
            "de": "deutsch",
            "fr": "franzoesisch",
            "en": "englisch"
        };
        const sourceLanguage = this.props.naturalInputOrder === true ? this.props.givenLanguage : this.props.wantedLanguage;
        const targetLanguage = this.props.naturalInputOrder === true ? this.props.wantedLanguage : this.props.givenLanguage;

        const src = `https://www.linguee.de/${languageMap[sourceLanguage]}-${languageMap[targetLanguage]}/search?source=${languageMap[sourceLanguage]}&query=${value}`;
        return (
            <div className="dictionaryWrapper">
                <iframe src={src} frameBorder="0" onLoad={this.props.setFocus}/>
            </div>
        );
    }
}
