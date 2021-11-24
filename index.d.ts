declare function useImage(
  url: string,
  options?: {
    mode?: "no-cors" | "cors" | "same-origin";
    headers?: any;
    credentials?: "include" | "same-origin" | "omit";
    cache?: "default" | "no-cache" | "reload" | "force-cache" | "only-if-cached";
  }
): [undefined | HTMLImageElement, "loaded" | "loading" | "failed"];

export default useImage;
