import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { IonButton, IonContent, IonPage } from '@ionic/react'


export default function CleanerLogin() {

    const history = useHistory();

    return (
        <IonPage>
            <IonContent className="bg-cleaner">
                <div className="wrap">   
                    <h4 className="logo">Prihlásenie upratovača</h4>
                    <IonButton className="login" onClick={() => history.push('/cleaner/home')}>Prihlásiť cez Google</IonButton>
                </div>
                <Link className="dev dev-bottomRight" to="/customer/login">Zákazník</Link>
            </IonContent>
        </IonPage>
    )
}
