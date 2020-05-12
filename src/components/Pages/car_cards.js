import React, {Component} from 'react';
import img1 from '../Layout/assets/ertiga.jpg';
import img2 from '../Layout/assets/fordecosport.jpg';
import img3 from '../Layout/assets/honda-cr-v.jpg';
import img4 from '../Layout/assets/maruti-xl6.jpg';
import img5 from '../Layout/assets/swift.png';
import img6 from '../Layout/assets/hyundai-i10.jpg';
import CardUI from '../Layout/Cards/CardUI';
import {Container} from 'reactstrap';
import LOL from '../Pages/reset';

class car_cards extends Component {
    state = { 
        cars : [
            {
                id: 0,
                imgUrl: img2,
                name: "Ford EcoSport",
                color: "Blue",
                price: 1350,
                seat: "4 Seater",
                vehicleNo: "05 D 3670",
                type: "Petrol Car",
                engine: "Petrol Car 1.1 Kappa Dual VTVT BS6",
                descp:
                  "Ford EcoSport. The Ford EcoSport (pronounced ek-ho sport) is a subcompact crossover SUV, originally built in Brazil by Ford Brazil since 2003, at the Camaçari plant. A second generation concept model was launched in 2012, and is also assembled in new factories in India, Thailand, Russia and Romania.",
            },
            {
                id: 1,
                imgUrl: img6,
                name: "Hyundai Grand i10",
                color: "White",
                price: 350,
                seat: "4 Seater",
                vehicleNo: "18 D 4356",
                type: "Petrol Car",
                engine: "Petrol Car 1.2 Kappa Dual VTVT BS6",
                descp:
                  "The Hyundai Grand i10 has 1 Petrol Engine on offer. The Petrol engine is 1197 cc. ... Depending upon the variant and fuel type the Grand i10 has a mileage of 18.9 kmpl. The Grand i10 is a 5 seater Hatchback and has a length of 3765mm, width of 1660mm and a wheelbase of 2425mm.",
              },
              
              {
                id: 2,
                imgUrl: img4,
                name: "Maruti Suzuki XL6",
                color: "Glossy Silver",
                price: 850,
                seat: "6 Seater",
                vehicleNo: "30 D 6718",
                type: "Fuel Car",
                engine: "Fuel Car 1.2 Kappa Dual VTVT BS6",
                descp:
                  "The Maruti Suzuki XL6, although based on the Ertiga, is a premium MPV with rugged styling elements and added equipment. It packs features like automatic LED headlamps, cruise control and rains sensing wipers, and the sense of space is elevated with captain seats in the middle row.",
              },
              {
                id: 3,
                imgUrl: img5,
                name: "Maruti Suzuki Swift Dzire",
                color: "White",
                price: 550,
                seat: "4 Seater",
                vehicleNo: "21 D 1234",
                type: "Diesel Car",
                engine: "Diesel Car 1.5 Kappa Dual VTVT BS6",
                descp:
                  "For 2020, Maruti dropped the Dzire's powertrain lineup from two engines to one. Now, a turbocharged 1.5-liter four-cylinder engine comes standard, and it's rated at 190 horsepower and 179 pound-feet of torque. A continuously variable automatic transmission (CVT) is also standard.",
              },
              {
                id: 4,
                imgUrl: img1,
                name: "Maruti Ertiga Tour M",
                color: "Silver",
                price: 1550,
                seat: "8 Seater",
                vehicleNo: "18 D 4356",
                type: "Petrol Car",
                engine: "Petrol Car 1.2 Kappa Dual VTVT BS6",
                descp:
                  "The Ertiga Tour M has 1 Petrol Engine on offer. The Petrol engine is 1197 cc. ... Depending upon the variant and fuel type the Grand i10 has a mileage of 18.9 kmpl. The Grand i10 is a 5 seater Hatchback and has a length of 3765mm, width of 1660mm and a wheelbase of 2425mm.",
              },
              {
                id: 5,
                imgUrl: img3,
                name: "Honda CR-V",
                color: "Blue",
                price: 850,
                seat: "6 Seater",
                vehicleNo: "05 D 3670",
                type: "Petrol Car",
                engine: "Petrol Car 1.1 Kappa Dual VTVT BS6",
                descp:
                  " The Honda CR-V is a subcompact crossover SUV, originally built in Brazil by Ford Brazil since 2003, at the Camaçari plant. A second generation concept model was launched in 2012, and is also assembled in new factories in India, Thailand, Russia and Romania.",
              }
        ]
     };
    render() {
        if(!localStorage.justonce){
            localStorage.setItem("justonce", "true");
            window.location.reload();
        }
        let bookedCars = [];
        let bookedCarsId = [];
        if(localStorage.getItem("bookedcars") === null){
            bookedCars = [];
        }else{
            bookedCars = JSON.parse(localStorage.getItem("bookedcars"));

            for(let i=0; i<bookedCars.length;i++){
                bookedCarsId.push(bookedCars[i].carid);            
            }
        }
        localStorage.setItem("allcars", JSON.stringify(this.state.cars));
        let cars = this.state.cars.map((cars)=>{
            return(
                <div className="col-md-4" key = {cars.id}>
                    <div>
                        <CardUI cars={cars} bookedCarsId={bookedCarsId}/>
                        <br></br>
                    </div>
                </div>
            );
        });

        return (
            <Container>
                <div className="container-fluid d-flex justify-content-center card-deck mt-2">
                <div className="row">
                {cars}
                </div>
                </div>
                <LOL/>
            </Container>
        );
    }
}

export default car_cards;