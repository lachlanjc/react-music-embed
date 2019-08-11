import React, { Component } from 'react'
import Embed from '../dist'
import styled, { css, createGlobalStyle } from 'styled-components'

const Styles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #ff365d;
    color: white;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: black;
      color: #ff365d;
    }
  }

  h1 {
    line-height: 0.875;
    font-weight: 900;
    font-size: 4rem;
    margin-top: 0;
    margin-bottom: 2rem;
  }
  h2 {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 1.875rem;
    margin-bottom: -0.75rem;
  }

  p,
  nav {
    font-size: 1.375rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 800;

    &:focus,
    &:hover {
      text-decoration: underline;
      text-underline-position: under;
      text-decoration-color: initial;
      text-decoration-line: underline;
      text-decoration-style: wavy;
    }
  }
`

const Container = styled('article')`
  width: 100%;
  max-width: 48rem;
  margin: auto;
  padding: 3rem 1rem;
`

const Nav = styled('nav')`
  margin: 1rem 0 3rem;

  a {
    margin-right: 1.5rem;
  }
`

const module = css`
  padding: 1rem;
  background-color: #ff466a;
  border-radius: 6px;
  margin: 2rem 0;
  color: white;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: #ff466a;

    input[type='url'] {
      background-color: black;
      color: #eee;
    }
  }
`

const Label = styled('label')`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  span:first-child {
    width: 8rem;
    text-align: right;
    margin-right: 1rem;
  }

  span:last-child {
    margin-left: 1rem;
    color: #ddd;
    font-size: 0.875rem;
  }

  input {
    line-height: 1.5;
    margin: 0;

    &[type='url'] {
      flex: 1 1 auto;
      border: 0;
      border-radius: 6px;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 400;
      height: 2rem;
      padding: 0.25rem 0.5rem;
      -webkit-appearance: none;
    }
  }
`

const Playground = styled('section')`
  ${module}
`

const Example = styled('pre')`
  ${module}
  font-size: 1rem;
  font-family: Menlo, monospace;
  white-space: pre-wrap;
  word-break: break-word;
  word-wrap: break-word;
`

// This would use Hooks but x0 hasn’t updated to support them yet 😩
export default class extends Component {
  state = {
    width: 768,
    height: 150,
    url: 'https://music.apple.com/us/album/plum/1396292262?i=1396292381'
  }

  changeUrl = e => this.setState({ url: e.target.value })
  changeWidth = e => this.setState({ width: Number(e.target.value) })
  changeHeight = e => this.setState({ height: Number(e.target.value) })

  render() {
    const { width, height, url } = this.state
    return (
      <Container>
        <Styles />

        <h1>react-music-embed</h1>
        <p>
          {'React component for '}
          <a href="https://tools.applemusic.com/en-us">Apple Music embeds</a>
          {' 🎧'}
        </p>
        <p>
          Made by <a href="https://lachlanjc.me">@lachlanjc</a>
        </p>

        <Nav>
          <a href="https://github.com/lachlanjc/react-music-embed">GitHub</a>
          <a href="https://npmjs.com/package/react-music-embed">npm</a>
        </Nav>

        <h2>Try it live</h2>
        <Playground>
          <Label>
            <span> Music URL</span>
            <input
              type="url"
              value={url}
              placeholder="https://music.apple.com/…"
              onChange={this.changeUrl}
            />
          </Label>
          <Label>
            <span>Width</span>
            <input
              type="range"
              value={width}
              min={0}
              max={1024}
              onChange={this.changeWidth}
            />
            <span>{width}px</span>
          </Label>
          <Label>
            <span>Height</span>
            <input
              type="range"
              value={height}
              min={0}
              max={512}
              onChange={this.changeHeight}
            />
            <span>{height}px</span>
          </Label>
        </Playground>

        <Embed url={url} width={width} height={height} />

        <Example
          children={`import Embed from 'react-music-embed'

<Embed url="${url}" width={${width}} height={${height}} />`}
        />
      </Container>
    )
  }
}
