import { useEffect } from "react";

const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin;

export default function usePageMeta({
  title,
  description,
  path = "/",
  image = "/kanwar.jpeg",
  schema,
}) {
  useEffect(() => {
    document.title = title;
    const absoluteUrl = new URL(path, siteUrl).toString();
    const absoluteImage = new URL(image, siteUrl).toString();

    const values = {
      description,
      "og:title": title,
      "og:description": description,
      "og:url": absoluteUrl,
      "og:image": absoluteImage,
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": absoluteImage,
    };

    Object.entries(values).forEach(([key, content]) => {
      const attribute = key.startsWith("og:") ? "property" : "name";
      let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = absoluteUrl;

    const schemaId = "page-json-ld";
    document.getElementById(schemaId)?.remove();
    if (schema) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => document.getElementById(schemaId)?.remove();
  }, [title, description, path, image, schema]);
}
