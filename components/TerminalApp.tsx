"use client";

import { useState, useRef, FormEvent, useEffect } from "react";
import HeroSection from "./HeroSection";
import Career from "./Career";
import ProjectsList from "./ProjectsList";
import AcademicRecord from "./AcademicRecord";
import Hobbies from "./Hobbies";

interface HistoryEntry {
  type: "command" | "output" | "error";
  content: React.ReactNode;
}

const ASCII_LOGO = `
  ██████╗   ██████╗  ██████╗  ████████╗  ██████╗   ██████╗ 
  ██╔══██╗ ██╔═══██╗ ██╔══██╗ ╚══██╔══╝ ██╔═══██╗ ██╔════╝ 
  ██████╔╝ ██║   ██║ ██████╔╝    ██║    ██║   ██║ ██║  ███╗
  ██╔══██╗ ██║   ██║ ██╔══██╗    ██║    ██║   ██║ ██║   ██║
  ██║  ██║ ╚██████╔╝ ██████╔╝    ██║    ╚██████╔╝ ╚██████╔╝
  ╚═╝  ╚═╝  ╚═════╝  ╚═════╝     ╚═╝     ╚═════╝   ╚═════╝ 
  ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
  C o m p u t e r   S c i e n t i s t 
  `;

export default function TerminalApp() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const historyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (command: string) => {
    const trimmedInput = command.trim();
    if (!trimmedInput) return;

    // Clear is special: wipe everything, no echo.
    if (trimmedInput === "clear") {
      setHistory([]);
      setInput("");
      inputRef.current?.focus();
      return;
    }

    const commandEntry: HistoryEntry = {
      type: "command",
      content: (
        <div className="flex items-center gap-2">
          <span className="text-terminal-green-bright font-mono">
            visitor@retro-cv:~$
          </span>
          <span className="text-terminal-green">{trimmedInput}</span>
        </div>
      ),
    };

    let outputContent: React.ReactNode = null;
    let outputType: "output" | "error" = "output";

    switch (trimmedInput) {
      case "whoami":
        outputContent = <HeroSection />;
        break;
      case "career":
        outputContent = <Career />;
        break;
      case "projects":
        outputContent = <ProjectsList />;
        break;
      case "studies":
        outputContent = <AcademicRecord />;
        break;
      case "hobbies":
        outputContent = <Hobbies />;
        break;
      case "help":
        outputContent = (
          <div className="space-y-1 text-sm">
            <div className="text-terminal-green-bright font-bold mb-2">
              Available commands:
            </div>
            <div>
              <span className="text-terminal-green-bright">whoami</span>{" "}
              <span className="text-terminal-green-dim">- personal info</span>
            </div>
            <div>
              <span className="text-terminal-green-bright">career</span>{" "}
              <span className="text-terminal-green-dim">- career history</span>
            </div>
            <div>
              <span className="text-terminal-green-bright">projects</span>{" "}
              <span className="text-terminal-green-dim">- projects list</span>
            </div>
            <div>
              <span className="text-terminal-green-bright">studies</span>{" "}
              <span className="text-terminal-green-dim">- academic record</span>
            </div>
            <div>
              <span className="text-terminal-green-bright">clear</span>{" "}
              <span className="text-terminal-green-dim">- clear history</span>
            </div>
            <div>
              <span className="text-terminal-green-bright">hobbies</span>{" "}
              <span className="text-terminal-green-dim">- hobbies list</span>
            </div>
            <div>
              <span className="text-terminal-green-bright">help</span>{" "}
              <span className="text-terminal-green-dim">
                - show this message
              </span>
            </div>
          </div>
        );
        break;
      default:
        outputType = "error";
        outputContent = (
          <div className="font-mono">
            <div className="text-red-500 font-bold">
              command not found: {trimmedInput}
            </div>
            <div className="text-xs mt-1 text-red-500">
              Type <span className="font-bold">help</span> for available
              commands.
            </div>
          </div>
        );
        break;
    }

    // Single state update: replace history with [command echo, output].
    setHistory(
      outputContent
        ? [commandEntry, { type: outputType, content: outputContent }]
        : [commandEntry],
    );
    setInput("");
    inputRef.current?.focus();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="h-full flex flex-col bg-black text-green-400 font-mono overflow-hidden">
      {/* ASCII logo — fixed, no scrolling */}
      <div className="shrink-0 px-4 pt-4 pb-2 flex justify-center">
        <pre className="text-terminal-green-bright text-[10px] md:text-xs leading-tight whitespace-pre">
          {ASCII_LOGO}
        </pre>
      </div>

      {/* Terminal window — grows to fill, only inner history scrolls */}
      <div className="flex-1 min-h-0 mx-4 mb-4 flex flex-col border border-terminal-green/40 bg-black/80">
        <div className="shrink-0 px-4 py-2 border-b border-terminal-green/30 text-xs text-terminal-green-dim flex justify-between">
          <span>visitor@retro-cv:~$</span>
          <span>bash</span>
        </div>

        <div
          ref={historyRef}
          className="flex-1 min-h-0 overflow-y-auto p-4 text-sm"
        >
          {history.length === 0 ? (
            <div className="text-terminal-green-dim italic">
              Welcome. Type <span className="font-bold">help</span> for
              available commands.
            </div>
          ) : (
            history.map((entry, i) => (
              <div key={i} className="mb-4">
                {entry.content}
              </div>
            ))
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="shrink-0 border-t border-terminal-green/30 px-4 py-3 flex items-center gap-3"
        >
          <span className="text-terminal-green-bright whitespace-nowrap">
            visitor@retro-cv:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 min-w-0 bg-transparent outline-none text-green-400 font-mono"
            placeholder="type a command..."
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}
