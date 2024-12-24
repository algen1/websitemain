import { ShoppingBasketIcon as Basketball, Camera, Shirt, Bitcoin, Blocks, Brain } from 'lucide-react'

interface HobbyCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

function HobbyCard({ title, description, icon }: HobbyCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1c1c1c]/50 p-6 transition-all hover:scale-[1.02]">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

export default function Goodies() {
  const hobbies = [
    {
      title: "Basketball",
      description: "Passionate about the game, both playing and following the NBA. Love the strategic aspects and team dynamics of basketball.",
      icon: <Basketball className="h-6 w-6" />
    },
    {
      title: "Fashion",
      description: "Interested in contemporary fashion trends and personal style development. Enjoy exploring different aesthetics and creative expression through clothing.",
      icon: <Shirt className="h-6 w-6" />
    },
    {
      title: "Cinematography",
      description: "Fascinated by the art of visual storytelling. Love studying camera techniques, lighting, and composition in films and creating video content.",
      icon: <Camera className="h-6 w-6" />
    },
    {
      title: "Crypto",
      description: "Following the evolution of digital currencies and their impact on the future of finance. Interested in the technology and economics behind cryptocurrencies.",
      icon: <Bitcoin className="h-6 w-6" />
    },
    {
      title: "Blockchain",
      description: "Exploring the potential of blockchain technology beyond cryptocurrencies. Interested in smart contracts and decentralized applications.",
      icon: <Blocks className="h-6 w-6" />
    },
    {
      title: "Artificial Intelligence",
      description: "Deeply intrigued by AI and its potential to revolutionize various fields. Keen on exploring machine learning, neural networks, and their practical applications.",
      icon: <Brain className="h-6 w-6" />
    }
  ]

  return (
    <div className="py-8">
      <h1 className="mb-8 text-2xl font-bold">Goodies</h1>
      
      <div className="mb-8">
        <h2 className="text-xl mb-4 text-gray-600 dark:text-gray-400">
          A few things I'm passionate about outside of coding
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <HobbyCard
              key={index}
              title={hobby.title}
              description={hobby.description}
              icon={hobby.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

