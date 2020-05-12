import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './card-style.css';

class CardUI extends Component {
    booknowrender(){
        let returnitem = 0;
        this.props.bookedCarsId.forEach((item) => {
            if(parseInt(item) === this.props.cars.id){
                returnitem = (
                    <button type="button" className="btn btn-outline-success" disabled>
                        Unavailable
                    </button>
                )
            }
        });
        if(returnitem===0){
            return(   
                <Link to={"/book-car/"+this.props.cars.id}>
                <button type = "button" className="btn btn-outline-success">
                Book Now
                </button>
                </Link>
            );
        }else{
            return returnitem;
        }
    }

    render(){
        let { id ,imgUrl ,name ,color ,price ,seat } = this.props.cars;
    return(
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={imgUrl} alt="image1" className="card-img-top"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text text-secondary">Color : {color}</p>
                    <p className="card-text text-secondary">{seat}</p>
                    <p className="card-text text-secondary">₹ {price}</p>
                        <Link to={"/car-details/"+ id }><button className="btn btn-outline-success">Details</button></Link>
                        &nbsp;
                        {this.booknowrender()}
                    
                </div>
            </div>

                    

    )
    }
}

export default CardUI;