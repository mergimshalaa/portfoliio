import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";
import { StyledVideoCard } from "../src/pages/Projects/ProjectCards/project-card-styled-components";

it("renders VideoCard component with expected elements", () => {
  const mockVideoCardProps = {
    title: "Test Title",
    description: "Test Description",
    videoSrc: "test-video.mp4",
    link: "/test-link",
  };

  render(
    <MemoryRouter>
      <StyledVideoCard {...mockVideoCardProps} />
    </MemoryRouter>
  );

  expect(screen.getByText(mockVideoCardProps.title)).toBeInTheDocument();
  expect(screen.getByText(mockVideoCardProps.description)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /click here/i })
  ).toBeInTheDocument();
});

it("renders ProjectsPage component with heading", () => {
  render(
    <MemoryRouter>
      <ProjectsPage />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", { name: /projects/i })
  ).toBeInTheDocument();
});
