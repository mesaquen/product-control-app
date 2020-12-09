import Fetch from './Fetch'

export const getProducts =  async () => {
    try {
        const response = await Fetch('/products')
        debugger;
        if (response.ok) {
            return await response.json()
        }
    } catch (e) {
        Logger.error(e)
    }

    return []
}