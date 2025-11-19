# DNS Configuration for www.colormewarm.me

This document contains DNS configuration instructions for the domain www.colormewarm.me.

## CAA Records

CAA (Certification Authority Authorization) records specify which certificate authorities (CAs) are allowed to issue certificates for your domain.

### Required CAA Record

Add the following CAA record at your DNS provider:

```
Type: CAA
Name: @ (or leave blank for root domain)
Value: 0 issue "letsencrypt.org"
TTL: 3600 (or your preferred value)
```

This record authorizes Let's Encrypt to issue SSL/TLS certificates for your domain.

### How to Add the CAA Record

1. Log in to your DNS provider's control panel (where you manage your domain's DNS settings)
2. Navigate to the DNS records section for `colormewarm.me`
3. Add a new CAA record with the following values:
   - **Type**: CAA
   - **Name**: `@` or leave blank (for root domain) or `www` (for www subdomain)
   - **Flags**: 0
   - **Tag**: issue
   - **Value**: "letsencrypt.org"
4. Save the record
5. Wait for DNS propagation (can take up to 48 hours, but usually much faster)

### Verify CAA Record

After adding the record, you can verify it using:

```bash
dig CAA colormewarm.me
# or
dig CAA www.colormewarm.me
```

Or use online tools like:
- https://toolbox.googleapps.com/apps/dig/
- https://mxtoolbox.com/CAALookup.aspx

## Note

CAA records must be configured at your DNS provider (e.g., Cloudflare, Route 53, Namecheap, GoDaddy, etc.). They cannot be configured directly in this GitHub Pages repository. The CNAME file in this repository only tells GitHub Pages which custom domain to serve the site on.
