'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle, Calendar, Users, BookOpen } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Class = {
  id: number
  name: string
  instructor: string
  schedule: string
  students: number
  description: string
  status: 'ongoing' | 'upcoming' | 'completed'
}

export default function MyClassesPage() {
  const [classes, setClasses] = useState<Class[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        // Simulating API call with setTimeout
        await new Promise(resolve => setTimeout(resolve, 1000))
        // In a real application, you would fetch data from your API here
        const mockClasses = [
          { id: 1, name: "高级算法", instructor: "张教授", schedule: "每周二 14:00-16:00", students: 30, description: "深入学习复杂算法和数据结构", status: 'ongoing' },
          { id: 2, name: "机器学习基础", instructor: "李博士", schedule: "每周四 10:00-12:00", students: 45, description: "机器学习算法和应用介绍", status: 'upcoming' },
          { id: 3, name: "Web开发实践", instructor: "王老师", schedule: "每周六 09:00-12:00", students: 25, description: "使用现代框架构建Web应用", status: 'completed' },
        ]
        setClasses(mockClasses)
        setLoading(false)
      } catch (err) {
        setError('加载班级信息时出错，请稍后重试。')
        setLoading(false)
      }
    }

    fetchClasses()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>错误</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">我的班级</h1>
        <Button asChild>
          <Link href="/classes/browse">浏览更多班级</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((classItem) => (
          <Card key={classItem.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {classItem.name}
                <Badge variant={
                  classItem.status === 'ongoing' ? 'default' :
                  classItem.status === 'upcoming' ? 'secondary' : 'outline'
                }>
                  {classItem.status === 'ongoing' ? '进行中' :
                   classItem.status === 'upcoming' ? '即将开始' : '已完成'}
                </Badge>
              </CardTitle>
              <CardDescription>{classItem.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-2">
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">讲师: {classItem.instructor}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">{classItem.schedule}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">{classItem.students} 名学生</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/classes/${classItem.id}`}>查看详情</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

