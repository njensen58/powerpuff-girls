import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { RootState } from '../store';
import { TVShowState } from '../store/tvShowSlice';
import { fetchTVShow } from '../store/tvShowSlice';

export default function TVShow(){
	const dispatch = useAppDispatch();
	const show = useSelector<RootState, TVShowState>((state) => state.tvShow);
	
	const getTVShow = useCallback(
        // hardcoded-string for project, but easily replacable by dynamic text to fetch any tv show.
		() => dispatch(fetchTVShow("powerpuff+girls")),
		[dispatch]
	)

	useEffect(() => {
		getTVShow();
	}, [getTVShow])

	return (
		<>
			<h1>TV Show Page</h1>
			<h2>Title: {show.name}</h2>
			<div dangerouslySetInnerHTML={{__html: show.summary}}></div>
			<img src={show.imgUrl} alt={show.name}/>
			{show.episodes.map(episode => (
				<div>
					<p>Title: {episode.name}</p>
					<p dangerouslySetInnerHTML={{__html: episode.summary}} />
				</div>
			))}
		</>
	);
}