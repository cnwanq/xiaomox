import Link from 'next/link'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Calendar, Clock, Users } from 'lucide-react'

const contests = [
  { id: 1, title: "周赛 #1", startTime: "2023-06-10 20:00", duration: "1.5小时", status: "即将开始", participants: 120 },
  { id: 2, title: "月赛 #6", startTime: "2023-06-15 19:30", duration: "2小时", status: "报名中", participants: 250 },
  { id: 3, title: "新手赛 #2", startTime: "2023-06-20 14:00", duration: "3小时", status: "已结束", participants: 180 },
  { id: 4, title: "高级算法赛", startTime: "2023-06-25 10:00", duration: "4小时", status: "报名中", participants: 80 },
  { id: 5, title: "数据结构专题赛", startTime: "2023-07-01 15:00", duration: "2.5小时", status: "即将开始", participants: 150 },
]

export default function Contests() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 gradient-text">编程比赛</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>即将开始的比赛</CardTitle>
          <CardDescription>准备好挑战自我，展示你的编程技能！</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {contests.filter(contest => contest.status !== "已结束").slice(0, 3).map((contest) => (
              <Card key={contest.id} className="bg-primary/5 hover:bg-primary/10 transition-colors">
                <CardHeader>
                  <CardTitle>{contest.title}</CardTitle>
                  <CardDescription>
                    开始时间：{contest.startTime}
                  </CardDescription>
                  <div className="flex items-center mt-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm text-muted-foreground">持续时间：{contest.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant={contest.status === "即将开始" ? "default" : "secondary"}>
                      {contest.status}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-1" />
                      {contest.participants} 参与者
                    </div>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link href={`/contests/${contest.id}`}>查看详情</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>所有比赛</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>标题</TableHead>
                <TableHead>开始时间</TableHead>
                <TableHead>持续时间</TableHead>
                <TableHead>状态</TableHead>
                <TableHead className="text-right">参与人数</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contests.map((contest) => (
                <TableRow key={contest.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium">{contest.id}</TableCell>
                  <TableCell>
                    <Link href={`/contests/${contest.id}`} className="text-primary hover:underline">
                      {contest.title}
                    </Link>
                  </TableCell>
                  <TableCell>{contest.startTime}</TableCell>
                  <TableCell>{contest.duration}</TableCell>
                  <TableCell>
                    <Badge variant={
                      contest.status === "即将开始" ? "default" :
                      contest.status === "报名中" ? "secondary" : "outline"
                    }>
                      {contest.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{contest.participants}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

