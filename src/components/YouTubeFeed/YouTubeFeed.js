import React from 'react'
import YouTubeVideo from '@components/YouTubeVideo/YouTubeVideo';

const YouTubeFeed = ({videos}) =>
  videos.map(({snippet: video, id}) => (
    <YouTubeVideo
      title={video.title}
      id={id.videoId}
      thumbnail={video.thumbnails ? video.thumbnails.high : {}}
      published={video.publishedAt}
    />
  ))

export default YouTubeFeed
