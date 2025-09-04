import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar, FileText, DollarSign, TrendingUp } from 'lucide-react';

export function CoursesPage() {
  const certificates = [
    {
      title: 'Digital Marketing Certificate',
      duration: '12 weeks',
      level: 'Intermediate',
      description: 'Comprehensive program covering SEO, social media marketing, content strategy, and analytics.',
      skills: ['SEO', 'Social Media', 'Content Marketing', 'Google Analytics'],
    },
    {
      title: 'Web Development Certificate',
      duration: '16 weeks',
      level: 'Beginner to Advanced',
      description: 'Full-stack development program covering modern web technologies and frameworks.',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Database Design'],
    },
    {
      title: 'Data Analytics Certificate',
      duration: '14 weeks',
      level: 'Intermediate',
      description: 'Learn to analyze data, create visualizations, and derive actionable insights.',
      skills: ['Excel', 'SQL', 'Python', 'Power BI', 'Statistical Analysis'],
    },
    {
      title: 'Project Management Certificate',
      duration: '10 weeks',
      level: 'Beginner',
      description: 'Industry-recognized project management methodologies and best practices.',
      skills: ['Agile', 'Scrum', 'Risk Management', 'Planning', 'Leadership'],
    },
  ];

  const learnerships = [
    {
      title: 'Software Development Learnership',
      duration: '12 months',
      qualification: 'NQF Level 5',
      description: 'Comprehensive learnership combining theoretical knowledge with practical work experience in software development.',
      benefits: ['Monthly stipend', 'Workplace experience', 'Mentorship program', 'Job placement assistance'],
    },
    {
      title: 'Digital Marketing Learnership',
      duration: '12 months',
      qualification: 'NQF Level 4',
      description: 'Hands-on learning experience in digital marketing with real client projects and industry exposure.',
      benefits: ['Monthly stipend', 'Client project work', 'Industry certification', 'Portfolio development'],
    },
    {
      title: 'Business Administration Learnership',
      duration: '18 months',
      qualification: 'NQF Level 4',
      description: 'Develop essential business skills while gaining practical experience in a professional environment.',
      benefits: ['Monthly stipend', 'Professional development', 'Networking opportunities', 'Career guidance'],
    },
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <section className="bg-gradient-to-b from-muted/20 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
            Courses & Training Programs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of certification programs and learnerships 
            designed to advance your career in the digital economy.
          </p>
        </div>
      </section>

      {/* Course Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="certificates" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="certificates">International Certificates</TabsTrigger>
              <TabsTrigger value="learnerships">Learnerships</TabsTrigger>
            </TabsList>

            {/* International Certificates */}
            <TabsContent value="certificates" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                  International Certificate Programs
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Our internationally recognized certificate programs are designed to provide you with 
                  industry-relevant skills and credentials that are valued by employers worldwide.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certificates.map((cert, index) => (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl" style={{ fontFamily: "'Source Code Pro', monospace" }}>{cert.title}</CardTitle>
                        <Badge variant="secondary">{cert.level}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>📅 {cert.duration}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-muted-foreground mb-4 flex-1">
                        {cert.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>Skills Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button asChild className="w-full">
                        <Link to="/apply">Apply Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Learnerships */}
            <TabsContent value="learnerships" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                  Learnership Programs
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Our learnership programs combine structured learning with practical work experience, 
                  providing you with a qualification and valuable industry exposure.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {learnerships.map((learnership, index) => (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl" style={{ fontFamily: "'Source Code Pro', monospace" }}>{learnership.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>📅 {learnership.duration}</span>
                        <Badge variant="secondary">{learnership.qualification}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-muted-foreground mb-4 flex-1">
                        {learnership.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>Program Benefits:</h4>
                        <ul className="space-y-1">
                          {learnership.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-sm text-muted-foreground flex items-center">
                              <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button asChild className="w-full">
                        <Link to={`/learnership/${learnership.title.toLowerCase().replace(/\s+/g, '-').replace('learnership', '').replace(/^-|-$/g, '')}`}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Enrollment Info */}
              <div className="bg-muted/20 rounded-xl p-8 mt-12">
                <h3 className="text-2xl font-medium text-primary mb-4 text-center" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                  Ready to Apply?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="flex justify-center mb-2">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <FileText className="w-6 h-6 text-primary stroke-2" />
                      </div>
                    </div>
                    <h4 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>Application Requirements</h4>
                    <p className="text-sm text-muted-foreground">
                      Valid ID, Matric certificate, and motivation letter required for all programs.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-center mb-2">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Calendar className="w-6 h-6 text-primary stroke-2" />
                      </div>
                    </div>
                    <h4 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>Application Periods</h4>
                    <p className="text-sm text-muted-foreground">
                      Applications open quarterly. Next intake: March 2025.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-center mb-2">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-primary stroke-2" />
                      </div>
                    </div>
                    <h4 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>Job Placement</h4>
                    <p className="text-sm text-muted-foreground">
                      85% of our learnership graduates secure employment within 6 months.
                    </p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Button asChild size="lg">
                    <Link to="/apply">Start Your Application</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}