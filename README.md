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
import { useImageOptions, IOptions } from "use-image-options";

const url = "https://someimageurl";

function ExampleUsage() {
  const options: IOptions = {
    headers: {
      "Cache-Control": "no-cache",
    },
    mode: "cors",
    cache: "no-cache",
  };
  const [image, status] = useImageOptions(url, options);

  // status can be "loading", "loaded" or "failed"
  return <Image image={image} />;
}
```

## License

MIT
