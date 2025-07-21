const articles = [
  {
    title: "Building with Builder.io Fusion",
    slug: "building-with-fusion",
    date: "December 2024",
    description: "Visual-first development that doesn't sacrifice code quality",
    thumbnail: "https://images.pexels.com/photos/30885764/pexels-photo-30885764.jpeg"
  },
  {
    title: "Claude and Creative Coding",
    slug: "claude-and-creativity",
    date: "November 2024",
    description: "How AI amplifies human creativity in development",
    thumbnail: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg"
  },
  {
    title: "From Traditional CMS to Headless",
    slug: "contentstack-to-headless",
    date: "October 2024",
    description: "Evolution of content management and developer experience",
    thumbnail: "https://images.pexels.com/photos/30885765/pexels-photo-30885765.jpeg"
  },
  {
    title: "My Coding Setup",
    slug: "my-coding-setup",
    date: "September 2024",
    description: "Tools and workflows that enhance the vibe",
    thumbnail: "https://images.pexels.com/photos/249798/pexels-photo-249798.png"
  },
  {
    title: "Why Vibe Coding Matters",
    slug: "why-vibe-coding",
    date: "August 2024",
    description: "The philosophy behind intuitive development practices",
    thumbnail: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg"
  },
  {
    title: "Content Strategy for Developers",
    slug: "content-strategy",
    date: "July 2024",
    description: "Building content-first applications that scale",
    thumbnail: "https://images.pexels.com/photos/30885764/pexels-photo-30885764.jpeg"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
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
            <a href="/follow" className="hover:text-black transition-colors flex items-center" />
            <a href="/code" className="hover:text-black transition-colors flex items-center">
              code <span className="ml-1">↗</span>
            </a>
            <a href="/videos" className="hover:text-black transition-colors flex items-center">
              videos <span className="ml-1">↗</span>
            </a>
          </nav>
        </div>

        {/* Latest Articles Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-normal text-black tracking-tight">
              latest articles
            </h2>
            <a
              href="/writing"
              className="text-gray-600 hover:text-black transition-colors flex items-center"
            >
              view all <span className="ml-1">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.slug} className="group">
                <a href={`/writing/${article.slug}`} className="block">
                  <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 font-medium">{article.date}</p>
                    <h3 className="text-xl font-medium text-black group-hover:text-gray-600 transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {article.description}
                    </p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* About Sections */}
        <div className="max-w-4xl mx-auto">
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
      </div>
    </main>
  )
}
