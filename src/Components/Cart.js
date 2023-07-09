import '../styles/Cart.css'
// ici useState utile pour changé les etat des composant et useEffect utile pour changer les effet des composant
import { useState, useEffect } from 'react' 
//ce composant gere la liste de course de l'utilisateur
// on crée un useState isOpen (pour afficher ou cacher le composant Cart)
// le parametre cart de la function Cart et utilisé pour analyse le tableau crée dans le useState de App.js
// le reste du composant sert afficher si nécessaire le prix  total des course faite
function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
            0
        )
	//Ici l'alerte ne s'affiche que lorsque le total de mon panier change, 
	//le tableau en deuxieme paremettre contient les variables permet d'activé useEffect:
	//si je veut active un render (useEffect 1 seule fois comme pour une API) on met un tableau vide à la place d'un tableau de valeur
    useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                    {name} {price}€ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total :{total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart