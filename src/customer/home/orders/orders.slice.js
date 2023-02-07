import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const ordersSlice = createSlice({

    name: 'orders',

    initialState: {
        orders: null,
    },

    reducers: {
        ordersLoaded: (state, action) => {
            state.orders = action.payload.data
        }
    }
})

const { ordersLoaded } = ordersSlice.actions

export function fetchOrders() {
    return async (dispatch) => {
        let API_URL = false
            ? 'http://localhost/cleanup/cms'
            : 'http://cleanup.skus.im/cms'

        axios.get(API_URL + '/api/orders')
        .then(({data}) => {
            dispatch(ordersLoaded(data))
        })
    }
}

export function updateOrder(id, attrs) {
    return async (dispatch) => {
        let API_URL = false
            ? 'http://localhost/cleanup/cms'
            : 'http://cleanup.skus.im/cms'

        axios.put(API_URL + '/api/orders/' + id, attrs)
        .then(({data}) => {
            dispatch(fetchOrders())
        })
    }
}

export const getOrders = state => state.orders.orders
export default ordersSlice
