export type DOMMessage = {
  type: "GET_DOM";
};

export type DOMMessageResponse = {
  name: string;
  location: string;
};
