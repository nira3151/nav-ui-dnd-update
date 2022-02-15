import React from "react";
import './Register.css'
class Form extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <form id="formInput" onSubmit={this.props.handleFormSubmit}>
                    <div className="form-group">
                    <p className='form-group1'> Title : </p>
                    <input
                        id="firstname"
                        value={this.props.newTitle}
                        type="firstname"
                        name="firstname"
                        placeholder="Enter title"
                        className='text1' 
                        onChange={this.props.handleInputChange}
                    />
                    </div>

                    <div className="form-group">
                    <p className='form-group1'> Status : </p>
                    <input
                        id="lastname"
                        value={this.props.newStatus}
                        type="firstname"
                        name="firstname"
                        placeholder="enter status"
                        className='text1' 
                        onChange={this.props.handleInputChange1}
                        required
                    />
                    </div>

                    <div className="form-group">
                    <button type="submit" className='form-group1' id="submit" value="Submit">
                        {" "}
                        Save{" "}
                    </button>
                    {/* <button type="reset"className='form-group1'  value="Reset" onClick={this.props.onCancel}>
                        {" "}
                        Cancel{" "}
                    </button> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
