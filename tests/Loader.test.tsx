import { it, assert } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { Loader } from "../src/components/Loader/Loader";

it("renders the Loader component", async () => {
    let onFinishCalled = false;
    render(<Loader onFinish={() => (onFinishCalled = true)} />);

    assert.isTrue(screen.getByTestId("loader").contains(screen.getByTestId("fa-spinner")));
  
    await act(async () => {
      setTimeout(() => {
        assert.isTrue(onFinishCalled);
      }, 2500);
    });
  });
