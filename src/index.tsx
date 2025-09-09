import React, { ComponentPropsWithoutRef } from "react";

export interface EmbedProps extends ComponentPropsWithoutRef<"iframe"> {
  url: string;
  width?: number | string;
  height?: number | string;
}

export default function Embed({
  url,
  width = 512,
  height = 150,
  style,
  ...props
}: EmbedProps) {
  const src = url?.replace("//music.apple.com", "//embed.music.apple.com");

  return (
    <iframe
      {...props}
      allow="autoplay *; encrypted-media *;"
      frameBorder={0}
      height={height}
      style={{
        width: "100%",
        maxWidth: width,
        overflow: "hidden",
        background: "transparent",
        ...style,
      }}
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={src}
    />
  );
}
