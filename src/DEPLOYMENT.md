# Deployment Guide

This guide covers how to deploy the Digital Youth ICT Academy website to various hosting platforms.

## Prerequisites

- Node.js 18+ 
- npm or yarn package manager
- Git repository

## Build Process

The application uses Vite as the build tool. To create a production build:

```bash
npm install
npm run build
```

This will create a `dist/` directory with optimized static files ready for deployment.

## Deployment Platforms

### Netlify

1. **Automatic Deployment (Recommended)**
   - Connect your Git repository to Netlify
   - Build settings are configured in `netlify.toml`
   - Automatic deployments on push to main branch

2. **Manual Deployment**
   ```bash
   npm run build
   npx netlify-cli deploy --prod --dir=dist
   ```

### Vercel

1. **Automatic Deployment (Recommended)**
   - Connect your Git repository to Vercel
   - Configuration is in `vercel.json`
   - Automatic deployments on push to main branch

2. **Manual Deployment**
   ```bash
   npm run build
   npx vercel --prod
   ```

### GitHub Pages

1. **Using GitHub Actions** (Create `.github/workflows/deploy.yml`)
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

### Traditional Web Hosting

1. Build the application:
   ```bash
   npm run build
   ```

2. Upload the entire `dist/` folder contents to your web server's public directory

3. Ensure your web server is configured to:
   - Serve `index.html` for all routes (SPA routing)
   - Set proper MIME types for static assets
   - Enable gzip compression

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```bash
# Copy from .env.example
cp .env.example .env.local
```

Update the variables with your production values.

## Performance Optimization

The build is already optimized with:
- Code splitting
- Asset optimization
- Tree shaking
- Compression
- Caching headers (configured in hosting configs)

## Domain Configuration

1. **Custom Domain**: Configure your DNS to point to your hosting provider
2. **SSL/HTTPS**: Most hosting providers offer automatic SSL certificates
3. **CDN**: Consider using a CDN for better global performance

## Monitoring and Analytics

Consider adding:
- Google Analytics (add tracking ID to environment variables)
- Error monitoring (Sentry, LogRocket, etc.)
- Performance monitoring (Lighthouse CI)

## Troubleshooting

### Common Issues

1. **Routing Issues**: Ensure your hosting platform supports SPA routing
2. **Asset Loading**: Check that all static assets are being served correctly
3. **CORS Issues**: Verify API endpoints allow requests from your domain

### Build Errors

1. Check Node.js version compatibility
2. Clear node_modules and reinstall dependencies
3. Verify all environment variables are set correctly

## Rollback Strategy

1. **Git-based hosting**: Revert to previous commit
2. **Manual deployment**: Keep previous build artifacts as backup
3. **DNS**: Consider using staging domains for testing

## Security Considerations

1. **Environment Variables**: Never commit sensitive data to Git
2. **HTTPS**: Always use HTTPS in production
3. **Headers**: Security headers are configured in hosting configs
4. **Dependencies**: Regularly update dependencies for security patches

## Support

For deployment issues:
- Check hosting provider documentation
- Review build logs for errors
- Contact hosting support if needed