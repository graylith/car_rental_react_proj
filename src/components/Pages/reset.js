import React, {Component} from 'react';

class reset extends Component{
    resetdata(){
        localStorage.removeItem("bookedcars");
    }
    render(){
        return(
            <div>
                <button className="btn btn-success" type="button" onClick={this.resetdata}>click to reset</button>
            </div>
        );
    }
}

export default reset;