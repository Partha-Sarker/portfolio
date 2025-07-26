/**
 * Utility function to generate tags for projects
 */
export const generateProjectTags = (project: {
    type: string;
    featured: boolean;
    technologies: string[];
    researchAreas?: string[];
    achievements?: string[];
    title: string;
    description: string;
}): string[] => {
    const tags = new Set<string>();

    // Add type and featured status
    tags.add(project.type);
    if (project.featured) {
        tags.add('featured');
    }

    // Add all technologies
    project.technologies.forEach(tech => tags.add(tech));

    // Add research areas if available
    if (project.researchAreas) {
        project.researchAreas.forEach(area => {
            // Convert to lowercase and replace spaces with hyphens
            tags.add(area.toLowerCase().replace(/\s+/g, '-'));
        });
    }

    // Add domain-specific tags based on title and description
    const titleLower = project.title.toLowerCase();
    const descLower = project.description.toLowerCase();

    // Game development related
    if (titleLower.includes('game') || descLower.includes('game') ||
        project.technologies.includes('Unity')) {
        tags.add('game-development');
    }

    // Mobile development
    if (project.technologies.includes('Android Studio') ||
        project.technologies.includes('Java') ||
        descLower.includes('android') || descLower.includes('mobile')) {
        tags.add('mobile');
        if (descLower.includes('android')) tags.add('android');
    }

    // Web development
    if (project.technologies.some(tech =>
        ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Node.js', 'Bootstrap'].includes(tech))) {
        tags.add('web-development');
    }

    // 3D related
    if (titleLower.includes('3d') || descLower.includes('3d')) {
        tags.add('3d');
    }

    // Multiplayer
    if (titleLower.includes('multiplayer') || descLower.includes('multiplayer')) {
        tags.add('multiplayer');
    }

    // AR/VR
    if (project.technologies.includes('AR') || titleLower.includes('ar') ||
        titleLower.includes('augmented')) {
        tags.add('augmented-reality');
    }

    // Computer Vision
    if (project.technologies.includes('OpenCV') ||
        descLower.includes('computer vision') ||
        descLower.includes('image processing')) {
        tags.add('computer-vision');
    }

    // Machine Learning / AI
    if (descLower.includes('machine learning') || descLower.includes('ai')) {
        tags.add('machine-learning');
    }

    // Research specific
    if (project.type === 'research') {
        tags.add('research');
        if (descLower.includes('thesis')) tags.add('thesis');
        if (descLower.includes('user study') || descLower.includes('experiment')) {
            tags.add('user-study');
        }
    }

    // Academic specific
    if (project.type === 'academic') {
        if (project.achievements && project.achievements.length > 0) {
            tags.add('award-winning');
            if (project.achievements.some(a => a.toLowerCase().includes('hackathon'))) {
                tags.add('hackathon');
            }
        }
    }

    // Personal project specific
    if (project.type === 'personal') {
        tags.add('self-initiated');
        if (descLower.includes('crawler') || descLower.includes('scraping')) {
            tags.add('web-scraping');
        }
        if (descLower.includes('automation')) {
            tags.add('automation');
        }
    }

    return Array.from(tags);
};