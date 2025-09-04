import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { FileText, Monitor, Target } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ApplicationsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    idNumber: '',
    dateOfBirth: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    program: '',
    educationLevel: '',
    employmentStatus: '',
    hearAboutUs: '',
    agreeTerms: false,
    agreeMarketing: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast.error('Please agree to the terms and conditions to proceed.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Application submitted successfully! We will contact you within 48 hours.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        idNumber: '',
        dateOfBirth: '',
        address: '',
        city: '',
        province: '',
        postalCode: '',
        program: '',
        educationLevel: '',
        employmentStatus: '',
        hearAboutUs: '',
        agreeTerms: false,
        agreeMarketing: false,
      });
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const programs = [
    { value: 'digital-marketing', label: 'Digital Marketing Certificate' },
    { value: 'web-development', label: 'Web Development Certificate' },
    { value: 'data-analytics', label: 'Data Analytics Certificate' },
    { value: 'project-management', label: 'Project Management Certificate' },
    { value: 'software-development', label: 'Software Development Learnership' },
    { value: 'digital-marketing-learnership', label: 'Digital Marketing Learnership' },
    { value: 'business-administration', label: 'Business Administration Learnership' },
  ];

  const educationLevels = [
    { value: 'grade-10', label: 'Grade 10 or equivalent' },
    { value: 'grade-11', label: 'Grade 11 or equivalent' },
    { value: 'grade-12', label: 'Grade 12 / Matric' },
    { value: 'certificate', label: 'Post-school certificate' },
    { value: 'diploma', label: 'Diploma' },
    { value: 'degree', label: 'Degree' },
    { value: 'other', label: 'Other' },
  ];

  const employmentStatuses = [
    { value: 'unemployed', label: 'Unemployed' },
    { value: 'student', label: 'Student' },
    { value: 'part-time', label: 'Part-time employed' },
    { value: 'full-time', label: 'Full-time employed' },
    { value: 'self-employed', label: 'Self-employed' },
    { value: 'other', label: 'Other' },
  ];

  const provinces = [
    { value: 'gauteng', label: 'Gauteng' },
    { value: 'western-cape', label: 'Western Cape' },
    { value: 'kwazulu-natal', label: 'KwaZulu-Natal' },
    { value: 'eastern-cape', label: 'Eastern Cape' },
    { value: 'free-state', label: 'Free State' },
    { value: 'limpopo', label: 'Limpopo' },
    { value: 'mpumalanga', label: 'Mpumalanga' },
    { value: 'north-west', label: 'North West' },
    { value: 'northern-cape', label: 'Northern Cape' },
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <section className="bg-gradient-to-b from-muted/20 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4">Digital Youth ICT Academy</Badge>
          <h1 className="text-4xl lg:text-5xl font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
            Apply Now
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards transforming your career. Fill out the application form below and join our next intake.
          </p>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-medium text-primary mb-8 text-center" style={{ fontFamily: "'Source Code Pro', monospace" }}>
              Application Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <FileText className="w-8 h-8 text-primary stroke-2" />
                    </div>
                  </div>
                  <h3 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    Valid South African ID, highest educational certificate, and CV
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <Monitor className="w-8 h-8 text-primary stroke-2" />
                    </div>
                  </div>
                  <h3 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>Basic Requirements</h3>
                  <p className="text-sm text-muted-foreground">
                    Access to computer/smartphone and reliable internet connection
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <Target className="w-8 h-8 text-primary stroke-2" />
                    </div>
                  </div>
                  <h3 className="font-medium text-primary mb-2" style={{ fontFamily: "'Source Code Pro', monospace" }}>Commitment</h3>
                  <p className="text-sm text-muted-foreground">
                    Dedication to complete the program and achieve your goals
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center" style={{ fontFamily: "'Source Code Pro', monospace" }}>Application Form</CardTitle>
              <p className="text-muted-foreground text-center">
                Please fill out all required fields marked with *
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
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
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idNumber">South African ID Number *</Label>
                      <Input
                        id="idNumber"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <h3 className="text-lg font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>Address Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="province">Province *</Label>
                      <Select onValueChange={(value) => handleSelectChange('province', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select province" />
                        </SelectTrigger>
                        <SelectContent>
                          {provinces.map((province) => (
                            <SelectItem key={province.value} value={province.value}>
                              {province.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code *</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Program Information */}
                <div>
                  <h3 className="text-lg font-medium text-primary mb-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>Program Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="program">Preferred Program *</Label>
                      <Select onValueChange={(value) => handleSelectChange('program', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                        <SelectContent>
                          {programs.map((program) => (
                            <SelectItem key={program.value} value={program.value}>
                              {program.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="educationLevel">Highest Education Level *</Label>
                      <Select onValueChange={(value) => handleSelectChange('educationLevel', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          {educationLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employmentStatus">Current Employment Status *</Label>
                      <Select onValueChange={(value) => handleSelectChange('employmentStatus', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select employment status" />
                        </SelectTrigger>
                        <SelectContent>
                          {employmentStatuses.map((status) => (
                            <SelectItem key={status.value} value={status.value}>
                              {status.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                      <Input
                        id="hearAboutUs"
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleInputChange}
                        placeholder="e.g., Social media, friend, website"
                      />
                    </div>
                  </div>
                </div>



                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => handleCheckboxChange('agreeTerms', checked as boolean)}
                    />
                    <Label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                      I agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a> and 
                      confirm that the information provided is accurate and complete. *
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeMarketing"
                      checked={formData.agreeMarketing}
                      onCheckedChange={(checked) => handleCheckboxChange('agreeMarketing', checked as boolean)}
                    />
                    <Label htmlFor="agreeMarketing" className="text-sm leading-relaxed">
                      I agree to receive marketing communications about programs and opportunities.
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}