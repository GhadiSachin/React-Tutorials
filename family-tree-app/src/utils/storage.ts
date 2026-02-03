import type { Person } from "../types/Person";

const KEY = "family_tree_members";

export function loadMembers(): Person[] | null {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : null;
}

export function saveMembers(members: Person[]) {
  localStorage.setItem(KEY, JSON.stringify(members));
}
