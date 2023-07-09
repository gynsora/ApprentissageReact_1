import CareScale from './CareScale'
import '../styles/PlantItem.css'

//fonction à l'evenement onclick
function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

// permet l'affichage d'une plante avec ces caracteristique
// des li contenu dans ul présent dans le composant parent qui est shoppingList
// on introduit le composant carescale pour évaluer la qte d'eau et de lumiere nécessaire pour entretenir chaque plante
function PlantItem({ cover, name, water, light, price }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem