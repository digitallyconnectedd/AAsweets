# 🎨 A. A. Sweets - Style Guide

## Design System & Branding Guidelines

This document outlines the design standards and guidelines for maintaining consistency across the A. A. Sweets website.

---

## 🎨 Color Palette

### Primary Colors

**Cream** (Primary Background)
```
Color: #F5EBE0
RGB: 245, 235, 224
Usage: Main background, soft sections
```

**Secondary Cream**
```
Color: #FAF6F1
RGB: 250, 246, 241
Usage: Alternating backgrounds, section dividers
```

### Accent Colors

**Warm Brown** (Primary Accent)
```
Color: #8B6F47
RGB: 139, 111, 71
Usage: Headings, primary text, main CTAs
Emotion: Traditional, trustworthy, warm
```

**Gold** (Premium/Secondary Accent)
```
Color: #D4AF37
RGB: 212, 175, 55
Usage: Buttons, badges, highlights, premium items
Emotion: Luxury, quality, premium
```

**Saffron** (Accent)
```
Color: #E8A825
RGB: 232, 168, 37
Usage: Secondary badges, notifications, warm accents
Emotion: Traditional, festive, vibrant
```

### Neutral Colors

**Dark Text**
```
Color: #2C2416
RGB: 44, 36, 22
Usage: Primary text, main content
```

**Light Text**
```
Color: #6B5D52
RGB: 107, 93, 82
Usage: Secondary text, descriptions, muted content
```

**Border Light**
```
Color: #E5D9D0
RGB: 229, 217, 208
Usage: Dividers, subtle borders, card edges
```

### Shadow & Depth

**Shadow Default**
```
CSS: 0 4px 15px rgba(44, 36, 22, 0.08)
Usage: Cards, elevated elements
```

**Shadow Light**
```
CSS: 0 2px 8px rgba(44, 36, 22, 0.05)
Usage: Subtle shadows, borders
```

---

## 🔤 Typography

### Font Families

**Headings**: Playfair Display
```
Font: Playfair Display
Weight: 700, 800
Use for: H1, H2, H3, H4, titles
Feeling: Elegant, premium, sophisticated
```

**Body Text**: Poppins
```
Font: Poppins
Weight: 300, 400, 500, 600, 700
Use for: Paragraphs, labels, UI text
Feeling: Modern, clean, readable
```

### Font Sizes

```
H1 (Hero): 3.5rem (56px)
H2 (Section): 2.5rem (40px)
H3 (Card): 1.5rem (24px)
H4 (Label): 1.2rem (19px)
Body: 1rem (16px)
Small: 0.95rem (15px)
Extra Small: 0.85rem (13px)
```

### Font Weights

```
Light: 300 (descriptions, tertiary text)
Regular: 400 (body text, paragraphs)
Medium: 500 (UI elements, labels)
Semi-Bold: 600 (buttons, emphasis)
Bold: 700 (headings, important text)
```

### Line Heights

```
Headings: 1.2
Body: 1.6
Dense: 1.4
```

---

## 📦 Component Styles

### Buttons

#### Primary Button
```
Background: #D4AF37 (Gold)
Text Color: #2C2416 (Dark)
Padding: 1rem 1.5rem
Border Radius: 50px
Font Weight: 600
Hover: 
  - Background: #C19B1D (darker gold)
  - Transform: translateY(-2px)
  - Box Shadow: 0 6px 20px rgba(212, 175, 55, 0.25)
```

#### Secondary Button
```
Background: #8B6F47 (Brown)
Text Color: white
Padding: 1rem 1.5rem
Border Radius: 50px
Font Weight: 600
Hover:
  - Background: #6B5437 (darker brown)
  - Transform: translateY(-2px)
```

#### Small Button
```
Padding: 0.5rem 1rem
Font Size: 0.95rem
```

#### Large Button
```
Padding: 1rem 2.5rem
Font Size: 1.1rem
Width: 100% (on mobile)
```

### Cards

#### Featured Card
```
Background: Linear gradient (cream to light cream)
Padding: 2rem
Border Radius: 15px
Border: 2px solid transparent
Transition: all 0.3s ease
Hover:
  - Border Color: #D4AF37
  - Transform: translateY(-8px)
  - Box Shadow: 0 4px 15px rgba(44, 36, 22, 0.08)
```

#### Menu Card
```
Background: white
Padding: 2rem
Border: 2px solid #E5D9D0
Border Radius: 15px
Transition: all 0.3s ease
Hover:
  - Border Color: #D4AF37
  - Transform: translateY(-5px)
  - Box Shadow: 0 4px 15px rgba(44, 36, 22, 0.08)
```

### Badges

#### Badge (Standard)
```
Background: #E8A825 (Saffron)
Text Color: white
Padding: 0.25rem 0.5rem
Border Radius: 50px
Font Size: 0.75rem
Font Weight: 600
Display: inline-block
```

#### Badge Premium
```
Background: #D4AF37 (Gold)
Text Color: #2C2416 (Dark)
```

### Input Fields

```
Padding: 1rem
Border: 2px solid #E5D9D0
Border Radius: 8px
Font Family: Poppins
Font Size: 1rem
Transition: border-color 0.2s ease
Focus:
  - Outline: none
  - Border Color: #D4AF37
  - Box Shadow: 0 0 0 3px rgba(212, 175, 55, 0.1)
```

---

## 🎬 Animations

### Fade In
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
Duration: 0.8s
Timing: ease
```

### Fade In Up
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
Duration: 0.8s
Timing: ease
Delay: Staggered (0.1s, 0.2s, 0.3s, etc.)
```

