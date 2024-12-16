'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Settings, FileText, Trophy, Users, LogOut, BookOpen, Settings2 } from 'lucide-react'

export function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const router = useRouter()

  const handleLogout = () => {
    // 这里应该添加实际的登出逻辑
    setIsLoggedIn(false)
    router.push('/')
  }

  if (!isLoggedIn) {
    return (
      <div className="flex space-x-2">
        <Button variant="outline" asChild className="text-blue-600 border-blue-600 hover:bg-blue-100">
          <Link href="/login">登录</Link>
        </Button>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/register">注册</Link>
        </Button>
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="@username" />
            <AvatarFallback>用户</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>个人资料</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/articles" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            <span>我的文章</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/my-contests" className="flex items-center">
            <Trophy className="mr-2 h-4 w-4" />
            <span>我的比赛</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/my-teams" className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            <span>我的团队</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/my-classes" className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4" />
            <span>我的班级</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/system-management" className="flex items-center">
            <Settings2 className="mr-2 h-4 w-4" />
            <span>系统管理</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings" className="flex items-center">
            <Settings className="mr-2 h-4 w-4" />
            <span>设置</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="flex items-center text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>退出</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

