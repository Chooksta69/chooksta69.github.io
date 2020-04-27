import React from 'react'
import {format as timeSince} from 'timeago.js'
import PropTypes from 'prop-types'
import {DOMParser} from 'xmldom'
import './YouTubeVideo.scss'

// Converts escaped strings into non-escaped strings.
function htmlDecode(input) {
  const dom = new DOMParser().parseFromString(input, 'text/html')
  return dom.childNodes[0].textContent
}

// Renders each YouTube video within the feed.
const YouTubeVideo = ({title, id, thumbnail, published}) => (
  <article className="youtube-video">
    <div className="row justify-content-center align-items-center">
      <div className="extra-small-4">
        {thumbnail && thumbnail.url && (
          <a
            className="youtube-video__meta--link"
            href={`https://www.youtube.com/watch?v=${id}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt={title} src={thumbnail.url} />
          </a>
        )}
      </div>

      <div className="extra-small-8">
        <h3 className="youtube-video--header">{htmlDecode(title)}</h3>

        <div className="youtube-video__meta display-flex flex-wrap-wrap align-items-center">
          <a
            className="youtube-video__meta--link"
            href={`https://www.youtube.com/watch?v=${id}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            View on YouTube
          </a>
          <span className="youtube-video__meta--spacer">|</span>
          <time className="youtube-video__meta--time" dateTime={published}>
            {timeSince(published)}
          </time>
        </div>
      </div>
    </div>
  </article>
)

YouTubeVideo.propTypes = {
  video: PropTypes.shape({
    /** The video title. */
    title: PropTypes.string,
    /** The video id. */
    id: PropTypes.string,
    /** The video thumbnail object containing url etc. */
    thumbnail: PropTypes.object,
    /** The video publish date string. */
    published: PropTypes.string
  })
}

export default YouTubeVideo
