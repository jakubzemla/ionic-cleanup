import { useSelector, useDispatch } from 'react-redux'
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonRefresher } from '@ionic/react'
import { useIonViewDidEnter } from '@ionic/react'
import { getOrders, fetchOrders } from '../../customer/home/orders/orders.slice'
import Orders from '../../customer/home/orders/Orders'

export default function CleanerHome() {

    let orders = useSelector(getOrders)

    let dispatch = useDispatch()

    useIonViewDidEnter(() => {
        dispatch(fetchOrders())
    })

    function refresh(e) {
        dispatch(fetchOrders())
        .then(() => {
            e.detail.complete()
        })
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="bg-cleaner">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Objednávky</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="bg-cleaner">
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                </IonRefresher>
                <Orders orders={orders} cleaner="true"/>
            </IonContent>
        </IonPage>
    )
}
