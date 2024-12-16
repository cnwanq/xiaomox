'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, BarChart2, Code, MessageSquare, BookOpen, Play } from 'lucide-react'

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

const problem = {
  id: 1,
  title: "两数之和",
  difficulty: "简单",
  tags: ["数组", "哈希表"],
  description: "给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。\n\n你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。\n\n你可以按任意顺序返回答案。",
  examples: [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。"
    },
    {
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]"
    },
    {
      input: "nums = [3,3], target = 6",
      output: "[0,1]"
    }
  ],
  constraints: [
    "2 <= nums.length <= 104",
    "-109 <= nums[i] <= 109",
    "-109 <= target <= 109",
    "只会存在一个有效答案"
  ],
  acCount: 1500,
  attemptCount: 2000
}

const languageOptions = [
  { id: 'cpp', name: 'C++', extension: 'cpp', icon: '🇨' },
  { id: 'java', name: 'Java', extension: 'java', icon: '☕' },
  { id: 'python', name: 'Python', extension: 'py', icon: '🐍' },
  { id: 'javascript', name: 'JavaScript', extension: 'js', icon: 'JS' },
]

export default function ProblemDetail() {
  const params = useParams()
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState(languageOptions[0].id)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '')
  }

  const selectedLanguage = languageOptions.find(lang => lang.id === language) || languageOptions[0]

  const handleRunCode = () => {
    // 这里应该是实际运行代码的逻辑
    // 现在我们只是模拟一个输出
    setOutput(`运行 ${selectedLanguage.name} 代码的结果:\n` + 
              `输入: ${input}\n` +
              `输出: [模拟的输出结果]`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{problem.title}</h1>
        <div className="flex items-center space-x-4">
          <Badge variant={
            problem.difficulty === "简单" ? "success" :
            problem.difficulty === "中等" ? "warning" : "destructive"
          }>
            {problem.difficulty}
          </Badge>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
            <span>{((problem.acCount / problem.attemptCount) * 100).toFixed(1)}%</span>
          </div>
          <div className="flex items-center">
            <BarChart2 className="w-4 h-4 mr-1 text-blue-500" />
            <span>{problem.attemptCount}</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        {problem.tags.map((tag, index) => (
          <Badge key={index} variant="outline">{tag}</Badge>
        ))}
      </div>

      <Tabs defaultValue="description" className="space-y-4">
        <TabsList>
          <TabsTrigger value="description"><BookOpen className="w-4 h-4 mr-2" />题目描述</TabsTrigger>
          <TabsTrigger value="solution"><Code className="w-4 h-4 mr-2" />提交解答</TabsTrigger>
          <TabsTrigger value="discussion"><MessageSquare className="w-4 h-4 mr-2" />讨论</TabsTrigger>
        </TabsList>

        <TabsContent value="description">
          <Card>
            <CardHeader>
              <CardTitle>题目描述</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap mb-4">{problem.description}</p>
              <h3 className="text-lg font-semibold mb-2">示例：</h3>
              {problem.examples.map((example, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg mb-4">
                  <p><strong>输入：</strong> {example.input}</p>
                  <p><strong>输出：</strong> {example.output}</p>
                  {example.explanation && <p><strong>解释：</strong> {example.explanation}</p>}
                </div>
              ))}
              <h3 className="text-lg font-semibold mb-2">约束：</h3>
              <ul className="list-disc list-inside">
                {problem.constraints.map((constraint, index) => (
                  <li key={index}>{constraint}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="solution">
          <Card>
            <CardHeader>
              <CardTitle>代码编辑器</CardTitle>
              <CardDescription>
                选择编程语言：
              </CardDescription>
              <div className="flex flex-wrap gap-2 mt-2">
                {languageOptions.map((lang) => (
                  <Button
                    key={lang.id}
                    variant={lang.id === language ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage(lang.id)}
                    className="flex items-center space-x-1"
                  >
                    <span className="text-lg">{lang.icon}</span>
                    <span>{lang.name}</span>
                  </Button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <MonacoEditor
                height="400px"
                language={selectedLanguage.extension}
                theme="vs-dark"
                value={code}
                onChange={handleEditorChange}
                options={{
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  fontSize: 14,
                }}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-stretch space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="input">输入</Label>
                  <Textarea
                    id="input"
                    placeholder="在这里输入测试用例..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="h-32"
                  />
                </div>
                <div>
                  <Label htmlFor="output">输出</Label>
                  <Textarea
                    id="output"
                    placeholder="运行结果将显示在这里..."
                    value={output}
                    readOnly
                    className="h-32"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" onClick={handleRunCode}>
                  <Play className="w-4 h-4 mr-2" />
                  运行代码
                </Button>
                <Button>提交解答</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="discussion">
          <Card>
            <CardHeader>
              <CardTitle>讨论区</CardTitle>
            </CardHeader>
            <CardContent>
              <p>这里是讨论区，你可以与其他用户讨论这个问题的解法。</p>
              {/* 这里可以添加讨论区的具体实现 */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

