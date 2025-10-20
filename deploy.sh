#!/bin/bash

# Build static site for S3 deployment
echo "🏗️  Building static site..."
npm run build

# Check if build succeeded
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📦 Static files are in the 'out/' directory"
    echo ""
    echo "To deploy to S3:"
    echo "  aws s3 sync out/ s3://your-bucket-name --delete"
    echo ""
    echo "Or manually upload the contents of 'out/' to your S3 bucket"
else
    echo "❌ Build failed!"
    exit 1
fi
