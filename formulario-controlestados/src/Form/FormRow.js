import React, {Component} from "react";
import PropTypes from "prop-types";

class FormRow extends Component{
    constructor(props){
        super(props);
        this.state ={
            inputValue: "",

        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({inputValue: e.target.value});
    }
    getValue(){
        return this.state.inputValue;
    }
    render(){
        return (
            <div>
                <label>{this.props.labelText}</label>
                <input type={this.props.inputType} value={this.state.inputValue} onChange={this.onChange} required={this.props.isRequired}/>
            </div>
        )
    }
}

FormRow.propTypes={
    inputType: PropTypes.string,
    labelText: PropTypes.string,
    isRequired: PropTypes.bool
}
export default FormRow;