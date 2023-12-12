import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { TVShowState } from '../store/tvShowSlice';

export default function TVShow(){
	const show = useSelector<RootState, TVShowState>((state) => state.tvShow);

	return (
		<>
			<h1>TV Show Page</h1>
			<h2>Title: {show.title}</h2>
		</>
	);
}