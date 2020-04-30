import React from 'react'

export const onRenderBody = ({setPostBodyComponents}) => {
  setPostBodyComponents([
    <script src="https://player.twitch.tv/js/embed/v1.js"></script>
  ])
}
