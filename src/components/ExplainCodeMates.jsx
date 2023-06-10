import React from 'react';

const ExplainCodeMates = () => {
  return (
    <section id="feature">
      {/* flex--container */}
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* Why CodeMate */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's Different about <span className="italic">CODEMATES</span>
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            No Hustle and Struggle to start your coding journey, use our online
            code editor, if you stuck get help from AI assistant.
          </p>
        </div>
        {/* reason - numbered list */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* List Item 1 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  A regular feature rich playground - Online
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                A regular feature rich playground - Online
              </h3>
              <p className="text-darkGrayishBlue">
                User can write code in common programming languages like, cpp,
                java, python, JavaScript, User can give provide input for their
                program. user have access to the output console to view
                program's output.
              </p>
            </div>
          </div>
          {/* List Item 2 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Built-in AI Assitant
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Built-in AI Assitant
              </h3>
              <p className="text-darkGrayishBlue">
                As a beginner, you are prone to see errors and bugs in your program. So, just use our AI assistant that will explain your code step by step and will guide you to solve errors.
              </p>
            </div>
          </div>
          {/* List Item 3 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Convert code from one programming language to other
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Convert code from one programming language to other
              </h3>
              <p className="text-darkGrayishBlue">
                Stop struggling in code conversion, use our code conversion tool to convert one programming language to other. Although Conversions are not always 100% accurate and need to be supervised by a human! 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplainCodeMates;
