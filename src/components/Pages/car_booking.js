import React, {Component} from 'react';
import SuccessModal from "../Layout/modal";
import './form_style.css';

let carName;

export class car_booking extends Component{
    constructor(props){
        super(props)
        this.state = {
                carid : this.props.match.params.car_id,
                Name : '',
                Contact:'' ,
                Issuedate:''  ,
                Returndate:'',
                nameerror: '',
                contacterror:'',
                issuedateerror:'',
                returndateerror:'',
                comparedateerror:'',
                showpopup:false
                }  
    } 
onSubmit = (e) =>{
    e.preventDefault();
    const isvalid = this.validate();
    if(isvalid){
        this.getcarname();
        this.togglepopup();
        this.setdata(this.state);
        this.setState({Name:'', Contact:'', Issuedate:'', Returndate:'',
        nameerror:'', contacterror:'',returndateerror:'',
        issuedateerror:'',comparedateerror:''});
        e.preventDefault();
    }
};

onChange = (e) =>{
    this.setState({[e.target.name] :
    e.target.value});

}

getcarname(){
    let allcars = JSON.parse(localStorage.getItem("allcars"));
    allcars.forEach((item) => {
        if(item.id === parseInt(this.props.match.params.car_id)){
            carName = item.name;
        }
    });
}

togglepopup(){
    this.setState({showpopup : !this.state.showpopup});
}

setdata(object){
    let bookedcars;
    if(localStorage.getItem("bookedcars")===null){
        bookedcars = [];
    }else{
        bookedcars = JSON.parse(localStorage.getItem("bookedcars"));
    }
    bookedcars.push(object);
    localStorage.setItem("bookedcars", JSON.stringify(bookedcars));
}

validate = () =>{
    let nameerror = '';
    let contacterror='';
    let issuedateerror='';
    let returndateerror='';
    let comparedateerror='';
    var pherror = /^((0091)|(\+91)|0?)[789]{1}\d{9}$/;
    var date1 = new Date(this.state.Issuedate);
    var date2 = new Date(this.state.Returndate);
    if(!this.state.Name){
        nameerror="Name cannot be blank";
    }
    if(!this.state.Contact.match(pherror)){
        contacterror="Invalid Contact Number";
    }
    if(!this.state.Issuedate){
        issuedateerror="Issue Date cannot be blank";
    }
    if(!this.state.Returndate){
        returndateerror="Return Date cannot be blank";
    }
    if(date1>date2){
        comparedateerror="Issue date cannot be greater than Return date ";
    }
    if(comparedateerror){
        this.setState({comparedateerror});
        return false;
    }
    if(nameerror || contacterror || issuedateerror || returndateerror){
        this.setState({nameerror, contacterror, issuedateerror, returndateerror});
        return false;
    }

    else{
        return true;
    }
};
render(){
        return (
            <React.Fragment>
            <div className="container-fluid bg">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12"></div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <form onSubmit={this.onSubmit} className="form-container">
                                <div className = "form-group" style={{color:"white"}}>
                                    <label>Name</label>
                                    <input className="form-control" type="text" 
                                    name="Name"
                                    placeholder="Your Name ..."
                                    value={this.state.Name}
                                    onChange = {this.onChange}/>
                                </div>
                                <div style={{color:"red", fontSize:15}}>
                                    {this.state.nameerror}
                                </div>
                                <div className="form-group" style={{color:"white"}}>
                                    <label>Contact Number</label>
                                    <input className="form-control" type="text" 
                                    name="Contact"
                                    placeholder="Contact No ..."
                                    value={this.state.Contact}
                                    onChange = {this.onChange}/>
                                </div>
                                <div style={{color:"red", fontSize:15}}>
                                    {this.state.contacterror}
                                </div>
                                <div className="form-group" style={{color:"white"}}>
                                    <label>Issue Date</label>
                                    <input className="form-control" type="date" 
                                    name="Issuedate"
                                    placeholder="IssueDate ..."
                                    value={this.state.Issuedate}
                                    onChange = {this.onChange}/>
                                </div>
                                <div style={{color:"red", fontSize:15}}>
                                    {this.state.issuedateerror}
                                </div>
                                <div className="form-group" style={{color:"white"}}>
                                    <label>Return Date</label>
                                    <input className="form-control" type="date" 
                                    name="Returndate"
                                    placeholder="ReturnDate ..."
                                    value={this.state.Returndate}
                                    onChange = {this.onChange}/>
                                </div>
                                <div style={{color:"red", fontSize:15}}>
                                    {this.state.returndateerror}
                                </div>
                                <div style={{color:"red", fontSize:15}}>
                                    {this.state.comparedateerror}
                                </div>
                                <input type="submit" value="Submit" className = "btn btn-warning btn-block cl"/>
                            </form>
                        </div>
                    <div className="col-md-4 col-sm-4 col-xs-12"></div>
                </div> 
                <div>
                    {this.state.showpopup?(
                        <SuccessModal
                            text = {`You have booked ${carName} for the duration ${this.state.Issuedate} - ${this.state.Returndate} `}
                            closePopup = {this.togglepopup.bind(this)}
                        />
                    ) : null}
                </div>
            </div>
        </React.Fragment>
        );
    }
}
export default car_booking;