import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'userorder',
    initialState: {
        orders: [{ _id:'12345',date:'Apr 09, 2024',name:'Rajesh Kannan',order:[ {item:'Ooty apple',count:'1',price:'₹100.00'},
            {item:'White Egg',count:'5',price:'₹50.00'}],total_price:'₹150.00'},{ _id:'14235',date:'May 06, 2024',name:'Deepan Kumar',order:[ {item:'Ooty Tomato',count:'1',price:'₹10.00'},
            {item:'White Egg',count:'5',price:'₹50.00'}],total_price:'₹60.00'},{ _id:'18435',date:'Jan 18, 2024',name:'Arun Prasand',order:[ {item:'Coriander',count:'1',price:'₹20.00'},
            {item:'Chocolate',count:'5',price:'₹100.00'}],total_price:'₹120.00'},{ _id:'28435',date:'Apr 01, 2024',name:'Sasi Reka',order:[ {item:'Sun Flower',count:'1',price:'₹20.00'},
            {item:'Lotus',count:'5',price:'₹100.00'}],total_price:'₹120.00'}],
        prepareorders:[],
        pack:[],
        complete:[{ _id:'12345',date:'Apr 09, 2024',name:'Rajesh Kannan',order:[ {item:'Ooty apple',count:'1',price:'₹100.00'},{item:'White Egg',count:'5',price:'₹50.00'}],total_price:'₹150.00'}],
        status: 'idle',
        error: null
    },
    reducers: {
        setorders: (state, action) => {
            state.orders=[...action.payload];
            state.status = 'succeeded';
        },
        setError: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        confirmorders:(state,action)=>{
            state.orders=state.orders.filter((item)=>item?._id !== action.payload?._id)
            state.prepareorders=[...state.prepareorders,action.payload]
            state.error=action.payload;
        },
        packorders:(state,action)=>{
            state.prepareorders=state.prepareorders.filter((item)=>item?._id !== action.payload?._id)
            state.pack=[...state.pack,action.payload]
            state.error=action.payload;
        }
    }
});

export const { setorders,setError,confirmorders,packorders} = orderSlice.actions;
export const orderReducer =orderSlice.reducer;