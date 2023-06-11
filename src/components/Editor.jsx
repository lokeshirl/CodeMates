import React from 'react';
import CodeEditor from '@monaco-editor/react';

const Editor = () => {
  return (
    // editor
    <>
      <header>Header</header>
      <section id="editor">
        {/* main--container */}
        <div className="flex flex-row space-x-4 items-start px-4 py-4">
          {/* code--editor */}
          <div
            className="flex flex-col w-full h-full justify-start items-end"
            id="code-editor"
          >
            <CodeEditor height="85vh" width={`100%`} />
          </div>

          {/* input-output */}
          <div
            className="right-container flex flex-shrink-0 w-[30%] flex-col"
            id="std-input-output"
          >
            <h1 class="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
              Output
            </h1>
            <div
              className="w-full h-56 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto"
              id="input"
            ></div>
            <div className="flex flex-col items-end" id="output">
              <textarea
                rows="5"
                placeholder="Custom input"
                class="focus:outline-none w-full border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white mt-2"
              ></textarea>
              <button class="mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0 ">
                Compile and Execute
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Editor;
