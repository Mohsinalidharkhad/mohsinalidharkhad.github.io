const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Serve static files from the root directory
app.use(express.static(__dirname));

// Enable directory listing for debugging
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Endpoint to get list of photos
app.get('/api/photos', (req, res) => {
    const photosDir = path.join(__dirname, 'assets', 'images', 'photography');
    console.log('Attempting to read photos from directory:', photosDir);
    
    // Check if directory exists
    if (!fs.existsSync(photosDir)) {
        console.error('Photos directory does not exist:', photosDir);
        return res.status(500).json({ error: 'Photos directory not found' });
    }

    fs.readdir(photosDir, (err, files) => {
        if (err) {
            console.error('Error reading photos directory:', err);
            return res.status(500).json({ error: 'Failed to read photos directory' });
        }
        
        console.log('Found files in directory:', files);
        
        // Filter for image files and create photo objects
        const photos = files
            .filter(file => /\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/i.test(file))
            .sort() // Sort files alphabetically
            .map((file, index) => ({
                id: index + 1,
                src: `/assets/images/photography/${file}`, // Add leading slash
                title: `Photography ${index + 1}`,
                description: file.split('.')[0].replace(/_/g, ' ') // Use filename as description
            }));
        
        console.log('Processed photos:', photos);
        res.json(photos);
    });
});

// Handle all other routes by serving index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Static files are being served from: ${__dirname}`);
}); 