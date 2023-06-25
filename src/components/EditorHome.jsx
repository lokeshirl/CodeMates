import React, { useRef, useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';
import CodeEditor from '@monaco-editor/react';
import files from '../defaultStubs';
import {
  cppIcon,
  pythonIcon,
  javaIcon,
  javascriptIcon,
  cIcon,
} from '../assets';

const EditorHome = () => {
  const [fileName, setFileName] = useState('cpp');
  const [inputLanguage, setInputLanguage] = useState('cpp');
  const [outputLanguage, setOutputLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('');
  const [languageIcon, setLanguageIcon] = useState(cppIcon);
  const editorRef = useRef(null);

  const viteENV = import.meta.env;

  const configuration = new Configuration({
    apiKey: viteENV.VITE_REACT_API_OPENAI_API_KEY,
  });
  const COMPILER_API = viteENV.VITE_REACT_API_COMPILER_API_KEY;

  const openai = new OpenAIApi(configuration);
  const file = files[fileName];
  const payloadCompiler = {
    code: code,
    language: inputLanguage,
    input: input,
  };

  const response = openai.createCompletion({
    model: 'text-davinci-003',
    prompt: code,
    temperature: 0,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ['"""'],
  });

  const handleEditorChange = (value, event) => {
    setCode(value);
  };

  const handleCompiler = async () => {
    if (payloadCompiler.code) {
      try {
        const response = await axios.post(COMPILER_API, payloadCompiler);
        response.data.output
          ? setOutput(response.data.output)
          : setOutput(response.data.error);
      } catch (e) {
        console.log(e);
      }
    } else {
      setOutput('Modify your Code in Editor :D');
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSelectIcon = (e) => {
    switch (e.target.value) {
      case 'c':
        setLanguageIcon(cIcon);
        setInputLanguage('c');
        setFileName('c');
        break;
      case 'python3':
        setLanguageIcon(pythonIcon);
        setFileName('python');
        setInputLanguage('python');
        break;
      case 'java':
        setLanguageIcon(javaIcon);
        setFileName('java');
        setInputLanguage('java');
        break;
      case 'javascript':
        setLanguageIcon(javascriptIcon);
        setFileName('javascript');
        setInputLanguage('javascript');
        break;
      default:
        setLanguageIcon(cppIcon);
        setFileName('cpp');
        setInputLanguage('cpp');
        break;
    }
    console.log(e.target.value);
  };

  return (
    // editor
    <>
      <header>
        <nav className="container ml-5">
          {/* language logo btn */}
          <button className="mr-5">
            <img
              src={languageIcon}
              className="image inline-block"
              alt={`${inputLanguage} icon`}
            />
          </button>
          {/* language logo drop-down btn */}
          <button className="mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0 mr-5">
            <select onChange={handleSelectIcon}>
              <option value={'cpp'}>C++</option>
              <option value={'c'}>C</option>
              <option value={'java'}>Java</option>
              <option value={'python3'}>Python 3</option>
              <option value={'javascript'}>Javascript</option>
            </select>
          </button>
        </nav>
      </header>
      <section id="editor">
        {/* main--container */}
        <div className="flex flex-col space-x-4 items-start px-4 py-4 md:flex-row">
          {/* code--editor */}
          <div
            className="flex flex-col w-full h-full justify-start items-end border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)]"
            id="code-editor"
          >
            <CodeEditor
              height="85vh"
              width={`100%`}
              theme="vs-light"
              path={file.name}
              defaultLanguage={file.language}
              defaultValue={file.value}
              // onMount={handleEditorDidMount}
              options={{
                fontSize: 20,
              }}
              onChange={handleEditorChange}
            />
          </div>

          {/* input-output */}
          <div
            className="right-container flex flex-shrink-0 flex-col lg:w-[30%]"
            id="std-input-output"
          >
            <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
              Output
            </h1>
            <div
              className="w-full h-56 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto"
              id="output"
            >
              <pre className="mt-4 ml-4">{output}</pre>
            </div>
            <div className="flex flex-col items-end" id="input">
              <textarea
                placeholder="Custom input"
                rows={8}
                className="focus:outline-none w-full border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white mt-2"
                onChange={handleInputChange}
              ></textarea>
              <div>
                <button
                  className="mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0 "
                  onClick={() => handleCompiler()}
                >
                  Compile and Execute
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditorHome;
