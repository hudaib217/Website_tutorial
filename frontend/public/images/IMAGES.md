# Images Guide

This document lists all the images needed for the website and where they are used.

## Folder Structure

```
frontend/public/images/
├── hero.png                 ✅ Added
├── WhyChoose.png            ✅ Added
├── team-photo.jpg           ❌ Pending
├── portfolio/
│   ├── fashion-thumb.jpg    ❌ Pending
│   ├── fitness-thumb.jpg    ❌ Pending
│   ├── realestate-thumb.jpg ❌ Pending
│   ├── healthcare-thumb.jpg ❌ Pending
│   ├── restaurant-thumb.jpg ❌ Pending
│   └── branding-thumb.jpg   ❌ Pending
├── blog/
│   ├── web-trends-2025.jpg  ❌ Pending
│   ├── mobile-guide.jpg     ❌ Pending
│   ├── automation.jpg       ❌ Pending
│   ├── ui-ux-design.jpg     ❌ Pending
│   ├── seo-2025.jpg         ❌ Pending
│   └── api-design.jpg       ❌ Pending
└── authors/
    ├── sarah.jpg            ❌ Pending
    ├── michael.jpg          ❌ Pending
    ├── emily.jpg            ❌ Pending
    └── david.jpg            ❌ Pending
```

---

## Image Details

### Homepage

| Image | Path | Size | Used In |
|-------|------|------|---------|
| Hero Illustration | `/images/hero.png` | ~600x600px | `Hero.jsx` |
| Why Choose Us | `/images/WhyChoose.png` | ~500x500px | `WhyChooseUs.jsx` |

### About Page

| Image | Path | Size | Used In |
|-------|------|------|---------|
| Team Photo | `/images/team-photo.jpg` | ~600x600px | `About.jsx` (Expertise section) |

### Portfolio (Database)

These images are referenced in `backend/src/seed.js`. After adding images, run `npm run seed` in the backend folder.

| Image | Path | Project |
|-------|------|---------|
| Fashion E-commerce | `/images/portfolio/fashion-thumb.jpg` | E-Commerce Platform for Fashion Brand |
| Fitness App | `/images/portfolio/fitness-thumb.jpg` | Mobile Fitness App |
| Real Estate | `/images/portfolio/realestate-thumb.jpg` | Real Estate Management System |
| Healthcare | `/images/portfolio/healthcare-thumb.jpg` | Healthcare Booking Platform |
| Restaurant App | `/images/portfolio/restaurant-thumb.jpg` | Restaurant Chain Mobile App |
| Brand Redesign | `/images/portfolio/branding-thumb.jpg` | Corporate Brand Redesign |

### Blog (Database)

These images are referenced in `backend/src/seed.js`. After adding images, run `npm run seed` in the backend folder.

| Image | Path | Blog Post |
|-------|------|-----------|
| Web Trends | `/images/blog/web-trends-2025.jpg` | 10 Web Development Trends to Watch in 2025 |
| Mobile Guide | `/images/blog/mobile-guide.jpg` | The Complete Guide to Mobile App Development |
| Automation | `/images/blog/automation.jpg` | Why Every Business Needs Process Automation |
| UI/UX Design | `/images/blog/ui-ux-design.jpg` | UI/UX Design Principles That Drive Conversions |
| SEO 2025 | `/images/blog/seo-2025.jpg` | SEO Strategies for 2025: What Actually Works |
| API Design | `/images/blog/api-design.jpg` | Building Scalable APIs: Best Practices |

### Author Avatars (Database)

| Image | Path | Author |
|-------|------|--------|
| Sarah | `/images/authors/sarah.jpg` | Sarah Johnson |
| Michael | `/images/authors/michael.jpg` | Michael Chen |
| Emily | `/images/authors/emily.jpg` | Emily Davis |
| David | `/images/authors/david.jpg` | David Martinez |

---

## Recommended Image Sizes

| Type | Recommended Size | Format |
|------|------------------|--------|
| Hero | 600x600px or larger | PNG (transparent) or JPG |
| Why Choose Us | 500x500px | PNG or JPG |
| Team Photo | 600x600px | JPG |
| Portfolio Thumbnails | 800x600px (4:3) | JPG |
| Blog Featured | 1200x630px (1.9:1) | JPG |
| Author Avatars | 200x200px (1:1) | JPG |

---

## Free Image Resources

| Website | Type | License |
|---------|------|---------|
| [Unsplash](https://unsplash.com) | Photos | Free |
| [Pexels](https://pexels.com) | Photos | Free |
| [unDraw](https://undraw.co) | Illustrations | Free |
| [Storyset](https://storyset.com) | Illustrations | Free |
| [Icons8](https://icons8.com/illustrations) | Illustrations | Free with attribution |

---

## How to Add Images

1. **Static Images (Hero, WhyChoose, Team)**
   - Add image to `frontend/public/images/`
   - Reference in component as `/images/filename.png`

2. **Database Images (Portfolio, Blog, Authors)**
   - Add image to appropriate folder in `frontend/public/images/`
   - Update path in `backend/src/seed.js` if needed
   - Run `npm run seed` in backend folder to update database

---

## Checklist

- [x] hero.png
- [x] WhyChoose.png
- [ ] team-photo.jpg
- [ ] portfolio/fashion-thumb.jpg
- [ ] portfolio/fitness-thumb.jpg
- [ ] portfolio/realestate-thumb.jpg
- [ ] portfolio/healthcare-thumb.jpg
- [ ] portfolio/restaurant-thumb.jpg
- [ ] portfolio/branding-thumb.jpg
- [ ] blog/web-trends-2025.jpg
- [ ] blog/mobile-guide.jpg
- [ ] blog/automation.jpg
- [ ] blog/ui-ux-design.jpg
- [ ] blog/seo-2025.jpg
- [ ] blog/api-design.jpg
- [ ] authors/sarah.jpg
- [ ] authors/michael.jpg
- [ ] authors/emily.jpg
- [ ] authors/david.jpg
