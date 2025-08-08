import { useReducer, createContext, useEffect } from "react";

export const GlobalContext = createContext()


const initialState = () => {
    const l = localStorage.getItem('cart')
    return l
        ? JSON.parse(l)
        : {
            cart: [],
            totalPrice: 0,
            totalAmount: 0
        }
}

function reducer(state, action) {
    const { type, payload } = action
    switch (type) {
        case "ADD":
            return { ...state, cart: [...state.cart, payload] };

        case "DEL":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== payload),
            };

        case "INC":
            return {
                ...state,
                cart: state.cart.map((el) =>
                    el.id === payload
                        ? { ...el, amount: el.amount + 1 }
                        : el
                )
            }

        case "DEC":
            return {
                ...state,
                cart: state.cart.map((el) =>
                    el.id === payload
                        ? { ...el, amount: el.amount - 1 }
                        : el
                )
            }

        case "CALCULATE":
            let { totalAmount, totalPrice } = state.cart.reduce((a, b) => {
                const { amount, price } = b
                const itemTotal = amount * price
                a.totalPrice += itemTotal
                a.totalAmount += amount
                return a
            }, { totalPrice: 0, totalAmount: 0 })
            return { ...state, totalAmount, totalPrice }

        case "CLEAR":
            return {
                cart: [],
                totalPrice: 0,
                totalAmount: 0
            }

        default:
            return state
    }
}

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState())

    useEffect(() => {
        dispatch({ type: "CALCULATE" })
        localStorage.setItem("cart", JSON.stringify(state))
    }, [state.cart])

    return (
        <GlobalContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
