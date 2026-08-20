export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.indtec.com.br';

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: 'servicos', priority: 0.9, changeFrequency: 'weekly' },
    { path: 'sobre', priority: 0.8, changeFrequency: 'monthly' },
    { path: 'contato', priority: 0.8, changeFrequency: 'monthly' },
    { path: 'avaliacoes', priority: 0.7, changeFrequency: 'monthly' },
    { path: 'faq', priority: 0.6, changeFrequency: 'monthly' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}/${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}