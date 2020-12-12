import Fetch from './Fetch'

export const getProducts =  async () => {
    try {
        return await Fetch('/products')
    } catch (e) {
        Logger.error(e)
    }

    return []
}