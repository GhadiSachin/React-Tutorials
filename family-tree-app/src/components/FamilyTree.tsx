import ReactFlow from "reactflow";
import type { Node, Edge } from "reactflow";
import "reactflow/dist/style.css";

import PersonCard from "./PersonCard";
import type { Person } from "../types/Person";
import { buildGenerations } from "../utils/buildGenerations";

export default function FamilyTree({ members }: { members: Person[] }) {
  const positions = buildGenerations(members);

  const nodes: Node[] = members.map(p => ({
    id: p.id,
    position: positions[p.id] ?? { x: 0, y: 0 },
    draggable: true,
    data: { label: <PersonCard person={p} /> },
  }));

  const edges: Edge[] = [
    // spouse → dotted
    ...members.flatMap(p =>
      p.spouses.map(sid => ({
        id: `spouse-${p.id}-${sid}`,
        source: p.id,
        target: sid,
        style: { strokeDasharray: "5 5" },
      }))
    ),

    // parent → child → solid
    ...members.flatMap(p =>
      p.children.map(cid => ({
        id: `parent-${p.id}-${cid}`,
        source: p.id,
        target: cid,
        type: "smoothstep",
      }))
    ),
  ];

  return (
    <div className="h-[80vh] border rounded">
      <ReactFlow nodes={nodes} edges={edges} fitView />
    </div>
  );
}