### Hover Effects
```
Button Hover: translateY(-2px)
Card Hover: translateY(-5px) or translateY(-8px)
Transition: 0.3s ease
```

### Scroll Animations
Triggered when elements enter viewport using Intersection Observer API

---

## 📐 Spacing System

```
XS: 0.5rem (8px)
SM: 1rem (16px)
MD: 1.5rem (24px)
LG: 2rem (32px)
XL: 3rem (48px)
2XL: 4rem (64px)
```

### Margins & Padding Guidelines

```
Section Padding: 4rem (vertical), 2rem (horizontal)
Card Padding: 1.5rem - 2rem
Component Gap: 1rem - 2rem
Line Spacing: 1.5 - 1.8
```

---

## 🖼️ Logo & Branding

### Logo
```
Text: "A. A. Sweets"
Font: Playfair Display, Bold
Color: #8B6F47 (Warm Brown)
Size: 1.8rem (desktop), 1.3rem (mobile)
Hover Color: #D4AF37 (Gold)
```

### Favicon (Recommended)
```
Format: .ico or .png (32x32px)
Color: #D4AF37 (Gold)
Design: Simple sweet/candy icon
```

---

## 📱 Responsive Design

### Breakpoints

```
Desktop: 1200px and above
Tablet: 768px to 1199px
Mobile: Below 768px
Small Mobile: Below 480px
```

### Responsive Font Sizes

```
Desktop:
  H1: 3.5rem
  H2: 2.5rem
  Body: 1rem

Tablet:
  H1: 2.5rem
  H2: 1.8rem
  Body: 1rem

Mobile:
  H1: 1.8rem
  H2: 1.4rem
  Body: 1rem
```

### Grid Layouts

```
Desktop: 4 columns or 3 columns
Tablet: 2 columns
Mobile: 1 column
```

---

## 🎯 Design Principles

### 1. **Warm & Inviting**
- Use warm colors (browns, golds, creams)
- Create cozy, homey feeling
- Emphasize traditional values

### 2. **Premium & Elegant**
- Gold accents for luxury feel
- Generous spacing for breathing room
- High-quality typography

### 3. **Clean & Modern**
- Minimal clutter
- Clear hierarchy
- Easy navigation

### 4. **Accessible**
- High contrast for readability
- Clear focus states
- Keyboard navigation support

### 5. **Smooth & Delightful**
- Subtle animations
- Smooth transitions
- Micro-interactions on hover

---

## 🔄 Update Guidelines

### When Adding New Sections

1. **Colors**: Use palette colors only
2. **Fonts**: Use Playfair Display (headings) and Poppins (body)
3. **Spacing**: Follow spacing system
4. **Animations**: Use existing animation classes
5. **Cards**: Match card styles (border, shadow, hover)
6. **Buttons**: Use button classes (primary, secondary, small, large)

### When Adding Images

- Maintain consistent image ratios
- Use warm, appetizing food photography
- Add subtle borders or shadows
- Include alt text for accessibility

### When Modifying Colors

- Always test on different devices
- Ensure adequate contrast (WCAG AA minimum)
- Maintain brand consistency
- Update CSS variables in one place

---

## 🚀 Implementation Checklist

- [ ] Use defined colors from palette
- [ ] Apply Playfair Display for headings
- [ ] Use Poppins for body text
- [ ] Follow spacing system
- [ ] Include smooth animations
- [ ] Test on mobile devices
- [ ] Check color contrast
- [ ] Verify button hover states
- [ ] Test form interactions
- [ ] Ensure animations are smooth

---

## 📋 CSS Variable Reference

```css
/* Colors */
--primary-cream: #F5EBE0;
--secondary-cream: #FAF6F1;
--accent-gold: #D4AF37;
--accent-brown: #8B6F47;
--accent-saffron: #E8A825;
--text-dark: #2C2416;
--text-light: #6B5D52;
--border-light: #E5D9D0;
--shadow: 0 4px 15px rgba(44, 36, 22, 0.08);
--shadow-light: 0 2px 8px rgba(44, 36, 22, 0.05);

/* Typography */
--font-heading: 'Playfair Display', serif;
--font-body: 'Poppins', sans-serif;

/* Spacing */
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
--spacing-2xl: 4rem;

/* Transitions */
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-smooth: 0.5s ease;
```

---

## 🎨 Example Component

### Menu Item Card

```html
<div class="menu-card fade-in-up">
    <div class="card-header">
        <h3>Item Name</h3>
        <span class="badge">Popular</span>
    </div>
    <p class="card-description">
        Description of the menu item with appealing details.
    </p>
    <div class="card-features">
        <span><i class="fas fa-check"></i> Feature 1</span>
        <span><i class="fas fa-check"></i> Feature 2</span>
    </div>
    <a href="tel:0768689109" class="btn btn-small">Order</a>
</div>
```

---

## 📚 Resources

- **Google Fonts**: https://fonts.google.com (Playfair Display, Poppins)
- **Font Awesome Icons**: https://fontawesome.com
- **Color Palette Generator**: https://coolors.co
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/

---

## 🎉 Brand Personality

**A. A. Sweets embodies:**
- ❤️ **Warmth** - Homemade with love
- 👨‍🍳 **Tradition** - Time-honored recipes
- ✨ **Quality** - Premium ingredients
- 🏠 **Home** - Family values
- 🌟 **Excellence** - Pride in craft

This style guide ensures every element reflects these values.

---

**Last Updated**: December 27, 2025

**Created for**: A. A. Sweets

**Version**: 1.0
