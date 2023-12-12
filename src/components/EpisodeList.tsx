import React from "react";
import { ITVShowEpisode } from "../types";

interface IProps {
  episodes: ITVShowEpisode[];
}

export default function EpisodeList(props: IProps) {
  return (
    <div>
      {props.episodes.map((episode) => (
        <div>
          <p>Title: {episode.name}</p>
          <p dangerouslySetInnerHTML={{ __html: episode.summary }} />
        </div>
      ))}
    </div>
  );
}
