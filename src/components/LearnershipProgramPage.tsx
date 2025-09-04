import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar, Clock, Users, Award, BookOpen, Briefcase, ChevronLeft } from 'lucide-react';

export function LearnershipProgramPage() {
  const programDetails = {
    title: 'Software Development Learnership',
    duration: '12 months',
    qualification: 'NQF Level 5',
    description: 'Our Software Development Learnership is a comprehensive 12-month program that combines theoretical knowledge with practical work experience. This learnership is designed to equip you with industry-relevant skills in modern software development technologies while earning a recognized qualification.',
    nextIntake: 'March 2025',
    stipend: 'R3,500 - R5,000 per month',
    placement: '95% job placement rate',
  };

  const modules = [
    {
      phase: 'Foundation Phase (Months 1-3)',
      topics: [
        'Programming Fundamentals',
        'Introduction to Web Development',
        'Database Basics',
        'Version Control with Git',
        'Agile Methodologies'
      ]
    },
    {
      phase: 'Development Phase (Months 4-8)',
      topics: [
        'Frontend Development with React',
        'Backend Development with Node.js',
        'Full-Stack Application Development',
        'API Development and Integration',
        'Software Testing and Quality Assurance'
      ]
    },
    {
      phase: 'Specialization Phase (Months 9-12)',
      topics: [
        'Advanced Framework Technologies',
        'DevOps and Deployment',
        'Team Project Development',
        'Industry Placement',
        'Portfolio Development'
      ]
    }
  ];

  const requirements = [
    'South African citizen or permanent resident',
    'Age between 18-35 years',
    'Matric certificate (Grade 12) or equivalent',
    'Strong interest in technology and programming',
    'Basic computer literacy',
    'Unemployed or earning less than R5,000 per month'
  ];

  const benefits = [
    'Monthly stipend throughout the program',
    'Nationally recognized NQF Level 5 qualification',
    'Real workplace experience with industry partners',
    'Mentorship from experienced developers',
    'Job placement assistance upon completion',
    'Industry-relevant certification',
    'Portfolio development support',
    'Networking opportunities with tech professionals'
  ];

  return (
    <div className="py-12">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Button asChild variant="outline" size="sm">
          <Link to="/courses" className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            Back to Courses
          </Link>
        </Button>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-b from-muted/20 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">{programDetails.qualification}</Badge>
              <h1 className="text-4xl lg:text-5xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                {programDetails.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {programDetails.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/apply">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get More Info</Link>
                </Button>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium text-primary" style={{ fontFamily: "'Source Code Pro', monospace" }}>{programDetails.duration}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Next Intake</p>
                      <p className="font-medium text-primary" style={{ fontFamily: "'Source Code Pro', monospace" }}>{programDetails.nextIntake}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Monthly Stipend</p>
                      <p className="font-medium text-primary" style={{ fontFamily: "'Source Code Pro', monospace" }}>{programDetails.stipend}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Job Placement</p>
                      <p className="font-medium text-primary" style={{ fontFamily: "'Source Code Pro', monospace" }}>{programDetails.placement}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
            </TabsList>

            {/* Curriculum */}
            <TabsContent value="curriculum" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                  Program Curriculum
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Our structured curriculum is designed to take you from beginner to industry-ready developer 
                  through progressive learning phases.
                </p>
              </div>

              <div className="space-y-8">
                {modules.map((module, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                        <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        {module.phase}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center gap-2 p-3 bg-muted/20">
                            <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Requirements */}
            <TabsContent value="requirements" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                  Entry Requirements
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  To be eligible for our Software Development Learnership, candidates must meet 
                  the following requirements.
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">{requirement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="bg-muted/20 p-8 text-center">
                <h3 className="text-xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                  Application Process
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                  <div>
                    <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center text-xl font-medium mx-auto mb-3">1</div>
                    <h4 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>Submit Application</h4>
                    <p className="text-sm text-muted-foreground">Complete online application form</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center text-xl font-medium mx-auto mb-3">2</div>
                    <h4 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>Assessment</h4>
                    <p className="text-sm text-muted-foreground">Complete aptitude and technical assessment</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center text-xl font-medium mx-auto mb-3">3</div>
                    <h4 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>Interview</h4>
                    <p className="text-sm text-muted-foreground">Interview with our admissions team</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center text-xl font-medium mx-auto mb-3">4</div>
                    <h4 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>Enrollment</h4>
                    <p className="text-sm text-muted-foreground">Successful candidates begin program</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Benefits */}
            <TabsContent value="benefits" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                  Program Benefits
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Our learnership program provides comprehensive support and benefits to ensure 
                  your success in the software development industry.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Award className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-muted-foreground">{benefit}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <h3 className="text-2xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                  Ready to Start Your Journey?
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Take the first step towards a rewarding career in software development. 
                  Apply now and transform your future with Digital Youth ICT Academy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/apply">Apply Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Contact Admissions</Link>
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