import { useEffect } from 'react';

export function SEOHead({ 
  title = 'Professional Sound Systems Pittsburgh PA | Weis Sound Systems',
  description = 'Premium sound systems, professional mixers, and crystal-clear microphones for bands, concerts, and live events in Pittsburgh PA and surrounding regions.',
  path = '/'
}: {
  title?: string;
  description?: string;
  path?: string;
}) {
  useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://weissoundsystems.com${path}`);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `https://weissoundsystems.com${path}`);
  }, [title, description, path]);

  return null;
}

export function addLocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://weissoundsystems.com",
    "name": "Weis Sound Systems",
    "image": "https://weissoundsystems.com/WeisSoundLogoHorizontal.png",
    "description": "Professional sound systems, mixers, and microphones for concerts and live events in Pittsburgh PA and surrounding regions",
    "url": "https://weissoundsystems.com",
    "telephone": "724-448-6944",
    "email": "info@weissoundsystems.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "PA",
      "addressCountry": "US",
      "streetAddress": "Pittsburgh, PA"
    },
    "priceRange": "$$",
    "serviceType": ["Sound System Rental", "Audio Equipment Rental", "Event Audio Services", "Professional PA Systems", "Concert Sound Equipment"],
    "areaServed": {
      "@type": "GeoShape",
      "box": "39.5 -80.5 41.5 -79.5"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.4406,
      "longitude": -79.9959
    },
    "sameAs": [
      "https://www.facebook.com/weissoundsystems",
      "https://www.instagram.com/weissoundsystems"
    ],
    "knowsAbout": [
      "Sound Systems",
      "Professional Audio Equipment",
      "Concert Sound",
      "Live Event Audio",
      "PA Systems",
      "Audio Mixers",
      "Microphones",
      "Event Services"
    ]
  };

  return schema;
}

export function addBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return breadcrumb;
}

export function addServiceSchema() {
  const services = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Weis Sound Systems",
    "url": "https://weissoundsystems.com",
    "offers": [
      {
        "@type": "Offer",
        "name": "Professional PA Systems Rental",
        "description": "Professional PA systems, line arrays, and subwoofers for events in Pittsburgh PA",
        "areaServed": {
          "@type": "GeoShape",
          "box": "39.5 -80.5 41.5 -79.5"
        }
      },
      {
        "@type": "Offer",
        "name": "Professional Mixer Rental",
        "description": "Digital and analog mixing consoles for professional events",
        "areaServed": {
          "@type": "GeoShape",
          "box": "39.5 -80.5 41.5 -79.5"
        }
      },
      {
        "@type": "Offer",
        "name": "Microphone Systems",
        "description": "Professional microphones and wireless systems for concerts and live events",
        "areaServed": {
          "@type": "GeoShape",
          "box": "39.5 -80.5 41.5 -79.5"
        }
      },
      {
        "@type": "Offer",
        "name": "Audio Equipment Rental",
        "description": "Complete audio equipment rental services for events in Pittsburgh PA and surrounding regions",
        "areaServed": {
          "@type": "GeoShape",
          "box": "39.5 -80.5 41.5 -79.5"
        }
      }
    ]
  };

  return services;
}
