'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里应该添加实际的密码重置逻辑
    console.log('Password reset requested for:', email)
    setIsSubmitted(true)
  }

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">忘记密码</CardTitle>
          <CardDescription className="text-center">
            输入您的邮箱，我们将向您发送密码重置链接
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">邮箱</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button className="w-full mt-6" type="submit">发送重置链接</Button>
            </form>
          ) : (
            <div className="text-center">
              <p className="mb-4">重置链接已发送到您的邮箱。请检查您的收件箱并按照指示进行操作。</p>
              <Button className="w-full" onClick={() => setIsSubmitted(false)}>重新发送</Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/login" className="text-sm text-primary hover:underline inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回登录
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

