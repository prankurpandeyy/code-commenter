"use client";
import React, { useState } from "react";
import SplitPane from "react-split-pane";
import dynamic from "next/dynamic";
import { CopilotPopup } from "@copilotkit/react-ui";
const Split = dynamic(() => import("react-split-pane"), { ssr: false });

import ScreenOne from "./components/ScreenOne";
import ScreenTwo from "./components/ScreenTwo";
function page() {
  const [code, setCode] = useState("// Paste your code here");
  const [commentedCode, setCommentedCode] = useState(
    "// Commented code will appear here"
  );

  // Handler for code changes in ScreenOne
  const handleCodeChange = (value) => {
    setCode(value);
    // Here you can add logic to send this code to the comment generation agent
    // For simplicity, we’ll assume you have a function `generateComments` that returns commented code
    const generatedComments = generateComments(value);
    setCommentedCode(generatedComments);
  };

  // Function to generate commented code (can be replaced with a real comment generator)
  const generateComments = (code) => {
    // Example static comment generator logic (this can be more sophisticated)
    return code
      .split("\n")
      .map((line, index) => (index % 2 === 0 ? `// Comment: ${line}` : line))
      .join("\n");
  };

  return (
    <div className="h-screen flex">
      <div className="w-1/2">
        <ScreenOne code={code} onChange={handleCodeChange} />
      </div>
      <div className="w-1/2">
        <ScreenTwo commentedCode={commentedCode} />
      </div>

      <CopilotPopup
        instructions={
          "You are assisting the user as best as you can. Answer in the best way possible given the data you have."
        }
        labels={{
          title: "Popup Assistant",
          initial: "Need any help?",
        }}
      />
    </div>
  );
}
export default page;
