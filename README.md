# react-music-embed 🎧

> React component for Apple Music embeds

[![npm](https://img.shields.io/npm/v/react-music-embed.svg)](https://www.npmjs.com/package/react-music-embed)

[View demo](https:///react-music-embed.vercel.app)

## Install

```bash
npm install --save react-music-embed
```

## Usage

Pass in Apple Music URL (song, album, or playlist) to the `url` prop.
Optionally, pass in `width` & `height` props (number in px or string).

```jsx
import React from "react";
import Music from "react-music-embed";

export default () => (
  <Music url="https://music.apple.com/us/album/talk-talk-featuring-troye-sivan/1773518270" />
);
```

## License

MIT © [lachlanjc](https://github.com/lachlanjc)
