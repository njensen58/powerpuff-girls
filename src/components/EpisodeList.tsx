import { ITVShowEpisode } from "../types";
import { x } from "@xstyled/styled-components";
import { StyledLink } from "../shared/StyledLink";

interface IProps {
  episodes: ITVShowEpisode[];
}

export default function EpisodeList(props: IProps) {
  return (
    <>
      {props.episodes.map((episode) => {
        let image = episode?.image?.original || episode?.image?.medium;
        return (
          <x.div 
            key={episode.name} 
            display="flex" 
            alignItems="center"
          >
            {image && <img src={image} alt={episode.name} width={100}/>}
            <p>Title: {episode.name}</p>
            <p>Season: {episode.season}</p>
            <p>Episode: {episode.number}</p>
            <StyledLink 
                to={`episode/${episode.id}`} 
                state={{episodeID: episode.id}}
                text="See Episode Details"/>
         </x.div>
      )})}
    </>
  );
}
