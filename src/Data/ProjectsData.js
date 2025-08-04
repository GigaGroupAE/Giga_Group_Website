import { IoBedOutline } from 'react-icons/io5';
import {
  FaSwimmingPool,
  FaGlassCheers,
  FaDumbbell,
  FaSpa,
  FaHeartbeat,
  FaRunning,
  FaFireAlt,
  FaChild,
  FaMosque,
  FaBookReader,
  FaBatteryFull,
  FaCar,
  FaShieldAlt,
  FaBusinessTime,
  FaClinicMedical,
  FaUserInjured,
  FaStore,
  FaMapMarkerAlt,
  FaWifi,
  FaWater,
  FaRoute,
  FaThermometerHalf,
  FaArrowUp,
  FaCamera,
  FaPlug,
  FaUtensils,
  FaHotel,
  FaMountain,
  FaBed,
  FaGamepad,
  FaConciergeBell,
  FaBuilding,
  FaCreditCard,
  FaFilm,
  FaHospital,
  FaBabyCarriage,
  FaRupeeSign,
  FaPercent,
  FaToilet,
  FaCouch,
  FaRegSquare,
  FaParking,
  FaPray,
  FaChair,
  FaDoorOpen,
  FaWind,
  FaThLarge,
  FaMicrochip,
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaGlobe,
  FaBriefcase,
  FaPaintBrush,
  FaCut,
  FaUsers,
  FaShoppingBag,
  FaCoffee,
  FaHome,
  FaGlassMartiniAlt,
  FaFire,
  FaBolt,
} from 'react-icons/fa';

