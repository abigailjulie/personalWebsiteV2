import Badge from "react-bootstrap/Badge";
import React from "react";

export default function ProjectBadge({ badges }) {
  return (
    <div className="d-flex flex-wrap gap-2 mt-2">
      {badges.map((badge, index) => (
        <Badge key={index} pill bg="dark" className="projectBadge p-2">
          {badge}
        </Badge>
      ))}
    </div>
  );
}
