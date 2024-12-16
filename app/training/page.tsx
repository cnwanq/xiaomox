import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2 } from 'lucide-react'

const cspjCourse = [
  {
    stage: "C++基础阶段",
    courses: [
      { title: "C++基础语法", content: "变量、数据类型、输入输出" },
      { title: "控制结构", content: "条件语句、循环语句" },
      { title: "函数基础", content: "函数定义、调用、参数传递" },
      { title: "数组与字符串", content: "一维数组、字符串处理" },
      { title: "指针入门", content: "指针基础、指针与数组" },
      { title: "结构体基础", content: "结构体定义、使用" }
    ],
    color: "bg-blue-100 border-blue-300 text-blue-800"
  },
  {
    stage: "数据结构基础",
    courses: [
      { title: "线性表", content: "顺序表、链表的实现与应用" },
      { title: "栈与队列", content: "栈、队列的实现与应用" },
      { title: "树结构基础", content: "二叉树、二叉搜索树" },
      { title: "图论基础", content: "图的表示、遍历（DFS、BFS）" },
      { title: "排序算法", content: "冒泡、选择、插入排序" },
      { title: "查找算法", content: "顺序查找、二分查找" }
    ],
    color: "bg-green-100 border-green-300 text-green-800"
  },
  {
    stage: "算法入门",
    courses: [
      { title: "递归与分治", content: "递归的概念、分治算法思想" },
      { title: "贪心算法入门", content: "贪心策略、简单贪心问题" },
      { title: "动态规划基础", content: "DP概念、简单DP问题" },
      { title: "STL入门", content: "vector、string的基本使用" }
    ],
    color: "bg-purple-100 border-purple-300 text-purple-800"
  },
  {
    stage: "综合提高",
    courses: [
      { title: "复杂数据结构", content: "平衡树、并查集入门" },
      { title: "图论进阶", content: "最短路径、最小生成树" },
      { title: "动态规划进阶", content: "线性DP、区间DP" },
      { title: "综合练习", content: "往年CSP-J真题解析与练习" }
    ],
    color: "bg-orange-100 border-orange-300 text-orange-800"
  }
]

export default function Training() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text">C++训练营</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>关于我们的训练营</CardTitle>
          <CardDescription>我们的C++训练营旨在帮助您掌握C++编程，从基础到高级主题，我们都会涵盖。</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">无论您是初学者还是想提升技能的开发者，我们的训练营都能满足您的需求。我们提供：</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>专业的教学团队</li>
            <li>系统化的课程设置</li>
            <li>丰富的实践机会</li>
            <li>个性化的学习指导</li>
            <li>灵活的学习时间</li>
          </ul>
          <Button>立即报名</Button>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>CSP-J寒假训练营课程安排</CardTitle>
          <CardDescription>为期20课的密集训练，助你冲刺CSP-J比赛</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {cspjCourse.map((stage, index) => (
              <Card key={index} className={`border-2 ${stage.color}`}>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{stage.stage}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {stage.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">{course.title}</span>
                          <p className="text-sm text-gray-600">{course.content}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>训练营成果验收</CardTitle>
          <CardDescription>通过多维度评估，全面检验学习效果</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="theory">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="theory">理论知识</TabsTrigger>
              <TabsTrigger value="practice">实战能力</TabsTrigger>
              <TabsTrigger value="comprehensive">综合素质</TabsTrigger>
            </TabsList>
            <TabsContent value="theory">
              <Card>
                <CardHeader>
                  <CardTitle>理论知识考核</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>C++语言特性掌握程度</li>
                    <li>数据结构与算法理解深度</li>
                    <li>编程概念和原理应用能力</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="practice">
              <Card>
                <CardHeader>
                  <CardTitle>实战能力评估</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>编程技巧和代码质量</li>
                    <li>问题分析与解决能力</li>
                    <li>算法设计与优化水平</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="comprehensive">
              <Card>
                <CardHeader>
                  <CardTitle>综合素质评价</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>学习态度和进步幅度</li>
                    <li>团队协作能力</li>
                    <li>创新思维和解决复杂问题的能力</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <Badge variant="secondary" className="text-lg p-2">
          预期成果：90%以上的学员能在CSP-J比赛中取得优秀成绩
        </Badge>
      </div>
    </div>
  )
}

