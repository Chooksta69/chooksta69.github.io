import React from 'react'
import Layout from '@templates/Layout/Layout'
import YouTubeIcon from '@components/YouTubeIcon/YouTubeIcon'
import LastfmIcon from '@components/LastfmIcon/LastfmIcon'
import TwitterIcon from '@components/TwitterIcon/TwitterIcon'
import SoundCloudIcon from '@components/SoundCloudIcon/SoundCloudIcon'
import MixCloudIcon from '@components/MixCloudIcon/MixCloudIcon'
import TwitchIcon from '@components/TwitchIcon/TwitchIcon'
import YouTubeFeed from '@components/YouTubeFeed/YouTubeFeed'
import YouTubeData from '@data/youtube.json'

const sharedIconProps = {
  height: '3em',
  width: '3rem',
  fill: '#fff'
}

const IndexPage = () => 
  <Layout>
    {/* // TODO: This needs to be done */}
    {/* <SEO title="Home" /> */}
    <div className="row margin-center">
      <div className="small-12 extra-small-12 margin-bottom-2">
        <section>
          <div className="row">
            <div className="extra-small-2 text-center">
              <YouTubeIcon {...sharedIconProps} />
            </div>

            <div className="extra-small-2 text-center">
              <LastfmIcon {...sharedIconProps} />
            </div>

            <div className="extra-small-2 text-center">
              <TwitterIcon {...sharedIconProps} />
            </div>

            <div className="extra-small-2 text-center">
              <SoundCloudIcon {...sharedIconProps} />
            </div>

            <div className="extra-small-2 text-center">
              <MixCloudIcon {...sharedIconProps} />
            </div>

            <div className="extra-small-2 text-center">
              <TwitchIcon {...sharedIconProps} />
            </div>
          </div>
        </section>
      </div>
      <div className="small-6 extra-small-12 margin-bottom-2">
        <section>
          <h2>Latest Videos</h2>
          <YouTubeFeed
            videos={YouTubeData && YouTubeData.items ? YouTubeData.items : []}
          />
        </section>
      </div>

      <div className="small-6 extra-small-12 margin-bottom-2">
        <section>
        <h2>Latest Tweets</h2>
        </section>
      </div>
    </div>
  </Layout>

export default IndexPage
