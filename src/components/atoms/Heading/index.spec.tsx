import * as React from "react";
import * as ReactDOM from "react-dom";
import Heading from "./index";

describe("Heading component test.", () => {
  beforeEach(done => {
    ReactDOM.render(
      <Heading>Hello world</Heading>,
      document.body,
      done
    );
  });

  it("should render correctly.", () => {
    // const heading = document.querySelector("h2");
    // expect(heading.className).toBe("heading");
  });
});