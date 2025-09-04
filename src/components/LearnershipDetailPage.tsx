import { useParams, Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, Calendar, Award, DollarSign, Users, CheckCircle } from 'lucide-react';

export function LearnershipDetailPage() {
  const { programId } = useParams();

  const learnershipDetails = {
    'software-development': {
      title: 'Software Development Learnership',
      duration: '12 months',
      qualification: 'NQF Level 5',
      description: 'Comprehensive learnership combining theoretical knowledge with practical work experience in software development.',
      longDescription: 'Our Software Development Learnership is designed to provide you with a solid foundation in programming and software engineering principles while gaining real-world experience. You will work alongside experienced developers and contribute to actual projects, making you job-ready upon completion.',
      benefits: ['Monthly stipend', 'Workplace experience', 'Mentorship program', 'Job placement assistance'],
      curriculum: [
        'Programming Fundamentals (HTML, CSS, JavaScript)',
        'Backend Development (Node.js, Python)',
        'Database Design and Management',
        'Version Control with Git',
        'Agile Development Methodologies',
        'Software Testing and Quality Assurance',
        'Project Management Basics',
        'Professional Communication Skills'
      ],
      careerOutcomes: [
        'Junior Software Developer',
        'Web Developer',
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer'
      ],
      requirements: [
        'Matric Certificate or equivalent',
        'Basic computer literacy',
        'Strong problem-solving skills',
        'Passion for technology',
        'Ages 18-35'
      ]
    },
    'digital-marketing': {
      title: 'Digital Marketing Learnership',
      duration: '12 months',
      qualification: 'NQF Level 4',
      description: 'Hands-on learning experience in digital marketing with real client projects and industry exposure.',
      longDescription: 'This comprehensive digital marketing learnership provides practical experience in all aspects of modern digital marketing. From SEO to social media management, you will work on real campaigns while learning from industry experts.',
      benefits: ['Monthly stipend', 'Client project work', 'Industry certification', 'Portfolio development'],
      curriculum: [
        'Digital Marketing Fundamentals',
        'Search Engine Optimization (SEO)',
        'Social Media Marketing',
        'Content Marketing Strategy',
        'Pay-Per-Click Advertising (PPC)',
        'Email Marketing',
        'Analytics and Reporting',
        'Brand Management'
      ],
      careerOutcomes: [
        'Digital Marketing Specialist',
        'Social Media Manager',
        'SEO Specialist',
        'Content Marketing Manager',
        'PPC Campaign Manager'
      ],
      requirements: [
        'Matric Certificate or equivalent',
        'Good communication skills',
        'Creative thinking abilities',
        'Basic computer skills',
        'Ages 18-35'
      ]
    },
    'business-administration': {
      title: 'Business Administration Learnership',
      duration: '18 months',
      qualification: 'NQF Level 4',
      description: 'Develop essential business skills while gaining practical experience in a professional environment.',
      longDescription: 'Our Business Administration Learnership provides comprehensive training in all aspects of business operations. You will gain practical experience in administration, finance, human resources, and project management while working in a professional business environment.',
      benefits: ['Monthly stipend', 'Professional development', 'Networking opportunities', 'Career guidance'],
      curriculum: [
        'Business Communication',
        'Financial Management Basics',
        'Human Resources Management',
        'Project Management',
        'Customer Service Excellence',
        'Administrative Procedures',
        'Business Ethics and Law',
        'Leadership Development'
      ],
      careerOutcomes: [
        'Administrative Assistant',
        'Office Manager',
        'Customer Service Representative',
        'Junior Business Analyst',
        'Project Coordinator'
      ],
      requirements: [
        'Matric Certificate or equivalent',
        'Strong organizational skills',
        'Good communication abilities',
        'Professional attitude',
        'Ages 18-35'
      ]
    }
  };

  const program = learnershipDetails[programId as keyof typeof learnershipDetails];

  if (!program) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
          Program Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The requested learnership program could not be found.
        </p>
        <Button asChild>
          <Link to="/courses">Back to Courses</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-12">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Button variant="outline" asChild>
          <Link to="/courses" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
        </Button>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-b from-muted/20 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
              {program.title}
            </h1>
            <div className="flex justify-center gap-4 mb-6">
              <Badge variant="secondary" className="px-3 py-1">
                <Calendar className="w-4 h-4 mr-1" />
                {program.duration}
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Award className="w-4 h-4 mr-1" />
                {program.qualification}
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {program.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Curriculum */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "'Source Code Pro', monospace" }}>
                    What You'll Learn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {program.curriculum.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Career Outcomes */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "'Source Code Pro', monospace" }}>
                    Career Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Upon successful completion of this learnership, you'll be qualified for roles such as:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {program.careerOutcomes.map((career, index) => (
                      <Badge key={index} variant="outline">
                        {career}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "'Source Code Pro', monospace" }}>
                    Entry Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Program Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "'Source Code Pro', monospace" }}>
                    Program Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {program.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          {index === 0 && <DollarSign className="w-4 h-4 text-primary" />}
                          {index === 1 && <Users className="w-4 h-4 text-primary" />}
                          {index === 2 && <Award className="w-4 h-4 text-primary" />}
                          {index === 3 && <CheckCircle className="w-4 h-4 text-primary" />}
                        </div>
                        <span className="text-sm font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Application CTA */}
              <Card className="bg-primary/5">
                <CardHeader>
                  <CardTitle style={{ fontFamily: "'Source Code Pro', monospace" }}>
                    Ready to Apply?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Take the first step towards your new career. Applications are reviewed on a rolling basis.
                  </p>
                  <Button asChild className="w-full" size="lg">
                    <Link to="/apply">Apply Now</Link>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Next intake: March 2025
                  </p>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "'Source Code Pro', monospace" }}>
                    Questions?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Need more information about this program?
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}