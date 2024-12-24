export default function Videos() {
  const videos = [
    {
      title: "How to Train your own Local LLM (Llama AI Training)",
      url: "https://www.youtube.com/watch?v=CPotHFH2s9A",
      thumbnail: "https://img.youtube.com/vi/CPotHFH2s9A/maxresdefault.jpg"
    },
    {
      title: "How to Install a Local LLM on your Computer: Llama & Qwen (Private AI)",
      url: "https://www.youtube.com/watch?v=5m4C2jFGQMg",
      thumbnail: "https://img.youtube.com/vi/5m4C2jFGQMg/maxresdefault.jpg"
    }
  ]

  return (
    <div className="py-8">
      <h2 className="mb-8 flex items-center gap-2 text-xl font-mono">
        <span className="text-gray-500">⌘</span> videos
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-video overflow-hidden rounded-lg border border-gray-800 bg-gray-900"
          >
            <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:opacity-0" />
            <img
              src={video.thumbnail}
              alt={video.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="font-mono text-sm text-white">
                {video.title}
              </h3>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-transform group-hover:scale-110">
                <svg
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a 
          href="https://www.youtube.com/@algenr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors"
        >
          View more on YouTube
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

