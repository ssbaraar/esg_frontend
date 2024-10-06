"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Product() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">ESG Helper Products</h1>

      <Tabs defaultValue="analyzer" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="analyzer">ESG Report Analyzer</TabsTrigger>
          <TabsTrigger value="chat">ESG Chat with PDF</TabsTrigger>
          <TabsTrigger value="researcher">ESG Market Researcher</TabsTrigger>
        </TabsList>
        <TabsContent value="analyzer">
          <Card>
            <CardHeader>
              <CardTitle>ESG Report Analyzer</CardTitle>
              <CardDescription>Upload your ESG report for instant analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="esg-report">Upload ESG Report</Label>
                  <Input id="esg-report" type="file" accept=".pdf,.docx,.txt" />
                </div>
                <Button>Analyze Report</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="chat">
          <Card>
            <CardHeader>
              <CardTitle>ESG Chat with PDF</CardTitle>
              <CardDescription>Upload your document and start chatting</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="chat-document">Upload Document</Label>
                  <Input
                    id="chat-document"
                    type="file"
                    accept=".pdf,.docx,.txt"
                    onChange={handleFileChange}
                  />
                </div>
                {file && (
                  <div>
                    <p>Selected file: {file.name}</p>
                    <Button className="mt-2">Start Chat</Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="researcher">
          <Card>
            <CardHeader>
              <CardTitle>ESG Market Researcher</CardTitle>
              <CardDescription>Get the latest ESG market insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder="Enter your ESG research query" />
                <Button>Search</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}