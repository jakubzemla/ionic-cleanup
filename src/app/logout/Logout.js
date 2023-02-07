import { useHistory } from 'react-router-dom'
import { useIonViewDidEnter } from '@ionic/react'
import { IonContent, IonPage } from '@ionic/react'


export default function Logout() {

    const history = useHistory();

    useIonViewDidEnter(() => {
        history.push('/customer/login')
    })

    return (
        <IonPage>
            <IonContent>
                should be logged out and redirected to login..
                <br/>
                if you see this text, something went wrong, sowwy, please, do cry
            </IonContent>
        </IonPage>
    )
}
