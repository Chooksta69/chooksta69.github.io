import React from 'react'
import {format as timeSince} from 'timeago.js'
import './YouTubeVideo.scss'
import {DOMParser} from 'xmldom'

function htmlDecode(input) {
  const dom = new DOMParser().parseFromString(input, 'text/html')
  return dom.childNodes[0].textContent
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

export default YouTubeVideo