export const projects = [
  {
    slug: '/goldcrest-views',
    title: 'Goldcrest Views',
    status: 'Coming Soon',
    location: 'DHA Phase 2, Islamabad',
    formTitle: 'Bookings Open Now!',
    backgroundImage: '/Goldcrest-Views-4.webp',
    description:
      'Awarded the “Best High-rise Development Award 2008” in Dubai, Giga Group proudly introduces the upgraded version of this icon to DHA Islamabad. Featuring seven 40-story towers, Goldcrest Views offers studio apartments, 1, 2, 3, and 4-bedroom luxury units, and breathtaking penthouses, redefining upscale living in the Twin Cities.',
    features: [
      { label: 'Studio', icon: <IoBedOutline size={24} /> },
      { label: '1 bedroom', icon: <IoBedOutline size={24} /> },
      { label: '2 bedroom', icon: <IoBedOutline size={24} /> },
      { label: '3 bedroom', icon: <IoBedOutline size={24} /> },
      { label: '4 bedroom', icon: <IoBedOutline size={24} /> },
      { label: '4 bedroom duplex', icon: <IoBedOutline size={24} /> },
      { label: 'Penthouse', icon: <IoBedOutline size={24} /> },
    ],
    amenitiesTitle: 'Experience Dubai’s Signature Living in Islamabad',
    amenitiesDesc:
      'Goldcrest Views brings the iconic skyline lifestyle of Dubai to Pakistan’s capital. Immerse yourself in modern architecture, luxury amenities, and high-rise comfort now closer than ever before.',
    startingFrom: 'AED 600,000',
    imageUrl: '/images/goldcrest-views-isb.webp',
    videoUrl: 'https://www.youtube.com/embed/8vDRmBfNlj0',
    gallery: [
      '/gcv1.jpeg',
      '/gcv2.jpeg',
      '/gcv3.jpeg',
      '/gcv4.jpeg',
      '/gcv5.jpeg',
      '/gcv6.jpeg',
      '/gcv7.jpeg',
    ],

    contactUsTitle: 'Invest in Tomorrow, Live in Luxury',
    contactUsdec: `
Giga Group introduces more than just homes; we bring iconic living. At Goldcrest Views, modern layouts, 5-star amenities, and panoramic views ensure every moment feels extraordinary. You can book now with just a 15% down payment, enjoy a 4-year easy installment plan, and pay 20% on possession.`,
    locationImageGallery: [
      { src: '/goldcrest-views-giga-downtown.webp', alt: 'Interior' },
      { src: '/Goldcrest-Views-4.webp', alt: 'Couple planning' },
      { src: '/sittingarea-scaled-1.webp', alt: 'Construction site' },
      { src: '/1bhk.jpg', alt: 'City view' },
    ],
    amenities: [
      { title: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { title: 'Juice Bar / Lounge', icon: <FaGlassCheers /> },
      { title: 'Gymnasium', icon: <FaDumbbell /> },
      { title: 'Sauna & Steam Room', icon: <FaSpa /> },
      { title: 'Health Club', icon: <FaHeartbeat /> },
      { title: 'Jogging Track', icon: <FaRunning /> },
      { title: 'BBQ Area', icon: <FaFireAlt /> },
      { title: 'Children Play Area', icon: <FaChild /> },
      { title: 'Mosque', icon: <FaMosque /> },
      { title: 'Library & Indoor Sports', icon: <FaBookReader /> },
      { title: 'Power Backup', icon: <FaBatteryFull /> },
      { title: 'Car Parking', icon: <FaCar /> },
      { title: '24/7 Security', icon: <FaShieldAlt /> },
    ],
    updates: [
      {
        src: '/Goldcrest-Views-Construction-Updates1.webp',
        alt: 'GoldCrest Tower construction progress - image 1',
      },
      {
        src: '/Goldcrest-Views-Construction-Updates2.webp',
        alt: 'GoldCrest Tower construction progress - image 2',
      },
      {
        src: '/Goldcrest-Views-Construction-Updates3.webp',
        alt: 'GoldCrest Tower construction progress - image 3',
      },
    ],
    amenitiesFeaturesTitle: 'Features and Amenities',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d106434.6482267791!2d73.06690929709029!3d33.52523391820261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38dfedbc825db4d3%3A0xf2067784d377d58d!2sBlock%2010%2C%20G5G2%2BF4G%20Al%20Ghurair%20Giga%2C%20Defense%20Residency%2C%20Sector%20Road%2C%20Sector%20A%20DHA%20Phase%20II%2C%20Islamabad!3m2!1d33.525261199999996!2d73.1493105!5e0!3m2!1sen!2s!4v1754322815423!5m2!1sen!2s',

    mapTitle: 'A Prime Address at Downtown Giga, DHA 2 Islamabad',
    mapDesc: `Located along the main G.T. Road, Goldcrest Views offers unmatched accessibility and convenience. Whether it's world-class shopping at Giga Mall or quality education and healthcare, everything is just steps away.

5-15 minute drive: Major schools, hospitals, and corporate offices.
30-minute drive: Islamabad International Airport and Rawalpindi.
Scenic Surroundings: Direct views of Margalla Hills and green belts.`,
    imageGalleryTitle: 'Building Design',
    imageGalleryTitleDesc: `The building itself is a marvel of modern engineering and design. It is built around a rectangular plan that offers spectacular views of the Margalla Hills and the twin cities. In addition, the tower provides panoramic views from a height never seen before in the Twin Cities. Moreover, the building also has a very bold and contemporary style. It has strong visual elements. Additionally, the design of the building’s “Finns” moves closer to each other as they stretch skywards. So, it symbolizes the aspirations of modern living.
Furthermore, the sweeping curves of the “Fins” create a visual contrast against the bold rectangular elements of the building. The colors, shadows, and textures have all been carefully selected to achieve the right contrast. Therefore, they provide a rich yet balanced composition.
`,
    featuresTitle: '',
    whyChooseTitle: 'Why Choose Goldcrest Views?',
    whyChooseDesc: `Goldcrest Views is not just another project; it’s the evolution of excellence. Brought to you by Giga Group – the trusted developers behind Giga Mall, Lignum Tower, and Defence Residency – this project embodies a legacy of award-winning developments across Dubai and Pakistan. With a strong commitment to timely delivery and investor satisfaction, Goldcrest Views ensures transparency through real-time construction updates, setting a new benchmark for quality and reliability.
`,
  },

  {
    title: 'Goldcrest Commercial',
    description:
      "Welcome to Goldcrest Commercial, a vibrant nine-story development in Downtown Giga, DHA Phase II. Designed to be Islamabad’s next commercial hotspot, it offers premium retail outlets, medical clinics, and specialty shops in a high-visibility location with heavy footfall. Whether you're launching a boutique, pharmacy, mobile store, or clinic, Goldcrest Commercial gives your business a modern, connected, and secure home.",
    formTitle: 'Retail & Medical Units for Sale in DHA Phase II, Islamabad',
    amenitiesTitle: 'Designed for Business. Built for Growth.',
    amenitiesDesc:
      'Goldcrest Commercial blends functionality with flexibility, creating a dynamic business environment across retail, healthcare, and lifestyle segments. With cutting-edge infrastructure and proximity to Giga Mall, this project offers maximum commercial exposure and long-term value.',
    features: [
      { label: 'Commercial Space', icon: <FaBusinessTime size={24} /> },
      { label: 'Medical Hub', icon: <FaClinicMedical size={24} /> },
      { label: 'Clinics', icon: <FaUserInjured size={24} /> },
      { label: 'Pharmacies', icon: <FaStore size={24} /> },
      { label: 'Retail & Kapra Market', icon: <FaStore size={24} /> },
      { label: 'Prime Location', icon: <FaMapMarkerAlt size={24} /> },
    ],
    mapTitle: 'Ideally Positioned for Business Success',
    mapDesc: `Located on Main GT Road in DHA Phase II, right in the heart of Downtown Giga, Goldcrest Commercial offers unmatched accessibility and exposure. With seamless connectivity to Islamabad, Rawalpindi, and all major commercial hubs, it ensures high visibility, consistent footfall, and long-term value for every business. Its prime location in DHA Phase II provides direct access to Islamabad Expressway and Rawalpindi, all within walking distance from Giga Mall and the surrounding communities.`,
    imageGalleryTitle: 'Goldcrest Commercial: Built for Every Business',
    imageGalleryTitleDesc: `Goldcrest Commercial is redefining business convenience with a vertically designed space that caters to every commercial need. Located in DHA Phase II, Islamabad, this dynamic project offers a variety of thoughtfully allocated floors: branded retail outlets (Ground–5th), mobile shops and food courts (6th–7th), pharmacies (7th), and a full-scale medical hub (8th–9th) for OPDs, labs, and diagnostic centers. Whether you're seeking shops or clinics for sale in Islamabad, this is the destination.
Its iconic staircase-style façade isn't just eye-catching; it supports smooth visitor flow. Inside, wide corridors, high-speed Wi-Fi, smart safety features, and fast elevators ensure comfort and efficiency. With dedicated zones for retail, healthcare, and dining, Goldcrest Commercial is more than a shopping complex; it’s a one-stop ecosystem where every business finds its perfect place.

`,
    amenities: [
      { title: 'High-Speed Wi-Fi', icon: <FaWifi size={24} /> },
      { title: 'Smoke & Flood Sensors', icon: <FaWater size={24} /> },
      { title: 'Real-Time Navigation', icon: <FaRoute size={24} /> },
      { title: 'Temperature Control', icon: <FaThermometerHalf size={24} /> },
      { title: 'Fast Elevators & Stair Lifts', icon: <FaArrowUp size={24} /> },
      { title: '24/7 CCTV Surveillance', icon: <FaCamera size={24} /> },
      { title: 'Power Backup', icon: <FaPlug size={24} /> },
      { title: 'Health Club', icon: <FaHeartbeat size={24} /> },
      { title: '24/7 Security', icon: <FaShieldAlt size={24} /> },
      { title: 'Commercial Parking', icon: <FaCar size={24} /> }, // Updated to be more commercial-friendly
    ],
    whyChooseTitle: 'Why Choose Goldcrest Commercial?',
    whyChooseDesc: `Located in the heart of Downtown Giga, Goldcrest Commercial combines smart infrastructure with high foot traffic and strong rental potential. With dedicated spaces for retail, medical, and lifestyle businesses, and backed by the trusted Giga Group, it offers a secure, high-return investment in one of Islamabad’s fastest-growing commercial zones.
`,
    status: 'Coming Soon',
    location: 'DHA Phase 2, Islamabad',
    backgroundImage: '/goldcrest-commerical.webp',

    startingFrom: 'AED 600,000',
    imageUrl: '/images/goldcrest-views-isb.webp',
    videoUrl: 'https://www.youtube.com/embed/HGhOLQ6AajU',
    gallery: [
      '/Post 4.png',
      '/Post 3.png',
      '/Post 2.png',
      '/Post5.jpg',
      '/Post6.jpg',
      '/Post7.jpg',
      '/Post8.jpg',
    ],

    contactUsTitle: 'Built by Giga Group – Trusted Since Day One',
    contactUsdec: `
Built by Giga Group—trusted since day one—Goldcrest Commercial is backed by a legacy of excellence with a global footprint and over a decade of success in DHA Islamabad. With over 10 million sq. ft. delivered across landmark projects like Giga Mall, El Ceilo, Defence Residency, and Lignum Tower, Giga Group represents trust, innovation, and timely project delivery, supported by 24/7 property management and after-sales service. Whether you’re opening a clinic, pharmacy, boutique, or electronics shop, Goldcrest Commercial offers the perfect environment for your business to thrive in one of Islamabad’s busiest commercial zones. Secure your commercial unit in the capital’s fastest-growing hub—get in touch today and unlock exclusive pre-launch offers.`,
    locationImageGallery: [
      { src: '/Goldcrest Commercial 3.jpg', alt: 'Interior' },
      { src: '/Goldcrest Commercial 2.jpg', alt: 'Couple planning' },
      { src: '/Goldcrest Commercial location.jpg', alt: 'Construction site' },
      { src: '/Gcc-4a.webp', alt: 'City view' },
    ],

    // updates: [
    //   {
    //     src: '/blog1.webp',
    //     alt: 'GoldCrest Tower construction progress - image 1',
    //   },
    //   {
    //     src: '/blog2.webp',
    //     alt: 'GoldCrest Tower construction progress - image 2',
    //   },
    //   {
    //     src: '/blog1.webp',
    //     alt: 'GoldCrest Tower construction progress - image 3',
    //   },
    // ],
    amenitiesFeaturesTitle: 'Premium Amenities ',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d106439.27574418583!2d73.07569189692255!3d33.52147371971902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38dfed007d04f201%3A0x41adcb05b88e60b5!2sG5C5%2BJ64%2C%20Main%20Grand%20Trunk%20Rd%2C%20Defense%20Housing%20Authority%2C%20DHA%20Expressway%2C%20Sector%20F%20DHA%20Phase%20II%2C%20Islamabad%2C%2044000!3m2!1d33.521501!2d73.1580931!5e0!3m2!1sen!2s!4v1754324595479!5m2!1sen!2s" ',

    featuresTitle: '',

    slug: '/goldcrest-commercial',
  },

  {
    title: 'Giga Mall & its Extension',
    description:
      'Strategically situated on GT Road in DHA Phase II, Giga Mall has become the go-to destination for shopping, dining, entertainment, and business in Islamabad since its launch in 2016. Spanning across 63 kanals and housing 200+ international and local brands, Giga Mall now expands with a 30-story extension that redefines upscale urban living and commercial opportunity.',
    formTitle: 'A Landmark Mixed-Use Development in DHA Phase II, Islamabad',
    amenitiesTitle: 'The Heart of Islamabad’s Urban Lifestyle',
    amenitiesDesc:
      'Giga Mall and its new Extension combine everything in one space: retail therapy, gourmet cuisine, hotel living, office spaces, and spiritual tranquility, making it one of the most complete mixed-use experiences in Pakistan.',
    features: [
      { label: '200+ Retail Brands', icon: <FaStore size={24} /> },
      { label: '5-Star Dining & Food Court', icon: <FaUtensils size={24} /> },
      { label: 'Luxury Hotel Apartments', icon: <FaHotel size={24} /> },
      {
        label: 'Banquet Halls & Rooftop Lounges',
        icon: <FaMountain size={24} />,
      },
      {
        label: 'Prime DHA Phase 2 Location',
        icon: <FaMapMarkerAlt size={24} />,
      },
    ],
    mapTitle: 'Ideally Positioned in DHA Phase 2, Islamabad',
    mapDesc: `Located on Main GT Road in DHA Phase 2, with direct access to Islamabad Expressway and just minutes from Bahria Town, Gulberg Greens, and Islamabad Airport, Goldcrest Commercial offers unmatched connectivity. Enjoy seamless access to major routes and premium neighborhoods across the Twin Cities, placing your business right at the center of opportunity.`,
    imageGalleryTitle: 'Islamabad’s Next Mixed-Use Destination',
    imageGalleryTitleDesc: `
Giga Mall Extension is a 30-story mixed-use landmark located in DHA Phase II, Islamabad, developed by the trusted Giga Group. This iconic project features luxury hotel apartments, premium retail outlets, fine dining restaurants, event spaces, and Pakistan’s first vertical commercial market. With modern amenities, skyline views, and prime access from GT Road, it redefines urban living and investment opportunities. The development will include Pakistan’s first vertical market, hotel apartments, 5-star restaurants, banquet halls, and fully equipped meeting rooms—all under one roof.
`,
    amenities: [
      { title: 'High-Speed Wi-Fi', icon: <FaWifi size={24} /> },
      { title: 'Smoke & Flood Sensors', icon: <FaWater size={24} /> },
      { title: 'Real-Time Navigation', icon: <FaRoute size={24} /> },
      { title: 'Temperature Control', icon: <FaThermometerHalf size={24} /> },
      { title: 'Fast Elevators & Stair Lifts', icon: <FaArrowUp size={24} /> },
      { title: '24/7 CCTV Surveillance', icon: <FaCamera size={24} /> },
      { title: 'Power Backup', icon: <FaPlug size={24} /> },
      { title: 'Health Club', icon: <FaHeartbeat size={24} /> },
      { title: '24/7 Security', icon: <FaShieldAlt size={24} /> },
      { title: 'Commercial Parking', icon: <FaCar size={24} /> }, // Updated to be more commercial-friendly
    ],
    whyChooseTitle: 'Why Giga Group?',
    whyChooseDesc: `With a portfolio spanning 18 million sq. ft. globally—including 10 million sq. ft. in Islamabad—Giga Group is recognized for its commitment to on-time delivery, landmark developments such as Giga Mall, Lignum Tower, and Goldcrest Highlife, and professional property management with dedicated investor support.
`,
    status: 'Coming Soon',
    location: 'DHA Phase 2, Islamabad',
    backgroundImage: '/GME.webp',

    startingFrom: 'AED 600,000',
    imageUrl: '/images/goldcrest-views-isb.webp',
    videoUrl: 'https://www.youtube.com/embed/8vDRmBfNlj0',
    gallery: [
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
    ],

    contactUsTitle: 'Easy Payment Plan',
    contactUsdec: `
Own a unit in this iconic project with flexible payment terms: 20% down payment, 12 quarterly installments over 3 years, and 20% on possession. Discover more than just a destination—experience Giga Mall. From shopping and dining to business, luxury living, and entertainment, Giga Mall brings everything together under one iconic address in the heart of DHA Islamabad.`,
    locationImageGallery: [
      { src: '/investments.webp', alt: 'Interior' },
      { src: '/investments.webp', alt: 'Couple planning' },
      { src: '/investments.webp', alt: 'Construction site' },
      { src: '/investments.webp', alt: 'City view' },
    ],

    updates: [
      {
        src: '/blog1.webp',
        alt: 'GoldCrest Tower construction progress - image 1',
      },
      {
        src: '/blog2.webp',
        alt: 'GoldCrest Tower construction progress - image 2',
      },
      {
        src: '/blog1.webp',
        alt: 'GoldCrest Tower construction progress - image 3',
      },
    ],
    amenitiesFeaturesTitle: 'Premium Amenities ',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',

    featuresTitle: '',

    slug: '/giga-mall-extension',
  },

  {
    title: 'Central Palace Residence',
    description:
      'After the massive success of multiple residential ventures, Giga Group proudly launches its newest icon: Central Palace Residence. Located in the heart of Downtown Giga, this modern living community is surrounded by over 2,000+ delivered apartments and promises a premium yet affordable lifestyle in DHA Phase 2, Islamabad.',
    formTitle: 'Your Dream Home in Downtown Giga, DHA Islamabad',
    amenitiesTitle: 'Where Urban Living Meets Community Comfort',
    amenitiesDesc:
      'At Central Palace Residence, every detail is crafted for a well-rounded life. From vibrant shopping zones to peaceful residential spaces and fitness, health, and family-friendly amenities, it’s all here, in one integrated project.',
    features: [
      // { label: "Studio", icon: <FaBed size={24} /> },
      { label: '1 Bedroom', icon: <FaBed size={24} /> },
      { label: '2 Bedroom', icon: <FaBed size={24} /> },
      { label: '3 Bedroom', icon: <FaBed size={24} /> },
      { label: '4 Bedroom', icon: <FaBed size={24} /> },
      {
        label: 'Entertainment & Sports Facilities',
        icon: <FaGamepad size={24} />,
      },
      {
        label: 'Prime DHA Phase 2 Location',
        icon: <FaMapMarkerAlt size={24} />,
      },
    ],
    mapTitle: 'Live in the New Urban Hub of Islamabad',
    mapDesc: `Located in Downtown Giga, DHA Phase 2, with direct access to Main GT Road, near the upcoming Rawalpindi Ring Road, and at the crossroads of Islamabad Highway, Central Palace Residence sits at the heart of one of the fastest-growing commercial communities in the Twin Cities. Downtown Giga is rapidly emerging as a major commercial hub, and Central Palace places you right at the center of it all.`,
    imageGalleryTitle: 'Introducing Central Palace Residence',
    imageGalleryTitleDesc: `
Giga Group’s latest signature development brings affordable, high-quality residences to Islamabad’s most vibrant commercial district. With everyday essentials, dining, and entertainment just an elevator ride away, it offers an all-in-one integrated lifestyle. The project features well-designed apartments with premium finishes, light-filled layouts, stylish floor tiles, branded sanitary fittings, decorative detailing, outdoor and indoor dining areas, and family-focused amenities—creating a complete living experience in the heart of the city.`,
    amenities: [
      { title: 'Commercial Shops', icon: <FaStore size={24} /> },
      {
        title: 'Restaurants & Food Courts',
        icon: <FaConciergeBell size={24} />,
      },
      { title: 'Department Stores', icon: <FaBuilding size={24} /> },
      { title: 'ATMs & Banks', icon: <FaCreditCard size={24} /> },
      { title: 'Indoor Sports Area', icon: <FaRunning size={24} /> },
      { title: 'Gaming Zone', icon: <FaGamepad size={24} /> },
      { title: 'Kids’ Play Zone', icon: <FaChild size={24} /> },
      { title: 'Outdoor Cinema', icon: <FaFilm size={24} /> },
      { title: 'Gender-Segregated Gyms', icon: <FaDumbbell size={24} /> },
      { title: 'Health Clinics & Pharmacies', icon: <FaHospital size={24} /> },
      { title: 'Sauna & Steam Room', icon: <FaSpa size={24} /> },
      { title: 'Family Daycare Center', icon: <FaBabyCarriage size={24} /> },
    ],
    whyChooseTitle: 'Why Choose Central Palace Residence?',
    whyChooseDesc: `Central Palace Residence is ideally located in the prime Downtown Giga area of DHA Phase II, right next to over 2,000 successfully delivered Giga apartments. Offering affordable living without compromising on premium standards, it’s developed by Giga Group—renowned for iconic projects like Goldcrest Views and Giga Mall. Surrounded by schools, malls, and major access points, it provides the perfect balance of modern convenience and long-term value in one of Islamabad’s most connected neighborhoods.
`,
    status: 'Coming Soon',
    location: 'DHA Phase 2, Islamabad',
    backgroundImage: '/Central-Palace-Residence-2.webp',

    startingFrom: 'AED 600,000',
    imageUrl: '/images/goldcrest-views-isb.webp',
    videoUrl: 'https://www.youtube.com/embed/8vDRmBfNlj0',
    gallery: [
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
    ],

    contactUsTitle: 'Flexible & Affordable Installment Plan',
    contactUsdec: `
With just a 25% down payment, an easy 2-year payment plan, 8 quarterly installments, and 20% on possession, owning your dream home has never been more accessible. Whether you're buying your first home, upgrading your lifestyle, or making a smart investment, Central Palace Residence offers something for everyone. Enjoy affordable living in a luxury setting, with fast-track construction already in progress. Perfect for families, professionals, and investors alike—contact us today and be part of the capital’s most sought-after residential community.`,
    locationImageGallery: [
      { src: '/investments.webp', alt: 'Interior' },
      { src: '/investments.webp', alt: 'Couple planning' },
      { src: '/investments.webp', alt: 'Construction site' },
      { src: '/investments.webp', alt: 'City view' },
    ],

    updates: [
      {
        src: '/blog1.webp',
        alt: 'GoldCrest Tower construction progress - image 1',
      },
      {
        src: '/blog2.webp',
        alt: 'GoldCrest Tower construction progress - image 2',
      },
      {
        src: '/blog1.webp',
        alt: 'GoldCrest Tower construction progress - image 3',
      },
    ],
    amenitiesFeaturesTitle: 'Features and Amenities ',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',

    featuresTitle: '',
    slug: '/central-palace-residence',
  },

  {
    title: 'Giga Business Complex',
    description:
      'For over a decade, Giga Mall has been the Twin Cities’ favorite hub for shopping, dining, and entertainment. Now, its success expands into commerce with Giga Business Complex, a prestigious corporate destination on the top four floors of the mall, also home to World Trade Center Islamabad.',
    formTitle: 'Premium Corporate Offices at the Heart of DHA Islamabad',
    amenitiesTitle: 'Commerce Meets Excellence',
    amenitiesDesc:
      'Set within Islamabad’s World Trade Center complex, Giga Business Complex offers not just office space but a gateway to limitless business growth, prestige, and convenience. Ideal for investors, startups, SMEs, and global enterprises.',
    features: [
      { label: '5th to 8th Floor Offices', icon: <FaBuilding size={24} /> },
      {
        label: 'Sizes from 360 sq. ft. to 1,000+ sq. ft.',
        icon: <FaRupeeSign size={24} />,
      },
      { label: 'Easy 4-Quarter Payment Plan', icon: <FaPercent size={24} /> },
      { label: 'High ROI & Rental Potential', icon: <FaRupeeSign size={24} /> },
      {
        label: 'Prime DHA Phase 2 Location',
        icon: <FaMapMarkerAlt size={24} />,
      },
    ],
    mapTitle: 'Your Business Address at the New Silk Route',
    mapDesc: `Located on Main GT Road in DHA Phase II, atop the prestigious Giga Mall and part of the World Trade Center Islamabad, this address commands attention. Easily accessible from both Rawalpindi and Islamabad, it places you right in the heart of a rapidly growing commercial and residential zone—offering unmatched visibility and convenience.`,
    imageGalleryTitle: 'Introducing Giga Business Complex',
    imageGalleryTitleDesc: `
A modern office complex by Giga Group, thoughtfully designed to fuel growth and entrepreneurship. With flexible office sizes, smart interiors, and investor-friendly plans, it presents a platinum business opportunity in a thriving, ready-made marketplace. Spanning the 5th to 8th floors, the project offers premium office spaces ranging from 360 sq. ft. to over 1,000 sq. ft., featuring smart layouts and unobstructed views. Perfect for startups, enterprises, and tech companies, these offices are seamlessly integrated with Giga Mall and the World Trade Center Islamabad, placing your business at the center of it all.`,
    amenities: [
      {
        title: 'Dedicated Kitchenettes & Luxury Dining',
        icon: <FaUtensils size={24} />,
      },
      { title: 'High-End Washrooms', icon: <FaToilet size={24} /> },
      {
        title: 'Executive Lounges, Terraces & Snooker Rooms',
        icon: <FaCouch size={24} />,
      },
      { title: 'Gym, Sauna, and Jacuzzi', icon: <FaDumbbell size={24} /> },
      { title: 'Express Laundry Service', icon: <FaRegSquare size={24} /> },
      {
        title: 'Secure Parking, Elevators, Fire & AC Systems',
        icon: <FaParking size={24} />,
      },
      { title: '24/7 Security Surveillance', icon: <FaShieldAlt size={24} /> },
      {
        title: 'Separate Prayer Rooms & Changing Rooms',
        icon: <FaPray size={24} />,
      },
    ],
    whyChooseTitle: 'Why Choose Giga Business Complex?',
    whyChooseDesc: `Giga Group has delivered over 18 million sq. ft. worldwide, including 10 million sq. ft. in Islamabad alone. With landmark projects like Giga Mall, Lignum Tower, and the World Trade Center, the Giga Business Complex offers you the opportunity to own a piece of a trusted and established brand. It’s a chance to secure future-focused office space, benefit from high rental and resale potential, and position your business for long-term growth in a thriving commercial hub.
`,
    status: 'Coming Soon',
    location: 'DHA Phase 2, Islamabad',
    backgroundImage: '/Gbc.webp',

    startingFrom: 'AED 600,000',
    imageUrl: '/images/goldcrest-views-isb.webp',
    videoUrl: 'https://www.youtube.com/embed/TYpIQehIO4U',
    gallery: [
      '/gbcpost1.webp',
      '/gbcpost2.webp',
      '/gbcpost3.webp',
      '/gbcpost4.webp',
      '/gbcpost5.webp',
      '/gbcpost6.webp',
      '/gbcpost7.webp',
      '/gbcpost8.webp',
    ],

    contactUsTitle: 'Your Future Office is Waiting',
    contactUsdec: `
Whether you're launching a startup, opening a branch office, or expanding operations, Giga Business Complex is your destination for growth. With multiple office sizes available, you can own your premium office suite starting from just PKR 5 million, payable in 4 easy quarterly installments. With possession in just 20 months, now is the time to secure your space in Islamabad’s most strategic business location. Contact us today and take the next step toward success.`,
    locationImageGallery: [
      { src: '/GBCGallery.webp', alt: 'Interior' },
      { src: '/GBCGallery1.webp', alt: 'Couple planning' },
      { src: '/GBCGallery2.webp', alt: 'Construction site' },
      { src: '/GBCGallery3.webp', alt: 'City view' },
    ],

    // updates: [
    //   {
    //     src: '/blog1.webp',
    //     alt: 'GoldCrest Tower construction progress - image 1',
    //   },
    //   {
    //     src: '/blog2.webp',
    //     alt: 'GoldCrest Tower construction progress - image 2',
    //   },
    //   {
    //     src: '/blog1.webp',
    //     alt: 'GoldCrest Tower construction progress - image 3',
    //   },
    // ],
    amenitiesFeaturesTitle: 'Features & Amenities',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',

    featuresTitle: '',

    slug: '/giga-business-complex',
  },

  {
    title: 'Goldcrest Highlife',
    description:
      "Brought to life by Giga Group, Goldcrest Highlife is a 3-tower residential masterpiece located in DHA Phase II, Islamabad, offering scenic views of the Twin Cities. Drawing inspiration from successful developments like Goldcrest Views I & II and Goldcrest Executive in Dubai's Jumeirah Lake Towers, this project blends international luxury with local accessibility. With an affordable 5-year installment plan, it's the perfect opportunity to own a high-end apartment in a premium location.",
    formTitle: 'Dubai-Inspired Living in DHA Phase II, Islamabad',
    amenitiesTitle: 'From Dubai to DHA – A New Way of Living In Islamaabd ',
    amenitiesDesc:
      'Goldcrest Highlife offers a lifestyle never seen before in Pakistan, modern, elegant, and full of resort-style amenities, all just minutes away from the capital’s best retail and commercial centers.',
    features: [
      {
        label: '1 Bedroom',
        icon: <FaBed size={24} />,
      },
      {
        label: '2 Bedroom',
        icon: <FaBed size={24} />,
      },
      {
        label: '3 Bedroom',
        icon: <FaBed size={24} />,
      },
      {
        label: '5-Year Easy Installment Plan',
        icon: <FaCalendarAlt size={24} />,
      },
      {
        label: 'Rooftop Infinity Pool & Lounge',
        icon: <FaSwimmingPool size={24} />,
      },
    ],
    mapTitle: 'Located in the Heart of Downtown Giga',
    mapDesc:
      'Goldcrest Highlife enjoys a prime position in DHA Phase II, Islamabad, right along the Main GT Road and just steps away from Giga Mall. Its prime location offers seamless access to both Islamabad and Rawalpindi, placing residents within minutes of top schools, shopping centers, healthcare facilities, and major city connections. Set in one of the capital’s fastest-growing neighborhoods, it combines convenience with a vibrant, upscale lifestyle.',
    imageGalleryTitle: 'Project Overview',
    imageGalleryTitleDesc: `
Goldcrest Highlife is a modern residential development comprising three architecturally striking towers, designed to cater to a wide range of lifestyles and budgets. Whether you're a first-time buyer or seeking an upgrade, the project offers spacious layouts, podium-level leisure zones, rooftop amenities, and multi-level parking within a secure, gated environment. Construction is progressing rapidly, with Giga Group working around the clock to ensure timely and even early delivery. This rapid development reflects the group’s strong commitment to delivering high-quality housing and ensuring dependable project completion.`,
    amenities: [
      {
        title: 'Infinity Swimming Pool',
        icon: <FaSwimmingPool size={24} />,
      },
      {
        title: 'Health Club and Gymnasium',
        icon: <FaDumbbell size={24} />,
      },
      {
        title: 'Juice Bar and Rooftop Lounge',
        icon: <FaGlassMartiniAlt size={24} />,
      },
      {
        title: 'Children’s Play Areas',
        icon: <FaChild size={24} />,
      },
      {
        title: 'Jogging Track',
        icon: <FaRunning size={24} />,
      },
      {
        title: 'Barbecue Area',
        icon: <FaFire size={24} />,
      },
      {
        title: 'Power Backup System',
        icon: <FaBolt size={24} />,
      },
      {
        title: 'Covered Car Parking',
        icon: <FaCar size={24} />,
      },
      {
        title: '24/7 CCTV Security and Surveillance',
        icon: <FaShieldAlt size={24} />,
      },
      {
        title: 'Community Center',
        icon: <FaUsers size={24} />,
      },
    ],
    whyChooseTitle: 'Why Choose Goldcrest Highlife ',
    whyChooseDesc: `Goldcrest Highlife offers a rare blend of international elegance and local convenience, bringing Dubai-inspired design and modern urban living to DHA Phase 2, Islamabad. With scenic views of the Twin Cities, rooftop wellness amenities, and thoughtfully designed residential spaces, it redefines high-rise living. Backed by Giga Group’s trusted legacy and delivered through a flexible 5-year installment plan, the project promises exceptional value in a vibrant, fast-growing community, making it an ideal choice for both homeowners and investors.`,
    status: 'Coming Soon',
    location: 'DHA Phase 2, Islamabad',
    backgroundImage: '/Goldcrest-Highlife-apartments-for-sale.webp',

    startingFrom: 'AED 600,000',
    imageUrl: '/images/goldcrest-views-isb.webp',
    videoUrl: 'https://www.youtube.com/embed/8vDRmBfNlj0',
    gallery: [
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
    ],

    contactUsTitle: 'Elevate Your Lifestyle at Goldcrest Highlife',
    contactUsdec: `
Whether you're seeking a smart investment, a stylish new home, or a complete lifestyle upgrade, Goldcrest Highlife offers elevated living in one of Islamabad’s most desirable locations. With exceptional amenities, a prime address near Giga Mall, and flexible payment options, this is your chance to own a high-rise apartment that delivers real value, just steps from everything that matters.`,
    locationImageGallery: [
      { src: '/investments.webp', alt: 'Interior' },
      { src: '/investments.webp', alt: 'Couple planning' },
      { src: '/investments.webp', alt: 'Construction site' },
      { src: '/investments.webp', alt: 'City view' },
    ],

    updates: [
      {
        src: '/blog1.webp',
        alt: 'GoldCrest Tower construction progress - image 1',
      },
      {
        src: '/blog2.webp',
        alt: 'GoldCrest Tower construction progress - image 2',
      },
      {
        src: '/blog1.webp',
        alt: 'GoldCrest Tower construction progress - image 3',
      },
    ],
    amenitiesFeaturesTitle: 'Features & Amenities',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',

    featuresTitle: '',

    slug: '/goldcrest-highlife',
  },

  {
    title: 'World Trade Center, Islamabad',
    description:
      "Take your business to new heights at the World Trade Center, Islamabad, a prestigious commercial development located within Giga Mall. With ready-to-book office suites and an 18-month installment plan, this corporate floor offers unmatched visibility, convenience, and prestige for enterprises of all sizes. Whether you're a startup or a multinational, this is your chance to establish a presence at Pakistan’s most strategic commercial address.",
    formTitle: 'Premium Office Suites at the Twin Cities’ Most Iconic Business Address',
    amenitiesTitle: 'Make a Statement with a World-Class Office Address ',
    amenitiesDesc:
      'With its unique architectural presence and prestigious branding, the World Trade Center Islamabad sets a new standard for corporate environments in Pakistan. It’s more than just an office; it’s a global business gateway.',
    features: [
      {
        label: 'Corporate Offices in Giga Mall',
        icon: <FaBuilding size={24} />,
      },
      {
        label: '18-Month Flexible Installment Plan',
        icon: <FaCalendarAlt size={24} />,
      },
      {
        label: 'Prime Location: Three Major Roads',
        icon: <FaMapMarkedAlt size={24} />,
      },
      {
        label: 'Connected to Global WTC Network',
        icon: <FaGlobe size={24} />,
      },
      {
        label: 'Modern, Move-In Ready Office Suites',
        icon: <FaBriefcase size={24} />,
      },
    ],
    mapTitle: 'Prime Location',
    mapDesc: `Strategically located at the commercial crossroads of the Twin Cities, the WTC, Islamabad, enjoys direct connectivity to three of the region’s major arteries. Islamabad Highway, Rawalpindi Ring Road, and the Grand Trunk (GT) Road. This central positioning ensures effortless access from all corners of Islamabad and Rawalpindi, making it a prime business address for high-growth enterprises, global brands, and corporate investors alike.`,
    imageGalleryTitle: 'Your Business, Elevated',
    imageGalleryTitleDesc: `The WTC, Islamabad, offers exclusive, move-in-ready office suites within Giga Mall’s dedicated corporate floor, now open for booking. Ideal for growing businesses, regional offices, and international ventures, these flexible spaces come with an easy 18-month payment plan. Enjoy high-speed connectivity, secure modern facilities, and direct access to retail, dining, and leisure at Giga Mall, all developed by the trusted Giga Group. As part of the World Trade Centers Association, WTC Islamabad links you to over 750,000 businesses in 100+ countries, boosting your brand visibility and unlocking global trade and investment opportunities from Pakistan’s capital.`,
    amenities: [
      {
        title: 'Super-Class Interiors',
        icon: <FaChair size={24} />,
      },
      {
        title: 'Touchless Entry Systems',
        icon: <FaDoorOpen size={24} />,
      },
      {
        title: 'Advanced Air Filtration',
        icon: <FaWind size={24} />,
      },
      {
        title: 'Customizable Layouts',
        icon: <FaThLarge size={24} />,
      },
      {
        title: 'Reception & Shared Lounges',
        icon: <FaConciergeBell size={24} />,
      },
      {
        title: 'Smart Tech Infrastructure',
        icon: <FaMicrochip size={24} />,
      },
    ],
    whyChooseTitle: 'Why Choose World Trade Center, Islamabad?',
    whyChooseDesc: `Your business deserves a global-standard home at the flagship commercial floor within Giga Mall, offering direct access to three of Islamabad’s main roads for unmatched connectivity. With high visibility and strong brand value, the WTC, Islamabad, is connected to over 300 World Trade Centers worldwide, providing a powerful international network. Developed by the trusted Giga Group, it is the ideal choice for corporates, investors, and global brands seeking a prestigious and strategically located business address.`,
    status: 'Coming Soon',
    location: 'DHA Phase 2, Islamabad',
    backgroundImage: '/wtc-giga-mall.png',

    startingFrom: 'AED 600,000',
    imageUrl: '/images/goldcrest-views-isb.webp',
    videoUrl: 'https://www.youtube.com/embed/8vDRmBfNlj0',
    gallery: [
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
    ],

    contactUsTitle: 'Own Your Office at the World Trade Center, Islamabad',
    contactUsdec: `
    Establish your business in one of the region’s most recognized commercial hubs. With flexible payments, strategic location, and global connectivity, the World Trade Center, Islamabad, offers everything you need to grow, network, and succeed.
    `,
    locationImageGallery: [
      { src: '/investments.webp', alt: 'Interior' },
      { src: '/investments.webp', alt: 'Couple planning' },
      { src: '/investments.webp', alt: 'Construction site' },
      { src: '/investments.webp', alt: 'City view' },
    ],

    updates: [
      {
        src: '/blog1.webp',
        alt: 'GoldCrest Tower construction progress - image 1',
      },
      {
        src: '/blog2.webp',
        alt: 'GoldCrest Tower construction progress - image 2',
      },
      {
        src: '/blog1.webp',
        alt: 'GoldCrest Tower construction progress - image 3',
      },
    ],
    amenitiesFeaturesTitle: 'Features & Amenities',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',

    featuresTitle: '',

    slug: '/world-trade-center-islamabad',
  },

  {
    title: 'Goldcrest Bay Sands – Karachi',
    description:
      'Welcome to Goldcrest Bay Sands, a landmark development by Giga Group, soon rising in the prestigious Crescent Bay, DHA Phase 8. With three 40-story towers offering panoramic views of the Arabian Sea, this project brings a new standard of tech-integrated, ultra-luxury seaside living to Karachi. Designed for the elite, it promises unmatched elegance, breathtaking surroundings, and world-class amenities, all in the city’s most coveted coastal zone.',
    formTitle: 'Beachfront Luxury Redefined in DHA Phase VIII',
    amenitiesTitle: 'A Coastal Icon for a Global City',
    amenitiesDesc:
      'Goldcrest Bay Sands will transform Karachi’s skyline with its towering beachfront presence. Aesthetically designed, meticulously detailed, and powered by modern living, it brings Dubai-inspired sophistication to Pakistan’s financial capital. ',
    features: [
      {
        label: '1 Bedroom',
        icon: <FaBed size={24} />,
      },
      {
        label: '2 Bedroom',
        icon: <FaBed size={24} />,
      },
      {
        label: '3 Bedroom',
        icon: <FaBed size={24} />,
      },
      {
        label: '4 and 5 Bedroom Duplex',
        icon: <FaHome size={24} />,
      },
      {
        label: 'Prime Beachfront Location',
        icon: <FaMapMarkerAlt size={24} />,
      },
    ],
    mapTitle: 'Prime Waterfront Location in Crescent Bay',
    mapDesc: `Situated in the iconic Crescent Bay, DHA Phase 8, Karachi, Goldcrest Bay Sands offers a prestigious beachfront address with uninterrupted views of the Arabian Sea. Nestled within one of the city’s most sought-after coastal zones, the project provides seamless access to Clifton, HMR Waterfront, and other urban conveniences. As Crescent Bay becomes Karachi’s leading destination for upscale living, Goldcrest Bay Sands emerges as a defining symbol of coastal luxury, exclusivity, and architectural excellence.`,
    imageGalleryTitle: 'Project Overview: Redefining Coastal Luxury',
    imageGalleryTitleDesc: `Goldcrest Bay Sands brings a new benchmark in high-end living to Karachi with three 40-story beachfront towers designed for elegance, comfort, and exclusivity. Featuring panoramic sea views, smart tech, refined interiors, and a grand entrance lobby, the project offers a complete lifestyle in Crescent Bay, DHA Phase 8. Developed by the trusted Giga Group, it continues a legacy of landmark projects like Goldcrest Views and Highlife. Positioned on the HMR Waterfront, Goldcrest Bay Sands promises a premium residential experience in one of Pakistan’s most prestigious coastal locations.`,
    amenities: [
      {
        title: 'Secure Parking Levels',
        icon: <FaParking size={24} />,
      },
      {
        title: 'Designer Interiors',
        icon: <FaPaintBrush size={24} />,
      },
      {
        title: 'Luxury Gym & Fitness Club',
        icon: <FaDumbbell size={24} />,
      },
      {
        title: 'Sauna & Wellness Spa',
        icon: <FaSpa size={24} />,
      },
      {
        title: 'Beauty Salon',
        icon: <FaCut size={24} />,
      },
      {
        title: 'Business & Meeting Lounge',
        icon: <FaUsers size={24} />,
      },
      {
        title: 'Indoor Games Complex',
        icon: <FaGamepad size={24} />,
      },
      {
        title: 'Kids Play Area & Daycare',
        icon: <FaChild size={24} />,
      },
      {
        title: 'Retail & Shopping Zone',
        icon: <FaShoppingBag size={24} />,
      },
      {
        title: 'Café & Community Hall',
        icon: <FaCoffee size={24} />,
      },
    ],
    whyChooseTitle: 'Why Choose Goldcrest Bay Sands?',
    whyChooseDesc: `Goldcrest Bay Sands offers a rare opportunity to own a residence in Crescent Bay, Karachi’s most prestigious coastal enclave. With its signature 40-story beachfront towers, the project combines breathtaking sea views, curated amenities, and beautifully designed interiors exclusively for residents. Developed by the globally trusted Giga Group, it caters to both luxury homeowners and long-term investors seeking a high-value, lifestyle-driven address in one of Pakistan’s most elite locations.`,
    status: 'Coming Soon',
    location: 'DHA Phase 2, Islamabad',
    backgroundImage: '/goldcrestbaysand.webp',

    startingFrom: 'AED 600,000',
    imageUrl: '/images/goldcrest-views-isb.webp',
    videoUrl: 'https://www.youtube.com/embed/8vDRmBfNlj0',
    gallery: [
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
      '/investments.webp',
    ],

    contactUsTitle: 'Live Where the Ocean Meets Opulence',
    contactUsdec: `
    Goldcrest Bay Sands offers a unique blend of beachfront tranquility, modern architecture, and a globally inspired lifestyle in the heart of Karachi’s most elite coastal district. From breathtaking sunrise views to serene sunset walks, it delivers an unmatched living experience along the Arabian Sea, making it the ultimate destination for those seeking refined seaside living.
    `,
    locationImageGallery: [
      { src: '/investments.webp', alt: 'Interior' },
      { src: '/investments.webp', alt: 'Couple planning' },
      { src: '/investments.webp', alt: 'Construction site' },
      { src: '/investments.webp', alt: 'City view' },
    ],

    updates: [
      {
        src: '/blog1.webp',
        alt: 'GoldCrest Tower construction progress - image 1',
      },
      {
        src: '/blog2.webp',
        alt: 'GoldCrest Tower construction progress - image 2',
      },
      {
        src: '/blog1.webp',
        alt: 'GoldCrest Tower construction progress - image 3',
      },
    ],
    amenitiesFeaturesTitle: 'Features & Amenities',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',

    featuresTitle: '',

    slug: '/goldcrest-bay-sands',
  },
];
