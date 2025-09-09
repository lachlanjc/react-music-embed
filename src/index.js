import React from 'react'
import PropTypes from 'prop-types'

export default function Embed({ url, width, height, style, ...props }) {
  const src = url.replace('//music.apple.com', '//embed.music.apple.com')

  return (
    <iframe
      {...props}
      allow="autoplay *; encrypted-media *;"
      frameBorder="0"
      height={height}
      style={{
        width: '100%',
        maxWidth: width,
        overflow: 'hidden',
        background: 'transparent',
        ...style,
      }}
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={src}
    />
  )
}

Embed.defaultProps = {
  width: 512,
  height: 150,
  url: 'https://music.apple.com/us/album/ultralife/1440894720?i=1222147721',
}

Embed.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  url: PropTypes.string.isRequired,
}
