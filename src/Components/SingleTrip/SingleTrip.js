import StarsRate from "../StarsRate/StarsRate"
import PriceBox from "../PriceBox/PriceBox";

import "./SingleTrip.scss";

export default function SingleTrip({trips}) {
    return trips.map((trip) => {
        return(
            <div className="SingleTrip" key={trip.id}>
                <a href="#0" className="SingleTrip__thumb">
                    <img src={trip.thumb} alt={trip.name} />
                </a>
                <div className="SingleTrip__details">
                    <span>{trip.countries} Countries, {trip.days} Days</span>
                    <h3><a href="#0">{trip.name}</a></h3>
                    <StarsRate stars={trip.stars} />
                    <PriceBox
                        currency={trip.currency}
                        regularPrice={trip.normalPrice}
                        discountPrice={trip.discountPrice}
                    />
                </div>
            </div>
        )
    })
}
