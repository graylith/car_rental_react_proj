import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import './carstyle.css';

let bookedcarId = []
let bookedcardetails = {
    bookingname: "",
    bookingphone: "",
    bookingissuedate: "",
    bookingreturndate: ""
}

let bookedcars = []
if(localStorage.getItem("bookedcars")===null){
    bookedcars=[];
}else{
    bookedcars = JSON.parse(localStorage.getItem("bookedcars"));

    for(let i=0;i<bookedcars.length;i++){
        bookedcarId.push(bookedcars[i])
    }
}


class car_details extends Component {
    booknowrender(){
        let returnitem = 0;
        bookedcarId.forEach((item)=>{
            if(item.carid===this.props.match.params.car_id){
                bookedcardetails.bookingname = item.Name;
                bookedcardetails.bookingphone = item.Contact;
                bookedcardetails.bookingissuedate = item.Issuedate;
                bookedcardetails.bookingreturndate = item.Returndate;
                returnitem = (
                    <button type="button" className="btn btn-outline-success" disabled>
                        Unavailable
                    </button>
                )
            }
        });
        if(returnitem===0){
            bookedcardetails.bookingname = "";
            bookedcardetails.bookingphone = "";
            bookedcardetails.bookingissuedate = "";
            bookedcardetails.bookingreturndate = "";
            return( <Link to={"/book-car/"+ this.props.match.params.car_id}>
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
        let allcars = JSON.parse(localStorage.getItem("allcars"));
        const carID = this.props.match.params.car_id;
        let {
            imgUrl,
            name,
            color,
            seat,
            price,
            vehicleNo,
            type,
            engine,
            descp
        } = allcars[carID];

    return(
        <div>
        <React.Fragment>
            <div className="container containers">
                <div className="row">
                    <div className="col-md-5">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={imgUrl} className="d-block w-100 " alt="car"/>
                                </div>
                                <div class="carousel-item">
                                    <img src={imgUrl} className="d-block w-100 " alt="car"/>
                                </div>
                                <div class="carousel-item">
                                    <img src={imgUrl} className="d-block w-100" alt="car"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                            </div>
                    <div className="col-md-7">
                        <h2 classname="display-1">{name}</h2>
                        <p style={{color:"grey"}}><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>Color : {color}</p>
                        <p style={{color:"grey"}}>Seating Capacity : {seat}</p>
                        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        <p>Rent per day : <span style={{fontSize:"20px"}}>₹ {price}</span></p>
                        {this.booknowrender()}
                    </div>
                </div>
            </div>
        </React.Fragment>
        <div className="container head">
        <p style={{textAlign:"left", fontSize:"23px", color:"#386b96"}}>Car Details</p>
        <hr style={{height:"0px"}}></hr>
        <p style={{textAlign:"left", fontSize:"15px"}}>Vehicle Number : {vehicleNo}</p>
        <p style={{textAlign:"left", fontSize:"15px"}}>{type}</p>
        <p style={{textAlign:"left", fontSize:"15px"}}>{engine}</p>
        <p style={{textAlign:"left", fontSize:"15px"}}>{descp}</p>
        <hr></hr>
        </div>
            <p style={{color:"#386b96"}}><strong>Check the current booking here</strong></p>
            <div>
            <MDBTable>
                <MDBTableHead color="primary-color">
                    <tr>
                        <th>Name</th>
                        <th>Phone no.</th>
                        <th>Issue Date</th>
                        <th>Return Date</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <td>{bookedcardetails.bookingname}</td>
                        <td>{bookedcardetails.bookingphone}</td>
                        <td>{bookedcardetails.bookingissuedate}</td>
                        <td>{bookedcardetails.bookingreturndate}</td>
                    </tr>
                </MDBTableBody>
            </MDBTable>
            </div>
            <div class="cono">
                <Link className="btn btn-outline-warning" to="/home">Go Back</Link>
            </div>
        </div>
    )
    }
}
export default car_details;