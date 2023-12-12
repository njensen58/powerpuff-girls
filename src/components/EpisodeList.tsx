import { x } from "@xstyled/styled-components";
import EpisodeListItem from "./EpisodeListItem";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { TVShowState } from "../store/tvShowSlice";


export default function EpisodeList() {
  const show = useSelector<RootState, TVShowState>((state) => state.tvShow);

  return (
    <x.div marginTop={8} width={'100%'}>
      {show.episodes.map((episode) => {
        let image = episode?.image?.original || episode?.image?.medium || show.imgUrl;
        
        return (
          <EpisodeListItem 
            episode={episode} 
            image={image} 
            key={episode.name}
          />
        )  
      })}
    </x.div>
  );
}
