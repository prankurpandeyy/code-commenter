import { Editor } from "@monaco-editor/react";
import React from "react";

function ScreenTwo({ commentedCode }) {
  return (
    <div className="bg-green-100 p-4 h-full">
      <h2 className="text-xl text-red-400 font-semibold mb-4">Genrated Code</h2>
      <Editor
        height="80vh"
        defaultLanguage="javascript"
        value={commentedCode}
        theme="vs-dark"
        options={{
          readOnly: true,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
}

export default ScreenTwo;
