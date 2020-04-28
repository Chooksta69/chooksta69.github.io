import React from 'react'
import PropTypes from 'prop-types'

// Renders a Lastfm social icon.
const LastfmIcon = props => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Last fm Icon</title>
    <path d="m10.599 17.211-.881-2.393s-1.433 1.596-3.579 1.596c-1.9 0-3.249-1.652-3.249-4.296 0-3.385 1.708-4.596 3.388-4.596 2.418 0 3.184 1.568 3.845 3.578l.871 2.751c.871 2.672 2.523 4.818 7.285 4.818 3.41 0 5.722-1.045 5.722-3.801 0-2.227-1.276-3.383-3.635-3.935l-1.757-.384c-1.217-.274-1.577-.771-1.577-1.597 0-.936.736-1.487 1.952-1.487 1.323 0 2.028.495 2.147 1.679l2.749-.33c-.225-2.479-1.937-3.494-4.745-3.494-2.479 0-4.897.936-4.897 3.934 0 1.873.902 3.058 3.185 3.605l1.862.443c1.397.33 1.863.916 1.863 1.713 0 1.021-.992 1.441-2.869 1.441-2.779 0-3.936-1.457-4.597-3.469l-.901-2.75c-1.156-3.574-3.004-4.896-6.669-4.896-3.965-.014-6.112 2.538-6.112 6.894 0 4.179 2.147 6.445 6.003 6.445 3.108 0 4.596-1.457 4.596-1.457z" />
  </svg>
)

LastfmIcon.propTypes = {
  /** The width of the icon. */
  width: PropTypes.string,
  /** The height of the icon. */
  height: PropTypes.string,
  /** The fill color of the icon. */
  fill: PropTypes.string
}

export default LastfmIcon
