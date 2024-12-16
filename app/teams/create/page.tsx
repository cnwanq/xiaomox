'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "@/components/ui/use-toast"

export default function CreateTeamPage() {
  const router = useRouter()
  const [teamName, setTeamName] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState('')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    if (!teamName.trim()) newErrors.teamName = '团队名称不能为空'
    if (teamName.length > 50) newErrors.teamName = '团队名称不能超过50个字符'
    if (description.length > 500) newErrors.description = '团队描述不能超过500个字符'
    if (tags.length > 10) newErrors.tags = '标签数量不能超过10个'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    try {
      // Here you would typically send the data to your backend API
      // For now, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Creating team:', { teamName, description, tags })
      toast({
        title: "团队创建成功",
        description: "您的新团队已经成功创建。",
      })
      router.push('/my-teams')
    } catch (error) {
      toast({
        title: "创建失败",
        description: "创建团队时发生错误，请稍后重试。",
        variant: "destructive",
      })
    }
  }

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim()) && tags.length < 10) {
      setTags([...tags, currentTag.trim()])
      setCurrentTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>创建新团队</CardTitle>
          <CardDescription>填写以下信息来创建您的新团队</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="teamName">团队名称</Label>
              <Input
                id="teamName"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="输入团队名称"
                required
              />
              {errors.teamName && (
                <p className="text-sm text-red-500">{errors.teamName}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">团队描述</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="描述您的团队目标和特色"
                rows={4}
              />
              {errors.description && (
                <p className="text-sm text-red-500">{errors.description}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="tags">标签</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="tags"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  placeholder="添加标签"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                />
                <Button type="button" onClick={addTag}>添加</Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => removeTag(tag)} />
                  </Badge>
                ))}
              </div>
              {errors.tags && (
                <p className="text-sm text-red-500">{errors.tags}</p>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.back()}>取消</Button>
          <Button onClick={handleSubmit}>创建团队</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

