import { DOMMessage, DOMMessageResponse } from "../types";

// Function called when a new message is received
const messagesFromReactAppListener = (
  msg: DOMMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: DOMMessageResponse) => void
) => {
  const name = (document.getElementsByTagName<"h1">("h1") || [])[0]?.innerHTML;
  const loc = document.evaluate(
    "//a[text()='Contact info']",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
    // @ts-ignore
  ).singleNodeValue?.parentNode?.parentNode?.childNodes[1]?.innerText;

  // TODO: create extractListFromDom() util function that will accept
  // experience or eduction div, .map through li items and transform it
  // to an array of objects, e.g.
  // const experience = Array.from(
  //   document
  //     .getElementById("experience")
  //     ?.parentNode?.querySelectorAll("li.artdeco-list__item")[0]
  //     .querySelectorAll("div.pvs-entity")
  // ).map((node) => {
  //   console.log(node);
  // });
  // Prepare the response object with information about the site
  const response: DOMMessageResponse = {
    name,
    location: loc,
  };

  sendResponse(response);
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
