import { ITVShowEpisode } from "../types";
import { Link } from "react-router-dom";

interface IProps {
  episodes: ITVShowEpisode[];
}

export default function EpisodeList(props: IProps) {
  return (
    <div>
      {props.episodes.map((episode) => {
        let image = episode?.image?.original || episode?.image?.medium;
        return (
          <div key={episode.name}>
            <p>Title: {episode.name}</p>
            <p>Season: {episode.season}</p>
            <p>Episode: {episode.number}</p>
            {image && <img src={image} alt={episode.name} width={200}/>}
            <Link 
                to={`episode/${episode.id}`} 
                state={{episodeID: episode.id}}>
                See Episode Details
            </Link>
         </div>
      )})}
    </div>
  );
}
