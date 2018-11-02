import React from "react";
import * as InputType from "../../common/common";

class Flexi extends React.Component {
    state = {};

    handleInputChange = e =>
        this.setState({
            [e.target.name]: e.target.value
        });
    handleSubmit = () => this.props.onSubmit(this.state);

    render() {
        let elements = [];
        let key = 0;
        this.props.config.items.map(item => {
            key++;
            switch (item.type) {
                case InputType.TEXT_FIELD:
                    elements.push(
                        <div key={key}>
                            <label>{item.label}</label>
                            <input
                                type="text"
                                name={item.name}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    );
                    break;
                case InputType.DROPDOWN:
                    elements.push(
                        <div key={key}>
                            <label>{item.label}</label>
                            <select
                                name={item.name}
                                onChange={this.handleInputChange}
                            >
                                {item.values.map(val => (
                                    <option value={val}>{val}</option>
                                ))}
                            </select>
                        </div>
                    );
                    break;
            }
        });
        let renderElements = (
            <div>
                {elements.map(elem => elem)}
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
        return <div>{renderElements}</div>;
    }
}

export default Flexi;
