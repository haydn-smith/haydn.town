function App() {
  return (
    <div className="font-body flex flex-col gap-6 p-8 bg-dracula-background text-dracula-pink w-screen h-screen overflow-auto">
      <div className="text-5xl">🏙️</div>
      <div>
        <div><span className="pr-3">😄</span>Haydn Smith</div>
        <div><span className="pr-3">💻</span>Software Engineer</div>
      </div>
      <div><span className="pr-3">📍</span>Adelaide, AU</div>
      <div>
        <div><span className="font-bold">PHP</span> → Laravel / Symfony / WordPress</div>
        <div><span className="font-bold">JavaScript</span> → TypeScript / React / Vue</div>
        <div><span className="font-bold">Game Development</span> → C# / Godot</div>
      </div>
      <div>
        <div><a href="mailto:hello@haydn.town" target="_blank" className="hover:text-dracula-cyan transition" rel="noreferrer"><span className="pr-3">💌</span>hello@haydn.town</a></div>
        <div><a href="https://github.com/haydn-smith" target="_blank" className="hover:text-dracula-cyan transition" rel="noreferrer"><span className="pr-3">👾</span>github.com/haydn-smith</a></div>
        <div><a href="https://www.linkedin.com/in/haydn-smith/" target="_blank" className="hover:text-dracula-cyan transition" rel="noreferrer"><span className="pr-3">🌐</span>LinkedIn</a></div>
      </div>
    </div>
  );
}

export default App;
