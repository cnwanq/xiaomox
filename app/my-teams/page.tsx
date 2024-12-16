'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const initialTeams = [
  { id: 1, name: "算法大师", role: "队长", members: 5, description: "专注于高难度算法比赛" },
  { id: 2, name: "代码艺术家", role: "成员", members: 4, description: "追求优雅和高效的代码实现" },
  { id: 3, name: "AI探索者", role: "成员", members: 6, description: "研究AI在编程中的应用" },
]

export default function MyTeamsPage() {
  const [teams, setTeams] = useState(initialTeams)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">我的团队</h1>
        <Button asChild>
          <Link href="/teams/create">创建新团队</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <Card key={team.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {team.name}
                <Badge>{team.role}</Badge>
              </CardTitle>
              <CardDescription>{team.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`/team-avatars/${team.id}.png`} />
                  <AvatarFallback>{team.name[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">成员数量</p>
                  <p className="text-sm text-muted-foreground">{team.members}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href={`/teams/${team.id}`}>查看团队</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

