import SingleTrip from  "../SingleTrip/SingleTrip";
import "./RecentViewedTrips.scss";

export default function RecentViewedTrips({trips}) {
    return (
       <div className="RecentTrips flex flex-wrap justify-content-space-between">
           <h2>Recently viewed trips</h2>
           <SingleTrip trips={trips} />
       </div>
    );
}
