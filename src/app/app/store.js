import { configureStore } from '@reduxjs/toolkit'
import { customerSlice } from '../../customer/home/customer.slice'
import ordersSlice from '../../customer/home/orders/orders.slice'

export const store = configureStore({
    reducer: {
        'customer': customerSlice.reducer,
        'orders': ordersSlice.reducer,
    },
})
