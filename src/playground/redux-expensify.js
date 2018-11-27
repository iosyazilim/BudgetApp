import { createStore, combineReducers } from "redux";

//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        default:
        return state;
    }
} ;

//Filters Reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
   switch (action.type) {
       default:
       return state;
   }
}

//Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
    );

console.log(store.getState());

const demoState = {
    expenses:[{
        id: 'ewErsaweqvsw',
        description: 'Junary Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};