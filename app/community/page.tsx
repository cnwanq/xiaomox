'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const initialPosts = [
  {
    id: 1,
    author: "张三",
    avatar: "/avatars/01.png",
    content: "大家有什么好的刷题策略吗？我现在每天刷5道题，感觉进步有限。",
    likes: 15,
    comments: 7,
    time: "2小时前"
  },
  {
    id: 2,
    author: "李四",
    avatar: "/avatars/02.png",
    content: "我最近在学习动态规划，有推荐的学习资源吗？",
    likes: 8,
    comments: 3,
    time: "4小时前"
  }
]

export default function Community() {
  const [posts, setPosts] = useState(initialPosts)
  const [newPost, setNewPost] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: "当前用户",
        avatar: "/avatars/03.png",
        content: newPost,
        likes: 0,
        comments: 0,
        time: "刚刚"
      }
      setPosts([post, ...posts])
      setNewPost('')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">社区讨论</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>发布新帖子</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Textarea
              placeholder="分享你的想法..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="mb-4"
            />
            <Button type="submit">发布</Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={post.avatar} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{post.author}</CardTitle>
                  <p className="text-sm text-gray-500">{post.time}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost">
                👍 {post.likes}
              </Button>
              <Button variant="ghost">
                💬 {post.comments}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

