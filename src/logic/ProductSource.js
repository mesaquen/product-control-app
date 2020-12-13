import Fetch from './Fetch'

export const getProducts =  async () => {
    try {
        return await Fetch('/products')
    } catch (e) {
        Logger.error(e)
    }

    return []
}

export const deleteById = async id => {
    if (id) {
        return Fetch(`/products/${id}`, {
            method: 'DELETE'
        })   
    }
    return Promise.reject(null)
}