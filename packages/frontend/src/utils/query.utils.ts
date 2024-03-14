/**
 * get query param value from url
 * @param key the key of the query param
 * @param url the url to get the query param from
 * @returns the value of the query param
 */
export function getQueryStringValue(key: string, url: string): string {
  return decodeURIComponent(
    url.replace(
      new RegExp(
        "^(?:.*[&\\?]" +
          encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
          "(?:\\=([^&]*))?)?.*$",
        "i"
      ),
      "$1"
    )
  );
}
