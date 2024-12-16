'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Users, Clock, ChevronRight } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const initialContests = [
  { id: 1, name: "周赛 #245", date: "2023-06-10", rank: 78, totalParticipants: 10000, status: "已完成", duration: "1.5小时" },
  { id: 2, name: "月赛 #62", date: "2023-05-20", rank: 120, totalParticipants: 15000, status: "已完成", duration: "2小时" },
  { id: 3, name: "特别比赛：动态规划专题", date: "2023-06-15", status: "即将开始", duration: "3小时" },
  { id: 4, name: "新手友好赛", date: "2023-06-18", status: "即将开始", duration: "1小时" },
  { id: 5, name: "高级算法挑战赛", date: "2023-06-22", status: "即将开始", duration: "4小时" },
]

export default function MyContestsPage() {
  const [contests, setContests] = useState(initialContests)
  const [filter, setFilter] = useState('all')
  const router = useRouter()

  const filteredContests = contests.filter(contest => {
    if (filter === 'completed') return contest.status === '已完成'
    if (filter === 'upcoming') return contest.status === '即将开始'
    return true
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">我的比赛</h1>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="筛选比赛" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">所有比赛</SelectItem>
            <SelectItem value="completed">已完成</SelectItem>
            <SelectItem value="upcoming">即将开始</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredContests.map((contest) => (
          <Card key={contest.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {contest.name}
                <Badge variant={contest.status === "已完成" ? "secondary" : "default"}>
                  {contest.status}
                </Badge>
              </CardTitle>
              <CardDescription>
                <span className="flex items-center mt-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {contest.date}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-2">
                <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{contest.duration}</span>
              </div>
              {contest.rank && (
                <div className="flex items-center mb-2">
                  <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                  <span className="text-sm">排名: {contest.rank} / {contest.totalParticipants}</span>
                </div>
              )}
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {contest.totalParticipants ? `${contest.totalParticipants} 参与者` : '参与人数未知'}
                </span>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="outline" className="w-full" onClick={() => router.push(`/contests/${contest.id}`)}>
                查看详情
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/contests">浏览更多比赛</Link>
        </Button>
      </div>
    </div>
  )
}

