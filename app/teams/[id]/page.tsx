'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Users, Trophy, Calendar, MessageSquare } from 'lucide-react'

// 模拟的团队数据
const teamData = {
  id: 1,
  name: "代码大师",
  description: "专注于算法竞赛的精英团队",
  members: [
    { id: 1, name: "张三", role: "队长", avatar: "/avatars/01.png" },
    { id: 2, name: "李四", role: "算法专家", avatar: "/avatars/02.png" },
    { id: 3, name: "王五", role: "前端开发", avatar: "/avatars/03.png" },
    { id: 4, name: "赵六", role: "后端开发", avatar: "/avatars/04.png" },
    { id: 5, name: "钱七", role: "测试工程师", avatar: "/avatars/05.png" },
  ],
  achievements: [
    { id: 1, title: "全国大学生算法大赛冠军", date: "2023-05-15" },
    { id: 2, title: "ACM-ICPC 区域赛金牌", date: "2022-11-20" },
    { id: 3, title: "Google Code Jam 全球前100名", date: "2022-08-10" },
  ],
  upcomingEvents: [
    { id: 1, title: "团队周会", date: "2023-06-05", time: "19:00" },
    { id: 2, title: "算法训练营", date: "2023-06-10", time: "14:00-18:00" },
    { id: 3, title: "CodeForces 比赛", date: "2023-06-15", time: "22:00" },
  ],
  tags: ["算法", "竞赛", "C++", "Python"]
}

export default function TeamDetail() {
  const params = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')

  // 在实际应用中，你应该使用 params.id 来从后端获取团队数据
  // 这里我们直接使用模拟数据

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-4" onClick={() => router.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        返回团队列表
      </Button>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl">{teamData.name}</CardTitle>
          <CardDescription className="text-xl">{teamData.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {teamData.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <span>{teamData.members.length} 名成员</span>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">概览</TabsTrigger>
          <TabsTrigger value="members">成员</TabsTrigger>
          <TabsTrigger value="achievements">成就</TabsTrigger>
          <TabsTrigger value="events">活动</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>团队概览</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>{teamData.members.length} 名成员</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-muted-foreground" />
                  <span>{teamData.achievements.length} 项成就</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span>{teamData.upcomingEvents.length} 个即将举行的活动</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="members">
          <Card>
            <CardHeader>
              <CardTitle>团队成员</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamData.members.map((member) => (
                  <div key={member.id} className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                    <Avatar>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>团队成就</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {teamData.achievements.map((achievement) => (
                  <li key={achievement.id} className="flex items-center space-x-4">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="font-semibold">{achievement.title}</p>
                      <p className="text-sm text-muted-foreground">{achievement.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>即将举行的活动</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {teamData.upcomingEvents.map((event) => (
                  <li key={event.id} className="flex items-center space-x-4">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-semibold">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{event.date} {event.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-center">
        <Button size="lg">
          申请加入团队
        </Button>
      </div>
    </div>
  )
}

