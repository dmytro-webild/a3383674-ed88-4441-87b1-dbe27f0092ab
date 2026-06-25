import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardCarousel
      tag="Welcome to Sony KMB Market"
      title="Authentic Exotic Flavors in San Secondo"
      description="Discover a curated selection of authentic Indian spices, basmati rice, and exotic ingredients. Bringing the world's cuisine to your kitchen."
      primaryButton={{
        text: "Visit Us",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Explore Products",
        href: "#products",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-street-market-sunset_23-2151530005.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-supermarket-beautiful-young-woman-shopping-supermarket-buying-fresh-organic-vegetables_169016-3365.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-dried-spices-tea-backgroundin-grand-bazaar_181624-61326.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/client-shopping-local-retailer_23-2149349422.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/salad-bar-with-various-fresh-vegetables-supermarket_627829-7282.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-indian-man-bazaar_23-2150913312.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Our Story"
      quote="For those like me who love exotic cuisine, this Indian market is a godsend. Small, yet packed with every authentic essential you need."
      author="Ombretta Corradi"
      role="Local Guide"
      imageSrc="http://img.b2bpic.net/free-photo/condensed-nut-dessert-sprinkled-with-powdered-sugar_140725-6600.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesBentoGrid
      tag="What We Offer"
      title="Quality Ingredients Daily"
      description="From daily staples to hard-to-find exotic spices, we provide everything needed for authentic home cooking."
      features={[
        {
          title: "Premium Basmati",
          description: "High-quality, long-grain basmati rice sourced for perfect fragrance.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-plain-boiled-rice-with-different-spices_140725-151170.jpg",
        },
        {
          title: "Authentic Spices",
          description: "Huge selection of aromatic spices, powders, and traditional blends.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-close-up-view-spices-table-spices-bowls-tree-branches-with-cones-christmas-tree-toys_140725-117315.jpg",
        },
        {
          title: "Fresh Essentials",
          description: "Healthy cooking staples like coconut milk, oils, and lentils.",
          imageSrc: "http://img.b2bpic.net/free-photo/organic-market-customer-checks-sauces_482257-76705.jpg",
        },
        {
          title: "Artisanal Finds",
          description: "Curated selection of hard-to-find ethnic cooking ingredients.",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-vegetables-supermarket-photo-your-advertising_185193-110549.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesImageBento
      tag="Our Catalog"
      title="Everything You Need"
      description="A diverse variety of culinary products for every kitchen."
      items={[
        {
          title: "Basmati Rice",
          description: "Premium grains",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-vegetable-composition-with-seasonings-white-background-color-photo-healthy-life-salad-meal-ripe-vegetable_140725-139564.jpg",
        },
        {
          title: "Exotic Spices",
          description: "Aromatic varieties",
          imageSrc: "http://img.b2bpic.net/free-photo/local-turkish-delices-tea-grand-bazar-market_1268-20173.jpg",
        },
        {
          title: "Coconut Milk",
          description: "Pure goodness",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-stylish-denim-overalls-coffee-shop_273609-4411.jpg",
        },
        {
          title: "Organic Dal",
          description: "Authentic lentils",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-lentils-beans-plates-marble-surface_114579-54567.jpg",
        },
        {
          title: "Pickles & Chutneys",
          description: "Traditional flavors",
          imageSrc: "http://img.b2bpic.net/free-photo/jars-pickled-vegetables-boiled-potatoes-plate-marinated-vegetables-blue-table_114579-14530.jpg",
        },
        {
          title: "Curry Pastes",
          description: "Ready to use",
          imageSrc: "http://img.b2bpic.net/free-photo/boiled-chicken-cut-into-pieces-white-dish-wooden-table_1150-23172.jpg",
        },
        {
          title: "Fresh Produce",
          description: "Seasonal items",
          imageSrc: "http://img.b2bpic.net/free-photo/all-kinds-healthy-vegetable-farmer-market_23-2148209759.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
      tag="Reviews"
      title="Loved By Our Customers"
      description="Hear what the local community has to say about our store."
      testimonials={[
        {
          id: "1",
          name: "ShuB RamGarhia",
          role: "Local",
          quote: "Nice work!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-adult-woman-talking-phone_23-2148660711.jpg",
        },
        {
          id: "2",
          name: "Ombretta Corradi",
          role: "Local Guide",
          quote: "Exotic cuisine heaven. Small space, massive variety.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/brunette-woman-with-paper-bag-full-healthy-food_23-2148173305.jpg",
        },
        {
          id: "3",
          name: "Jonny Giacomelli",
          role: "Local Guide",
          quote: "Huge variety of choice.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-man-holding-fresh-vegetables-fruits-grocery-paper-bag_23-2147855409.jpg",
        },
        {
          id: "4",
          name: "Sarah Miller",
          role: "Foodie",
          quote: "Best spices in the province, so helpful!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-women-shopping-together_23-2149151643.jpg",
        },
        {
          id: "5",
          name: "David Rossi",
          role: "Home Cook",
          quote: "Always fresh, great selection of rice.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-doing-contactless-payment-fries_329181-20763.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Common Questions"
      title="Helpful Answers"
      description="Information about our store and services."
      items={[
        {
          question: "Where are you located?",
          answer: "Via G. Matteotti, 49, 43017 San Secondo Parmense PR.",
        },
        {
          question: "What are your opening hours?",
          answer: "We are open daily. Please call 351 261 7506 for specific daily updates.",
        },
        {
          question: "Do you sell international goods?",
          answer: "Yes, we specialize in authentic Indian and exotic world cuisines.",
        },
        {
          question: "Do you offer wholesale?",
          answer: "Please visit us in-store to discuss your specific needs.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="By The Numbers"
      title="Serving Our Community"
      description="Our commitment to quality and variety grows daily."
      metrics={[
        {
          value: "500+",
          description: "Unique Products",
        },
        {
          value: "5.0",
          description: "Customer Rating",
        },
        {
          value: "100%",
          description: "Customer Satisfaction",
        },
        {
          value: "10+",
          description: "Years of Tradition",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Visit Us"
      text="Come visit our market in San Secondo Parmense today for fresh, authentic ingredients."
      primaryButton={{
        text: "Call Now",
        href: "tel:+393512617506",
      }}
      secondaryButton={{
        text: "Get Directions",
        href: "https://maps.google.com",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
