import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  Menu, 
  X,
  Youtube, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from 'lucide-react';
import logoImage from 'figma:asset/ac71f956cdcc30a14012662418a8ff60779f9368.png';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses & Training', href: '/courses' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'TikTok', href: '#', icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ) },
    { name: 'Instagram', href: '#', icon: Instagram },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img 
                  src={logoImage} 
                  alt="Digital Youth ICT Academy" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm transition-colors hover:text-primary ${
                      location.pathname === item.href
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild size="sm">
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">
                  {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                </span>
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-2" />
                ) : (
                  <Menu className="w-6 h-6 stroke-2" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden border-t border-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-sm transition-colors ${
                      location.pathname === item.href
                        ? 'text-primary bg-accent'
                        : 'text-muted-foreground hover:text-primary hover:bg-accent'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <Button asChild size="sm" className="w-full">
                    <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>Apply Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-primary mb-4">Digital Youth ICT Academy</h3>
              <p className="text-muted-foreground mb-4">
                A world-class impact driven digital academy dedicated to building people that build things.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5 stroke-2" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/apply"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Apply Now
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-primary mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>info@digitalacademy.co.za</p>
                <p>+27 11 123 4567</p>
                <p>123 Innovation Street<br />Johannesburg, 2000</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Digital Youth ICT Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}