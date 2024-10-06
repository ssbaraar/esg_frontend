import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About ESG Helper</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              At ESG Helper, we're committed to empowering businesses and investors with AI-driven
              insights for sustainable decision-making. Our goal is to simplify ESG analysis and
              promote responsible business practices.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Our Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We leverage cutting-edge AI technology to analyze ESG reports, provide real-time
              market insights, and offer interactive document analysis. Our user-friendly platform
              makes ESG information accessible and actionable for all.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-effect mb-12">
        <CardHeader>
          <CardTitle>Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            ESG Helper is built by a diverse team of experts in AI, sustainability, and finance.
            Our combined experience allows us to deliver innovative solutions that address the
            complex challenges of ESG analysis and reporting.
          </p>
        </CardContent>
      </Card>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us in Shaping a Sustainable Future</h2>
        <p className="text-xl">
          Discover how ESG Helper can transform your approach to sustainability and responsible
          investing. Start your journey with us today.
        </p>
      </div>
    </div>
  );
}