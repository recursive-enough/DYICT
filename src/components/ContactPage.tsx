import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    enquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Message sent successfully! We will get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        enquiryType: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@digitalacademy.co.za',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+27 11 123 4567',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Innovation Street, Johannesburg',
      description: 'Come visit us'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+27 11 123 4567',
      description: 'Quick support and enquiries'
    }
  ];

  const enquiryTypes = [
    { value: 'general', label: 'General Enquiry' },
    { value: 'admissions', label: 'Admissions & Applications' },
    { value: 'courses', label: 'Course Information' },
    { value: 'fees', label: 'Fees & Payment' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'partnership', label: 'Business Partnership' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <section className="bg-gradient-to-b from-muted/20 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our programs? Ready to start your learning journey? 
            We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-medium text-primary mb-6" style={{ fontFamily: "'Source Code Pro', monospace" }}>Send us a Message</h2>
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "'Source Code Pro', monospace" }}>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="enquiryType">Enquiry Type *</Label>
                      <Select onValueChange={(value) => handleSelectChange('enquiryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select enquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {enquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-medium text-primary mb-6" style={{ fontFamily: "'Source Code Pro', monospace" }}>Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <IconComponent className="w-6 h-6 text-primary stroke-2" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-primary mb-1" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                              {info.title}
                            </h3>
                            <p className="text-foreground mb-1">
                              {info.value}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our programs and enrollment process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How do I apply for a program?
                </AccordionTrigger>
                <AccordionContent>
                  You can apply online through our website or visit our campus. 
                  Application requirements vary by program but typically include 
                  ID, educational certificates, and a motivation letter.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Are there financing options available?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer various financing options including payment plans, 
                  bursaries, and learnership programs with monthly stipends. 
                  Contact us to discuss what's available for your situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Do you offer online learning?
                </AccordionTrigger>
                <AccordionContent>
                  Many of our programs offer flexible online and hybrid learning 
                  options. Some practical components may require in-person attendance 
                  at our facilities or partner locations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  What support is available for job placement?
                </AccordionTrigger>
                <AccordionContent>
                  We provide comprehensive career support including CV writing assistance, 
                  interview preparation, and connections to our industry partner network. 
                  Our job placement rate is 85% within 6 months of graduation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  What are the entry requirements for courses?
                </AccordionTrigger>
                <AccordionContent>
                  Entry requirements vary by program. Generally, you need a Grade 12 
                  certificate or equivalent, valid South African ID, and basic computer 
                  literacy. Some advanced programs may have additional prerequisites.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  How long do the programs take to complete?
                </AccordionTrigger>
                <AccordionContent>
                  Certificate programs typically range from 10-16 weeks, while learnership 
                  programs are 12-18 months long. The duration depends on the specific 
                  program and whether you choose full-time or part-time study.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}