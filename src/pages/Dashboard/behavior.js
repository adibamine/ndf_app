const LOAD_EXPENSES = 'LOAD_EXPENSES';
const ADD_EXPENSE = 'ADD_EXPENSE';
const OPEN_EXPENSE_FORM_MODAL = 'OPEN_EXPENSE_FORM_MODAL';
const CLOSE_EXPENSE_FORM_MODAL = 'CLOSE_EXPENSE_FORM_MODAL';


const expenses = [
    createData(new Date(), 'Elvis Presley', 'Taxi toto', 'Cash', 312.44),
    createData(new Date(2019, 1, 1), 'Paul McCartney', 'Train toto', 'Cash', 866.99),
    createData(new Date(2019, 7, 10), 'Tom Scholz', 'Avion titi', 'Carte', 100.81),
    createData(new Date(), 'Michael Jackson', 'Frais visas', 'Cheque', 654.39),
    createData(new Date(), 'Bruce Springsteen', 'Repas client', 'Cheque', 212.79),
]

const initialState = {
    expensesList: expenses,
    isModalOpen: false,
}


function createData(date, name, description, paymentMethod, amount) {
    return { date, name, description, paymentMethod, amount };
}

export function closeModal() {
    return (dispatch) => {
        dispatch({ type: CLOSE_EXPENSE_FORM_MODAL });
    }
}

export function openModal() {
    return (dispatch) => {
        dispatch({ type: OPEN_EXPENSE_FORM_MODAL });
    }
}

export function addExpense(expense) {
    const newExpense = createData(expense.id, expense.date, expense.name, expense.description, expense.paymentMethod, expense.amount)
    return (dispatch) => {
        dispatch({ type: ADD_EXPENSE, payload: newExpense })
    }
}

export default function reducer(state={...initialState}, action) {
    switch(action.type) {
        case LOAD_EXPENSES: 
            return Object.assign({}, state, {
                expensesList: action.payload
            })
        case ADD_EXPENSE: 
            return Object.assign({}, state, {
                expensesList: [...state.expensesList, action.payload],
                isModalOpen: false,
            })
        case OPEN_EXPENSE_FORM_MODAL: 
            return Object.assign({}, state, {
                isModalOpen: true,
            })
        case CLOSE_EXPENSE_FORM_MODAL: 
            return Object.assign({}, state, {
                isModalOpen: false,
            })
        default:
            return state
    }
}