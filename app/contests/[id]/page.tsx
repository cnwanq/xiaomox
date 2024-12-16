'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Calendar, Clock, Users, AlertTriangle, CheckCircle2 } from 'lucide-react'

const contest = {
  id: 1,
  title: "周赛 #1",
  startTime: "2023-06-10 20:00",
  duration: "1.5小时",
  status: "即将开始",
  description: "这是一场针对所有级别程序员的周赛。比赛将包含4道算法题，难度从简单到困难不等。这是提高你的编程技能和问题解决能力的绝佳机会！",
  participants: 120,
  problems: [
    { id: 1, title: "两数之和", difficulty: "简单" },
    { id: 2, title: "最长回文子串", difficulty: "中等" },
    { id: 3, title: "合并K个排序链表", difficulty: "困难" },
    { id: 4, title: "正则表达式匹配", difficulty: "困难" }
  ],
  rules: [
    "比赛时间内可以多次提交",
    "最终排名以解题数量和用时综合计算",
    "禁止使用外部代码或工具",
    "违规行为将导致成绩作废"
  ]
}

export default function ContestDetail() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{contest.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {contest.startTime}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {contest.duration}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            {contest.participants} 参与者
          </div>
          <Badge variant={contest.status === "即将开始" ? "default" : "secondary"}>
            {contest.status}
          </Badge>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">概览</TabsTrigger>
          <TabsTrigger value="problems">题目</TabsTrigger>
          <TabsTrigger value="rules">规则</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>比赛概览</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{contest.description}</p>
              <Button size="lg">
                {contest.status === "即将开始" ? "提醒我" : "立即参加"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="problems">
          <Card>
            <CardHeader>
              <CardTitle>题目列表</CardTitle>
              <CardDescription>比赛包含以下题目，难度各不相同</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>标题</TableHead>
                    <TableHead>难度</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contest.problems.map((problem) => (
                    <TableRow key={problem.id}>
                      <TableCell>{problem.id}</TableCell>
                      <TableCell>
                        <Link href={`/problems/${problem.id}`} className="text-primary hover:underline">
                          {problem.title}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge variant={
                          problem.difficulty === '简单' ? 'success' :
                          problem.difficulty === '中等' ? 'warning' : 'destructive'
                        }>
                          {problem.difficulty}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules">
          <Card>
            <CardHeader>
              <CardTitle>比赛规则</CardTitle>
              <CardDescription>请仔细阅读以下规则，违规可能会导致成绩作废</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {contest.rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    {index === contest.rules.length - 1 ? (
                      <AlertTriangle className="w-5 h-5 mr-2 text-destructive flex-shrink-0" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                    )}
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

