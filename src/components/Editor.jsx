import React from 'react';
import CodeEditor from '@monaco-editor/react';
import files from "../defaultStubs";

const Editor = () => {

  const [fileName, setFileName] = useState("cpp");
  const [inputLanguage, setInputLanguage] = useState("cpp");
  const [outputLanguage, setOutputLanguage] = useState("python");
  const [code, setCode] = useState("");
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("");
  const [languageIcon, setLanguageIcon] = useState(cppIcon);
  const editorRef = useRef(null);

  const file = files[fileName];
  const dataForCompiler = {
    code: code,
    language: inputLanguage,
    input: input,
  };
  const dataForConversion = {
    inputCodeText: code,
    inputLang: inputLanguage,
    outputLang: outputLanguage,
  };

  const dataForCodeGeneration = {
    instruction: " find minimum element in array",
    language: "javascript",
  };

  const handleSelectIcon = (e) => {
    switch (e.target.value) {
      case "c":
        setLanguageIcon(cIcon);
        setInputLanguage("c");
        setFileName("c");
        break;
      case "python3":
        setLanguageIcon(pythonIcon);
        setFileName("python");
        setInputLanguage("python");
        break;
      case "java":
        setLanguageIcon(javaIcon);
        setFileName("java");
        setInputLanguage("java");
        break;
      case "javascript":
        setLanguageIcon(javascriptIcon);
        setFileName("javascript");
        setInputLanguage("javascript");
        break;
      default:
        setLanguageIcon(cppIcon);
        setFileName("cpp");
        setInputLanguage("cpp");
        break;
    }
    console.log(e.target.value);
  };

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };
  const getEditorValue = () => {
    setCode(editorRef.current.getValue());
    // axios
    //   .post(COMPILER_API_URL, data)
    //   .then((response) => {
    //     console.log(response.data.output);
    //   })
    //   .catch((e) => console.log(e));
  };

  const handleConvertCode = (e) => {
    switch (e.target.value) {
      case "c":
        setOutputLanguage("c");
        break;
      case "python3":
        setOutputLanguage("python");
        break;
      case "java":
        setOutputLanguage("java");
        break;
      case "javascript":
        setOutputLanguage("javascript");
        break;
      default:
        setOutputLanguage("cpp");
        break;
    }
  };

  const handleConversion = () => {
    getEditorValue();
    // axios
    //   .post(CODE_CONVERT_API_URL, dataForConversion)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((e) => console.log(e));
  };

  const handleClick = () => {
    axios
      .post(
        "https://harkirat.classx.co.in/api/generate-code/",
        dataForCodeGeneration
      )
      .then((response) => {
        console.log(response.data.output);
      })
      .catch((e) => console.log(e));
  };


  return (
    // editor
    <>
      <header className="px-5 py-5 mt-1">
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Generate
        </button>
        <nav>
          {/* language logo btn */}
          <button>
            <img
              src={languageIcon}
              className="image"
              alt={`${inputLanguage} icon`}
            />
          </button>
          {/* language logo drop-down btn */}
          <button>
            <select onChange={handleSelectIcon}>
              <option value={'cpp'}>C++</option>
              <option value={'c'}>C</option>
              <option value={'java'}>Java</option>
              <option value={'python3'}>Python 3</option>
              <option value={'javascript'}>Javascript</option>
            </select>
          </button>
          {/* run btn */}
          <span>
            <button onClick={() => getEditorValue()}>Run</button>
          </span>

          <button className="ml-5" onClick={() => handleConversion()}>
            convert code
          </button>
          <button>
            <select onChange={handleConvertCode}>
              <option value={'python3'}>Python 3</option>
              <option value={'c'}>C</option>
              <option value={'cpp'}>C++</option>
              <option value={'java'}>Java</option>
              <option value={'javascript'}>Javascript</option>
            </select>
          </button>
        </nav>
      </header>
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
