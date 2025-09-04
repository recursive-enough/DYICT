import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Users, Briefcase, Smartphone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import partnerLogo1 from 'figma:asset/9e1d96c6f8ccdd8e9356438f1f4513fbbf3745da.png';
import partnerLogo2 from 'figma:asset/9cf232c0fbe9f692afe29351eaa8b552f666f4b6.png';
import partnerLogo3 from 'figma:asset/e4c43e72316054a08c7aa82c3d0b8885be2b297c.png';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/20 to-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-medium text-primary mb-6" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                Building people that build things!
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                A world-class impact driven digital academy dedicated to transforming lives through 
                quality education and industry-relevant training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg">
                  <Link to="/apply">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/courses">View Courses</Link>
                </Button>
              </div>
            </div>
            
            {/* Education Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1726831662572-ea2bb962dc4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsaW5lJTIwaWxsdXN0cmF0aW9uJTIwc3R1ZGVudHMlMjBsZWFybmluZ3xlbnwxfHx8fDE3NTY4OTI5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Education line illustration showing digital learning" 
                  className="max-w-full h-auto shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-16 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
              Official Partners
            </h2>
            <p className="text-muted-foreground">
              Trusted by leading technology companies worldwide
            </p>
          </div>
          <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
            <img 
              src={partnerLogo1}
              alt="Partner logo 1"
              className="h-12 md:h-16 w-auto brightness-0 invert hover:brightness-75 transition-all duration-300"
            />
            <img 
              src={partnerLogo2}
              alt="Partner logo 2"
              className="h-12 md:h-16 w-auto brightness-0 invert hover:brightness-75 transition-all duration-300"
            />
            <img 
              src={partnerLogo3}
              alt="Partner logo 3"
              className="h-12 md:h-16 w-auto brightness-0 invert hover:brightness-75 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
              Why Choose Digital Youth ICT Academy?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive training programs that bridge the gap between 
              academic learning and industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10">
                  <GraduationCap className="w-8 h-8 text-primary stroke-2" />
                </div>
              </div>
              <h3 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                Industry-Relevant Curriculum
              </h3>
              <p className="text-muted-foreground text-sm">
                Courses designed with input from industry professionals to ensure 
                you learn the most current and applicable skills.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10">
                  <Users className="w-8 h-8 text-primary stroke-2" />
                </div>
              </div>
              <h3 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                Expert Instructors
              </h3>
              <p className="text-muted-foreground text-sm">
                Learn from experienced professionals who bring real-world 
                expertise and practical insights to the classroom.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10">
                  <Briefcase className="w-8 h-8 text-primary stroke-2" />
                </div>
              </div>
              <h3 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                Job Placement Support
              </h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive career support including job placement assistance 
                and industry connections to help launch your career.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10">
                  <Smartphone className="w-8 h-8 text-primary stroke-2" />
                </div>
              </div>
              <h3 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                Flexible Learning
              </h3>
              <p className="text-muted-foreground text-sm">
                Online and hybrid learning options that fit your schedule 
                while maintaining high educational standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
              Our Training Programs
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Choose from international certificates and learnerships designed 
              to advance your career in the digital economy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* International Certificates */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10">
                    <GraduationCap className="w-10 h-10 text-primary stroke-2" />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                  International Certificate Programs
                </h3>
                <p className="text-muted-foreground mb-6">
                  Globally recognized certifications in digital marketing, web development, 
                  data analytics, and project management. Perfect for professionals looking 
                  to upskill or change careers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-primary mr-2"></span>
                    Digital Marketing Certificate
                  </li>
                  <li className="text-sm text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-primary mr-2"></span>
                    Web Development Certificate
                  </li>
                  <li className="text-sm text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-primary mr-2"></span>
                    Data Analytics Certificate
                  </li>
                  <li className="text-sm text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-primary mr-2"></span>
                    Project Management Certificate
                  </li>
                </ul>
                <Button asChild>
                  <Link to="/courses">View Courses</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Learnerships */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10">
                    <Briefcase className="w-10 h-10 text-primary stroke-2" />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                  Learnership Programs
                </h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive programs that combine theoretical learning with 
                  practical work experience. Includes monthly stipends and job 
                  placement assistance upon completion.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-primary mr-2"></span>
                    Software Development Learnership
                  </li>
                  <li className="text-sm text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-primary mr-2"></span>
                    Digital Marketing Learnership
                  </li>
                  <li className="text-sm text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-primary mr-2"></span>
                    Business Administration Learnership
                  </li>
                </ul>
                <Button asChild>
                  <Link to="/apply">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-medium text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Job Placement Rate</p>
            </div>
            <div>
              <div className="text-4xl font-medium text-primary mb-2">5,000+</div>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div>
              <div className="text-4xl font-medium text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Industry Partners</p>
            </div>
    </div>
  );
}
