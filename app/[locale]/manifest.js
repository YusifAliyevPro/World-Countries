export default function manifest() {
  return {
    name: "World Countriess",
    short_name: "World Countriess",
    description:
      "World Countriess is a website which you can get information about countries all around world",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#007bff",
    icons: [
      {
        src: "/icon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
