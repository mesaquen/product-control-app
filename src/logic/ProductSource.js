import Logger from '../utils/Logger'
import Fetch from './Fetch'

export const getProducts =  async () => {
    try {
        return await Fetch('/products')
    } catch (e) {
        Logger.error(e)
    }

    return []
}

export const addProduct = async (product) => {
    try {
        const persistedProduct = await Fetch('/products', {
            method: 'POST',
            body: JSON.stringify(product)
        })
        Logger.log('PERSISTED PRODUCT', persistedProduct)
        return persistedProduct
    } catch (e) {
        Logger.error(e)
    }

    return null
}

export const deleteById = async id => {
    if (id) {
        return Fetch(`/products/${id}`, {
            method: 'DELETE'
        })   
    }
    return Promise.reject(null)
}