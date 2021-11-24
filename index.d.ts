export interface IOptions  {
  mode?: "no-cors" | "cors" | "same-origin";
  headers?: any;
  credentials?: "include" | "same-origin" | "omit";
  cache?: "default" | "no-cache" | "reload" | "force-cache" | "only-if-cached";
}
export function useImageOptions(
  url: string,
  options?: IOptions
): [undefined | HTMLImageElement, "loaded" | "loading" | "failed"];
