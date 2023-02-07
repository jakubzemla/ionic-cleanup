import { useDispatch } from 'react-redux'
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react'
import { IonButton } from '@ionic/react'
import { updateOrder } from './orders.slice'
import { now } from './datetime.util'
import './Order.css'

const Order = (props) => {

    let dispatch = useDispatch()

    let o = props.o

    function mins(h) {
        return Math.floor(o.real_duration_h*60) + 'm'
    }
    function secs(h) {
        return Math.floor(o.real_duration_h*3600%60) + 's'
    }

    function startOrder() {
        dispatch(updateOrder(o.id, {real_start: now()}))
    }

    function endOrder() {
        dispatch(updateOrder(o.id, {real_end: now()}))
    }

    function setOrderAsPlanned() {
        dispatch(updateOrder(o.id, {status: 'planned'}))
    }

    function cancelOrder() {
        dispatch(updateOrder(o.id, {status: 'canceled'}))
    }

    return (
        <IonCard className={props.cleaner ? 'bg-cleaner2' : ''}>
            <IonCardHeader>
                <IonCardTitle>Objednavka {o.id}</IonCardTitle>
                <IonCardSubtitle>Stav: {o.status}
                    <br/>
                    {props.cleaner && (
                    <>
                        {o.status==='planned' &&
                            <IonButton onClick={startOrder} color="success">
                                Start upratovania
                            </IonButton>
                        }
                        {o.status==='started' &&
                            <IonButton onClick={endOrder} color="danger">
                                Koniec upratovania
                            </IonButton>
                        }

                        {(o.status==='ended' || o.status==='canceled') &&
                            <IonButton onClick={setOrderAsPlanned} color="warning">
                                Nastavit "planovana"
                            </IonButton>
                        }
                        {(o.status==='planned' || o.status==='started') &&
                            <IonButton onClick={cancelOrder} color="dark" size="small">
                                Zrusit
                            </IonButton>
                        }
                    </>
                )}
                </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                Datum: {o.date}<br/>
                Odhadovany zaciatok: {o.estimated_start}<br/>
                Odhadovany koniec: {o.estimated_end}<br/>
                Odhadovane trvanie (h): {o.estimated_duration_h}<br/>
                <br/>
                Realny start: {o.real_start}<br/>
                Realny koniec: {o.real_end}<br/>
                Realne trvanie: {mins(o.real_duration_h)}&nbsp;{secs(o.real_duration_h)}&nbsp;
                    ({o.real_duration_h} h)<br/>
                <br/>
                Manualna cena: {o.manual_price}<br/>
                <br/>
                Posledna zmena: {o.updated_at}
            </IonCardContent>
        </IonCard>
    )
}

export default Order
