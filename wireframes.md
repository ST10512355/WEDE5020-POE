# Low-Fidelity Wireframes — Thandeka's Artisan Home Decor

These wireframes show the intended layout and information hierarchy for each page's
desktop version, ahead of CSS styling in Part 2.

---

## 1. Homepage (index.html)

```
+--------------------------------------------------------------+
| LOGO            Home | About | Products | Enquiry | Contact  |
+--------------------------------------------------------------+
|                                                                |
|                 HERO IMAGE / BACKGROUND                       |
|            "Handmade Decor, Made With Heart"                  |
|         [ short intro text ]      [ Shop the Range BTN ]      |
|                                                                |
+--------------------------------------------------------------+
|  Welcome section — short intro paragraph                      |
|                                                                |
|  +-----------+   +-----------+   +-----------+                |
|  | Ceramics  |   | Textiles  |   | Baskets   |   (card grid)  |
|  | [image]   |   | [image]   |   | [image]   |                |
|  +-----------+   +-----------+   +-----------+                |
+--------------------------------------------------------------+
|                        FOOTER (copyright)                     |
+--------------------------------------------------------------+
```

## 2. About Us (about.html)

```
+--------------------------------------------------------------+
| LOGO            Home | About | Products | Enquiry | Contact  |
+--------------------------------------------------------------+
|  Our Story — paragraph                                        |
+--------------------------------------------------------------+
|  Mission & Vision                                             |
|  +----------------------+   +----------------------+          |
|  | Our Mission          |   | Our Vision           |          |
|  +----------------------+   +----------------------+          |
+--------------------------------------------------------------+
|  Meet the Team                                                |
|  +-----------+   +-----------+                                |
|  | [photo]   |   | [photo]   |                                |
|  | Founder   |   | Manager   |                                |
|  +-----------+   +-----------+                                |
+--------------------------------------------------------------+
|                        FOOTER (copyright)                     |
+--------------------------------------------------------------+
```

## 3. Products (products.html)

```
+--------------------------------------------------------------+
| LOGO            Home | About | Products | Enquiry | Contact  |
+--------------------------------------------------------------+
|  Our Products — intro line                                    |
|                                                                |
|  +-----------+  +-----------+  +-----------+  +-----------+   |
|  | Ceramics  |  | Textiles  |  | Baskets   |  | Candles   |   |
|  | [image]   |  | [image]   |  | [image]   |  | [image]   |   |
|  | desc text |  | desc text |  | desc text |  | desc text |   |
|  +-----------+  +-----------+  +-----------+  +-----------+   |
+--------------------------------------------------------------+
|                        FOOTER (copyright)                     |
+--------------------------------------------------------------+
```

## 4. Enquiry (enquiry.html)

```
+--------------------------------------------------------------+
| LOGO            Home | About | Products | Enquiry | Contact  |
+--------------------------------------------------------------+
|  Product Enquiry — intro line                                 |
|                                                                |
|  +----------------------------------------+                   |
|  | Full Name        [_______________]     |                   |
|  | Email Address    [_______________]     |                   |
|  | Phone Number     [_______________]     |                   |
|  | Enquiry Type     [ dropdown v ]         |                   |
|  | Message          [___________________]  |                   |
|  |                  [___________________]  |                   |
|  |                [ Submit Enquiry BTN ]   |                   |
|  +----------------------------------------+                   |
+--------------------------------------------------------------+
|                        FOOTER (copyright)                     |
+--------------------------------------------------------------+
```

## 5. Contact (contact.html)

```
+--------------------------------------------------------------+
| LOGO            Home | About | Products | Enquiry | Contact  |
+--------------------------------------------------------------+
|  Visit or Contact Us                                          |
|                                                                |
|  +----------------------------------------+                   |
|  |              [ MAP EMBED ]              |                   |
|  +----------------------------------------+                   |
|                                                                |
|  +----------------------+   +----------------------+          |
|  | Main Store           |   | Market Stall         |          |
|  | address / hours      |   | address / hours      |          |
|  +----------------------+   +----------------------+          |
|                                                                |
|  Send Us a Message                                            |
|  +----------------------------------------+                   |
|  | Full Name  [___________]                |                  |
|  | Email      [___________]                |                  |
|  | Message    [___________________]        |                  |
|  |          [ Send Message BTN ]            |                  |
|  +----------------------------------------+                   |
+--------------------------------------------------------------+
|                        FOOTER (copyright)                     |
+--------------------------------------------------------------+
```

---

**Notes:**
- All five pages share the same header/navigation and footer for consistency.
- Layout uses a single-column, top-to-bottom hierarchy on desktop, with card grids for
  repeated content blocks (products, team members, locations).
- These wireframes informed the CSS Grid/Flexbox layout implemented in Part 2 (see `css/style.css`).
