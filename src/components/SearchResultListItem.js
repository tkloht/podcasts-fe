import React from 'react';
import { Link } from 'react-router';

function SearchResultListItem({ data: {
  trackName,
  artistName,
  artworkUrl30,
  artworkUrl60,
  artworkUrl100,
  artworkUrl600,
  feedUrl,
  genres,
  feed_id,
} }) {
  return <div className="mt2 pa2 b-black b--dotted ba flex">
    {artworkUrl100 && <img src={artworkUrl100}
      alt=""
      className="flex-none mr2 "
    />}
    <div className="flex-auto">
      <div className="fw6">
        {feed_id
          ? <Link to={`/feeds/${feed_id}`}>{trackName}</Link>
          : trackName}
      </div>
    </div>
  </div>;
}

export default SearchResultListItem;
