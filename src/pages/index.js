import React from 'react'
import Layout from '@templates/Layout/Layout'
import YouTubeIcon from '@components/YouTubeIcon/YouTubeIcon'
import LastfmIcon from '@components/LastfmIcon/LastfmIcon'
import TwitterIcon from '@components/TwitterIcon/TwitterIcon'
import SoundCloudIcon from '@components/SoundcloudIcon/SoundcloudIcon'
import MixCloudIcon from '@components/MixcloudIcon/MixcloudIcon'
import TwitchIcon from '@components/TwitchIcon/TwitchIcon'
import YouTubeFeed from '@components/YouTubeFeed/YouTubeFeed'
import SatelliteIcon from '@components/SatelliteIcon/SatelliteIcon'
import SpeakerIcon from '@components/SpeakerIcon/SpeakerIcon'
import DiscordIcon from '@components/DiscordIcon/DiscordIcon'
import FacebookIcon from '@components/FacebookIcon/FacebookIcon'
import SEO from '@components/SEO/SEO'
import YouTubeData from '@data/youtube.json'

const sharedIconProps = {
  height: '2.5em',
  width: '2.5rem',
  fill: '#fff'
}

const IndexPage = ({
  youtubeUrl,
  lastfmUrl,
  twitterUrl,
  facebookUrl,
  soundcloudUrl,
  mixcloudUrl,
  twitchUrl,
  discordUrl
}) => {
  return (
    <Layout>
      <SEO keywords="happy, hardcore, dj, uk, australia, autralian, live, stream, top, lad" />
      <div className="row margin-center">
        <div className="small-12 extra-small-12">
          <section className="social-section card background-grey">
            <div className="display-flex align-items-center justify-content-space-between">
              <div className=" text-center">
                <a href={youtubeUrl} rel="noopener noreferrer" target="_blank">
                  <YouTubeIcon className="social" {...sharedIconProps} />
                </a>
              </div>

              <div className=" text-center">
                <a href={lastfmUrl} rel="noopener noreferrer" target="_blank">
                  <LastfmIcon className="social" {...sharedIconProps} />
                </a>
              </div>

              <div className="text-center">
                <a href={twitterUrl} rel="noopener noreferrer" target="_blank">
                  <TwitterIcon className="social" {...sharedIconProps} />
                </a>
              </div>

              <div className="text-center">
                <a href={facebookUrl} rel="noopener noreferrer" target="_blank">
                  <FacebookIcon className="social" {...sharedIconProps} />
                </a>
              </div>

              <div className="text-center">
                <a
                  href={soundcloudUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <SoundCloudIcon className="social" {...sharedIconProps} />
                </a>
              </div>
              <div className="text-center">
                <a href={mixcloudUrl} rel="noopener noreferrer" target="_blank">
                  <MixCloudIcon className="social" {...sharedIconProps} />
                </a>
              </div>

              <div className=" text-center">
                <a href={twitchUrl} rel="noopener noreferrer" target="_blank">
                  <TwitchIcon className="social" {...sharedIconProps} />
                </a>
              </div>

              <div className="text-center">
                <a href={discordUrl} rel="noopener noreferrer" target="_blank">
                  <DiscordIcon className="social" {...sharedIconProps} />
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="small-6 extra-small-12 margin-bottom-2">
          <section className="card background-grey">
            <header className="display-flex align-items-center justify-content-center">
              <h2>Latest Videos</h2>
              <SatelliteIcon width="30px" height="30px" />
            </header>

            <YouTubeFeed
              videos={YouTubeData && YouTubeData.items ? YouTubeData.items : []}
            />
          </section>
        </div>

        <div className="small-6 extra-small-12 margin-bottom-2">
          <section className="card background-grey">
            <header className="display-flex align-items-center justify-content-center">
              <h2>Latest Tweets</h2>
              <SpeakerIcon width="30px" height="30px" />
            </header>
            <div className="twitter-embed"></div>
            <a
              className="twitter-timeline"
              data-height="900"
              data-chrome="noheader transparent nofooter noborders noscrollbar"
              data-theme="dark"
              href="https://twitter.com/DJZwackery?ref_src=twsrc%5Etfw"
            >
              Tweets by DJZwackery
            </a>{' '}
          </section>
        </div>
      </div>
    </Layout>
  )
}

IndexPage.defaultProps = {
  youtubeUrl: process.env.GATSBY_YOUTUBE_URL,
  lastfmUrl: process.env.GATSBY_LASTFM_URL,
  twitterUrl: process.env.GATSBY_TWITTER_URL,
  soundcloudUrl: process.env.GATSBY_SOUNDCLOUD_URL,
  mixcloudUrl: process.env.GATSBY_MIXCLOUD_URL,
  twitchUrl: process.env.GATSBY_TWITCH_URL,
  discordUrl: process.env.GATSBY_DISCORD_URL,
  facebookUrl: process.env.GATSBY_FACEBOOK_URL
}

export default IndexPage
