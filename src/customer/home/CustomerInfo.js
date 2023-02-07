const CustomerInfo = (props) => {

    let p = props.profile

    return (
        <div className="ion-margin">
            Nazov: {p?.name}<br/>
            <br/>
            Hodinovka: {p?.hourly_rate} € <br/>
            Aktualny kredit: {p?.current_credit} € <br/>
            Mesacny Budget: {p?.monthly_budget} <br/>
        </div>
    )
}

export default CustomerInfo
