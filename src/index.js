import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Embed extends Component {
  static propTypes = {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    url: PropTypes.string.isRequired
  }

  static defaultProps = {
    width: 512,
    height: 150,
    url: 'https://music.apple.com/us/album/ultralife/1440894720?i=1222147721'
  }

  render() {
    const { url, width, height, ...props } = this.props
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
          ...props.style
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src={src}
      />
    )
  }
}
