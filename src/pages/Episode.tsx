import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom"
import { RootState } from "../store";
import { TVShowState } from "../store/tvShowSlice";
import { StyledLink } from "../shared/StyledLink";
import { x } from "@xstyled/styled-components";
import ShowDisplay from "../components/ShowDisplay";

export default function Episode(){
	let location = useLocation();
	const show = useSelector<RootState, TVShowState>((state) => state.tvShow);

	const selected = show.episodes.find(e => e.id === location.state.episodeID);
	
	if(!selected){
			return <div></div>
	}

	const image = selected?.image?.original || selected?.image?.medium || show.imgUrl;

	return (
		<>
			<x.div bg="black" padding={8}>  
				<x.div marginBottom={8}>            
						<StyledLink to="/" text="Go Back"/>
				</x.div>
				<x.div display="flex">
						<ShowDisplay name={selected.name} summary={selected.summary} imgUrl={image}/>
				</x.div>
			</x.div>
			<x.div bg="black" display="flex" minHeight="50vh">
			</x.div>
		</>
	)
}
