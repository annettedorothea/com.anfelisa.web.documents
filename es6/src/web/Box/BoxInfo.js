import React from 'react';
import DaysBehindSchedule from "./DaysBehindSchedule";

export default class BoxInfo extends React.Component {

    render() {
        return (
            <div>

                <h1>{this.props.categoryName} - {this.props.totalCards} {this.props.texts.box.totalCards[this.props.language]}</h1>

                {this.props.maxInterval > 1 &&
                <div>{this.props.texts.box.maxInterval[this.props.language].replace("{0}", this.props.maxInterval)}</div>}
                {this.props.maxInterval === 1 && <div>{this.props.texts.box.maxIntervalOne}</div>}

                <table>
                    <tbody>
                    <tr>
                        <td>{this.props.texts.box.todaysCards[this.props.language]}</td>
                        <td>{this.props.todaysCards}</td>
                    </tr>
                    <tr>
                        <td>{this.props.texts.box.myCards[this.props.language]}</td>
                        <td>{this.props.myCards}</td>
                    </tr>
                    <tr>
                        <td>{this.props.texts.box.reinforceCards[this.props.language]}</td>
                        <td>{this.props.reinforceCards}</td>
                    </tr>
                    </tbody>
                </table>

                <DaysBehindSchedule
                    boxId={this.props.boxId}
                    daysBehindSchedule={this.props.daysBehindSchedule}
                    texts={this.props.texts}
                    language={this.props.language}
                    username={this.props.username}
                    password={this.props.password}
                    loadList={this.props.loadList}
                />
            </div>
        );
    }
}

