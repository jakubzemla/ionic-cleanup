import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useIonViewDidEnter } from '@ionic/react'
import { IonRefresher, IonRefresherContent } from '@ionic/react'
import { useDispatch, useSelector } from 'react-redux'
import CustomerInfo from './CustomerInfo'
import Orders from './orders/Orders'
import { getProfile, fetchProfile } from './customer.slice'
import { fetchOrders, getOrders } from './orders/orders.slice'
import './CustomerHome.css'

const CustomerHome = () => {

  let profile = useSelector(getProfile)
  let orders = useSelector(getOrders)

  let dispatch = useDispatch()

  useIonViewDidEnter(() => {
    dispatch(fetchProfile())
    dispatch(fetchOrders())
  })

  function refresh(e) {
    Promise.all([
      dispatch(fetchProfile()),
      dispatch(fetchOrders())
    ]).then(() => {
      e.detail.complete()
    })
  }
  console.log(profile)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Objednávky</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <CustomerInfo profile={profile}/>
        <Orders orders={orders}/>
      </IonContent>
    </IonPage>
  )
}

export default CustomerHome
