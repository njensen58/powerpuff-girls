import { ITVShowEpisode } from "../types";
import { x } from "@xstyled/styled-components";
import EpisodeListItem from "./EpisodeListItem";

interface IProps {
  episodes: ITVShowEpisode[];
}

export default function EpisodeList(props: IProps) {
  return (
    <x.div marginTop={8} width={'100%'}>
      {props.episodes.map((episode) => {
        let image = episode?.image?.original || episode?.image?.medium;
        return <EpisodeListItem episode={episode} image={image} key={episode.name}/>  
      })}
    </x.div>
  );
}
