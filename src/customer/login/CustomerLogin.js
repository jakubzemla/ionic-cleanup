import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { IonButton, IonContent, IonPage } from '@ionic/react'
import './CustomerLogin.css'

const CustomerLogin = (props) => {

    const history = useHistory();

    return (
        <IonPage>
            <IonContent>
                <div className="wrap">   
                    <h3 className="logo">GOLDLUX</h3>
                    <h4>Prihlásenie zákazníka</h4>
                    <IonButton onClick={() => history.push('/customer/home')}>Prihlásiť cez Google</IonButton>
                </div>
                <Link className="dev dev-bottomRight" to="/cleaner/login">Upratovač</Link>
            </IonContent>
        </IonPage>
    )
}

export default CustomerLogin
