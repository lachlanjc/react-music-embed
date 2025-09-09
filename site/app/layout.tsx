import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "React Music Embed",
  description:
    "Open source React component for customizable Apple Music embeds, by @lachlanjc.",
};
