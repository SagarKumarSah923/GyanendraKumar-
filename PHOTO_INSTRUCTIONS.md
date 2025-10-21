# Photo Setup Instructions

## How to Add Advocate Gayendra Kumar's Photo

### Step 1: Prepare Your Photo
- **Format**: JPG or PNG
- **Size**: 400x400 pixels (square aspect ratio recommended)
- **File Size**: Under 500KB for optimal loading
- **Quality**: High resolution, professional appearance

### Step 2: Replace the Placeholder
1. Navigate to the `public/images/` folder
2. Delete the placeholder file `advocate-gayendra-kumar.jpg`
3. Add your actual photo with the exact filename: `advocate-gayendra-kumar.jpg`

### Step 3: Photo Requirements
The photo should be:
- Professional headshot or portrait
- Clear, well-lit image
- Advocate in formal attire (lawyer's coat preferred)
- Neutral or professional background
- High quality and sharp

### Step 4: Where the Photo Appears
The photo will be displayed in:
1. **Hero Section** - Large circular photo on the right side
2. **About Section** - Medium circular photo above the text

### Step 5: Alternative File Names
If you want to use a different filename, update these files:
- `src/components/Hero.js` - Line 40: `src="/images/advocate-gayendra-kumar.jpg"`
- `src/components/About.js` - Line 59: `src="/images/advocate-gayendra-kumar.jpg"`

### Step 6: Test the Website
After adding the photo:
1. Run `npm start` to start the development server
2. Check that the photo appears correctly in both sections
3. Test on mobile devices to ensure responsive design works

### Troubleshooting
- **Photo not showing**: Check the file path and filename
- **Photo distorted**: Ensure the image is square (1:1 aspect ratio)
- **Slow loading**: Compress the image to reduce file size
- **Poor quality**: Use a higher resolution source image

### Recommended Photo Editing
- Crop to square format
- Adjust brightness/contrast if needed
- Remove background if desired (optional)
- Ensure professional appearance

The photo will automatically be styled with:
- Circular border
- Professional shadow effects
- Hover animations
- Responsive sizing for mobile devices
