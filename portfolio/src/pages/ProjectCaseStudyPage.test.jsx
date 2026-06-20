import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ProjectCaseStudyPage from "./ProjectCaseStudyPage";

function renderRoute(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/projects/:slug" element={<ProjectCaseStudyPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("project case-study routing", () => {
  it("renders the job tracker case study", () => {
    renderRoute("/projects/job-tracker");
    expect(screen.getByRole("heading", { level: 1, name: "Job Tracker" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Architecture" })).toBeInTheDocument();
    expect(screen.getByText("Secure account authentication")).toBeInTheDocument();
  });

  it("renders a 404 for an unknown project", () => {
    renderRoute("/projects/not-a-project");
    expect(screen.getByRole("heading", { name: "This page wandered off." })).toBeInTheDocument();
  });
});
