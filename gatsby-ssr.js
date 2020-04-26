import React from 'react'

export const onRenderBody = ({setPostBodyComponents}) => {
  setPostBodyComponents([
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
  ])
}
