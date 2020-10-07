import * as $ from "jquery";

function createAnalytics(): object {
  let counter = 0;
  let isDestroyed = false;

  const listener = (): number => counter++;

  document.addEventListener("click", listener);

  return {
    destroy() {
      document.removeEventListener("click", listener);
      isDestroyed = true;
    },
    getClicks() {
      if (isDestroyed) {
        return "Analytics is already destroyed";
      }

      return counter;
    },
  };
}

window["analytics"] = createAnalytics();
