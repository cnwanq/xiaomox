'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Settings, Users, BookOpen, FileText, Search, Plus, LayoutDashboard } from 'lucide-react'

const Sidebar = ({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (section: string) => void }) => {
  const sections = [
    { id: 'dashboard', name: '仪表盘', icon: LayoutDashboard },
    { id: 'users', name: '用户管理', icon: Users },
    { id: 'classes', name: '班级管理', icon: BookOpen },
    { id: 'content', name: '内容管理', icon: FileText },
    { id: 'settings', name: '系统设置', icon: Settings },
  ]

  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">系统管理</h2>
      <nav>
        {sections.map((section) => (
          <Button
            key={section.id}
            variant={activeSection === section.id ? "secondary" : "ghost"}
            className="w-full justify-start mb-2"
            onClick={() => setActiveSection(section.id)}
          >
            <section.icon className="mr-2 h-4 w-4" />
            {section.name}
          </Button>
        ))}
      </nav>
    </div>
  )
}

export default function SystemManagementPage() {
  const [activeSection, setActiveSection] = useState('dashboard')

  const mockUsers = [
    { id: 1, name: '张三', email: 'zhangsan@example.com', role: '学生' },
    { id: 2, name: '李四', email: 'lisi@example.com', role: '教师' },
    { id: 3, name: '王五', email: 'wangwu@example.com', role: '管理员' },
  ]

  const mockClasses = [
    { id: 1, name: 'C++基础班', instructor: '张教授', students: 30 },
    { id: 2, name: '算法进阶班', instructor: '李博士', students: 25 },
    { id: 3, name: 'Web开发实战', instructor: '王老师', students: 35 },
  ]

  return (
    <div className="flex">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 p-8">
        {activeSection === 'dashboard' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LayoutDashboard className="mr-2 h-5 w-5" />
                仪表盘
              </CardTitle>
              <CardDescription>系统概览和关键指标</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>总用户数</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">1,234</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>活跃班级</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">42</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>文章数量</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">567</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        )}

        {activeSection === 'users' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                用户管理
              </CardTitle>
              <CardDescription>管理系统用户、权限和角色</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="搜索用户" className="pl-8" />
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> 添加用户
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>姓名</TableHead>
                    <TableHead>邮箱</TableHead>
                    <TableHead>角色</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" className="mr-2">编辑</Button>
                        <Button variant="destructive" size="sm">删除</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {activeSection === 'classes' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                班级管理
              </CardTitle>
              <CardDescription>管理系统中的班级、课程和教学内容</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="搜索班级" className="pl-8" />
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> 创建班级
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>班级名称</TableHead>
                    <TableHead>授课教师</TableHead>
                    <TableHead>学生人数</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockClasses.map((class_) => (
                    <TableRow key={class_.id}>
                      <TableCell>{class_.id}</TableCell>
                      <TableCell>{class_.name}</TableCell>
                      <TableCell>{class_.instructor}</TableCell>
                      <TableCell>{class_.students}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" className="mr-2">编辑</Button>
                        <Button variant="destructive" size="sm">删除</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {activeSection === 'content' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                内容管理
              </CardTitle>
              <CardDescription>管理系统中的文章、资源和其他内容</CardDescription>
            </CardHeader>
            <CardContent>
              <p>这里可以添加内容列表、内容审核、资源上传等功能。</p>
              <Button className="mt-4">
                <Plus className="mr-2 h-4 w-4" /> 添加新内容
              </Button>
            </CardContent>
          </Card>
        )}

        {activeSection === 'settings' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                系统设置
              </CardTitle>
              <CardDescription>管理系统的全局设置和配置</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="siteName">网站名称</Label>
                  <Input type="text" id="siteName" placeholder="小模型" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="siteDescription">网站描述</Label>
                  <Input type="text" id="siteDescription" placeholder="分享学习，提供C++训练营" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="adminEmail">管理员邮箱</Label>
                  <Input type="email" id="adminEmail" placeholder="admin@example.com" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button>保存设置</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

