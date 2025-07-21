export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-5xl font-normal text-black mb-4 tracking-tight">
              curlette
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              i teach developers the art of vibe coding
            </p>
          </div>
          <nav className="flex flex-col items-end space-y-3 text-gray-600">
            <a href="/about" className="hover:text-black transition-colors">about</a>
            <a href="/writing" className="hover:text-black transition-colors">writing</a>
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
            things i'm proud of
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>building products that developers actually enjoy using</li>
            <li>mastering the fusion of AI and human creativity in coding</li>
            <li>advocating for vibe-driven development over rigid methodologies</li>
            <li>creating content that makes complex CMS concepts accessible</li>
            <li>contributing to open source projects that improve developer experience</li>
            <li>helping teams ship faster with better tooling and workflows</li>
            <li>mentoring developers to find their unique coding style</li>
            <li>pioneering content-first development approaches</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-normal text-black mb-8 tracking-tight">
            things i believe
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>good vibes beat strict processes every time</li>
            <li className="ml-6">
              <span className="text-black">intuition</span> is a developer's <span className="underline">superpower</span>
            </li>
            <li className="ml-6">the best code feels effortless to write and read</li>
            <li className="ml-6">teams that vibe together ship together</li>
            <li className="ml-6">
              <span className="underline">content-first</span> teams will move 10x faster than those fighting their CMS
            </li>
            <li>ai should amplify human creativity, not replace it</li>
            <li>developer experience is the foundation of great products</li>
            <li>the right tools make coding feel like magic</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
