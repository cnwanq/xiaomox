'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BarChart2 } from 'lucide-react'

const problems = [
  { id: 1, title: "两数之和", difficulty: "简单", tags: ["数组", "哈希表"], acCount: 1500, attemptCount: 2000 },
  { id: 2, title: "最长回文子串", difficulty: "中等", tags: ["字符串", "动态规划"], acCount: 800, attemptCount: 1500 },
  { id: 3, title: "N皇后问题", difficulty: "困难", tags: ["回溯", "数组"], acCount: 300, attemptCount: 1000 },
  { id: 4, title: "合并两个有序链表", difficulty: "简单", tags: ["链表", "递归"], acCount: 1200, attemptCount: 1600 },
  { id: 5, title: "最大子数组和", difficulty: "中等", tags: ["数组", "动态规划"], acCount: 900, attemptCount: 1400 },
  { id: 6, title: "二叉树的层序遍历", difficulty: "中等", tags: ["树", "广度优先搜索"], acCount: 750, attemptCount: 1200 },
  { id: 7, title: "有效的括号", difficulty: "简单", tags: ["栈", "字符串"], acCount: 1400, attemptCount: 1800 },
  { id: 8, title: "最短路径问题", difficulty: "中等", tags: ["图", "广度优先搜索"], acCount: 600, attemptCount: 1100 },
  { id: 9, title: "接雨水", difficulty: "困难", tags: ["栈", "双指针", "动态规划"], acCount: 400, attemptCount: 900 },
  { id: 10, title: "二分查找", difficulty: "简单", tags: ["数组", "二分查找"], acCount: 1300, attemptCount: 1700 },
]

const allTags = Array.from(new Set(problems.flatMap(problem => problem.tags)))

export default function Problems() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProblems = problems.filter(problem => 
    (selectedTags.length === 0 || selectedTags.some(tag => problem.tags.includes(tag))) &&
    (problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     problem.difficulty.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 gradient-text">练习题目</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>筛选题目</CardTitle>
          <CardDescription>使用标签和搜索来找到适合你的题目</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="搜索题目..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Button
                  key={tag}
                  variant={selectedTags.includes(tag) ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px]">ID</TableHead>
                <TableHead>标题</TableHead>
                <TableHead className="w-[100px]">难度</TableHead>
                <TableHead>标签</TableHead>
                <TableHead className="w-[120px] text-right">AC率</TableHead>
                <TableHead className="w-[100px] text-right">练习次数</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProblems.map((problem) => (
                <TableRow key={problem.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium">{problem.id}</TableCell>
                  <TableCell>
                    <Link href={`/problems/${problem.id}`} className="text-primary hover:underline">
                      {problem.title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      problem.difficulty === "简单" ? "success" :
                      problem.difficulty === "中等" ? "warning" : "destructive"
                    }>
                      {problem.difficulty}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {problem.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="mr-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end">
                      <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                      {((problem.acCount / problem.attemptCount) * 100).toFixed(1)}%
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end">
                      <BarChart2 className="w-4 h-4 mr-1 text-blue-500" />
                      {problem.attemptCount}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

