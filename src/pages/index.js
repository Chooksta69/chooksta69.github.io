import React, {useEffect} from 'react'
import Layout from '@templates/Layout/Layout'
import YouTubeIcon from '@components/YouTubeIcon/YouTubeIcon'
import LastfmIcon from '@components/LastfmIcon/LastfmIcon'
import TwitterIcon from '@components/TwitterIcon/TwitterIcon'
import SoundCloudIcon from '@components/SoundcloudIcon/SoundcloudIcon'
import MixCloudIcon from '@components/MixcloudIcon/MixcloudIcon'
import TwitchIcon from '@components/TwitchIcon/TwitchIcon'
import YouTubeFeed from '@components/YouTubeFeed/YouTubeFeed'
import SatelliteIcon from '@components/SatelliteIcon/SatelliteIcon'
import SpeakerIcon from '@components/SpeakerIcon/SpeakerIcon';
import YouTubeData from '@data/youtube.json'

const sharedIconProps = {
  height: '3.2em',
  width: '3.2rem',
  fill: '#fff'
}

const IndexPage = () => {

  return (
    <Layout>
      {/* // TODO: This needs to be done */}
      {/* <SEO title="Home" /> */}
      <div className="row margin-center">
        <div className="small-12 extra-small-12">
          <section className="social-section card background-grey">
            <div className="row align-items-center justify-content-center">
              <div className="extra-small-2 text-center">
                <YouTubeIcon className="social" {...sharedIconProps} />
              </div>

              <div className="extra-small-2 text-center">
                <LastfmIcon className="social" {...sharedIconProps} />
              </div>

              <div className="extra-small-2 text-center">
                <TwitterIcon className="social" {...sharedIconProps} />
              </div>

              <div className="extra-small-2 text-center">
                <SoundCloudIcon className="social" {...sharedIconProps} />
              </div>
              <div className="extra-small-2 text-center">
                <MixCloudIcon className="social" {...sharedIconProps} />
              </div>

              <div className="extra-small-2 text-center">
                <TwitchIcon className="social" {...sharedIconProps} />
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
              class="twitter-timeline"
              data-height="900"
              data-chrome="noheader transparent nofooter noborders"
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

export default IndexPage
