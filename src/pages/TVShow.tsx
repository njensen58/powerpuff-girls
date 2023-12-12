import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { RootState } from "../store";
import { TVShowState } from "../store/tvShowSlice";
import { fetchTVShow } from "../store/tvShowSlice";
import ShowDisplay from "../components/ShowDisplay";
import EpisodeList from "../components/EpisodeList";
import { x } from "@xstyled/styled-components";

export default function TVShow() {
  const dispatch = useAppDispatch();
  const show = useSelector<RootState, TVShowState>((state) => state.tvShow);

  const getTVShow = useCallback(
    // hardcoded-string for project, but easily replacable by dynamic text to fetch any tv show.
    () => dispatch(fetchTVShow("powerpuff+girls")),
    [dispatch],
  );

  useEffect(() => {
    getTVShow();
  }, [getTVShow]);

  return (
    <x.div display="flex" flexDirection="column" margin={8}>
      <ShowDisplay
        name={show.name}
        summary={show.summary}
        imgUrl={show.imgUrl}
      />
      <EpisodeList episodes={show.episodes} />
    </x.div>
  );
}
