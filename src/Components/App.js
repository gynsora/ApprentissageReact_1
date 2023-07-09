import logo from '../assets/logo.svg';
import '../styles/App.css'; // a peut etre retirer
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/Layout.css'
import { useState } from 'react'

// ici on a lapplication au complet , 
//on a le composant Banner (avec 2 children <img> et <h1>),
//le commposant SHopinglist 
function App() {
	//on crée useState sous forme de tableau pour crée un tableau contenant les produits présent dans notre panier de course
	// les composant Cart et ShoppingList ont besoin de se useState
	// en cliquant sur les produit dans shoppingList cela permet de modifier le composant Cart (voir les 2 composant)
	const [cart, updateCart] = useState([])
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} /> 
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}


export default App


/*<img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
*/