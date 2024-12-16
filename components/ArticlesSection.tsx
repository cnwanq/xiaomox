import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight } from 'lucide-react'

const featuredArticles = [
  {
    id: 1,
    title: "C++ 指针详解",
    description: "深入理解 C++ 中指针的概念、用法和常见陷阱。",
    category: "C++ 基础",
    author: {
      name: "张三",
      avatar: "/placeholder.svg?height=32&width=32"
    }
  },
  {
    id: 2,
    title: "常见排序算法比较",
    description: "比较各种排序算法的实现、时间复杂度和适用场景。",
    category: "算法",
    author: {
      name: "李四",
      avatar: "/placeholder.svg?height=32&width=32"
    }
  },
  {
    id: 3,
    title: "C++11 新特性概览",
    description: "了解 C++11 引入的主要新特性及其使用方法。",
    category: "高级 C++",
    author: {
      name: "王五",
      avatar: "/placeholder.svg?height=32&width=32"
    }
  }
]

export default function ArticlesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">精选学习资源</h2>
      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {featuredArticles.map((article) => (
          <Card key={article.id} className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2 line-clamp-2">{article.title}</CardTitle>
              <CardDescription className="line-clamp-2">{article.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button variant="link" className="p-0 h-auto font-semibold text-primary hover:text-primary/80">
                阅读全文 <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
            <CardFooter className="flex justify-between items-center mt-auto">
              <Badge variant="outline">{article.category}</Badge>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>{article.author.name}</span>
                <Avatar className="w-6 h-6">
                  <AvatarImage src={article.author.avatar} alt={article.author.name} />
                  <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                </Avatar>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/resources">查看更多学习资源</Link>
        </Button>
      </div>
    </section>
  )
}

