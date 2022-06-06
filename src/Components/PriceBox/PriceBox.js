import formatMoney from "../../Helpers/formatMoney";
import "./PriceBox.scss";

export default function PriceBox({regularPrice, discountPrice, currency}) {
    return (
        <>
            <div className="PriceBox">
                <span className="PriceBox__discount">From {formatMoney(discountPrice, currency)} - </span>
                <span className="PriceBox__regular">Price {formatMoney(regularPrice, currency)} </span>
            </div>
        </>
    )
}
