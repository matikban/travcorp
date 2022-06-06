
import "./StarsRate.scss";

export default function StarsRate({stars}) {
    return (
        <>
            <div className={`StarsRate widthPercentage--${stars*20}`}>
                <span>{stars}</span>
            </div>
        </>
    )
}



