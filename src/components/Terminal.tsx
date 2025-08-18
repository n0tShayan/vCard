import { useState, useEffect, useRef } from 'react';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
  timestamp?: string;
}

const commands = {
  help: {
    description: 'Available commands: about, projects, experience, skills, contact, clear, help',
    content: `Available commands:
  about      - Learn about my background
  projects   - View my portfolio projects  
  experience - Check my work experience
  skills     - See my technical skills
  contact    - Get my contact information
  clear      - Clear terminal screen
  help       - Show this help message`
  },
  about: {
    description: 'About Asad Shayan',
    content: `About Asad Shayan:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Computer Science undergraduate at GIKI (2023-2027)
Current GPA: 3.39/4.0

Passionate about:
  → Data Science & Machine Learning
  → Artificial Intelligence
  → Game Development  
  → Full-Stack Web Development

Always eager to learn new technologies and solve complex problems.`
  },
  experience: {
    description: 'Work Experience',
    content: `Work Experience:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

M-Labs | Game Developer Intern | 2024
  → Developed advanced particle systems for game effects
  → Implemented dynamic lighting and visual effects  
  → Improved user engagement by 25% through enhanced UX
  → Collaborated with cross-functional teams on game mechanics
  → Optimized performance for mobile and desktop platforms`
  },
  projects: {
    description: 'Portfolio Projects',
    content: `Portfolio Projects:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[1] Bitmap Data Clustering
    ML clustering algorithm with OOP design in Visual C++

[2] AI SMS Spam Detection  
    RNN-based NLP model achieving >99% accuracy

[3] Tycoon Simulator Game
    2D Unity game with SQLite database integration

[4] Facial Recognition Attendance System
    Python + OpenCV for automated attendance tracking`
  },
  skills: {
    description: 'Technical Skills',
    content: `Technical Skills:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Programming Languages:
  → Python, C++, JavaScript, TypeScript, C#

Frontend Development:
  → React, HTML5, CSS3, Tailwind CSS, Three.js

Backend Development:  
  → Node.js, Express.js, RESTful APIs

Databases:
  → SQLite, MongoDB, MySQL, PostgreSQL

Game Development:
  → Unity, 2D/3D Graphics, Physics Systems

Machine Learning:
  → TensorFlow, Scikit-learn, OpenCV, NLP

Tools & Platforms:
  → Git, Docker, Linux, Windows, VS Code`
  },
  contact: {
    description: 'Contact Information',
    content: `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Email:    sahibzadashayaan@gmail.com
Phone:    +92 333 8581887
GitHub:   github.com/n0tShayan
LinkedIn: linkedin.com/in/AsadShayan

Feel free to reach out for collaboration opportunities!`
  }
};

export const Terminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to Asad Shayan\'s Portfolio Terminal' },
    { type: 'output', content: 'Type "help" to see available commands' },
    { type: 'output', content: '' }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [lines]);

  const typeText = async (text: string): Promise<void> => {
    return new Promise((resolve) => {
      setIsTyping(true);
      const words = text.split('\n');
      let currentIndex = 0;

      const typeNextLine = () => {
        if (currentIndex < words.length) {
          const content = words[currentIndex] || '';
          setLines(prev => [...prev, { type: 'output', content }]);
          currentIndex++;
          setTimeout(typeNextLine, 50);
        } else {
          setIsTyping(false);
          resolve();
        }
      };

      typeNextLine();
    });
  };

  const handleCommand = async (command: string) => {
    const trimmedCommand = command.trim().toLowerCase();
    
    // Add the input line
    setLines(prev => [...prev, { 
      type: 'input', 
      content: `guest@asad-portfolio:~$ ${command}` 
    }]);

    if (trimmedCommand === 'clear') {
      setTimeout(() => {
        setLines([]);
      }, 100);
      return;
    }

    if (trimmedCommand in commands) {
      await typeText(commands[trimmedCommand as keyof typeof commands].content);
    } else if (trimmedCommand === '') {
      // Do nothing for empty command
    } else {
      setLines(prev => [...prev, { 
        type: 'error', 
        content: `Command not found: ${command}. Type "help" for available commands.` 
      }]);
    }

    setLines(prev => [...prev, { type: 'output', content: '' }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isTyping) {
      handleCommand(currentInput);
      setCurrentInput('');
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      className="h-screen bg-terminal-bg text-terminal-green font-mono text-sm p-6 overflow-hidden cursor-text relative"
      onClick={handleTerminalClick}
    >
      <div 
        ref={terminalRef}
        className="relative h-full overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 text-terminal-white border-b border-terminal-green/30 pb-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-4 text-terminal-cyan font-bold">asad@portfolio:~$</span>
          <div className="ml-auto text-xs text-terminal-green/60">
            [{new Date().toLocaleTimeString()}]
          </div>
        </div>

        {/* Terminal Content */}
        <div className="space-y-1 relative">
          {lines.map((line, index) => (
            <div key={index} className={`
              ${line.type === 'input' ? 'text-terminal-cyan font-bold' : ''}
              ${line.type === 'output' ? 'text-terminal-green' : ''}
              ${line.type === 'error' ? 'text-red-400' : ''}
              whitespace-pre-wrap transition-all duration-200
              ${line.content && line.content.includes('━') ? 'text-terminal-cyan' : ''}
              ${line.content && line.content.includes('→') ? 'text-terminal-yellow' : ''}
            `}>
              {line.content || ''}
            </div>
          ))}
          
          {/* Input Line */}
          {!isTyping && (
            <div className="flex items-center text-terminal-white mt-4 group">
              <span className="text-terminal-cyan font-bold">guest@asad-portfolio</span>
              <span className="text-terminal-purple">:</span>
              <span className="text-terminal-yellow">~</span>
              <span className="text-terminal-white">$ </span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-transparent border-none outline-none text-terminal-green flex-1 font-mono focus:text-terminal-cyan transition-colors"
                autoFocus
                disabled={isTyping}
                placeholder="Type 'help' to begin..."
              />
              <span className="animate-pulse text-terminal-green text-lg">▋</span>
            </div>
          )}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-center text-terminal-green mt-4">
              <span className="text-terminal-cyan">[SYSTEM]</span>
              <span className="ml-2">Processing</span>
              <div className="flex ml-1">
                <span className="animate-pulse">.</span>
                <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>.</span>
                <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};