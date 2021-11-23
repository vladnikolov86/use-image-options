# useImageOptions React Hook

Custom React Hook for loading images based on fetch API. It accepts image url and options and returns HTMLImageElement.
Useful for canvas application like `react-konva`.

## Install

```bash
npm install use-image-options
```

## Usage

```js
import React from "react";
import { Image } from "react-konva";
import useImageOptions from "use-image-options";

const url = "https://someimageurl";

function ExampleUsage() {
  const options = {
    mode: "cors",
    headers: {
      "Cache-Control": "max-age=3600",
    },
    credentials: "omit",
    cache: "force-cache",
  };
  const [image, status] = useImage(url, options);

  // status can be "loading", "loaded" or "failed"
  return <Image image={image} />;
}
```

## License

MIT
