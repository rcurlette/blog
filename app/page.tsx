export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Curlette Blog
          </h1>
          <p className="text-lg text-gray-600">
            A SaaS / NextJS / AI powered blog solution
          </p>
        </header>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to Your Blog
            </h2>
            <p className="text-gray-600 mb-6">
              Your blog is now up and running! Start adding your content and customize it to your needs.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Create Post
              </button>
              <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors">
                Customize
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
