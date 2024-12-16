'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [language, setLanguage] = useState("zh")
  const [theme, setTheme] = useState("light")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里应该添加保存设置的逻辑
    console.log('Settings update attempt:', { emailNotifications, language, theme })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">设置</h1>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>账户设置</CardTitle>
            <CardDescription>管理您的账户信息和偏好设置</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
                <span>邮件通知</span>
                <span className="font-normal text-sm text-muted-foreground">接收重要更新和通知</span>
              </Label>
              <Switch
                id="email-notifications"
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="language">语言</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger id="language">
                  <SelectValue placeholder="选择语言" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zh">中文</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="theme">主题</Label>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger id="theme">
                  <SelectValue placeholder="选择主题" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">浅色</SelectItem>
                  <SelectItem value="dark">深色</SelectItem>
                  <SelectItem value="system">跟随系统</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit}>保存设置</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>安全设置</CardTitle>
            <CardDescription>管理您的密码和账户安全选项</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="current-password">当前密码</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new-password">新密码</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirm-password">确认新密码</Label>
              <Input id="confirm-password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>更改密码</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

