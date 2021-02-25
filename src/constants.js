const env = process.env.NODE_ENV || 'development';
const serverIP = 'localhost';
const serverPort = env === 'production' ? 3000 : 9632;
export default {

    STATIC_IMAGES_PATH: '/staticImages/',
    ANONYM_IMAGE_PATH: '/staticImages/anonym.png',
    BASE_URL: `http://${ serverIP }:${ serverPort }/`,
    publicURL: env === 'production'
        ? `http://${ serverIP }:80/images/`
        : `http://${ serverIP }:${ serverPort }/public/images/`,
    FooterBottomItems:[
        {
            index: '1',
            items: [
                'Agency & Consulting',
                'Analytics',
                'Automotive',
                'Bar & Brewery',
                'Beauty & Cosmetics',
                'Beer, Wine & Spirits',
                'Bikes Brand',
                'Biotech',
                'Bots & AI',
                'Cannabis & CBD',
                'Catering',
            ],
        },   {
            index: '2',
            items: [
                'Cleaning',
                'Co-Working Space Names',
                'Coffee',
                'Construction & Architecture',
                'Crowdfunding',
                'Cryptocurrency, Blockchain',
                'Dating & Relationship',
                'Daycare',
                'Dental',
                'Drone',
                'E-Commerce & Retail',
            ],
        },   {
            index: '3',
            items: [
                'Education & Training',
                'Entertainment & Arts',
                'Event Planning & Services',
                'Events & Conferences',
                'Fashion & Clothing',
                'Finance',
                'Fintech (Finance Technology)',
                'Fitness & Gym',
                'Food & Drink',
                'Food Delivery & Meal Kits',
                'Food Truck',

            ],
        },   {
            index: '4',
            items: [
                'Footwear',
                'Furniture & Home Furnishings',
                'Games & Recreational',
                'Gaming',
                'Green & Organic',
                'Health & Wellness',
                'Home',
                'Home & Garden',
                'Insurance',
                'Interior Design',
                'Internet of Things (IOT)',
                'Jewelry',
                'Kids & Baby',
                'Landscaping',
                'Legal, Attorney, Law',
                'Life Coach / Motivational',
                'Manufacturing',
                'Marketing & Advertising',
                'Medical & Dental',
                'Mobile App',
                'Mortgage',
                'Movies & TV',
                'Music & Audio',
                'News & Media',
                'Non-Profit & Community',
                'Oil and Gas',
                'Outdoor & Adventure',
                'Payment',
                'Payroll',
                'Pets',
                'Pharma',
                'Photography',
                'Podcast',
                'Politics/Government',
                'Professional Services',
                'Property Management',
                'Real Estate',
                'Recruitment & Staffing',
                'Restaurants',
                'Sales & Marketing',
                'Security',
                'Senior Living and Care',
                'Social & Networking',
                'Solar Power and Green Energy',
                'Something Else',
                'Spas & Salons',
                'Sports',
                'Startup Incubator',
                'Storage',
                'Tech, Internet, Software',
                'Transportation',
                'Travel & Hotel',
                'Tutoring &bTest Prep',
                'Venture Capital & Investment',
                'Video, Books & Magazines',
                'Virtual Reality (VR) and Augmented Reality (AR) Company',
                'Vitamins and Supplements',
                'Weddings & Bridal',

            ],
        },
    ],

    ButtonGroupItems: [
        {
            title: "yes",
            items: "The Domain should exactly match the name"
        },
        {
            title: "yes",
            items: "But minor variations are allowed (Recommended)"
        },
        {
            title: "no",
            items: "I'm only looking for a name, not a Domain"
        }
    ],
    FooterItems: [
        {
            title: 'SQUADHELP',
            items: [
                'About',
                'Contact',
                'How It Works?',
                'Testimonials',
                'Our Work',
            ],
        },
        {
            title: 'RESOURCES',
            items: [
                'How It Works',
                'Become a Creative',
                'Business Name Generator',
                'Discussion Forum',
                'Blog',
                'Download eBook',
                'Pricing',
                'Help & FAQs',
            ],
        },
        {
            title: 'OUR SERVICES',
            items: [
                'Naming',
                'Logo Design',
                'Taglines',
                'Premium Names For Sale',
                'Creative Owned Names For Sale',
                'Audience Testing',
                'Trademark Research & Filling',
                'Managed Agency Service',
            ],
        },
        {
            title: 'LEGAL',
            items: [
                'Terms of Service',
                'Privacy Policy',
                'Cookie Policy',
            ],
        },
    ],
};