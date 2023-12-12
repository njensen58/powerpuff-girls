import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom"
import { RootState } from "../store";
import { ITVShowEpisode } from "../types";
import { StyledLink } from "../shared/StyledLink";

export default function Episode(){
    let location = useLocation();
    const episodes = useSelector<RootState, ITVShowEpisode[]>((state) => state.tvShow.episodes);
    
    const selected = episodes.find(e => e.id === location.state.episodeID);
		
    if(!selected){
        return <div></div>
    }

    return (
        <div>  
            <StyledLink to="/" text="Go Back"/>
            <h1>{selected.name}</h1>
            <img src={selected.image.original} alt={selected.name} width={200}/>
            <p dangerouslySetInnerHTML={{ __html: selected.summary }} /> 
        </div>
    )
}