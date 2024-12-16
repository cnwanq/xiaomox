'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Clock, ChevronRight } from 'lucide-react'

const categories = [
  "C++ 基础",
  "数据结构",
  "算法",
  "设计模式",
  "高级 C++",
  "性能优化"
]

const articles = [
  {
    id: 1,
    title: "C++ 指针详解",
    description: "深入理解 C++ 中指针的概念、用法和常见陷阱。",
    category: "C++ 基础",
    readingTime: 15,
    author: {
      name: "张三",
      avatar: "/avatars/01.png"
    }
  },
  {
    id: 2,
    title: "常见排序算法比较",
    description: "比较各种排序算法的实现、时间复杂度和适用场景。",
    category: "算法",
    readingTime: 20,
    author: {
      name: "李四",
      avatar: "/avatars/02.png"
    }
  },
  {
    id: 3,
    title: "C++11 新特性概览",
    description: "了解 C++11 引入的主要新特性及其使用方法。",
    category: "高级 C++",
    readingTime: 25,
    author: {
      name: "王五",
      avatar: "/avatars/03.png"
    }
  },
  {
    id: 4,
    title: "链表的实现与应用",
    description: "学习如何实现链表数据结构，以及它在实际问题中的应用。",
    category: "数据结构",
    readingTime: 18,
    author: {
      name: "赵六",
      avatar: "/avatars/04.png"
    }
  },
  {
    id: 5,
    title: "单例模式详解",
    description: "深入理解单例设计模式，包括其实现方式和使用场景。",
    category: "设计模式",
    readingTime: 12,
    author: {
      name: "钱七",
      avatar: "/avatars/05.png"
    }
  },
  {
    id: 6,
    title: "C++ 内存管理技巧",
    description: "学习 C++ 中高效的内存管理技巧，避免内存泄漏。",
    category: "性能优化",
    readingTime: 22,
    author: {
      name: "孙八",
      avatar: "/avatars/06.png"
    }
  },
]

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredArticles = articles.filter(article => 
    (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     article.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (!selectedCategory || article.category === selectedCategory)
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center gradient-text">学习资源</h1>
      
      <div className="mb-8 flex">
        <Input
          type="text"
          placeholder="搜索资源..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2"
        />
        <Button>
          <Search className="mr-2 h-4 w-4" /> 搜索
        </Button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>分类</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3">
          <div className="grid gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id}>
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage src={article.author.avatar} />
                        <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{article.author.name}</span>
                    </div>
                    <Badge>{article.category}</Badge>
                  </div>
                </CardContent>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1 h-4 w-4" />
                      {article.readingTime} 分钟阅读
                    </div>
                    <Button variant="link" className="p-0">
                      阅读全文 <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

