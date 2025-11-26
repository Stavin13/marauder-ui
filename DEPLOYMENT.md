# Deploying to Vercel

## Quick Deploy

### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Accept defaults for most questions
   - Your app will be deployed!

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

## Important Notes

### Web Serial API Requirements

⚠️ **The Web Serial API only works in these conditions**:
- ✅ HTTPS (Vercel provides this automatically)
- ✅ localhost (for development)
- ✅ Secure contexts only
- ❌ Does NOT work on HTTP sites

### Browser Compatibility

The Web Serial API is supported in:
- ✅ Chrome/Edge (version 89+)
- ✅ Opera (version 75+)
- ❌ Firefox (not supported)
- ❌ Safari (not supported)

Users must use Chrome, Edge, or Opera to connect to hardware.

### Demo Mode

Your app includes a demo mode that works without hardware:
- Click "Try Demo" button when not connected
- Perfect for showcasing the UI
- Works in all browsers

## Configuration Files

### vercel.json
Already configured with:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing support

### vite.config.js
Automatically uses:
- Root path (`/`) on Vercel
- `/marauder-ui/` path for local development

## Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your domain
4. Update DNS records as instructed

## Environment Variables

If you need environment variables:

1. In Vercel dashboard: Settings → Environment Variables
2. Add variables
3. Redeploy for changes to take effect

## Troubleshooting

### Build fails
- Check `package.json` has all dependencies
- Run `npm install` locally first
- Check build logs in Vercel dashboard

### Serial API not working
- Ensure you're accessing via HTTPS (Vercel URL)
- Use Chrome, Edge, or Opera browser
- Check browser console for errors
- Device must be plugged in before clicking Connect

### 404 errors on refresh
- The `vercel.json` config handles this
- If issues persist, check the rewrites configuration

## Local Testing Before Deploy

Test the production build locally:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

Visit the preview URL to test before deploying.

## Continuous Deployment

Once connected to GitHub:
- Every push to main branch auto-deploys
- Pull requests get preview deployments
- Rollback to previous deployments anytime

## Cost

- Vercel Free tier includes:
  - Unlimited personal projects
  - HTTPS by default
  - 100GB bandwidth/month
  - Perfect for this project!
