import React from 'react'
import {format as timeSince} from 'timeago.js'
import './YouTubeVideo.scss'

function htmlDecode(input) {
  if (typeof window !== 'undefined') {
    var doc = new DOMParser().parseFromString(input, 'text/html')
    return doc.documentElement.textContent
  }
}

const YouTubeVideo = ({title, id, thumbnail, published}) => (
  <article className="youtube-video">
    <div className="row justify-content-center align-items-center">
      <div className="extra-small-4">
        {thumbnail && thumbnail.url && <img src={thumbnail.url} />}
      </div>

      <div className="extra-small-8">
        <h3 className="youtube-video--header">{htmlDecode(title)}</h3>

        <div className="youtube-video__meta display-flex align-items-center">
          <a
            className="youtube-video__meta--link"
            href="youtube-video__meta--link"
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

export default YouTubeVideo
