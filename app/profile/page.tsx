'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePage() {
  const [name, setName] = useState('张三')
  const [email, setEmail] = useState('zhangsan@example.com')
  const [bio, setBio] = useState('热爱编程，专注于算法和数据结构')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里应该添加更新个人资料的逻辑
    console.log('Profile update attempt with:', { name, email, bio })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">个人资料</h1>
      <Card>
        <CardHeader>
          <CardTitle>编辑个人资料</CardTitle>
          <CardDescription>更新您的个人信息和简介</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/avatars/01.png" alt={name} />
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
                <Button variant="outline">更换头像</Button>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">姓名</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">邮箱</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="bio">个人简介</Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={4}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit}>保存更改</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

