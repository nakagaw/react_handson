import * as React from "react";
import * as ReactDOM from "react-dom";
import Title from "./index";

describe("Title component test.", () => {
  beforeEach(done => {
    ReactDOM.render(
      <Title>Hello world</Title>,
      document.body,
      done
    );
  });

  it("should render correctly.", () => {
    const title = document.querySelector("h1");
    expect(title.className).toBe("title");
  });
});