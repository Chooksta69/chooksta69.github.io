import React, {useEffect, useState} from 'react'
import RecordingIcon from '@components/RecordingIcon/RecordingIcon'

const TwitchEmbed = ({channel}) => {
  const [isTwitchVisible, setTwitchVisibility] = useState(false)
  const [isTwitchReady, setTwitchReady] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Twitch && !isTwitchReady) {
      const options = {
        width: '100%',
        height: 480,
        channel: channel,
        layout: 'video',
        autoplay: true
      }

      const player = new window.Twitch.Player('twitch-player', options)

      player.addEventListener(window.Twitch.Player.READY, () =>
        setTwitchReady(true)
      )

      player.addEventListener(window.Twitch.Player.ONLINE, () =>
        setTwitchVisibility(true)
      )

      player.addEventListener(window.Twitch.Player.OFFLINE, () =>
        setTwitchVisibility(false)
      )
    }
  })

  return (
    <div
      className="small-12 extra-small-12"
      style={{
        display: isTwitchVisible ? 'block' : 'none'
      }}
    >
      <section className="social-section card background-grey">
        <header className="display-flex align-items-center justify-content-center">
          <h2 className="text-center">Live on Twitch</h2>
          <RecordingIcon width="40px" height="40px" />
        </header>
        <div className="row">
          <div className="extra-small-12 small-8">
            <div id="twitch-player" />
          </div>

          <div className="extra-small-12 small-4 text-right">
            <iframe
              title="Twitch Chat"
              src={`https://www.twitch.tv/embed/${channel}/chat`}
              frameBorder="0"
              scrolling="no"
              height="480px"
              width="100%"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TwitchEmbed
