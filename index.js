const React = require("react");
const defaultState = { image: undefined, status: "loading" };

module.exports = function useImageOptions(url, options = {}) {
  const {
    mode = "cors",
    headers = {},
    cache = "default",
    credentials = "omit",
  } = options;
  const res = React.useState(defaultState);
  const image = res[0].image;
  const status = res[0].status;

  const setState = res[1];

  React.useEffect(
    function () {
      if (!url) return;
      const img = document.createElement("img");

      function onload() {
        setState({ image: img, status: "loaded" });
      }

      function onerror() {
        setState({ image: undefined, status: "failed" });
      }

      img.addEventListener("error", onerror);

      fetch(url, {
        method: "GET",
        mode,
        cache,
        headers,
        credentials
      })
        .then(function (response) {
          return response.blob();
        })
        .then(function (myBlob) {
          const objectURL = URL.createObjectURL(myBlob);
          img.src = objectURL;
          img.addEventListener("load", onload);
        })
        .catch((err) => {
          console.warn(err);
        });

      return function cleanup() {
        img.removeEventListener("load", onload);
        img.removeEventListener("error", onerror);
        setState(defaultState);
      };
    },
    [url, options]
  );

  return [image, status];
};
