import React from "react";

import Layout from "../pages_support/layout";

// TODO: change to import from local
import {
  Tab,
  FlexSpacer,
  Title,
  SummaryContainer,
  TabContainer,
  Avatar
} from "../planningcenter/resource-header/src/resource-header";
import Readme from "../planningcenter/resource-header/README.md";
import pkg from "../planningcenter/resource-header/package.json";
import { Detail } from "../pages_support/package";

function PlaceholderButton(props) {
  return <button href="#" type="button" style={{ height: 32 }} {...props} />;
}

export default function() {
  return (
    <Layout>
      <div className="markdown-body">
        <Detail componentName="ResourceHeader" {...pkg} />

        <section>
          <h2>Resource Header</h2>
          <div style={{ backgroundColor: "lightblue" }}>
            <SummaryContainer>
              <Title>Resource Title</Title>
            </SummaryContainer>
            <TabContainer>
              <Tab href="#" target>
                One
              </Tab>
              <Tab href="#">Two</Tab>
              <Tab href="#">Three</Tab>
              <FlexSpacer />
              <PlaceholderButton>Secondary Action</PlaceholderButton>
              <PlaceholderButton>Primary Action</PlaceholderButton>
            </TabContainer>
          </div>

          <br />

          <div style={{ backgroundColor: "lightgreen" }}>
            <SummaryContainer>
              <div>
                <Avatar src="/static/200x300_kitten.jpeg" />
              </div>
              <div>
                <Title>A Kitty</Title>
                <br />
                <span>555-555-01234</span>
                <span style={{ marginLeft: 8 }}>kitty@placeholder.net</span>
              </div>
            </SummaryContainer>
            <TabContainer>
              <Tab href="#" target>
                One
              </Tab>
              <Tab href="#">Two</Tab>
              <Tab href="#">Three</Tab>
              <FlexSpacer />
              <PlaceholderButton>Secondary Action</PlaceholderButton>
              <PlaceholderButton>Primary Action</PlaceholderButton>
            </TabContainer>
          </div>
        </section>

        <Readme />
      </div>
    </Layout>
  );
}
