'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Github, Twitter } from 'lucide-react'

export default function RegisterPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      setError('请填写所有字段')
      return
    }
    if (password !== confirmPassword) {
      setError('两次输入的密码不一致')
      return
    }
    setError('')
    // 这里应该添加实际的注册逻辑
    console.log('Register attempt with:', username, email, password)
    // 注册成功后重定向到首页
    router.push('/')
  }

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          {/* <div className="flex justify-center mb-4">
            <Logo />
          </div> */}
          <CardTitle className="text-2xl font-bold text-center">创建账户</CardTitle>
          <CardDescription className="text-center">
            填写以下信息以注册您的账户
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">用户名</Label>
                <Input 
                  id="username" 
                  placeholder="您的用户名"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">邮箱</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">密码</Label>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirm-password">确认密码</Label>
                <Input 
                  id="confirm-password" 
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <Button className="w-full mt-6" type="submit">注册</Button>
          </form>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                或者使用
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Button variant="outline" type="button" className="w-full">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" type="button" className="w-full">
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center w-full">
            已有账号？
            <Link href="/login" className="text-primary hover:underline ml-1">
              登录
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

