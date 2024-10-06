import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 typing-effect">
          Welcome to ESG Helper Agent
        </h1>
        <p className="text-xl mb-8">
          Empowering sustainable decision-making with AI-driven ESG insights
        </p>
        <Button asChild>
          <Link href="/product">Start Your Free Trial</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          {
            title: 'ESG Report Analyzer',
            description: 'Quickly analyze and extract key insights from ESG reports.',
          },
          {
            title: 'ESG Chat with PDF',
            description: 'Upload and chat with your ESG documents for instant answers.',
          },
          {
            title: 'ESG Market Researcher',
            description: 'Stay updated with the latest ESG trends and market insights.',
          },
        ].map((feature, index) => (
          <Card key={index} className="glass-effect">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose ESG Helper?</h2>
        <p className="text-xl mb-8">
          Our AI-powered platform simplifies ESG analysis, saving you time and providing actionable insights.
        </p>
      </div>
    </div>
  );
}