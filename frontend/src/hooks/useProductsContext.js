import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
export const useProductsContext = () => {
    const context = useContext(ProductsContext)
    if (!context) {
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }
    return context

}
