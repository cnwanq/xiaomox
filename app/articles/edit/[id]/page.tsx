'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// 模拟从API获取文章数据
const getArticle = (id: string) => {
  // 在实际应用中，这里应该调用API来获取文章数据
  return {
    id: parseInt(id),
    title: "C++指针详解",
    description: "深入理解C++中指针的概念和用法",
    content: "C++指针详解\n\n这里是文章的详细内容...\n\n什么是指针？\n\n指针是一个变量，其值为另一个变量的内存地址。\n\n为什么使用指针？\n\n1. 动态内存分配\n2. 通过引用传递来提高效率\n3. 数组和字符串的操作\n\n指针的基本语法\n\nint *p;  // 声明一个指向整数的指针\nint x = 10;\np = &x;  // 将x的地址赋给指针p\n\n注意事项\n\n- 始终初始化指针\n- 小心使用指针算术\n- 避免悬挂指针\n\n希望这个简单的介绍能帮助你更好地理解C++中的指针概念！",
    status: "已发布",
    category: "C++"
  }
}

const categories = ["C++", "Java", "Python", "JavaScript", "算法", "数据结构", "Web开发", "移动开发", "其他"]

export default function EditArticlePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [article, setArticle] = useState({
    title: '',
    description: '',
    content: '',
    status: '',
    category: ''
  })

  useEffect(() => {
    const fetchedArticle = getArticle(params.id)
    setArticle(fetchedArticle)
  }, [params.id])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 在实际应用中，这里应该调用API来更新文章
    console.log('Article update attempt:', article)
    router.push('/articles')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>编辑文章</CardTitle>
          <CardDescription>修改您的文章内容和设置</CardDescription>
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
          <Button onClick={handleSubmit}>保存更改</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

