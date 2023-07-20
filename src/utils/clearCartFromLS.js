export const clearCartFromLS = () => {
    const data =  localStorage.removeItem('cart');
    const items = [];
    const totalPrice = []
    window.location.reload()

        return {
            items,
            totalPrice,
        }
 }