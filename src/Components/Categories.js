import '../styles/Categories.css'
/*Ce composant sert principalement a créer un select contenant les categories de plantes dans plantList (voi composant PlantItem) 
quand l'utilisateur selectionne une option onChange est activé ce qui met a jour le state de activeCategory via la fonction setActiveCategory
cette mise a jour influence l'affichage des plantItems dans le composant ShoppingList
*/
function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='lmj-categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories

