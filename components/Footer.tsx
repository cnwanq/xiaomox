import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">小模型</h2>
            <p className="text-gray-400">分享学习，提供C++训练营</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition duration-300">首页</Link></li>
              <li><Link href="/resources" className="text-gray-400 hover:text-primary transition duration-300">学习资源</Link></li>
              <li><Link href="/training" className="text-gray-400 hover:text-primary transition duration-300">C++训练营</Link></li>
              <li><Link href="/problems" className="text-gray-400 hover:text-primary transition duration-300">练习题目</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">社区</h3>
            <ul className="space-y-2">
              <li><Link href="/contests" className="text-gray-400 hover:text-primary transition duration-300">比赛</Link></li>
              <li><Link href="/teams" className="text-gray-400 hover:text-primary transition duration-300">团队</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition duration-300">关于我们</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition duration-300">联系我们</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center">
            用 <Heart size={16} className="text-red-500 mx-1" /> 制作 © 2023 小模型. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  )
}

