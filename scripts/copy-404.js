// GitHub Pages serves static files, so a direct load of a client-side route
// like /roadmap or /schedule 404s (there's no literal file at that path).
// The standard fix: duplicate the built index.html as 404.html. GitHub
// serves that on any unmatched path, and React Router takes over from there
// once the app loads.
import { copyFileSync } from 'fs';

copyFileSync('dist/index.html', 'dist/404.html');
