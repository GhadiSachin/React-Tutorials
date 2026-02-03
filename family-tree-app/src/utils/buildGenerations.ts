import type { Person } from "../types/Person";

export function buildGenerations(members: Person[]) {
  const positions: Record<string, { x: number; y: number }> = {};
  const levels = new Map<string, number>();

  const root = members.find(m => m.isMaster);
  if (!root) return positions;

  const queue: [Person, number][] = [[root, 0]];

  while (queue.length) {
    const [person, level] = queue.shift()!;
    if (levels.has(person.id)) continue;

    levels.set(person.id, level);

    person.children.forEach(cid => {
      const child = members.find(m => m.id === cid);
      if (child) queue.push([child, level + 1]);
    });
  }

  const grouped: Record<number, Person[]> = {};
  levels.forEach((lvl, id) => {
    const p = members.find(m => m.id === id)!;
    grouped[lvl] ??= [];
    grouped[lvl].push(p);
  });

  Object.entries(grouped).forEach(([lvl, people]) => {
    people.forEach((p, i) => {
      positions[p.id] = {
        x: i * 220,
        y: Number(lvl) * 180,
      };
    });
  });

  return positions;
}
