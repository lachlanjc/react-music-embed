import Icon from "./icon.svg";
import Playground from "./playground";

export default function Page() {
  return (
    <article>
      <h1>
        <img
          alt="React icon on Apple Music colored square"
          src={Icon.src}
          width={40}
          height={40}
          fetchPriority="high"
          style={{ marginRight: "0.4ch" }}
        />
        react-music-embed
      </h1>
      <p>
        🎧 React component for{" "}
        <a href="https://tools.applemusic.com/en-us">Apple Music embeds</a>
      </p>
      <p>
        Made by <a href="https://lachlanjc.com">@lachlanjc</a>
      </p>

      <nav>
        <a href="https://github.com/lachlanjc/react-music-embed">GitHub</a>
        <a href="https://npmjs.com/package/react-music-embed">npm</a>
      </nav>

      <h2>Try it live</h2>
      <Playground />

      <table aria-label="React component props">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>url</td>
            <td>string</td>
            <td>true</td>
          </tr>
          <tr>
            <td>width</td>
            <td>number | string</td>
            <td>false</td>
          </tr>
          <tr>
            <td>height</td>
            <td>number | string</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
