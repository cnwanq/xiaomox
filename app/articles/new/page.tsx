'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const categories = ["C++", "Java", "Python", "JavaScript", "算法", "数据结构", "Web开发", "移动开发", "其他"]

export default function NewArticlePage() {
  const router = useRouter()
  const [article, setArticle] = useState({
    title: '',
    description: '',
    content: '',
    status: '草稿',
    category: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 在实际应用中，这里应该调用API来创建新文章
    console.log('New article creation attempt:', article)
    router.push('/articles')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>新建文章</CardTitle>
          <CardDescription>创建一篇新的文章</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">标题</Label>
              <Input
                id="title"
                value={article.title}
                onChange={(e) => setArticle({ ...article, title: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">描述</Label>
              <Input
                id="description"
                value={article.description}
                onChange={(e) => setArticle({ ...article, description: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">内容</Label>
              <Textarea
                id="content"
                value={article.content}
                onChange={(e) => setArticle({ ...article, content: e.target.value })}
                required
                className="min-h-[400px]"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">分类</Label>
                <Select
                  value={article.category}
                  onValueChange={(value) => setArticle({ ...article, category: value })}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="选择分类" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">状态</Label>
                <Select
                  value={article.status}
                  onValueChange={(value) => setArticle({ ...article, status: value })}
                >
                  <SelectTrigger id="status">
                    <SelectValue placeholder="选择状态" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="草稿">草稿</SelectItem>
                    <SelectItem value="已发布">已发布</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.back()}>取消</Button>
          <Button onClick={handleSubmit}>创建文章</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

