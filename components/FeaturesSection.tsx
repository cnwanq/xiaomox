import Link from 'next/link'
import { Book, Code, Users, FileCode, Trophy, UserPlus } from 'lucide-react'

const features = [
  { icon: Book, title: "学习资源", description: "探索我们丰富的学习资源，包括教程、文章和视频。", link: "/resources" },
  { icon: Code, title: "C++训练营", description: "参加我们的C++训练营，提升您的编程技能。", link: "/training" },
  { icon: FileCode, title: "练习题目", description: "挑战各种难度的编程题目，提高解题能力。", link: "/problems" },
  { icon: Trophy, title: "在线比赛", description: "参加定期举办的编程比赛，与其他选手一较高下。", link: "/contests" },
  { icon: UserPlus, title: "加入团队", description: "与志同道合的伙伴组队，共同进步。", link: "/teams" },
  { icon: Users, title: "社区", description: "加入我们的编程社区，与其他学习者交流和分享。", link: "/community" },
]

export default function FeaturesSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">我们的特色</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
              <item.icon size={24} />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <Link href={item.link} className="text-primary hover:underline">了解更多 →</Link>
          </div>
        ))}
      </div>
    </section>
  )
}

