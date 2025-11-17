import { CheckCircle, Heart, Target, Users } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About ShopHub
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted destination for quality products and exceptional shopping experiences since 2024
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At ShopHub, we're passionate about bringing you the best products at unbeatable prices. 
                Our mission is to make online shopping easy, enjoyable, and accessible to everyone.
              </p>
              <p className="text-muted-foreground">
                We carefully curate our collection to ensure every item meets our high standards of 
                quality, value, and sustainability. Your satisfaction is our top priority.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Products</div>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Brands</div>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape our commitment to you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on the quality of our products
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Customer Care</h3>
              <p className="text-muted-foreground">
                Your satisfaction and happiness drive everything we do
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly improving to serve you better
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Community</h3>
              <p className="text-muted-foreground">
                Building lasting relationships with our customers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
