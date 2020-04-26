import React from 'react'
import YouTubeVideo from '@components/YouTubeVideo/YouTubeVideo'

import './YouTubeFeed.scss';

const YouTubeFeed = ({videos}) => (
  <div className="youtube-feed">
    {videos.map(({snippet: video, id}) => (
      <YouTubeVideo
        title={video.title}
        id={id.videoId}
        thumbnail={video.thumbnails ? video.thumbnails.high : {}}
        published={video.publishedAt}
      />
    ))}
  </div>
)

export default YouTubeFeed
