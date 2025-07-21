export default function Writing() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-5xl font-normal text-black mb-4 tracking-tight">
              writing
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              some of my notes on vibe coding
            </p>
          </div>
          <nav className="flex flex-col items-end space-y-3 text-gray-600">
            <a href="/" className="hover:text-black transition-colors">curlette</a>
            <a href="/about" className="hover:text-black transition-colors">about</a>
            <a href="/writing" className="text-black">writing</a>
            <a href="/bookmarks" className="hover:text-black transition-colors">bookmarks</a>
            <a href="/follow" className="hover:text-black transition-colors flex items-center">
              follow <span className="ml-1">↗</span>
            </a>
            <a href="/code" className="hover:text-black transition-colors flex items-center">
              code <span className="ml-1">↗</span>
            </a>
            <a href="/videos" className="hover:text-black transition-colors flex items-center">
              videos <span className="ml-1">↗</span>
            </a>
          </nav>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-normal text-black mb-8 tracking-tight">
            evergreen
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="/writing/ai-assisted-development" className="underline hover:text-black transition-colors">
                AI-Assisted Development
              </a>
            </li>
            <li>
              <a href="/writing/content-first-architecture" className="underline hover:text-black transition-colors">
                Content-First Architecture
              </a>
            </li>
            <li>
              <a href="/writing/developer-experience" className="underline hover:text-black transition-colors">
                Developer Experience
              </a>
            </li>
            <li>
              <a href="/writing/vibe-driven-development" className="underline hover:text-black transition-colors">
                Vibe-Driven Development
              </a>
            </li>
            <li>
              <a href="/writing/cms-philosophy" className="underline hover:text-black transition-colors">
                CMS Philosophy
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-normal text-black mb-8 tracking-tight">
            2024
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="/writing/building-with-fusion" className="underline hover:text-black transition-colors">
                Building with Builder.io Fusion
              </a>
            </li>
            <li>
              <a href="/writing/claude-and-creativity" className="underline hover:text-black transition-colors">
                Claude and Creative Coding
              </a>
            </li>
            <li>
              <a href="/writing/contentstack-to-headless" className="underline hover:text-black transition-colors">
                From Traditional CMS to Headless
              </a>
            </li>
            <li>
              <a href="/writing/my-coding-setup" className="underline hover:text-black transition-colors">
                My Coding Setup
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-normal text-black mb-8 tracking-tight">
            2023
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="/writing/why-vibe-coding" className="underline hover:text-black transition-colors">
                Why Vibe Coding Matters
              </a>
            </li>
            <li>
              <a href="/writing/intuitive-development" className="underline hover:text-black transition-colors">
                Intuitive Development Practices
              </a>
            </li>
            <li>
              <a href="/writing/content-strategy" className="underline hover:text-black transition-colors">
                Content Strategy for Developers
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
