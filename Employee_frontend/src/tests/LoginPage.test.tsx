import { fireEvent, render, screen } from "@testing-library/react";
import { expect, vi, beforeEach } from "vitest";
import LoginPage from "../Pages/LoginPage";
import { MemoryRouter } from "react-router-dom";
import { PersistedLoginProvider } from "../Contexts/PersistedLoginContext";

// Mock react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

// Mock Services/User_services
vi.mock("../Services/User_services", () => ({
  getAllUsers: vi
    .fn()
    .mockResolvedValue([
      { username: "validuser", password: "validpassword", approvedBy: "admin" },
    ]),
}));

test("renders login page", () => {
  render(
    <PersistedLoginProvider>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </PersistedLoginProvider>
  );

  screen.debug();

  expect(
    screen.getByText(/Please enter username & password/i)
  ).toBeInTheDocument();
  expect(screen.getByLabelText(/Username:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
  expect(screen.getByText(/Create User/i)).toBeInTheDocument();
});

test("handles input changes", () => {
  render(
    <PersistedLoginProvider>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </PersistedLoginProvider>
  );

  const usernameInput = screen.getByLabelText(/Username:/i);
  const passwordInput = screen.getByLabelText(/Password:/i);

  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "testpassword" } });

  expect((usernameInput as HTMLInputElement).value).toBe("testuser");
  expect((passwordInput as HTMLInputElement).value).toBe("testpassword");
});

test("shows error message on invalid credentials", async () => {
  render(
    <PersistedLoginProvider>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </PersistedLoginProvider>
  );

  const usernameInput = screen.getByLabelText(/Username:/i);
  const passwordInput = screen.getByLabelText(/Password:/i);
  const loginButton = screen.getByRole("button", { name: /Login/i });

  fireEvent.change(usernameInput, { target: { value: "invaliduser" } });
  fireEvent.change(passwordInput, { target: { value: "invalidpassword" } });
  fireEvent.click(loginButton);

  expect(await screen.findByRole("alert")).toHaveTextContent(
    "Invalid credentials"
  );
});
