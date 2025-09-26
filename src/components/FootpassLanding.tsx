import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  MessageSquare, 
  Users, 
  FileText, 
  Calendar, 
  Search,
  Zap,
  Lock,
  Globe,
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";
import heroImage from "@/assets/hero-football.jpg";
import footpassLogo from "@/assets/footpass-logo.png";

export default function FootpassLanding() {
  const features = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "Bank-level security with verified identity for all football professionals"
    },
    {
      icon: MessageSquare,
      title: "Intelligent Rooms",
      description: "Organize conversations by clubs, players, deals with smart categorization"
    },
    {
      icon: Users,
      title: "Authorization System",
      description: "Clear agent-player relationships with visible permissions and mandates"
    },
    {
      icon: FileText,
      title: "Secure Document Vault",
      description: "Encrypted storage for contracts, mandates, medical files with controlled sharing"
    },
    {
      icon: Calendar,
      title: "Smart Calendar",
      description: "Auto-sync with room activities, offers, deadlines and meetings"
    },
    {
      icon: Search,
      title: "Universal Search",
      description: "Find any conversation, document, or contact instantly across your network"
    }
  ];

  const userTypes = [
    {
      title: "Players",
      description: "Manage your career, authorizations, and communications securely",
      features: ["Personal dashboard", "Authorization control", "Contract tracking", "Medical vault"]
    },
    {
      title: "Agents",
      description: "Streamline player management with verified credentials",
      features: ["Multi-player management", "Offer creation", "Mandate tracking", "War room interface"]
    },
    {
      title: "Clubs",
      description: "Professional communication for all departments",
      features: ["Staff management", "Recruitment tools", "Internal rooms", "Performance tracking"]
    },
    {
      title: "Federations",
      description: "Official communication and player directory management",
      features: ["Certified directory", "Official announcements", "Discipline management", "Territory oversight"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={footpassLogo} alt="FOOTPASS" className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#users" className="text-foreground hover:text-primary transition-colors">For Users</a>
            <a href="#security" className="text-foreground hover:text-primary transition-colors">Security</a>
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-3 py-1">
                  <Zap className="w-3 h-3 mr-1" />
                  Now Available
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-white leading-tight">
                  Professional Football
                  <span className="text-primary-glow"> Messaging</span>
                </h1>
                <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                  Secure, encrypted communication platform connecting players, agents, clubs, and federations with intelligent rooms and verified identities.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="group">
                  Start Messaging
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-white/70">
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm">End-to-end encrypted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">Verified identities</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="FOOTPASS Platform" 
                className="relative z-10 rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Built for Football Professionals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage communications, documents, and relationships in the football industry securely and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 shadow-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-display">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section id="users" className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Designed for Every Role
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored experiences for players, agents, clubs, and federations with role-specific features and permissions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {userTypes.map((userType, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-xl font-display text-primary">{userType.title}</CardTitle>
                  <CardDescription className="text-base">
                    {userType.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {userType.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="outline" className="px-3 py-1 border-primary text-primary">
                  <Shield className="w-3 h-3 mr-1" />
                  Bank-Level Security
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-display font-bold">
                  Security You Can Trust
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  FOOTPASS™ uses military-grade encryption and verified identity systems to ensure your communications and documents remain completely secure.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">End-to-End Encryption</h3>
                    <p className="text-muted-foreground">All messages, files, and calls are encrypted with keys only you control.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Verified Identities</h3>
                    <p className="text-muted-foreground">Every user undergoes identity verification to ensure authentic professional relationships.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Audit Trail</h3>
                    <p className="text-muted-foreground">Complete visibility into document access and authorization changes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-card p-8 rounded-3xl shadow-elegant border">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Secure Connection Established</span>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Lock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Encrypted Message</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted-foreground/20 rounded"></div>
                      <div className="h-2 bg-muted-foreground/20 rounded w-3/4"></div>
                      <div className="h-2 bg-muted-foreground/20 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Messages are encrypted locally before transmission
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white">
              Ready to Transform Your Football Communications?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join the secure network of football professionals. Get started with FOOTPASS™ today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="bg-white text-football-dark hover:bg-white/90">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img src={footpassLogo} alt="FOOTPASS" className="h-8 w-auto" />
              <p className="text-sm text-muted-foreground">
                Professional messaging platform for the football industry.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2025 FOOTPASS™. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}