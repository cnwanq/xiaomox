'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Trash2 } from 'lucide-react'

const initialTrashArticles = [
  { id: 4, title: "废弃的文章", description: "这是一篇被删除的文章", status: "已删除", date: "2023-05-10" },
  { id: 5, title: "旧版教程", description: "这是一个过时的教程", status: "已删除", date: "2023-04-20" },
]

export default function TrashPage() {
  const [trashArticles, setTrashArticles] = useState(initialTrashArticles)
  const router = useRouter()

  const restoreArticle = (id: number) => {
    // 在实际应用中，这里应该调用API来恢复文章
    setTrashArticles(trashArticles.filter(article => article.id !== id))
  }

  const permanentlyDeleteArticle = (id: number) => {
    // 在实际应用中，这里应该调用API来永久删除文章
    setTrashArticles(trashArticles.filter(article => article.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">回收站</h1>
        <Button variant="outline" onClick={() => router.push('/articles')}>
          返回文章列表
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trashArticles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{article.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <Badge variant="destructive">
                  {article.status}
                </Badge>
                <span className="text-sm text-muted-foreground">{article.date}</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" onClick={() => restoreArticle(article.id)}>
                <RefreshCw className="w-4 h-4 mr-2" />
                恢复
              </Button>
              <Button variant="destructive" size="sm" onClick={() => permanentlyDeleteArticle(article.id)}>
                <Trash2 className="w-4 h-4 mr-2" />
                永久删除
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

