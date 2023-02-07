import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const customerSlice = createSlice({

    name: 'customer',

    initialState: {
        profile: null,
    },

    reducers: {
        profileLoaded: (state, {payload}) => {
            state.profile = payload.data[0]
        }
    }
})

const { profileLoaded } = customerSlice.actions

export function fetchProfile() {
    return async (dispatch) => {
        let API_URL = false
            ? 'http://localhost/cleanup/cms'
            : 'http://cleanup.skus.im/cms'

        axios.get(API_URL + '/api/profile')
        .then(({data}) => {
            dispatch(profileLoaded(data))
        })
    }
}

export const getProfile = (state) => state.customer.profile

export default customerSlice