export function TwitterFollowCard ({ formatUserName, userName, name, isFollowing }) {
	return (
		<article className='tw-followCard'>
			<header className='tw-followCard-header'>
				<img
					className='tw-followCard-avatar'
					alt="El avatar de kikobeats" 
					src={`https://unavatar.io/${userName}`}/>
				<div className='tw-followCard-info'>
					<strong>{name}</strong>
					<span
						className='tw-followCard-infoUserName'
					>@{userName}</span>
				</div>
			</header>

			<aside>
				<button
					className='tw-followCard-button'
				>
					Seguir
				</button>
			</aside>
		</article>
	)
}