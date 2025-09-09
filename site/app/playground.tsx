"use client";

import { useState } from "react";
import Embed from "../../dist";
import styles from "./playground.module.css";

export default function Playground() {
  const [url, setUrl] = useState<string>(
    "https://music.apple.com/us/album/talk-talk-featuring-troye-sivan/1773518270?i=1773518277",
  );
  const [width, setWidth] = useState<number>(768);
  const [height, setHeight] = useState<number>(150);

  return (
    <>
      <section className={styles.playground}>
        <label className={styles.label}>
          <span> Music URL</span>
          <input
            type="url"
            value={url}
            placeholder="https://music.apple.com/…"
            onChange={(e) => setUrl(e.currentTarget.value)}
          />
        </label>
        <label className={styles.label}>
          <span>Width</span>
          <input
            type="range"
            value={width}
            min={0}
            max={1024}
            onChange={(e) => setWidth(e.currentTarget.valueAsNumber)}
          />
          <span>{width}px</span>
        </label>
        <div className={styles.label}>
          <span>Height</span>
          <button onClick={() => setHeight(150)}>150px</button>
          <button onClick={() => setHeight(175)} style={{ marginInline: 4 }}>
            175px
          </button>
          <button onClick={() => setHeight(450)}>450px (album)</button>
        </div>
      </section>

      <Embed
        url={url}
        width={width}
        height={height}
        style={{ borderRadius: 8 }}
      />

      <pre className={styles.example}>
        {`import Embed from 'react-music-embed'

<Embed
  url="${url}"
  width={${width}}
  height={${height}}
/>`}
      </pre>
    </>
  );
}
