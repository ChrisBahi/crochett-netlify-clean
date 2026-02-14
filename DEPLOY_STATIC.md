# Static Migration Guide (Next Export)

This project is now configured for static export via Next.js:
- `next.config.js` uses `output: 'export'`
- Build command generates static files into `out/`

## 1) Build static output

```bash
cd "/Users/bahim/Documents/New project/content-ops-starter-main"
source ~/.zshrc
npm install
npm run build:static
```

Expected output folder:
- `out/`

Optional ZIP (for Namecheap upload):

```bash
cd "/Users/bahim/Documents/New project/content-ops-starter-main"
rm -f crochett-static-export.zip
cd out && zip -r ../crochett-static-export.zip .
```

---

## 2) Deploy on Namecheap (static hosting)

### Upload
1. Open Namecheap cPanel -> File Manager.
2. Go to `public_html/` (or your domain root).
3. Delete previous website files (keep backups if needed).
4. Upload `crochett-static-export.zip`.
5. Extract the ZIP so that `index.html` is directly inside `public_html/`.

### Check
- `public_html/index.html` must exist.
- `public_html/_next/` must exist.
- `public_html/images/` must exist.

### Form behavior
The form posts directly to FormSubmit (`formsubmit.co`) and redirects to `https://crochett.ai/thank-you`.
No server runtime is required.

---

## 3) Deploy on Cloudflare Pages (from GitHub)

Recommended repo:
- `https://github.com/ChrisBahi/crochett-netlify-clean`

### Cloudflare Pages setup
1. Cloudflare Dashboard -> Workers & Pages -> Create -> Pages -> Connect to Git.
2. Select repo `ChrisBahi/crochett-netlify-clean`.
3. Build settings:
   - Framework preset: `None`
   - Build command: `npm run build:static`
   - Build output directory: `out`
   - Node.js version: `20` or `22`
4. Deploy.

### Domain mapping
If you want `crochett.ai` on Cloudflare Pages:
1. In Pages project -> Custom domains -> add `crochett.ai` and `www.crochett.ai`.
2. If DNS is still on Namecheap basic DNS, move DNS to Cloudflare nameservers (recommended).
3. In Cloudflare DNS, keep records managed by Pages (CNAME/flattening handled automatically).

---

## 4) Notes
- API route `/api/reindex` is ignored in static export mode.
- Any future dynamic/server feature will require moving back to server hosting.
- Current multilingual routing is path-based (`/fr`, `/en`, `/es`, `/it`, `/de`, `/nl`) and works in static mode.
