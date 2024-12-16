'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Search } from 'lucide-react'

const teams = [
  { id: 1, name: "代码大师", members: 5, description: "专注于算法竞赛的精英团队", tags: ["算法", "竞赛"] },
  { id: 2, name: "C++爱好者", members: 8, description: "分享C++技巧和最佳实践", tags: ["C++", "编程"] },
  { id: 3, name: "数据结构探索者", members: 6, description: "深入研究各种数据结构的应用", tags: ["数据结构", "算法"] },
  { id: 4, name: "Web开发先锋", members: 7, description: "探索最新的Web开发技术和框架", tags: ["Web", "前端", "后端"] },
  { id: 5, name: "AI学习小组", members: 4, description: "一起学习和实践人工智能技术", tags: ["AI", "机器学习"] },
  { id: 6, name: "开源贡献者", members: 10, description: "积极参与开源项目的开发和维护", tags: ["开源", "协作"] },
]

export default function Teams() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 gradient-text">团队</h1>
      
      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-xl">
          <Input
            type="text"
            placeholder="搜索团队..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeams.map((team) => (
          <Card key={team.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl font-bold">{team.name}</span>
                <Badge variant="secondary" className="ml-2">
                  <Users className="w-4 h-4 mr-1" />
                  {team.members}
                </Badge>
              </CardTitle>
              <CardDescription>{team.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {team.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <Avatar key={i} className="border-2 border-background">
                      <AvatarImage src={`https://i.pravatar.cc/32?img=${team.id * 10 + i}`} />
                      <AvatarFallback>M{i+1}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <Button asChild>
                  <Link href={`/teams/${team.id}`}>查看详情</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

