export const PASSWORD_KEY = "family_tree_password";
export const AUTH_KEY = "family_tree_auth";

export function setPassword(password: string) {
  const hash = btoa(password);
  localStorage.setItem(PASSWORD_KEY, hash);
}

export function verifyPassword(password: string): boolean {
  const saved = localStorage.getItem(PASSWORD_KEY);
  if (!saved) return false;
  return btoa(password) === saved;
}

export function isAuthenticated(): boolean {
  return localStorage.getItem(AUTH_KEY) === "true";
}

export function login() {
  localStorage.setItem(AUTH_KEY, "true");
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}
