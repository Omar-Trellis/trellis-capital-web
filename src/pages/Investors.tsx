import { useState } from 'react';
import { ChevronDown, TrendingUp, Users, Zap, Play, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useParallax } from '@/hooks/useParallax';
const Investors = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentRange: '',
    accredited: ''
  });
  const {
    offset
  } = useParallax(0.3);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Investor form submitted:', formData);
    // Handle form submission
  };
  const teamMembers = [{
    name: 'Jonathan Paz',
    role: 'CEO & Founder',
    expertise: 'Finance & Strategy',
    bio: '15+ years in investment banking and real estate finance'
  }, {
    name: 'Robert Cullen',
    role: 'COO',
    expertise: 'Operations Excellence',
    bio: 'Former operations director at Fortune 500 real estate firm'
  }, {
    name: 'Juan Del Sol',
    role: 'CRO',
    expertise: 'Acquisitions',
    bio: 'Specialist in distressed property identification and negotiation'
  }, {
    name: 'Omar Magdy',
    role: 'CTO',
    expertise: 'AI Architecture',
    bio: 'Former Google engineer, machine learning expert'
  }, {
    name: 'Alexei Semenov',
    role: 'Strategic Advisor',
    expertise: 'Investment Strategy',
    bio: 'NHL veteran turned successful real estate investor'
  }];
  const faqs = [{
    question: 'What is the minimum investment amount?',
    answer: 'Our minimum investment starts at $50,000 for accredited investors, with opportunities ranging up to $500,000+ for larger deals.'
  }, {
    question: 'What returns can I expect?',
    answer: 'Our target is 35-50% ROI within 6-12 months per project. Past performance does not guarantee future results.'
  }, {
    question: 'How are deals structured?',
    answer: 'We offer various structures including debt investments with fixed returns and equity partnerships with profit sharing.'
  }, {
    question: 'What are the risks involved?',
    answer: 'Real estate investments carry inherent risks including market fluctuations, construction delays, and liquidity constraints. We provide detailed risk assessments for each opportunity.'
  }];
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section with Parallax */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-green-400/10" style={{
        transform: `translateY(${offset}px)`
      }}></div>
        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full mb-6">
              <Zap className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium text-yellow-400">Coming Soon: AI Underwriting Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-green-200 bg-clip-text text-transparent">
              Get Early Access to Florida's Most Profitable Fix & Flip Deals
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto">
              Join elite investors using our proprietary AI to identify 40%+ ROI opportunities in minutes, not months
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200} className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Full Name *" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} className="bg-white/15 border-white/20 text-white placeholder:text-gray-300 h-12 focus:ring-2 focus:ring-yellow-400 focus:bg-white/20" required />
                    <Input type="email" inputMode="email" placeholder="Email Address *" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} className="bg-white/15 border-white/20 text-white placeholder:text-gray-300 h-12 focus:ring-2 focus:ring-yellow-400 focus:bg-white/20" required />
                  </div>
                  <Input type="tel" inputMode="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({
                  ...formData,
                  phone: e.target.value
                })} className="bg-white/15 border-white/20 text-white placeholder:text-gray-300 h-12 focus:ring-2 focus:ring-yellow-400 focus:bg-white/20" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select value={formData.investmentRange} onValueChange={value => setFormData({
                    ...formData,
                    investmentRange: value
                  })}>
                      <SelectTrigger className="bg-white/15 border-white/20 text-white h-12 focus:ring-2 focus:ring-yellow-400 focus:bg-white/20">
                        <SelectValue placeholder="Investment Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                        <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                        <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                        <SelectItem value="500k+">$500K+</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={formData.accredited} onValueChange={value => setFormData({
                    ...formData,
                    accredited: value
                  })}>
                      <SelectTrigger className="bg-white/15 border-white/20 text-white h-12 focus:ring-2 focus:ring-yellow-400 focus:bg-white/20">
                        <SelectValue placeholder="Accredited Investor?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-4 text-lg h-14 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/25">
                    Get Exclusive Access
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Hidden Florida Gold Rush You're Missing</h2>
            <p className="text-xl text-gray-200">While others struggle with uncertainty, elite investors are securing consistent returns</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            icon: TrendingUp,
            title: 'Stock Market Volatility',
            stat: '-18% Average Loss',
            description: 'Traditional investments facing unprecedented uncertainty'
          }, {
            icon: Users,
            title: 'Florida Market Growth',
            stat: '+15% Annual Appreciation',
            description: 'Florida real estate consistently outperforming national averages'
          }, {
            icon: Zap,
            title: 'Limited Deal Access',
            stat: '90% Never See',
            description: 'Best opportunities sold before reaching public market'
          }].map((item, index) => <AnimatedSection key={index} delay={index * 100}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group h-full">
                  <CardContent className="p-8 text-center">
                    <item.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2 text-slate-50">{item.title}</h3>
                    <div className="text-3xl font-bold text-red-400 mb-2">{item.stat}</div>
                    <p className="text-slate-50">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Unfair Advantage in Florida Real Estate</h2>
            <p className="text-xl text-gray-200">Proprietary technology meets local expertise</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            icon: Zap,
            title: 'AI-Powered Analysis',
            description: 'Our proprietary algorithms analyze 10,000+ data points to identify undervalued properties before competitors'
          }, {
            icon: Users,
            title: 'Expert Local Team',
            description: '50+ years combined experience in Florida markets, with deep contractor and realtor networks'
          }, {
            icon: TrendingUp,
            title: 'Exclusive Deal Flow',
            description: 'First access to off-market opportunities through our exclusive seller network and partnerships'
          }].map((item, index) => <AnimatedSection key={index} delay={index * 150}>
                <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:scale-105 transition-all duration-300 group h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                      <item.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Returns from Real Deals</h2>
            <p className="text-xl text-gray-200">Featured case study from our Miami portfolio</p>
          </AnimatedSection>
          <AnimatedSection className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-green-900/30 to-yellow-900/30 backdrop-blur-md border-green-400/20 shadow-2xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Miami Beach Renovation</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-950">Purchase Price:</span>
                        <span className="text-xl font-bold">$335,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-950">Renovation Cost:</span>
                        <span className="text-xl font-bold">$65,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-950">Sale Price:</span>
                        <span className="text-xl font-bold text-[#8afd3d]">$615,000</span>
                      </div>
                      <div className="border-t border-white/20 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold">Net ROI:</span>
                          <span className="text-3xl font-bold text-[#fdfd3d]">45%</span>
                        </div>
                        <div className="text-sm text-Slate-950 mt-2 ">Completed in 6 months</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-black text-3xl font-bold">45%</div>
                    </div>
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Investment Partners</h2>
            <p className="text-xl text-gray-200">Meet the team behind your success</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => <AnimatedSection key={index} delay={index * 100}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-black text-xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-slate-50">{member.name}</h3>
                    <p className="text-yellow-400 font-medium mb-2">{member.role}</p>
                    <p className="text-sm mb-3 text-gray-300">{member.expertise}</p>
                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">{member.bio}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Process Section with Sequential Animation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Building Wealth in 4 Simple Steps</h2>
            <p className="text-xl text-gray-200">Your journey to consistent real estate returns</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{
            step: '01',
            title: 'Join Exclusive List',
            description: 'Submit your investment criteria and get approved'
          }, {
            step: '02',
            title: 'Receive AI Analysis',
            description: 'Get weekly deals with complete financial projections'
          }, {
            step: '03',
            title: 'Select Opportunities',
            description: 'Choose deals that match your investment goals'
          }, {
            step: '04',
            title: 'We Handle Everything',
            description: 'Sit back while we execute and deliver returns'
          }].map((item, index) => <AnimatedSection key={index} delay={index * 200} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
                {index < 3 && <ArrowRight className="w-6 h-6 text-yellow-400 mx-auto mt-4 hidden md:block" />}
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-200">Everything you need to know about investing with us</p>
          </AnimatedSection>
          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 backdrop-blur-sm border-white/10 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-yellow-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-200">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Limited Partnership Opportunities Available</h2>
            <p className="text-xl text-gray-200 mb-8">Join the next generation of successful real estate investors</p>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Full Name *" className="bg-white/15 border-white/20 text-white placeholder:text-gray-300 h-12 focus:ring-2 focus:ring-yellow-400 focus:bg-white/20" required />
                    <Input type="email" inputMode="email" placeholder="Email Address *" className="bg-white/15 border-white/20 text-white placeholder:text-gray-300 h-12 focus:ring-2 focus:ring-yellow-400 focus:bg-white/20" required />
                  </div>
                  <Button type="submit" className="w-full md:w-auto md:px-12 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-4 text-lg h-14 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/25">
                    Secure My Investment Spot
                  </Button>
                  <p className="text-sm text-gray-400">Limited spots available for Q1 2025 opportunities</p>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>;
};
export default Investors;