import React from "react";
import Link from "next/link";
import "github-markdown-css";

let planningcenter = ["avatar", "resource-header"];
let planningcenter_experimental = ["button"];

function OrganizationProjectList({
  as: As = "ul",
  items = [],
  renderItem = p => (
    <li>
      <Link>
        <a href={`/planningcenter/${p}`}>{p}</a>
      </Link>
    </li>
  ),
  ...props
}) {
  return <As {...props}>{items.map(renderItem)}</As>;
}

export default function() {
  return (
    <React.Fragment>
      <strong>@planningcenter</strong>
      <OrganizationProjectList items={planningcenter} />

      <strong>@planningcenter-experimental</strong>
      <OrganizationProjectList
        items={planningcenter_experimental}
        renderItem={p => (
          <li>
            <Link>
              <a href={`/planningcenter-experimental/${p}`}>{p}</a>
            </Link>
          </li>
        )}
      />
    </React.Fragment>
  );
}