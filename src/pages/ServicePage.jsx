import Layout from '../components/Layout.jsx'
import ServiceHero from '../components/ServiceHero.jsx'
import ServiceFeatures from '../components/ServiceFeatures.jsx'
import ServiceFAQ from '../components/ServiceFAQ.jsx'
import SuburbList from '../components/SuburbList.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Contact from '../components/Contact.jsx'

// Shared composition for all four service landing pages. The page-specific
// HTML files own the SEO meta + JSON-LD; this just renders the body.
export default function ServicePage({ data }) {
  return (
    <Layout>
      <ServiceHero
        eyebrow={data.eyebrow}
        h1={data.h1}
        intro={data.intro}
        image={data.image}
        imageAlt={data.imageAlt}
      />
      <ServiceFeatures
        heading={data.featuresHeading}
        intro={data.featuresIntro}
        items={data.features}
      />
      <ServiceFAQ items={data.faq} />
      <SuburbList serviceLabel={data.suburbLabel} />
      <Testimonials />
      <Contact />
    </Layout>
  )
}
