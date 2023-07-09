import { plantList } from '../datas/plantList' // datas sur toutes les plantes du site 
import PlantItem from './PlantItem' // composant plantItem voir plantItems.js
import Categories from './Categories' 
import '../styles/ShoppingList.css'
import { useState } from 'react'

//affiche les  plante achetable 
// on utilise un usestate cart pour modifier le composant cart en fonction des plantes que l'on veut ajouter dans le panier
// on crée un usestate pour définir une activeCategory cela va permettre d'afficher toutes les plantes du site ou juste une partie

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	//ici on analyse toutes les plantes de la base de données pour cree un tableau contenant les différentes catégories de plantes
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	//cette fonction permet d'ajouter dans la le useState cart,updateCart une nouvelle plante (amount +1 )
	function addToCart(name, price) {
		// on cherche si le name corespond a un nom d'objet deja presant dans cart
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		//si oui on recrée un tableau sans cet objet et on le reajoute avec un amount a +1
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		}// sinon on l'ajoute l'objet directement dans le tableau cart
		else{
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	//on retour le selecteurs de categorie Catagories et on affiche toutes les plantes dont la categories correspond au useState activeCategories
	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}


export default ShoppingList

