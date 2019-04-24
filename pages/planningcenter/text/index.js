import React from "react";
import Link from "next/link";

import Layout from "../../../pages_support/layout";

import { Text } from "../../../planningcenter/components/src/components";
import ReadMe from "../../../planningcenter/components/README.md";
import pkg from "../../../planningcenter/text/package.json";
import { Detail } from "../../../pages_support/package";
// import {
//   Tab,
//   FlexSpacer,
//   Title,
//   SummaryContainer,
//   TabContainer,
//   Avatar
// } from "../../../planningcenter/resource-header/src/resource-header";
// import Readme from "../../../planningcenter/resource-header/README.md";
// import pkg from "../../../planningcenter/resource-header/package.json";
// import { Detail } from "../../../pages_support/package";

export default function() {
  return (
    <Layout>
      <div
        className="markdown-body"
        style={{ maxWidth: "40em", padding: "2em 4em" }}
      >
        <Link>
          <a href="/">Home</a>
        </Link>

        <Detail
          name={pkg.name}
          version={pkg.version}
          peerDependencies={pkg.peerDependencies}
        />

        <Text>Default</Text>
        <br />
        <Text fontSize="x-small">x-small</Text>
        <br />
        <Text fontSize="small">small</Text>
        <br />
        <Text fontSize="medium">medium</Text>
        <br />
        <Text fontSize="large">large</Text>
        <br />
        <Text fontSize="x-large">x-large</Text>
        <br />
        <ReadMe />
      </div>
    </Layout>
  );
}