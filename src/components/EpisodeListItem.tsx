import { x } from "@xstyled/styled-components"
import { ITVShowEpisode } from "../types"
import { StyledLink } from "../shared/StyledLink";

interface IProps {
    episode: ITVShowEpisode;
    image: string | null;
}

export default function EpisodeListItem(props: IProps){
	const {episode, image} = props;
	
	return (
		<x.div 
			display="flex" 
			alignItems="center"
			marginTop={4}
			marginBottom={4}
			maxWidth={"1080px"}
		>
			{image && <x.img src={image} alt={episode.name} width={100}/>}
			<x.div marginLeft={4}>
				<x.p color="white">Season: {episode.season}</x.p>
				<x.p color="white">Episode: {episode.number}</x.p>
			</x.div>
			<x.p color="white" marginLeft={4} marginRight={4}>{episode.name}</x.p>
			<StyledLink 
					to={`episode/${episode.id}`} 
					state={{episodeID: episode.id}}
					text="See Episode Details"
			/>
		</x.div>
	)
}