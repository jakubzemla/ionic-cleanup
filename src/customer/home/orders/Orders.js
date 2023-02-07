import Order from './Order'

const Orders = (props) => {
  return (
    <div className="container">
      {props.orders && props.orders.map((o, i) => (
        <Order o={o} key={i} cleaner={props.cleaner}/>
      ))}
    </div>
  )
}

export default Orders
