import { useState } from 'react';
import { Phone, CheckCircle, Clock, DollarSign, Home, Heart, Users, Award, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useParallax } from '@/hooks/useParallax';
import { LoadingButton } from '@/components/LoadingButton';
import { SuccessModal } from '@/components/SuccessModal';
import { toast } from "sonner";
import { useCountUpAnimation } from '@/hooks/useCountUpAnimation';

const Counter = ({ to, prefix = '', suffix = '', decimals = 0 }: { to: number, prefix?: string, suffix?: string, decimals?: number }) => {
  const ref = useCountUpAnimation({ to, duration: 2 });
  return (
    <span className="inline-block" aria-live="polite" aria-atomic="true">
      {prefix}<span ref={ref} />{suffix}
    </span>
  );
};

const Sellers = () => {
  const [formData, setFormData] = useState({
    address: '',
    name: '',
    phone: '',
    email: '',
    timeline: '',
    condition: ''
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { offset } = useParallax(0.2);

  // Counter animations for statistics
  const customerRating = 4.9;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.address.trim()) newErrors.address = 'Property address is required';
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clear form and show success
      setFormData({
        address: '',
        name: '',
        phone: '',
        email: '',
        timeline: '',
        condition: ''
      });
      setShowSuccess(true);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const scenarios = [
    { icon: Clock, title: 'Facing Foreclosure', description: 'Stop the process quickly and privately' },
    { icon: Heart, title: 'Inherited Property', description: 'Turn memories into immediate cash' },
    { icon: Home, title: 'Major Repairs Needed', description: 'Sell as-is without costly fixes' },
    { icon: Users, title: 'Quick Relocation', description: 'Fast sale for job or family moves' },
  ];

  const promises = [
    { icon: DollarSign, title: 'Fair Cash Offers', description: 'Competitive prices based on market value' },
    { icon: CheckCircle, title: 'No Hidden Fees', description: 'What we offer is what you get' },
    { icon: Clock, title: 'Fast Closing', description: 'Close in as little as 7 days' },
    { icon: Home, title: 'Buy As-Is', description: 'No repairs or cleaning required' },
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      location: 'Tampa, FL',
      rating: 5,
      text: 'Trellis helped me avoid foreclosure. They closed in 10 days and treated me with respect throughout the process.'
    },
    {
      name: 'John Patterson',
      location: 'Miami, FL', 
      rating: 5,
      text: 'Inherited my mother\'s house and needed to sell quickly. Fair offer, no hassles, and they handled everything.'
    },
    {
      name: 'Sarah Chen',
      location: 'Orlando, FL',
      rating: 5,
      text: 'Needed to relocate for work. Other buyers fell through but Trellis closed exactly on time as promised.'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you close?',
      answer: 'We can close in as little as 7 days, though most sellers prefer 14-30 days to coordinate their move.'
    },
    {
      question: 'Do you really buy houses as-is?',
      answer: 'Yes, we purchase homes in any condition. No repairs, cleaning, or staging required.'
    },
    {
      question: 'Are there any fees or commissions?',
      answer: 'No hidden fees. We handle all closing costs and there are no real estate commissions.'
    },
    {
      question: 'How do you determine your offer?',
      answer: 'We analyze recent comparable sales, property condition, and current market conditions to provide a fair cash offer.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section with Background Image */}
      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Beautiful Florida home"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-green-800/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-blue-50"></div>
        </div>
        
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-green-100/30"
          style={{ transform: `translateY(${offset}px)` }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get a Fair Cash Offer for Your Florida Home in 24 Hours
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                No repairs needed. No agent fees. Close in as little as 7 days.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <Phone className="w-6 h-6 text-green-400" />
                <div>
                  <p className="text-sm text-blue-200">Call Now for Immediate Help</p>
                  <a 
                    href="tel:1-800-873-5547" 
                    className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors"
                  >
                    1-800-TRELLIS
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-blue-100">A+ BBB Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-blue-100">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-blue-100">Local Florida Company</span>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get Your Cash Offer</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Property Address *"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className={`border-gray-300 focus:border-green-500 h-12 focus:ring-2 focus:ring-green-400 focus:shadow-lg focus:shadow-green-400/20 transition-all ${errors.address ? 'border-red-500' : ''}`}
                        required
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className={`border-gray-300 focus:border-green-500 h-12 focus:ring-2 focus:ring-green-400 focus:shadow-lg focus:shadow-green-400/20 transition-all ${errors.name ? 'border-red-500' : ''}`}
                          required
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <Input
                          type="tel"
                          inputMode="tel"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className={`border-gray-300 focus:border-green-500 h-12 focus:ring-2 focus:ring-green-400 focus:shadow-lg focus:shadow-green-400/20 transition-all ${errors.phone ? 'border-red-500' : ''}`}
                          required
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                    <div>
                      <Input
                        type="email"
                        inputMode="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`border-gray-300 focus:border-green-500 h-12 focus:ring-2 focus:ring-green-400 focus:shadow-lg focus:shadow-green-400/20 transition-all ${errors.email ? 'border-red-500' : ''}`}
                        required
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                        <SelectTrigger className="border-gray-300 focus:border-green-500 h-12">
                          <SelectValue placeholder="When do you need to sell?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">As soon as possible</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="3-months">Within 3 months</SelectItem>
                          <SelectItem value="flexible">I'm flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={formData.condition} onValueChange={(value) => setFormData({...formData, condition: value})}>
                        <SelectTrigger className="border-gray-300 focus:border-green-500 h-12">
                          <SelectValue placeholder="Property condition?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                          <SelectItem value="needs-work">Needs work</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <LoadingButton 
                      type="submit" 
                      loading={loading}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-lg h-14 transition-all duration-300 hover:shadow-xl hover:shadow-green-400/25"
                    >
                      Get My Cash Offer
                    </LoadingButton>
                    <p className="text-xs text-gray-500 text-center">No obligation. Your information is secure.</p>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">We Understand Your Situation</h2>
            <p className="text-xl text-gray-600">Life happens. We're here to help with compassionate, fair solutions.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scenarios.map((scenario, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <scenario.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{scenario.title}</h3>
                    <p className="text-gray-600 text-sm">{scenario.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={400} className="text-center mt-12">
            <p className="text-lg text-gray-700 font-medium">No judgment, just solutions</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Simple, Stress-Free Way to Sell</h2>
            <p className="text-xl text-gray-600">Our promise to you, guaranteed</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {promises.map((promise, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <promise.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{promise.title}</h3>
                    <p className="text-gray-600 text-sm">{promise.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sell Your Home in 3 Easy Steps</h2>
            <p className="text-xl text-gray-600">Simple process, guaranteed results</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Submit Property Info', subtitle: '2 minutes', description: 'Tell us about your property using our simple form' },
              { step: '2', title: 'Receive Cash Offer', subtitle: '24 hours', description: 'Get a fair, no-obligation offer within one business day' },
              { step: '3', title: 'Pick Closing Date', subtitle: '7+ days', description: 'Choose when works best for you - we\'re flexible' }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-green-600 font-medium mb-2">({item.subtitle})</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Trellis Capital Group?</h2>
            <p className="text-xl text-gray-600">Compare your options</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Factor</th>
                    <th className="px-6 py-4 text-center">Trellis Capital</th>
                    <th className="px-6 py-4 text-center">Real Estate Agent</th>
                    <th className="px-6 py-4 text-center">Other Cash Buyers</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { factor: 'Closing Speed', us: '7-30 days', agent: '60-90 days', others: '14-45 days' },
                    { factor: 'Fees/Commissions', us: 'None', agent: '6-8%', others: 'Varies' },
                    { factor: 'Repairs Required', us: 'None', agent: 'Usually', others: 'Sometimes' },
                    { factor: 'Closing Certainty', us: 'Guaranteed', agent: '50-70%', others: '70-80%' }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{row.factor}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="font-medium text-green-600">{row.us}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.agent}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Proof with Animated Counters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Florida Homeowners</h2>
            <p className="text-xl text-gray-600">Our track record speaks for itself</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2"><Counter to={500} suffix="+" /></div>
                <div className="text-gray-600">Homes Purchased</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2"><Counter to={120} prefix="$" suffix="M+" /></div>
                <div className="text-gray-600">Total Invested</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2"><Counter to={12} /></div>
                <div className="text-gray-600">Average Days to Close</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2"><Counter to={customerRating} decimals={1} suffix="/5" /></div>
                <div className="text-gray-600">Customer Rating</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Sellers Say</h2>
            <p className="text-xl text-gray-600">Real stories from real homeowners</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="bg-white shadow-lg border-0 h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know</p>
          </AnimatedSection>
          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-green-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your No-Obligation Cash Offer</h2>
            <p className="text-xl mb-8">We're here to help you move forward with confidence</p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="w-8 h-8" />
                <div>
                  <p className="text-sm opacity-90">Call us now</p>
                  <a 
                    href="tel:1-800-873-5547" 
                    className="text-2xl font-bold hover:text-yellow-200 transition-colors"
                  >
                    1-800-TRELLIS
                  </a>
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg font-medium">or</p>
              </div>
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 h-14 w-full md:w-auto transition-all duration-300 hover:shadow-xl">
                Get Online Offer
              </Button>
            </div>
            <p className="text-lg opacity-90">We're here to help, not pressure you</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Thank You!"
        message="We've received your information and will contact you within 24 hours with a fair cash offer."
        nextSteps={[
          "We'll review your property details",
          "Our team will prepare a competitive cash offer",
          "You'll receive a call within 24 hours",
          "We can close in as little as 7 days"
        ]}
      />
    </div>
  );
};

export default Sellers;
