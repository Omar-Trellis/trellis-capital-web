
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're an investor or homeowner, we're here to help you achieve your goals
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <Card className="bg-white shadow-2xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-gray-300 focus:border-blue-500 h-12 focus:ring-2 focus:ring-blue-400"
                        required
                      />
                      <Input
                        type="email"
                        inputMode="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="border-gray-300 focus:border-blue-500 h-12 focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>
                    <Input
                      type="tel"
                      inputMode="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-gray-300 focus:border-blue-500 h-12 focus:ring-2 focus:ring-blue-400"
                    />
                    <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                      <SelectTrigger className="border-gray-300 focus:border-blue-500 h-12">
                        <SelectValue placeholder="I am a..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="investor">Potential Investor</SelectItem>
                        <SelectItem value="seller">Homeowner Looking to Sell</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea
                      placeholder="Tell us about your situation or goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-gray-300 focus:border-blue-500 min-h-32 focus:ring-2 focus:ring-blue-400"
                      rows={4}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 text-lg h-14 transition-all duration-300 hover:shadow-xl hover:shadow-blue-400/25"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Company Info */}
            <AnimatedSection delay={200}>
              <div className="space-y-8">
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-600">Phone</p>
                          <a 
                            href="tel:1-800-873-5547" 
                            className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
                          >
                            1-800-TRELLIS
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <a 
                            href="mailto:info@trellisinvest.com" 
                            className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
                          >
                            info@trellisinvest.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-600">Address</p>
                          <p className="font-medium text-gray-900">Miami, Florida</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-600">Business Hours</p>
                          <p className="font-medium text-gray-900">Mon-Fri: 8AM-6PM EST</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-bold text-gray-900 mb-2">For Investors</h4>
                      <p className="text-sm text-gray-600 mb-4">Explore exclusive opportunities</p>
                      <Button 
                        variant="outline" 
                        className="border-yellow-400 text-yellow-700 hover:bg-yellow-400 hover:text-white w-full h-11"
                        onClick={() => window.location.href = '/investors'}
                      >
                        View Opportunities
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-bold text-gray-900 mb-2">For Sellers</h4>
                      <p className="text-sm text-gray-600 mb-4">Get your cash offer today</p>
                      <Button 
                        variant="outline" 
                        className="border-green-400 text-green-700 hover:bg-green-400 hover:text-white w-full h-11"
                        onClick={() => window.location.href = '/sellers'}
                      >
                        Get Cash Offer
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
