# Dynamic Sitemap System

Preallo uses a dynamic sitemap generation system that automatically creates XML sitemaps without hardcoding URLs.

## How It Works

### 1. **Dynamic Generation**

- Sitemap is generated at runtime using `getServerSideProps`
- Automatically includes current year and next year month pages
- No need to manually update when new months are added

### 2. **File Structure**

```
src/
├── pages/
│   └── sitemap.xml.tsx          # Dynamic sitemap endpoint
└── utils/
    └── functions/
        └── generateSitemap.ts   # Sitemap generation utilities
```

### 3. **Key Features**

- ✅ **Automatic month generation** for current and next year
- ✅ **Static pages** included (dashboard, profile, settings)
- ✅ **Proper caching** (24 hours with stale-while-revalidate)
- ✅ **Error handling** with fallback sitemap
- ✅ **TypeScript support** with proper interfaces

## Usage

### Access the Sitemap

```
https://preallo.com/sitemap.xml
```

### Generated URLs Include:

- `/` (Homepage - priority 1.0)
- `/profile` (priority 0.8)
- `/settings/goal` (priority 0.7)
- `/settings/recurring` (priority 0.7)
- `/settings/subscriptions` (priority 0.7)
- `/month/january-2024` through `/month/december-2025` (priority 0.9)

## Extending the Sitemap

### Adding New Static Pages

Edit `src/utils/functions/generateSitemap.ts`:

```typescript
const staticPages: SitemapPage[] = [
  // ... existing pages
  {
    path: '/new-page',
    changefreq: 'weekly',
    priority: 0.6,
  },
];
```

### Adding Dynamic Pages from Database

Uncomment and modify the Firebase section in `sitemap.xml.tsx`:

```typescript
// Pull actual data from Firebase
try {
  const monthsSnapshot = await getDocs(collection(db, 'months'));
  const uniqueMonths = new Set<string>();

  monthsSnapshot.forEach((doc) => {
    const data = doc.data();
    if (data.months && Array.isArray(data.months)) {
      data.months.forEach((month: any) => {
        if (month.slug) {
          uniqueMonths.add(`/month/${month.slug}`);
        }
      });
    }
  });

  // Add unique months from database
  uniqueMonths.forEach((monthPath) => {
    dynamicPages.push(monthPath);
  });
} catch (error) {
  console.error('Error fetching months from Firebase:', error);
}
```

### Customizing Page Properties

Each page can have:

- `path`: URL path
- `lastmod`: Last modified date (auto-generated if not provided)
- `changefreq`: How often the page changes
- `priority`: SEO priority (0.0 to 1.0)

## Benefits Over Static Sitemap

1. **No Manual Updates**: Automatically includes new months
2. **Real-time Data**: Can pull from database if needed
3. **Better SEO**: Always up-to-date with current content
4. **Maintainable**: Easy to add new pages and modify priorities
5. **Cached**: 24-hour cache for performance

## Testing

Test the sitemap locally:

```
http://localhost:3000/sitemap.xml
```

The sitemap will automatically include current year (2024) and next year (2025) month pages.
