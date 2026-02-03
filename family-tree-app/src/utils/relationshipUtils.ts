import type { Person } from "../types/Person";

/**
 * Prevent circular ancestry:
 * A person cannot select their own child or descendant as parent
 */
export const isDescendant = (
  members: Person[],
  personId: string,
  potentialParentId: string
): boolean => {
  const person = members.find(p => p.id === personId);
  if (!person) return false;

  if (person.parents.includes(potentialParentId)) return true;

  return person.parents.some(pid =>
    isDescendant(members, pid, potentialParentId)
  );
};
