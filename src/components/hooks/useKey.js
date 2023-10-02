import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);
      //document.addEventListener(event.toLowerCase(), callback);

      return function () {
        document.removeEventListener("keydown", callback);
        // document.removeEventListener(event.toLowerCase(), callback);
      };
    },
    [action, key]
  );
}
