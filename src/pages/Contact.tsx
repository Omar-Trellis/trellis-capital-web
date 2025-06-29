
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Connect</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're an investor looking for opportunities or a homeowner needing to sell quickly, 
            we're here to help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="border-gray-300 focus:border-yellow-500"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="border-gray-300 focus:border-yellow-500"
                      required
                    />
                  </div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="border-gray-300 focus:border-yellow-500"
                  />
                  <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                    <SelectTrigger className="border-gray-300 focus:border-yellow-500">
                      <SelectValue placeholder="I am a..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="investor">Potential Investor</SelectItem>
                      <SelectItem value="seller">Homeowner Looking to Sell</SelectItem>
                      <SelectItem value="partner">Industry Partner</SelectItem>
                      <SelectItem value="media">Media/Press</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="How can we help you? *"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="border-gray-300 focus:border-yellow-500 min-h-[120px]"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Company Information */}
            <div className="space-y-8">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Our Office</h3>
                        <p className="text-gray-600">
                          123 Business Blvd, Suite 100<br />
                          Miami, FL 33101
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">
                          <span className="font-medium">Sellers:</span> 1-800-TRELLIS<br />
                          <span className="font-medium">Investors:</span> (305) 555-0199
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">
                          <span className="font-medium">General:</span> info@trellisinvest.com<br />
                          <span className="font-medium">Investors:</span> investors@trellisinvest.com<br />
                          <span className="font-medium">Sellers:</span> sellers@trellisinvest.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 8:00 AM - 7:00 PM<br />
                          Saturday: 9:00 AM - 5:00 PM<br />
                          Sunday: Emergency calls only
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Action Cards */}
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Need to Sell Your House Fast?</h3>
                  <p className="mb-4 opacity-90">Get a cash offer in 24 hours - no obligations.</p>
                  <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                    Get Cash Offer
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Interested in Investing?</h3>
                  <p className="mb-4 opacity-90">Join our exclusive investor network today.</p>
                  <Button variant="secondary" className="bg-black text-yellow-400 hover:bg-gray-800">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-2">Visit Our Miami Office</h3>
                <p className="opacity-90">Interactive map would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're buying or selling, we're here to make the process smooth and profitable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              I Want to Sell My House
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
              I Want to Invest
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
