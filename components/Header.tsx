import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Logo } from './Logo'
import { AuthButton } from './AuthButton'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
            <Logo />
            <span className="text-3xl font-bold gradient-text">小模型</span>
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-primary transition duration-300">首页</Link>
            <Link href="/resources" className="text-gray-700 hover:text-primary transition duration-300">学习资源</Link>
            <Link href="/training" className="text-gray-700 hover:text-primary transition duration-300">C++训练营</Link>
            <Link href="/problems" className="text-gray-700 hover:text-primary transition duration-300">练习题目</Link>
            <Link href="/contests" className="text-gray-700 hover:text-primary transition duration-300">比赛</Link>
            <Link href="/teams" className="text-gray-700 hover:text-primary transition duration-300">团队</Link>
            <Link href="/my-classes" className="text-gray-700 hover:text-primary transition duration-300">我的班级</Link>
            <Link href="/community" className="text-gray-700 hover:text-primary transition duration-300">社区</Link>
            <AuthButton />
          </div>
          <div className="md:hidden flex items-center">
            <AuthButton />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">打开菜单</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/">首页</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/resources">学习资源</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/training">C++训练营</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/problems">练习题目</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contests">比赛</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teams">团队</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/my-classes">我的班级</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/community">社区</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  )
}

