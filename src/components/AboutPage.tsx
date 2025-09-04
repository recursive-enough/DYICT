import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Target, Handshake, Sparkles, Lightbulb, Globe, Rocket } from 'lucide-react';
import affiliatePartners from 'figma:asset/a014fe652acde37f40d0d9ecbfb7c1cc435c8edc.png';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We are committed to delivering high-quality education and training that meets international standards.'
    },
    {
      icon: Handshake,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices in all our interactions.'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'We continuously evolve our programs and teaching methods to stay current with industry trends.'
    },
    {
      icon: Lightbulb,
      title: 'Empowerment',
      description: 'We believe in empowering individuals with the skills and knowledge needed to succeed in their careers.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'We strive to make quality education accessible to learners from diverse backgrounds and circumstances.'
    },
    {
      icon: Rocket,
      title: 'Impact',
      description: 'We measure our success by the positive impact we create in the lives of our students and communities.'
    }
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <section className="bg-gradient-to-b from-muted/20 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
            About Digital Youth ICT Academy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our story, mission, and the values that drive our commitment to 
            transforming lives through quality education.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/10">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Target className="w-8 h-8 text-primary stroke-2" />
                  </div>
                </div>
                <h2 className="text-2xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>Our Mission</h2>
                <p className="text-muted-foreground">
                  To provide world-class, accessible, and practical education that empowers 
                  individuals to succeed in the digital economy. We are committed to bridging 
                  the skills gap between academic learning and industry requirements through 
                  innovative training programs, expert instruction, and comprehensive support.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="p-8 bg-gradient-to-br from-accent/10 to-secondary/10">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Sparkles className="w-8 h-8 text-primary stroke-2" />
                  </div>
                </div>
                <h2 className="text-2xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>Our Vision</h2>
                <p className="text-muted-foreground">
                  To be the leading digital academy in Africa, recognized for producing 
                  highly skilled, industry-ready professionals who drive innovation and 
                  economic growth. We envision a future where every learner has access 
                  to quality education that transforms their life and career prospects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>Our Core Values</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              These values guide everything we do and shape the culture of learning 
              and growth we create for our students and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-xl">
                        <IconComponent className="w-8 h-8 text-primary stroke-2" />
                      </div>
                    </div>
                    <h3 className="text-lg font-medium text-primary mb-3" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Affiliate Partners */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>Our Affiliate Partners</h2>
            <p className="text-muted-foreground">
              Partnering with world-class educational institutions to deliver excellence
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-lg">
              <img 
                src={affiliatePartners}
                alt="Our affiliate partners - Maharishi Invincibility Institute and AfrikaTikkun Services"
                className="max-w-full h-auto"
                style={{ 
                  backgroundColor: 'transparent'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>Our Impact</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Numbers that reflect our commitment to transforming lives through education.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-medium text-primary mb-2">5,000+</div>
              <p className="text-muted-foreground">Students Graduated</p>
            </div>
            <div>
              <div className="text-4xl font-medium text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Job Placement Rate</p>
            </div>
            <div>
              <div className="text-4xl font-medium text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Industry Partners</p>
            </div>
            <div>
              <div className="text-4xl font-medium text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Programs Offered</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}