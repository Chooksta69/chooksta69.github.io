import React, {useEffect} from 'react'
import Layout from '@templates/Layout/Layout'
import YouTubeIcon from '@components/YouTubeIcon/YouTubeIcon'
import LastfmIcon from '@components/LastfmIcon/LastfmIcon'
import TwitterIcon from '@components/TwitterIcon/TwitterIcon'
import SoundCloudIcon from '@components/SoundcloudIcon/SoundcloudIcon'
import MixCloudIcon from '@components/MixcloudIcon/MixcloudIcon'
import TwitchIcon from '@components/TwitchIcon/TwitchIcon'
import YouTubeFeed from '@components/YouTubeFeed/YouTubeFeed'
import YouTubeData from '@data/youtube.json'

const sharedIconProps = {
  height: '3.2em',
  width: '3.2rem',
  fill: '#292929'
}

const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    document.getElementsByClassName('twitter-embed')[0].appendChild(script)
  }, [])
  return (
    <Layout>
      {/* // TODO: This needs to be done */}
      {/* <SEO title="Home" /> */}
      <div className="row margin-center">
        <div className="small-12 extra-small-12">
          <section>
            <div className="row align-items-center justify-content-center">
              <div className="extra-small-3 text-center">
                <YouTubeIcon className="social" {...sharedIconProps} />
              </div>

              <div className="extra-small-3 text-center">
                <LastfmIcon className="social"  {...sharedIconProps} />
              </div>

              <div className="extra-small-3 text-center">
                <TwitterIcon className="social"  {...sharedIconProps} />
              </div>
            </div>
            <div className="row align-items-center justify-content-center margin-top-1">
            <div className="extra-small-3 text-center">
                <TwitterIcon className="social"  {...sharedIconProps} />
              </div>

              <div className="extra-small-3 text-center">
                <SoundCloudIcon  className="social" {...sharedIconProps} />
              </div>
              <div className="extra-small-3 text-center">
                <MixCloudIcon className="social"  {...sharedIconProps} />
              </div>

              <div className="extra-small-3 text-center">
                <TwitchIcon className="social"  {...sharedIconProps} />
              </div>
            </div>
          </section>
        </div>
        <div className="small-6 extra-small-12 margin-bottom-2">
          <section className="card background-grey">
            <h2>Latest Videos</h2>
            <YouTubeFeed
              videos={YouTubeData && YouTubeData.items ? YouTubeData.items : []}
            />
          </section>
        </div>

        <div className="small-6 extra-small-12 margin-bottom-2">
          <section className="card background-grey">
            <h2>Latest Tweets</h2>
            <div className="twitter-embed"></div>
            <a
              class="twitter-timeline"
              data-height="825"
              data-chrome="noheader transparent nofooter noborders"
              data-theme="dark"
              data-noheader
              data-transparent
              href="https://twitter.com/DJZwackery?ref_src=twsrc%5Etfw"
            >
              Tweets by TwitterDev
            </a>{' '}
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
