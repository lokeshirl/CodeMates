const files = {
  python: {
    name: "python",
    language: "python",
    value: `# python3
import sys
sys.stdin  = open(sys.argv[1])
# keep the above lines to take user input
      
print("Hello Python geek !!!")
    `,
  },
  java: {
    name: "java",
    language: "java",
    value: `// Your First Program

class Main {
    public static void main(String[] args) {
        System.out.println("Hello from Java");
    }
}
    `,
  },
  cpp: {
    name: "cpp",
    language: "cpp",
    value: `
#include <iostream>
using namespace std;
    
int main() {
    cout << "Hello World";
    return 0;
}
    `,
  },
  javascript: {
    name: "javascript",
    language: "javascript",
    value: `console.log("Hello from javascript")`,
  },
  c: {
    name: "c",
    language: "c",
    value: `
#include <stdio.h>

int main() {
    printf("Hello World!");
    return 0;
}
`,
  },
};

export default files;
