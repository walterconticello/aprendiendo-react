import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
	return (
		<section className='App'>
			<TwitterFollowCard
				isFollowing={false}
				userName="midudev"
				name="Miguel Angel Duran"
			/>

			<TwitterFollowCard
				isFollowing
				userName="leomessisite"
				name="Leonel Messi"
			/>

			<TwitterFollowCard
				isFollowing
				userName="kikobeats"
				name="Kiko Beats"
			/>
		</section>
	)
}

export default App