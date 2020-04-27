import React from 'react'
import PropTypes from 'prop-types'
import YouTubeVideo from '@components/YouTubeVideo/YouTubeVideo'
import './YouTubeFeed.scss'

// Renders a feed of YouTube videos.
const YouTubeFeed = ({videos}) => (
  <div className="youtube-feed">
    {videos.map(({snippet: video, id}) => (
      <YouTubeVideo
        key={video.title}
        title={video.title}
        id={id.videoId}
        thumbnail={video.thumbnails ? video.thumbnails.high : {}}
        published={video.publishedAt}
      />
    ))}
  </div>
)

YouTubeFeed.propTypes = {
  /** The video object. */
  videos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default YouTubeFeed
