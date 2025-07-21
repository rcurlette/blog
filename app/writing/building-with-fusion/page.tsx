export default function BuildingWithFusion() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-5xl font-normal text-black mb-4 tracking-tight leading-tight">
              building with builder.io fusion
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              2024 – curlette
            </p>
          </div>
          <nav className="flex flex-col items-end space-y-3 text-gray-600">
            <a href="/" className="hover:text-black transition-colors">curlette</a>
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

        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Fusion represents a new paradigm in visual development tools.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li>Visual-first development that doesn't sacrifice code quality</li>
            <li>Real-time collaboration between designers and developers</li>
            <li>Component-driven architecture that scales</li>
            <li>AI-powered assistance that enhances creativity</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-8">
            This post will be a collection of my notes and thoughts about using Builder.io Fusion 
            for rapid prototyping and production-ready applications.
          </p>

          <h2 className="text-3xl font-normal text-black mb-6 tracking-tight mt-12">
            Visual Development Experience
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            What does great visual development look like when building modern web applications?
          </p>

          <ol className="space-y-4 text-gray-700 mb-8">
            <li className="flex">
              <span className="font-medium mr-2">1.</span>
              <span>Components should be composable and reusable across projects</span>
            </li>
            <li className="flex">
              <span className="font-medium mr-2">2.</span>
              <span>Design changes should propagate instantly without breaking functionality</span>
            </li>
            <li className="flex">
              <span className="font-medium mr-2">3.</span>
              <span>The development workflow should feel intuitive and fast</span>
            </li>
            <li className="flex">
              <span className="font-medium mr-2">4.</span>
              <span>Code output should be clean, maintainable, and performant</span>
            </li>
          </ol>

          <h2 className="text-3xl font-normal text-black mb-6 tracking-tight mt-12">
            Why Fusion Works
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Traditional visual builders often create vendor lock-in or generate messy code. 
            Fusion takes a different approach by generating clean, readable components that you actually want to maintain.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The key insight is that visual development tools should enhance developer workflows, 
            not replace them. Fusion bridges the gap between design intent and production code.
          </p>

          <div className="bg-gray-50 border-l-4 border-gray-300 p-6 my-8">
            <p className="text-gray-700 italic">
              "The best tools make complex things simple, not simple things complex."
            </p>
          </div>

          <h2 className="text-3xl font-normal text-black mb-6 tracking-tight mt-12">
            Getting Started
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Integration with existing Next.js projects is straightforward. The generated components 
            work seamlessly with your existing codebase and design system.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li>Install the Builder.io SDK</li>
            <li>Set up your API key and configuration</li>
            <li>Create your first visual component</li>
            <li>Export and integrate into your app</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-8">
            The development experience feels natural – you're still working with React components, 
            TypeScript, and your preferred styling approach. Fusion just makes the creation process visual and collaborative.
          </p>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 italic">
              This is part of my ongoing exploration of tools that enhance developer creativity. 
              More thoughts on visual development coming soon.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
