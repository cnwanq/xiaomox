'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2, Plus, RefreshCw } from 'lucide-react'

const initialArticles = [
  { id: 1, title: "C++指针详解", description: "深入理解C++中指针的概念和用法", status: "已发布", date: "2023-06-01", category: "C++" },
  { id: 2, title: "动态规划入门", description: "学习动态规划的基本概念和常见题型", status: "草稿", date: "2023-05-28", category: "算法" },
  { id: 3, title: "算法复杂度分析", description: "如何分析和优化算法的时间和空间复杂度", status: "已发布", date: "2023-05-15", category: "算法" },
]

export default function ArticlesPage() {
  const [articles, setArticles] = useState(initialArticles)
  const router = useRouter()

  const deleteArticle = (id: number) => {
    // 在实际应用中，这里应该调用API来将文章移动到回收站
    setArticles(articles.filter(article => article.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">我的文章</h1>
        <div className="space-x-2">
          <Button asChild>
            <Link href="/articles/new">
              <Plus className="w-4 h-4 mr-2" />
              新建文章
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/articles/trash">
              <Trash2 className="w-4 h-4 mr-2" />
              回收站
            </Link>
          </Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{article.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <Badge variant={article.status === "已发布" ? "default" : "secondary"}>
                  {article.status}
                </Badge>
                <Badge variant="outline">{article.category}</Badge>
              </div>
              <span className="text-sm text-muted-foreground mt-2 block">{article.date}</span>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/articles/edit/${article.id}`}>
                  <Pencil className="w-4 h-4 mr-2" />
                  编辑
                </Link>
              </Button>
              <Button variant="destructive" size="sm" onClick={() => deleteArticle(article.id)}>
                <Trash2 className="w-4 h-4 mr-2" />
                删除
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

