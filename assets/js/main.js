/**
 * ==========================================================================
 * AUTONOVA — PREMIUM AUTOMOTIVE WEBSITE
 * Shared Vanilla JavaScript (ES6+)
 * Dataset, Filtering, Sorting, Gallery Lightbox, Form Validation & Animations
 * ==========================================================================
 */

(() => {
  'use strict';

  /* ------------------------------------------------------------------------
     1. SHARED VEHICLE DATASET (100% Matched to assets/images/1.jpg - 42.jpg)
     ------------------------------------------------------------------------ */
  const AUTONOVA_VEHICLES = [
    {
      id: 'hyundai-tucson-2025',
      manufacturer: 'Hyundai',
      model: 'Tucson Signature AWD',
      year: 2025,
      category: 'SUV',
      price: 38900,
      displayPrice: '₹28.99 Lakh*',
      transmission: 'Automatic',
      fuel: 'Petrol',
      mileage: '1,200 mi',
      mileageNum: 1200,
      engine: '2.0L Smartstream Petrol (156 PS)',
      seating: '5 Seater',
      economy: '14.5 km/l',
      colour: 'Fiery Red Pearl',
      availability: 'In Stock — Showroom Ready',
      featured: true,
      image: 'assets/images/hero-tucson.jpg',
      imageAlt: '2025 Hyundai Tucson SUV in Fiery Red Pearl parked in a curved glass architectural showroom',
      description: [
        'Finished in Fiery Red Pearl and showcased in our flagship architectural gallery, the 2025 Hyundai Tucson Signature combines parametric jewel dark-chrome grille geometry with whisper-quiet SUV refinement. Its 2.0L Smartstream petrol powertrain and smooth 6-speed automatic transmission deliver effortless city and highway poise.',
        'Equipped with Level 2 ADAS SmartSense, a panoramic glass sunroof, ventilated leather seating, and dual 10.25-inch digital displays, it sets the benchmark for modern family and executive mobility.'
      ],
      equipment: [
        'Dual 10.25-Inch Digital Cluster & Touchscreen Infotainment',
        'Parametric Hidden LED Daytime Running Lamps',
        'Panoramic Sunroof & Dual-Zone Climate Control',
        'Heated & Ventilated Front Leather Seats',
        '360° Surround View Monitor & Blind-Spot View Monitor',
        '18-Inch Diamond-Cut Alloy Wheels',
        'Smart Power Tailgate & Keyless Entry',
        'Hyundai SmartSense Level 2 ADAS Suite'
      ],
      gallery: [
        { src: 'assets/images/hero-tucson.jpg', label: 'Main Exterior — Architectural Glass Showroom View' },
        { src: 'assets/images/7.jpg', label: 'Showroom Perspective — Multi-Segment Dealership Floor' },
        { src: 'assets/images/31.jpg', label: 'Front Detail — 3D Parametric Grille & Front Camera' },
        { src: 'assets/images/24.jpg', label: 'Interior Cabin — Panoramic Glass Sunroof & Leather Seating' },
        { src: 'assets/images/26.jpg', label: 'Dashboard Interface — Digital Driver Cluster & ADAS Touchscreen' },
        { src: 'assets/images/35.jpg', label: 'Certified Workshop — 150-Point Engine & Mechanical Check' }
      ]
    },
    {
      id: 'mercedes-s580',
      manufacturer: 'Mercedes-Benz',
      model: 'S 580 4MATIC Executive',
      year: 2024,
      category: 'Sedan',
      price: 126900,
      transmission: 'Automatic',
      fuel: 'Hybrid',
      mileage: '1,850 mi',
      mileageNum: 1850,
      engine: '4.0L V8 Biturbo + 48V EQ Boost (496 hp)',
      seating: '5 Adults',
      colour: 'Obsidian Black Metallic',
      availability: 'In Stock — Showroom Ready',
      featured: true,
      image: 'assets/images/12.jpg',
      imageAlt: '2024 Mercedes-Benz S 580 4MATIC in Obsidian Black Metallic parked outside an architectural plaza',
      description: [
        'Finished in Obsidian Black Metallic over a diamond-quilted Cognac and Black Nappa leather cabin, this 2024 Mercedes-Benz S 580 4MATIC represents flagship executive refinement. Its 4.0-litre twin-turbocharged V8 pairs with a 48-volt integrated starter-generator for effortless, near-silent surge and composed highway cruising.',
        'Inside, the dual widescreen cockpit integrates MBUX navigation, acoustic laminated glass, active ambient lighting, and E-ACTIVE BODY CONTROL air suspension engineered to isolate occupants from road imperfections.'
      ],
      equipment: [
        'Dual-Screen MBUX Touchscreen Infotainment',
        'Wireless Apple CarPlay & Android Auto',
        'Quilted Nappa Leather Heated & Ventilated Seats',
        '4-Zone Thermotronic Automatic Climate Control',
        '360° Surround-View Parking Assistance',
        '20-Inch Multi-Spoke AMG Forged Alloy Wheels',
        'KEYLESS-GO Flush Door Handles & Hands-Free Access',
        'Digital LED Headlamps with Adaptive Highbeam Assist'
      ],
      gallery: [
        { src: 'assets/images/12.jpg', label: 'Main Exterior — Front Three-Quarter Architectural View' },
        { src: 'assets/images/2.jpg', label: 'Showroom Perspective — Flagship Mercedes-Benz Lineup' },
        { src: 'assets/images/28.jpg', label: 'Wheel & Brake Detail — 20-Inch AMG Multi-Spoke Alloy & Caliper' },
        { src: 'assets/images/30.jpg', label: 'Lighting Detail — Digital LED Headlamp Projection' },
        { src: 'assets/images/22.jpg', label: 'Interior Cabin — Quilted Nappa Leather & Turbine Air Vents' },
        { src: 'assets/images/25.jpg', label: 'Dashboard Telemetry — Configurable Digital Instrument Cluster' }
      ]
    },
    {
      id: 'mclaren-720s',
      manufacturer: 'McLaren',
      model: '720S Performance Coupe',
      year: 2023,
      category: 'Coupe',
      price: 284500,
      transmission: 'Automatic',
      fuel: 'Petrol',
      mileage: '2,400 mi',
      mileageNum: 2400,
      engine: '4.0L Twin-Turbocharged V8 (710 hp)',
      seating: '2 Adults',
      colour: 'Memphis Red Metallic',
      availability: 'In Stock — Collector Vault',
      featured: true,
      image: 'assets/images/hero-mclaren.jpg',
      imageAlt: '2023 McLaren 720S Performance Coupe in Memphis Red Metallic inside a curved glass luxury showroom',
      description: [
        'Sculpted around McLaren’s carbon-fibre Monocage II chassis and finished in striking Memphis Red Metallic, the 720S Performance Coupe blends aerodynamic purity with supercar usability. Dihedral doors incorporate integrated air channels that direct cooling airflow straight to the mid-mounted 4.0L twin-turbo V8.',
        'Proactive Chassis Control II hydraulic suspension allows seamless transition from supple grand-touring compliance to razor-sharp track precision at the turn of the cockpit mode dial.'
      ],
      equipment: [
        'Central Portrait Infotainment & IRIS Navigation',
        'Variable Drift Control & Active Dynamics Panel',
        'Carbon-Fibre Monocage II Passenger Cell',
        'Dual-Zone Climate Control & Alcantara Trim',
        'Front & Rear Parking Sensors with Rear Camera',
        'Lightweight Twin-Spoke Forged Alloy Wheels',
        'Electrochromic Glass Canopy & Dihedral Doors',
        'High-Intensity LED Automatic Headlights'
      ],
      gallery: [
        { src: 'assets/images/hero-mclaren.jpg', label: 'Showroom Stage — Memphis Red 720S in Architectural Pavilion' },
        { src: 'assets/images/11.jpg', label: 'Main Exterior — Memphis Red Three-Quarter Front View' },
        { src: 'assets/images/9.jpg', label: 'Showroom Gallery — Exotic Supercar Collection Display' },
        { src: 'assets/images/29.jpg', label: 'Rear Three-Quarter Detail — Sculpted Fender & LED Taillight' },
        { src: 'assets/images/28.jpg', label: 'Side Wheel Profile — Forged Alloy & Drilled Brake Rotor' },
        { src: 'assets/images/23.jpg', label: 'Interior Cockpit — Flat-Bottom Steering Wheel & Controls' }
      ]
    },
    {
      id: 'porsche-taycan-turbo-s',
      manufacturer: 'Porsche',
      model: 'Taycan Turbo S',
      year: 2024,
      category: 'Electric',
      price: 194800,
      transmission: 'Automatic',
      fuel: 'Electric',
      mileage: '1,450 mi',
      mileageNum: 1450,
      engine: '800V Dual-Motor AWD (750 hp Overboost)',
      seating: '4 Adults',
      colour: 'Carrara White Metallic',
      availability: 'In Stock — Available Today',
      featured: true,
      image: 'assets/images/hero-taycan.jpg',
      imageAlt: '2024 Porsche Taycan Turbo S in Ice Silver Metallic inside a curved white architectural showroom',
      description: [
        'The 2024 Porsche Taycan Turbo S pairs unmistakable Stuttgart sports car proportions with an 800-volt dual-motor electric architecture. Capable of ultra-rapid DC fast charging up to 270 kW, it replenishes from 5% to 80% state of charge in just over 22 minutes under optimal conditions.',
        'Equipped with Rear-Axle Steering, Porsche Torque Vectoring Plus, and a curved freestanding digital instrument cluster, it delivers authentic sports-sedan poise on every road.'
      ],
      equipment: [
        'Curved 16.8-Inch Digital Driver Display & PCM Touchscreen',
        '800-Volt DC Ultra-Fast Charging Architecture',
        'Adaptive Three-Chamber Air Suspension (PASM)',
        'Smartphone Integration with Wireless Charging Pad',
        'ParkAssist Front & Rear with Surround View',
        '21-Inch Mission E Design Aero Alloy Wheels',
        'Porsche Entry & Drive Keyless Access',
        'LED-Matrix Design Headlights Including PDLS Plus'
      ],
      gallery: [
        { src: 'assets/images/hero-taycan.jpg', label: 'Showroom Stage — Taycan Turbo S in Architectural Pavilion' },
        { src: 'assets/images/21.jpg', label: 'Main Exterior — Carrara White Taycan Turbo S at IONITY Hub' },
        { src: 'assets/images/16.jpg', label: 'Front Three-Quarter — Urban Fast-Charging Plaza View' },
        { src: 'assets/images/28.jpg', label: 'Side Detail — Performance Alloy Wheel & Brake Assembly' },
        { src: 'assets/images/29.jpg', label: 'Rear Detail — Sculpted Rear Haunches & LED Light Strip' },
        { src: 'assets/images/23.jpg', label: 'Interior Cockpit — Sport Steering Wheel & Drive Mode Dial' }
      ]
    },
    {
      id: 'mercedes-eqc-400',
      manufacturer: 'Mercedes-Benz',
      model: 'EQC 400 4MATIC AMG Line',
      year: 2023,
      category: 'SUV',
      price: 64500,
      transmission: 'Automatic',
      fuel: 'Electric',
      mileage: '6,200 mi',
      mileageNum: 6200,
      engine: 'Dual-Motor Electric 4MATIC (408 hp / 80 kWh)',
      seating: '5 Adults',
      colour: 'Obsidian Black Metallic',
      availability: 'In Stock — Available Today',
      featured: true,
      image: 'assets/images/18.jpg',
      imageAlt: '2023 Mercedes-Benz EQC 400 4MATIC Electric SUV in Obsidian Black with AMG wheels at charging bay',
      description: [
        'Designed for quiet, zero-emission family versatility, the Mercedes-Benz EQC 400 4MATIC AMG Line combines dual-motor all-wheel-drive traction with vault-like cabin insulation. Its 80 kWh lithium-ion battery system supports convenient AC home charging and rapid DC station top-ups.',
        'With generous rear legroom, power tailgate access, and intelligent recuperation paddles behind the steering wheel, it makes daily electric SUV ownership effortless.'
      ],
      equipment: [
        'MBUX Widescreen Cockpit with EV Route Intelligence',
        'Apple CarPlay & Android Auto Smartphone Integration',
        'Pre-Entry Climate Control via Mobile App',
        'Active Parking Assist with PARKTRONIC Camera',
        '20-Inch AMG Multi-Spoke Bi-Colour Alloy Wheels',
        'KEYLESS-GO Comfort Package & Power Tailgate',
        'Acoustic Comfort Package with Laminated Safety Glass',
        'MULTIBEAM LED Headlamps with Continuous Highbeam'
      ],
      gallery: [
        { src: 'assets/images/18.jpg', label: 'Main Exterior — Obsidian Black EQC 400 at Charging Bay' },
        { src: 'assets/images/20.jpg', label: 'Rear Three-Quarter — Solar Canopy EV Fast-Charging Port' },
        { src: 'assets/images/31.jpg', label: 'Front Detail — Chrome Grille Trim & Front Parking Camera' },
        { src: 'assets/images/28.jpg', label: 'Wheel Detail — AMG Multi-Spoke Alloy & Ventilated Disc' },
        { src: 'assets/images/22.jpg', label: 'Interior Cabin — Quilted Leather Seating & Dual Displays' },
        { src: 'assets/images/26.jpg', label: 'Dashboard Interface — Smart ADAS & Energy Management UI' }
      ]
    },
    {
      id: 'hyundai-ioniq-5',
      manufacturer: 'Hyundai',
      model: 'IONIQ 5 Limited AWD',
      year: 2024,
      category: 'Hatchback',
      price: 52800,
      transmission: 'Automatic',
      fuel: 'Electric',
      mileage: '3,100 mi',
      mileageNum: 3100,
      engine: '77.4 kWh Dual-Motor AWD (320 hp)',
      seating: '5 Adults',
      colour: 'Atlas White',
      availability: 'In Stock — Available Today',
      featured: false,
      image: 'assets/images/15.jpg',
      imageAlt: '2024 Hyundai IONIQ 5 Limited AWD in Atlas White with Parametric Pixel LED headlights',
      description: [
        'Built on the dedicated E-GMP electric architecture with a flat lounge floor and 3,000 mm wheelbase, the 2024 Hyundai IONIQ 5 Limited AWD reimagines the modern five-door hatchback crossover. Crisp origami body creases and Parametric Pixel LED lamps give it unmistakable street presence.',
        'Ultra-fast 800V charging capability, Vehicle-to-Load (V2L) power outlets, and sliding rear seats make it equally suited to city commuting and weekend road trips.'
      ],
      equipment: [
        'Dual 12.3-Inch Panoramic Touchscreen & Digital Gauge Cluster',
        'Parametric Pixel LED Headlights & Taillights',
        'Vehicle-to-Load (V2L) Bi-Directional Power Outlet',
        'Dual-Zone Automatic Climate Control with Heat Pump',
        'Surround View Monitor & Blind-Spot View Monitor',
        '19-Inch Aero-Optimized Alloy Wheels',
        'Smart Power Tailgate & Flush Auto-Retracting Handles',
        'Highway Driving Assist 2 (HDA 2) Adaptive Cruise'
      ],
      gallery: [
        { src: 'assets/images/15.jpg', label: 'Main Exterior — Atlas White IONIQ 5 Three-Quarter Front View' },
        { src: 'assets/images/20.jpg', label: 'Rear Three-Quarter — Charging Port & Solar Station' },
        { src: 'assets/images/30.jpg', label: 'Lighting Detail — Illuminated LED Headlamp Signature' },
        { src: 'assets/images/26.jpg', label: 'Interior Dashboard — Widescreen Infotainment & ADAS Display' },
        { src: 'assets/images/23.jpg', label: 'Cockpit View — Multifunction Steering Wheel & Controls' },
        { src: 'assets/images/35.jpg', label: 'Certified Inspection — 150-Point Front Bay Verification' }
      ]
    },
    {
      id: 'polestar-4',
      manufacturer: 'Polestar',
      model: '4 Long Range Dual Motor',
      year: 2024,
      category: 'Electric',
      price: 68900,
      transmission: 'Automatic',
      fuel: 'Electric',
      mileage: '1,150 mi',
      mileageNum: 1150,
      engine: '100 kWh Dual-Motor AWD (544 hp)',
      seating: '5 Adults',
      colour: 'Storm Grey Metallic',
      availability: 'In Stock — Showroom Ready',
      featured: false,
      image: 'assets/images/17.jpg',
      imageAlt: '2024 Polestar 4 Long Range Dual Motor in Storm Grey Metallic parked in an urban architectural plaza',
      description: [
        'Combining the aerodynamic silhouette of a coupe with the spaciousness of an SUV, the 2024 Polestar 4 Long Range Dual Motor delivers 544 horsepower and an expansive panoramic cabin. Its minimalist Scandinavian exterior in Storm Grey Metallic features dual-blade LED front lighting and frameless doors.',
        'Inside, sustainable tailored knit upholstery pairs with a 15.4-inch landscape central display powered by built-in Google Automotive Services.'
      ],
      equipment: [
        '15.4-Inch Landscape Touchscreen with Google Built-In',
        'Full-Length Panoramic Glass Roof with UV Protection',
        'ZF Semi-Active Damper Suspension System',
        '3-Zone Electronic Climate Control with Cabin Pre-Conditioning',
        '12-Camera SuperVision ADAS & 360° Parking View',
        '20-Inch Aero Forged Alloy Wheels',
        'Digital Key Plus & Ultra-Wideband Keyless Entry',
        'High-Definition Digital Rear-View Mirror'
      ],
      gallery: [
        { src: 'assets/images/17.jpg', label: 'Main Exterior — Storm Grey Polestar 4 Three-Quarter View' },
        { src: 'assets/images/20.jpg', label: 'Rear Three-Quarter — Fast-Charging Bay Connection' },
        { src: 'assets/images/30.jpg', label: 'Front Detail — Dual-Blade Adaptive LED Lighting' },
        { src: 'assets/images/24.jpg', label: 'Interior Cabin — Panoramic Glass Roof & Lounge Seating' },
        { src: 'assets/images/26.jpg', label: 'Dashboard Display — 15.4-Inch Landscape Infotainment UI' },
        { src: 'assets/images/25.jpg', label: 'Driver Cluster — Precision Digital Telemetry' }
      ]
    },
    {
      id: 'mercedes-e300d',
      manufacturer: 'Mercedes-Benz',
      model: 'E 300 d AMG Line (W214)',
      year: 2024,
      category: 'Sedan',
      price: 72500,
      transmission: 'Automatic',
      fuel: 'Diesel',
      mileage: '2,900 mi',
      mileageNum: 2900,
      engine: '2.0L Turbo-Diesel 48V Mild-Hybrid (255 hp)',
      seating: '5 Adults',
      colour: 'Polar White',
      availability: 'In Stock — Showroom Ready',
      featured: false,
      image: 'assets/images/4.jpg',
      imageAlt: '2024 Mercedes-Benz E 300 d AMG Line in Polar White displayed on the AutoNova showroom floor',
      description: [
        'The latest W214-generation 2024 Mercedes-Benz E 300 d AMG Line pairs long-distance turbo-diesel efficiency with 48-volt mild-hybrid smoothness, delivering over 650 miles of highway range on a single tank. Presented in Polar White with AMG Line exterior styling and illuminated grille surround.',
        'Whether navigating city boulevards or transcontinental motorways, its AGILITY CONTROL suspension and whisper-quiet cabin set the benchmark for executive sedans.'
      ],
      equipment: [
        'Next-Gen MBUX Central Display with Voice Control',
        'Wireless Smartphone Integration & Inductive Charging',
        'AMG Line Exterior Styling & Illuminated Star Grille',
        'THERMATIC Dual-Zone Automatic Climate Control',
        'Active Parking Assist with Reversing Camera',
        '19-Inch AMG 5-Twin-Spoke Light-Alloy Wheels',
        'KEYLESS-GO Flush-Fitting Door Handles',
        'High-Performance LED Headlamps'
      ],
      gallery: [
        { src: 'assets/images/4.jpg', label: 'Main Exterior — Polar White E 300 d in AutoNova Showroom' },
        { src: 'assets/images/1.jpg', label: 'Showroom Perspective — Executive Sedan Gallery Aisle' },
        { src: 'assets/images/28.jpg', label: 'Wheel Detail — AMG Multi-Spoke Alloy & Perforated Disc' },
        { src: 'assets/images/30.jpg', label: 'Headlamp Detail — Digital LED Projection Beam' },
        { src: 'assets/images/22.jpg', label: 'Interior Cabin — Quilted Leather & Dual Digital Screens' },
        { src: 'assets/images/33.jpg', label: 'Certified Workshop — Pre-Delivery Hydraulic Lift Inspection' }
      ]
    },
    {
      id: 'bmw-m4-manual',
      manufacturer: 'BMW',
      model: 'M4 Heritage Edition (6-MT)',
      year: 2022,
      category: 'Coupe',
      price: 78400,
      transmission: 'Manual',
      fuel: 'Petrol',
      mileage: '9,400 mi',
      mileageNum: 9400,
      engine: '3.0L M TwinPower Turbo Inline-6 (473 hp)',
      seating: '4 Adults',
      colour: 'Frozen Dark Grey Metallic',
      availability: 'In Stock — Enthusiast Selection',
      featured: false,
      image: 'assets/images/27.jpg',
      imageAlt: '2022 BMW M4 Coupe in Frozen Dark Grey Metallic showing hexagonal adaptive LED headlights',
      description: [
        'For purists who value direct mechanical engagement, this BMW M4 Coupe pairs a high-revving 3.0-litre M TwinPower Turbo inline-six with a crisp 6-speed manual transmission. Finished in BMW Individual Frozen Dark Grey Metallic with carbon-fibre roof and hexagonal Adaptive LED headlights.',
        'Equipped with Active M Differential, Adaptive M Suspension, and configurable M1/M2 steering-wheel presets, it delivers communicative rear-wheel-drive balance.'
      ],
      equipment: [
        '6-Speed Manual Transmission with Switchable Rev-Matching',
        'BMW iDrive Navigation with Apple CarPlay Compatibility',
        'Carbon-Fibre Reinforced Plastic (CFRP) Roof Panel',
        'Adaptive M Suspension & Active M Differential',
        'Iconic Hexagonal Adaptive LED Headlights',
        'M Sport Seats with Illuminated M Badging',
        'Front & Rear Park Distance Control (PDC)',
        'Harman Kardon Surround Sound Audio System'
      ],
      gallery: [
        { src: 'assets/images/27.jpg', label: 'Main Exterior — Frozen Dark Grey Fascia & Hexagonal LEDs' },
        { src: 'assets/images/3.jpg', label: 'Showroom Lineup — BMW Luxury & Performance Gallery' },
        { src: 'assets/images/6.jpg', label: 'Showroom Lounge — Three-Quarter Coupe Perspective' },
        { src: 'assets/images/30.jpg', label: 'Lighting Detail — BMW Laserlight & LED Signature' },
        { src: 'assets/images/23.jpg', label: 'Interior Cockpit — Sport Steering Wheel & Driver Display' },
        { src: 'assets/images/25.jpg', label: 'Dashboard Telemetry — Digital Tachometer & Tire Pressures' }
      ]
    },
    {
      id: 'hyundai-ioniq-6',
      manufacturer: 'Hyundai',
      model: 'IONIQ 6 SE Long Range',
      year: 2024,
      category: 'Sedan',
      price: 48200,
      transmission: 'Automatic',
      fuel: 'Electric',
      mileage: '2,600 mi',
      mileageNum: 2600,
      engine: '77.4 kWh Streamliner EV (361-Mile Range)',
      seating: '5 Adults',
      colour: 'Gravity Gold Matte',
      availability: 'In Stock — Available Today',
      featured: false,
      image: 'assets/images/19.jpg',
      imageAlt: '2024 Hyundai IONIQ 6 SE Long Range electric streamliner sedan in Gravity Gold Matte',
      description: [
        'With an ultra-low drag coefficient of just 0.21, the 2024 Hyundai IONIQ 6 SE Long Range in Gravity Gold Matte maximizes aerodynamic efficiency to achieve up to 361 miles of EPA-estimated range. Its arched streamliner silhouette conceals a remarkably spacious, flat-floored five-passenger interior.',
        'Dual-colour speed-sensitive ambient lighting and 800V ultra-fast charging capability make every journey calm, quiet, and effortless.'
      ],
      equipment: [
        '12.3-Inch HD Touchscreen Navigation & Digital Cluster',
        'Ultra-Fast 800V / 350 kW DC Charging Compatibility',
        'Flush Automated Door Handles & Active Air Flaps',
        'Dual-Zone Climate Control with Driver-Only Eco Mode',
        'Blind-Spot Collision-Avoidance & Rear Cross-Traffic Alert',
        '18-Inch Aero-Spoke Alloy Wheels',
        'Smart Cruise Control with Stop & Go',
        'Parametric Pixel LED Daytime Running Lamps'
      ],
      gallery: [
        { src: 'assets/images/19.jpg', label: 'Main Exterior — Gravity Gold Matte Streamliner Profile' },
        { src: 'assets/images/20.jpg', label: 'Rear Three-Quarter — Solar Canopy EV Charging Station' },
        { src: 'assets/images/32.jpg', label: 'Exterior Detail — Sculpted Hood & Sharp LED Signature' },
        { src: 'assets/images/26.jpg', label: 'Interior Dashboard — Dual-Screen Infotainment & ADAS' },
        { src: 'assets/images/23.jpg', label: 'Cockpit Detail — Interactive Steering Wheel Controls' },
        { src: 'assets/images/38.jpg', label: 'Certified Inspection — Undercarriage & Battery Check' }
      ]
    },
    {
      id: 'mclaren-570s',
      manufacturer: 'McLaren',
      model: '570S Coupe Track Pack',
      year: 2021,
      category: 'Coupe',
      price: 188500,
      transmission: 'Automatic',
      fuel: 'Petrol',
      mileage: '4,200 mi',
      mileageNum: 4200,
      engine: '3.8L Twin-Turbo V8 (562 hp)',
      seating: '2 Adults',
      colour: 'Silica Yellow',
      availability: 'In Stock — Collector Vault',
      featured: false,
      image: 'assets/images/10.jpg',
      imageAlt: '2021 McLaren 570S Coupe in Silica Yellow with black forged wheels in a studio setting',
      description: [
        'Finished in vivid Silica Yellow with black stealth-finish forged wheels and matching yellow brake calipers, the McLaren 570S Coupe brings carbon-fibre MonoCell II construction and unassisted electro-hydraulic steering feel to the sports series segment.',
        'Weighing just 1,313 kg dry, its 562-horsepower twin-turbo V8 and 7-speed Seamless Shift Gearbox deliver immediate throttle response and agile cornering poise.'
      ],
      equipment: [
        'Carbon-Fibre MonoCell II Chassis Tub',
        '7-Inch IRIS Portrait Touchscreen & Satellite Navigation',
        'Electro-Hydraulic Power-Assisted Steering',
        'Carbon-Ceramic Brakes with Yellow Calipers',
        'Front & Rear Parking Sensors with Rear-View Camera',
        'Stealth-Finish Forged Alloy Wheels',
        'Soft-Close Dihedral Doors & Keyless Ignition',
        'Full LED Headlights with McLaren Speedmark Signature'
      ],
      gallery: [
        { src: 'assets/images/10.jpg', label: 'Main Exterior — Silica Yellow Three-Quarter Studio Shot' },
        { src: 'assets/images/9.jpg', label: 'Showroom View — Exotic Coupe Gallery Lineup' },
        { src: 'assets/images/28.jpg', label: 'Wheel & Brake Detail — Forged Alloy & Perforated Disc' },
        { src: 'assets/images/29.jpg', label: 'Rear Detail — Sculpted Engine Decklid & LED Taillights' },
        { src: 'assets/images/23.jpg', label: 'Interior Cockpit — Flat-Bottom Steering Wheel & Cluster' },
        { src: 'assets/images/25.jpg', label: 'Telemetry Display — Track Diagnostics & G-Force Meter' }
      ]
    },
    {
      id: 'cupra-leon-hybrid',
      manufacturer: 'Cupra',
      model: 'Leon VZ Hybrid Sport Hatch',
      year: 2023,
      category: 'Hatchback',
      price: 41500,
      transmission: 'Manual',
      fuel: 'Hybrid',
      mileage: '5,800 mi',
      mileageNum: 5800,
      engine: '2.0L Turbo Hybrid-Assist (245 hp)',
      seating: '5 Adults',
      colour: 'Midnight Black Metallic',
      availability: 'In Stock — Available Today',
      featured: false,
      image: 'assets/images/32.jpg',
      imageAlt: '2023 Cupra Leon VZ Hybrid Sport Hatchback in Midnight Black with triangular LED daytime running lights',
      description: [
        'Combining hot-hatch agility with everyday five-door practicality, the 2023 Cupra Leon VZ in Midnight Black features signature triangular full-LED daytime running lights, sharp hood creases, and a driver-focused cockpit trimmed with hallmark copper stitching.',
        'Its flat-bottom sports steering wheel houses dedicated engine-start and Cupra drive-profile satellite buttons, paired with an engaging 6-speed manual gearbox.'
      ],
      equipment: [
        '12-Inch Floating Central Touchscreen Infotainment',
        '10.25-Inch Customizable Digital Cockpit Cluster',
        'Cupra Flat-Bottom Steering Wheel with Copper Accents',
        'Signature Triangular Full-LED Headlamps & Coast-to-Coast Rear Light',
        '3-Zone Climatronic Air Conditioning',
        '19-Inch Machined Sport Alloy Wheels',
        'Park Assist with Front and Rear Optical Sensors',
        'Keyless Entry & Start (KESSY Advanced)'
      ],
      gallery: [
        { src: 'assets/images/32.jpg', label: 'Main Exterior — Midnight Black Hood & Triangular LED DRL' },
        { src: 'assets/images/23.jpg', label: 'Interior Cockpit — Cupra Steering Wheel & Floating Display' },
        { src: 'assets/images/28.jpg', label: 'Wheel Detail — Multi-Spoke Performance Alloy & Caliper' },
        { src: 'assets/images/26.jpg', label: 'Dashboard Interface — Connected Navigation & Vehicle Status' },
        { src: 'assets/images/36.jpg', label: 'Certified Workshop — Multi-Point Brake & Wheel Inspection' },
        { src: 'assets/images/34.jpg', label: 'Certified Inspection — Undercarriage & Exhaust Check' }
      ]
    },
    {
      id: 'rexton-signature-suv',
      manufacturer: 'KGM',
      model: 'Rexton Ultimate 4WD SUV',
      year: 2023,
      category: 'SUV',
      price: 46900,
      transmission: 'Automatic',
      fuel: 'Diesel',
      mileage: '7,100 mi',
      mileageNum: 7100,
      engine: '2.2L e-XDi Turbo-Diesel 4WD (202 hp)',
      seating: '7 Adults',
      colour: 'Space Black Pearl',
      availability: 'In Stock — Available Today',
      featured: false,
      image: 'assets/images/31.jpg',
      imageAlt: '2023 KGM Rexton Ultimate 4WD SUV in Space Black Pearl showing diamond-mesh chrome grille and front camera',
      description: [
        'Commanding and versatile, the 2023 Rexton Ultimate 4WD SUV features an imposing chrome diamond-mesh radiator grille with integrated 360-degree front camera, body-on-frame towing durability, and three-row seating for up to seven passengers.',
        'Inside, diamond-quilted leather upholstery, an 8-speed automatic transmission, and selectable four-wheel drive with low range deliver confident all-weather family touring.'
      ],
      equipment: [
        '12.3-Inch Digital Supervision Cluster & HD Navigation',
        '3D Around-View Monitoring (AVM) 360° Camera System',
        'Quilted Nappa-Style Leather Heated & Ventilated Seats',
        'Selectable 4WD with High/Low Range & Hill Descent Control',
        'Dual-Zone Automatic Climate Control with 3rd-Row Vents',
        '20-Inch Sputtering Chrome-Finish Alloy Wheels',
        'Smart Power Tailgate & Keyless Entry',
        'Quad-Projection Full LED Headlights'
      ],
      gallery: [
        { src: 'assets/images/31.jpg', label: 'Main Exterior — Space Black 3D Diamond Mesh Grille & Camera' },
        { src: 'assets/images/7.jpg', label: 'Showroom View — Bright Multi-Segment Dealership Floor' },
        { src: 'assets/images/24.jpg', label: 'Interior Cabin — Quilted Leather Seating & Panoramic Roof' },
        { src: 'assets/images/26.jpg', label: 'Dashboard Display — Digital Cockpit & ADAS Screen' },
        { src: 'assets/images/35.jpg', label: 'Certified Workshop — Engine Bay & Mechanical Verification' },
        { src: 'assets/images/38.jpg', label: 'Certified Inspection — Undercarriage & 4WD Chassis Check' }
      ]
    },
    {
      id: 'porsche-taycan-4s',
      manufacturer: 'Porsche',
      model: 'Taycan 4S Performance Battery+',
      year: 2024,
      category: 'Electric',
      price: 114500,
      transmission: 'Automatic',
      fuel: 'Electric',
      mileage: '2,100 mi',
      mileageNum: 2100,
      engine: '93.4 kWh Dual-Motor AWD (562 hp)',
      seating: '4 Adults',
      colour: 'Ice Grey Metallic',
      availability: 'In Stock — Showroom Ready',
      featured: false,
      image: 'assets/images/16.jpg',
      imageAlt: '2024 Porsche Taycan 4S in Ice Grey Metallic with black aero wheels beside a digital fast-charging station',
      description: [
        'Finished in subtle Ice Grey Metallic with contrasting black five-spoke aero wheels, this 2024 Porsche Taycan 4S is equipped with the upgraded 93.4 kWh Performance Battery Plus for extended touring range and 562 horsepower on overboost.',
        'Adaptive air suspension, dual charge ports (driver and front passenger sides), and instantaneous dual-motor all-wheel drive make it an everyday electric grand tourer.'
      ],
      equipment: [
        'Performance Battery Plus (93.4 kWh Gross Capacity)',
        'Porsche Communication Management (PCM) with Apple CarPlay',
        'Adaptive Air Suspension Including PASM',
        'Power Charge Port Covers on Both Front Wings',
        'ParkAssist with Reversing Camera & Lane Keep Assist',
        '20-Inch Taycan Aero Design Black Alloy Wheels',
        '14-Way Power Comfort Seats with Memory Package',
        'LED Headlights Including Porsche Dynamic Light System Plus'
      ],
      gallery: [
        { src: 'assets/images/16.jpg', label: 'Main Exterior — Ice Grey Taycan 4S at Digital Charging Hub' },
        { src: 'assets/images/21.jpg', label: 'Front Three-Quarter — Fast-Charging Plaza Perspective' },
        { src: 'assets/images/28.jpg', label: 'Wheel Detail — Multi-Spoke Alloy & Ventilated Rotor' },
        { src: 'assets/images/29.jpg', label: 'Rear Detail — Sculpted Fender & Taillight Architecture' },
        { src: 'assets/images/23.jpg', label: 'Interior Cockpit — Multifunction Sport Steering Wheel' },
        { src: 'assets/images/25.jpg', label: 'Dashboard Telemetry — Digital Instrument Cluster' }
      ]
    },
    {
      id: 'ferrari-daytona-sp3',
      manufacturer: 'Ferrari',
      model: 'Daytona SP3 Icona Coupe',
      year: 2024,
      category: 'Coupe',
      price: 345000,
      transmission: 'Automatic',
      fuel: 'Petrol',
      mileage: '650 mi',
      mileageNum: 650,
      engine: '6.5L Naturally Aspirated V12 (829 hp)',
      seating: '2 Adults',
      colour: 'Giallo Modena',
      availability: 'By Private Appointment',
      featured: false,
      image: 'assets/images/13.jpg',
      imageAlt: '2024 Ferrari Daytona SP3 Icona Coupe in Giallo Modena bright yellow on a manicured concourse lawn',
      description: [
        'Inspired by legendary 1960s sports prototypes and presented in vibrant Giallo Modena, the Daytona SP3 Icona showcases passive aerodynamic sculpture at its purest. Butterfly doors integrate air boxes that channel cooling flow into side-mounted radiators.',
        'Offered from our private collector vault with full documented pre-delivery inspection and concierge transport assistance.'
      ],
      equipment: [
        '16-Inch Curved HD Digital Driver Interface',
        'Composite Carbon-Fibre Monocoque & Removable Targa Roof',
        '7-Speed F1 Dual-Clutch Transmission',
        'Side Slip Control (SSC) 6.1 Vehicle Dynamics Suite',
        'Front & Rear Parking Cameras with Nose-Lift System',
        '20-Inch Front / 21-Inch Rear Five-Spoke Forged Wheels',
        'Retractable Eyelid LED Headlights & Horizontal Rear Blade',
        'Integrated Ergonomic Sports Seats with 4-Point Harnesses'
      ],
      gallery: [
        { src: 'assets/images/13.jpg', label: 'Main Exterior — Giallo Modena Concourse Three-Quarter View' },
        { src: 'assets/images/9.jpg', label: 'Showroom Vault — Collector Supercar Gallery' },
        { src: 'assets/images/14.jpg', label: 'Aerodynamic Study — Track Hypercar Engineering Showcase' },
        { src: 'assets/images/29.jpg', label: 'Rear Detail — Sculpted Decklid & LED Light Bar' },
        { src: 'assets/images/23.jpg', label: 'Cockpit Controls — Performance Steering Wheel & Display' },
        { src: 'assets/images/25.jpg', label: 'Telemetry Cluster — High-RPM Digital Tachometer & Barometer' }
      ]
    }
  ];

  /* ------------------------------------------------------------------------
     2. HELPER UTILITIES & FAVOURITES STORAGE
     ------------------------------------------------------------------------ */
  const FAV_STORAGE_KEY = 'autonova_favourites_v1';

  const formatPrice = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(num);
  };

  const getFavourites = () => {
    try {
      const raw = localStorage.getItem(FAV_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const toggleFavourite = (vehicleId) => {
    const current = getFavourites();
    const index = current.indexOf(vehicleId);
    let isFav = false;
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(vehicleId);
      isFav = true;
    }
    try {
      localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify(current));
    } catch {
      // Ignore storage quota issues in restricted environments
    }
    return isFav;
  };

  /* ------------------------------------------------------------------------
     3. VEHICLE CARD HTML GENERATOR
     ------------------------------------------------------------------------ */
  const createVehicleCardHTML = (vehicle, index = 0) => {
    const favs = getFavourites();
    const isFav = favs.includes(vehicle.id);
    const delayMs = (index % 4) * 65;

    return `
      <article class="an-vehicle-card" data-reveal style="--reveal-delay: ${delayMs}ms" data-vehicle-id="${vehicle.id}">
        <div class="an-card-media">
          <span class="an-card-badge">${vehicle.category}</span>
          <button
            type="button"
            class="an-fav-btn ${isFav ? 'is-active' : ''}"
            data-fav-toggle="${vehicle.id}"
            aria-label="${isFav ? 'Remove' : 'Save'} ${vehicle.manufacturer} ${vehicle.model} to favourites"
            aria-pressed="${isFav ? 'true' : 'false'}"
          >
            <i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}" aria-hidden="true"></i>
          </button>
          <a href="vehicle-details.html?id=${encodeURIComponent(vehicle.id)}" tabindex="-1" aria-hidden="true">
            <img
              src="${vehicle.image}"
              alt="${vehicle.imageAlt}"
              class="an-card-img"
              loading="lazy"
              width="600"
              height="375"
            >
          </a>
        </div>
        <div class="an-card-body">
          <div class="an-card-top-meta">
            <span>${vehicle.manufacturer}</span>
            <span class="an-card-year">${vehicle.year}</span>
          </div>
          <h3 class="an-card-title">
            <a href="vehicle-details.html?id=${encodeURIComponent(vehicle.id)}">
              ${vehicle.manufacturer} ${vehicle.model}
            </a>
          </h3>
          <div class="an-card-specs" aria-label="Key vehicle specifications">
            <span class="an-card-spec-item" title="Transmission">
              <i class="bi bi-gear-wide-connected" aria-hidden="true"></i>
              ${vehicle.transmission}
            </span>
            <span class="an-card-spec-item" title="Fuel Type">
              <i class="bi bi-fuel-pump" aria-hidden="true"></i>
              ${vehicle.fuel}
            </span>
            <span class="an-card-spec-item" title="Mileage">
              <i class="bi bi-speedometer2" aria-hidden="true"></i>
              ${vehicle.mileage}
            </span>
          </div>
          <div class="an-card-footer">
            <div class="an-card-price-wrap">
              <span class="an-card-price-label">Transparent Price</span>
              <span class="an-card-price">${formatPrice(vehicle.price)}</span>
            </div>
            <a href="vehicle-details.html?id=${encodeURIComponent(vehicle.id)}" class="an-card-action">
              View Details <i class="bi bi-arrow-up-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </article>
    `;
  };

  /* ------------------------------------------------------------------------
     4. GLOBAL NAVIGATION, SEARCH POPOVER & FAVOURITE DELEGATION
     ------------------------------------------------------------------------ */
  const initGlobalNavigation = () => {
    const header = document.querySelector('.an-header');
    const menuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNavPanel');
    const searchToggle = document.getElementById('headerSearchToggle');
    const searchBar = document.getElementById('headerSearchBar');
    const searchInput = document.getElementById('headerSearchInput');

    // Sticky scroll state
    const onScroll = () => {
      if (!header) return;
      if (window.scrollY > 12) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile Menu Toggle
    if (menuToggle && mobileNav) {
      const closeMobileMenu = () => {
        mobileNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.className = 'bi bi-list';
        }
      };

      menuToggle.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.className = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
        }
        if (isOpen && searchBar) {
          searchBar.classList.remove('is-open');
        }
      });

      // Close mobile menu when a link is selected
      mobileNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
      });

      // Close on Escape or outside click
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
          closeMobileMenu();
          menuToggle.focus();
        }
      });

      document.addEventListener('click', (e) => {
        if (
          mobileNav.classList.contains('is-open') &&
          !mobileNav.contains(e.target) &&
          !menuToggle.contains(e.target)
        ) {
          closeMobileMenu();
        }
      });
    }

    // Header Quick Search Bar
    if (searchToggle && searchBar) {
      searchToggle.addEventListener('click', () => {
        const isOpen = searchBar.classList.toggle('is-open');
        searchToggle.setAttribute('aria-expanded', String(isOpen));
        if (isOpen && searchInput) {
          setTimeout(() => searchInput.focus(), 60);
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchBar.classList.contains('is-open')) {
          searchBar.classList.remove('is-open');
          searchToggle.setAttribute('aria-expanded', 'false');
          searchToggle.focus();
        }
      });
    }

    // Global Favourite Button Click Delegation
    document.addEventListener('click', (e) => {
      const favBtn = e.target.closest('[data-fav-toggle]');
      if (!favBtn) return;
      e.preventDefault();
      const vehicleId = favBtn.getAttribute('data-fav-toggle');
      const isNowFav = toggleFavourite(vehicleId);

      // Update all matching buttons on the page
      document.querySelectorAll(`[data-fav-toggle="${vehicleId}"]`).forEach((btn) => {
        btn.classList.toggle('is-active', isNowFav);
        btn.setAttribute('aria-pressed', String(isNowFav));
        const icon = btn.querySelector('i');
        if (icon) {
          icon.className = isNowFav ? 'bi bi-heart-fill' : 'bi bi-heart';
        }
      });

      // Update header shortlist badge count & trigger pop animation
      const favCount = getFavourites().length;
      document.querySelectorAll('.an-header-fav-badge').forEach((badge) => {
        badge.textContent = String(favCount);
        badge.classList.remove('is-bouncing');
        void badge.offsetWidth;
        badge.classList.add('is-bouncing');
      });

      // Show floating showroom shortlist toast
      const matchedVehicle = AUTONOVA_VEHICLES.find((v) => v.id === vehicleId);
      const vehicleLabel = matchedVehicle
        ? `${matchedVehicle.year} ${matchedVehicle.manufacturer} ${matchedVehicle.model}`
        : 'Vehicle';
      showShowroomToast(
        isNowFav
          ? `Saved ${vehicleLabel} to your shortlist (${favCount} total)`
          : `Removed ${vehicleLabel} from your shortlist`,
        isNowFav ? 'bi-heart-fill' : 'bi-heart'
      );
    });

    // Sync initial favourite count in header badge if user has saved favourites
    const initialFavs = getFavourites();
    if (initialFavs.length > 0) {
      document.querySelectorAll('.an-header-fav-badge').forEach((badge) => {
        badge.textContent = String(initialFavs.length);
      });
    }

    // Synchronize active navigation link state based on current page URL
    const syncActiveNavLinks = () => {
      const fullPath = decodeURIComponent(window.location.pathname.toLowerCase());
      const filename = fullPath.substring(fullPath.lastIndexOf('/') + 1) || 'index.html';

      const navLinks = document.querySelectorAll('.an-nav-link, .an-mobile-nav-link');
      navLinks.forEach((link) => {
        const rawHref = (link.getAttribute('href') || '').toLowerCase().split('?')[0].split('#')[0];
        const cleanHref = rawHref.replace(/^(\.\/|\/)/, '');

        let isCurrentPage = false;
        if (filename === '' || filename === 'index.html') {
          isCurrentPage = cleanHref === 'index.html' || cleanHref === '' || cleanHref === './';
        } else if (filename.includes('inventory')) {
          isCurrentPage = cleanHref.includes('inventory');
        } else if (filename.includes('vehicle')) {
          isCurrentPage = cleanHref.includes('vehicle');
        } else if (filename.includes('contact')) {
          isCurrentPage = cleanHref.includes('contact');
        } else {
          isCurrentPage = cleanHref === filename;
        }

        link.classList.toggle('active', isCurrentPage);
        if (isCurrentPage) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };
    syncActiveNavLinks();
  };

  /* ------------------------------------------------------------------------
     5. SCROLL REVEAL SYSTEM (IntersectionObserver — Animation 2, 5, 9, 10)
     ------------------------------------------------------------------------ */
  let revealObserver = null;

  const observeRevealElements = (root = document) => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = root.querySelectorAll('[data-reveal]:not(.is-revealed)');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -30px 0px'
        }
      );
    }

    elements.forEach((el) => revealObserver.observe(el));
  };

  /* ------------------------------------------------------------------------
     6. HOME PAGE LOGIC (Featured Grid + Interactive Hero Showcase)
     ------------------------------------------------------------------------ */
  const initHomePage = () => {
    const featuredContainer = document.getElementById('featuredVehiclesGrid');
    if (featuredContainer) {
      const renderHomeFeatured = (filterKey = 'featured', animate = false) => {
        let list = [];
        if (filterKey === 'featured') {
          list = AUTONOVA_VEHICLES.filter((v) => v.featured).slice(0, 4);
        } else if (filterKey === 'Electric') {
          list = AUTONOVA_VEHICLES.filter((v) => v.fuel === 'Electric').slice(0, 4);
        } else {
          list = AUTONOVA_VEHICLES.filter((v) => v.category === filterKey).slice(0, 4);
        }

        if (animate) {
          featuredContainer.classList.add('is-filtering');
        }
        setTimeout(
          () => {
            featuredContainer.innerHTML = list
              .map((v, idx) => createVehicleCardHTML(v, idx))
              .join('');
            observeRevealElements(featuredContainer);
            featuredContainer.classList.remove('is-filtering');
          },
          animate ? 140 : 0
        );
      };

      renderHomeFeatured('featured', false);

      // Home Category Filter Tabs
      const homeTabs = document.querySelectorAll('[data-home-filter]');
      homeTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          const key = tab.getAttribute('data-home-filter');
          homeTabs.forEach((t) => {
            t.classList.toggle('active', t === tab);
            t.setAttribute('aria-selected', String(t === tab));
          });
          renderHomeFeatured(key, true);
        });
      });
    }

    // Hero Interactive Carousel (Matches Reference Snip: Dots + Prev/Next + Vertical Featured Card)
    const heroSlides = [
      {
        id: 'hyundai-tucson-2025',
        title: 'Hyundai Tucson',
        sub: '2025 • SUV',
        price: '₹28.99 Lakh*',
        engine: '2.0L Petrol',
        trans: 'Automatic',
        seats: '5 Seater',
        fuel: '14.5 km/l',
        image: 'assets/images/hero-tucson.jpg',
        alt: '2025 Hyundai Tucson in Fiery Red Pearl inside a curved glass architectural showroom'
      },
      {
        id: 'mclaren-720s',
        title: 'McLaren 720S',
        sub: '2023 • Coupe',
        price: '$284,500',
        engine: '4.0L V8 Biturbo',
        trans: 'Automatic',
        seats: '2 Seater',
        fuel: '710 HP Track',
        image: 'assets/images/hero-mclaren.jpg',
        alt: '2023 McLaren 720S Performance Coupe in Memphis Red Metallic inside a curved glass luxury showroom'
      },
      {
        id: 'porsche-taycan-turbo-s',
        title: 'Porsche Taycan',
        sub: '2024 • Electric',
        price: '$194,800',
        engine: '800V Dual-Motor',
        trans: 'Automatic',
        seats: '4 Seater',
        fuel: '350 kW Fast EV',
        image: 'assets/images/hero-taycan.jpg',
        alt: '2024 Porsche Taycan Turbo S in Ice Silver Metallic inside a curved white architectural showroom'
      }
    ];

    const heroImg = document.getElementById('heroMainVehicleImg');
    const heroBadge = document.getElementById('heroCardBadge');
    const heroTitle = document.getElementById('heroCardTitle');
    const heroPrice = document.getElementById('heroCardPrice');
    const heroSpecEngine = document.getElementById('heroSpecEngine');
    const heroSpecTrans = document.getElementById('heroSpecTrans');
    const heroSpecSeats = document.getElementById('heroSpecSeats');
    const heroSpecFuel = document.getElementById('heroSpecFuel');
    const heroLink = document.getElementById('heroCardLink');
    const heroDotBtns = document.querySelectorAll('[data-hero-slide]');
    const heroPrevBtn = document.getElementById('heroPrevSlide');
    const heroNextBtn = document.getElementById('heroNextSlide');

    let currentHeroIndex = 0;

    const setHeroSlide = (index) => {
      currentHeroIndex = (index + heroSlides.length) % heroSlides.length;
      const slide = heroSlides[currentHeroIndex];

      heroDotBtns.forEach((dot, idx) => {
        const isActive = idx === currentHeroIndex;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-pressed', String(isActive));
      });

      if (heroImg) {
        heroImg.style.opacity = '0.35';
        setTimeout(() => {
          heroImg.src = slide.image;
          heroImg.alt = slide.alt;
          heroImg.style.opacity = '1';
        }, 140);
      }

      const floatCard = document.querySelector('.an-snip-float-card');
      if (floatCard) {
        floatCard.style.transform = 'translateY(-4px) scale(0.985)';
        setTimeout(() => {
          floatCard.style.transform = '';
        }, 180);
      }

      if (heroTitle) heroTitle.textContent = slide.title;
      if (heroBadge) heroBadge.textContent = slide.sub;
      if (heroPrice) heroPrice.textContent = slide.price;
      if (heroSpecEngine) heroSpecEngine.textContent = slide.engine;
      if (heroSpecTrans) heroSpecTrans.textContent = slide.trans;
      if (heroSpecSeats) heroSpecSeats.textContent = slide.seats;
      if (heroSpecFuel) heroSpecFuel.textContent = slide.fuel;
      if (heroLink) heroLink.href = `vehicle-details.html?id=${encodeURIComponent(slide.id)}`;

      [heroTitle, heroBadge, heroPrice, heroSpecEngine, heroSpecTrans, heroSpecSeats, heroSpecFuel].forEach(
        (el, i) => {
          if (!el) return;
          el.classList.remove('an-spec-swapping');
          void el.offsetWidth;
          el.style.animationDelay = `${i * 32}ms`;
          el.classList.add('an-spec-swapping');
        }
      );
    };

    if (heroDotBtns.length) {
      heroDotBtns.forEach((dot) => {
        dot.addEventListener('click', () => {
          const idx = Number(dot.getAttribute('data-hero-slide'));
          setHeroSlide(idx);
        });
      });
    }

    if (heroPrevBtn) {
      heroPrevBtn.addEventListener('click', () => setHeroSlide(currentHeroIndex - 1));
    }
    if (heroNextBtn) {
      heroNextBtn.addEventListener('click', () => setHeroSlide(currentHeroIndex + 1));
    }

    // Auto-advance hero showcase every 6s unless reduced motion is preferred or user hovers hero
    const heroStage = document.querySelector('.an-hero-snip-stage');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (heroStage && !prefersReducedMotion) {
      let heroTimer = setInterval(() => {
        setHeroSlide(currentHeroIndex + 1);
      }, 6000);

      const pauseHero = () => {
        if (heroTimer) {
          clearInterval(heroTimer);
          heroTimer = null;
        }
      };

      const resumeHero = () => {
        if (!heroTimer) {
          heroTimer = setInterval(() => {
            setHeroSlide(currentHeroIndex + 1);
          }, 6000);
        }
      };

      heroStage.addEventListener('mouseenter', pauseHero);
      heroStage.addEventListener('mouseleave', resumeHero);
      heroStage.addEventListener('focusin', pauseHero);
      heroStage.addEventListener('focusout', resumeHero);
    }
  };

  /* ------------------------------------------------------------------------
     7. INVENTORY PAGE LOGIC (Search, Filters, Sorting, Load More)
     ------------------------------------------------------------------------ */
  const initInventoryPage = () => {
    const grid = document.getElementById('inventoryVehiclesGrid');
    if (!grid) return;

    const searchInput = document.getElementById('filterSearch');
    const categorySelect = document.getElementById('filterCategory');
    const fuelSelect = document.getElementById('filterFuel');
    const transmissionSelect = document.getElementById('filterTransmission');
    const yearSelect = document.getElementById('filterYear');
    const minPriceInput = document.getElementById('filterMinPrice');
    const maxPriceInput = document.getElementById('filterMaxPrice');
    const sortSelect = document.getElementById('filterSort');
    const clearBtn = document.getElementById('clearFiltersBtn');
    const emptyClearBtn = document.getElementById('emptyStateClearBtn');
    const resultsCountEl = document.getElementById('inventoryResultsCount');
    const emptyStateEl = document.getElementById('inventoryEmptyState');
    const loadMoreWrap = document.getElementById('loadMoreWrapper');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const loadMoreStatus = document.getElementById('loadMoreStatus');
    const mobileFilterBtn = document.getElementById('mobileFilterToggleBtn');
    const filterCollapsible = document.getElementById('filterCollapsibleArea');

    const PAGE_SIZE = 8;
    let visibleLimit = PAGE_SIZE;

    // Pre-populate filters from URL query parameters if present
    const params = new URLSearchParams(window.location.search);
    if (params.get('q') && searchInput) {
      searchInput.value = params.get('q');
    }
    if (params.get('category') && categorySelect) {
      categorySelect.value = params.get('category');
    }
    if (params.get('fuel') && fuelSelect) {
      fuelSelect.value = params.get('fuel');
    }

    // Mobile Filter Drawer Toggle
    if (mobileFilterBtn && filterCollapsible) {
      mobileFilterBtn.addEventListener('click', () => {
        const isOpen = filterCollapsible.classList.toggle('is-open');
        mobileFilterBtn.setAttribute('aria-expanded', String(isOpen));
        const labelSpan = mobileFilterBtn.querySelector('span');
        if (labelSpan) {
          labelSpan.textContent = isOpen ? 'Hide Filters' : 'Filter & Sort Vehicles';
        }
      });
    }

    const getFilteredAndSortedVehicles = () => {
      const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
      const category = categorySelect ? categorySelect.value : 'all';
      const fuel = fuelSelect ? fuelSelect.value : 'all';
      const transmission = transmissionSelect ? transmissionSelect.value : 'all';
      const year = yearSelect ? yearSelect.value : 'all';
      const minPrice = minPriceInput && minPriceInput.value !== '' ? Number(minPriceInput.value) : 0;
      const maxPrice = maxPriceInput && maxPriceInput.value !== '' ? Number(maxPriceInput.value) : Infinity;
      const sortBy = sortSelect ? sortSelect.value : 'featured';

      const filtered = AUTONOVA_VEHICLES.filter((v) => {
        const matchesQuery =
          !query ||
          `${v.manufacturer} ${v.model} ${v.category} ${v.colour} ${v.fuel}`
            .toLowerCase()
            .includes(query);
        const matchesCategory = category === 'all' || v.category.toLowerCase() === category.toLowerCase();
        const matchesFuel = fuel === 'all' || v.fuel.toLowerCase() === fuel.toLowerCase();
        const matchesTransmission =
          transmission === 'all' || v.transmission.toLowerCase() === transmission.toLowerCase();
        const matchesYear = year === 'all' || String(v.year) === String(year);
        const matchesMinPrice = v.price >= minPrice;
        const matchesMaxPrice = v.price <= maxPrice;

        return (
          matchesQuery &&
          matchesCategory &&
          matchesFuel &&
          matchesTransmission &&
          matchesYear &&
          matchesMinPrice &&
          matchesMaxPrice
        );
      });

      // Sort
      const sorted = [...filtered];
      if (sortBy === 'price-asc') {
        sorted.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'price-desc') {
        sorted.sort((a, b) => b.price - a.price);
      } else if (sortBy === 'newest') {
        sorted.sort((a, b) => b.year - a.year || a.mileageNum - b.mileageNum);
      }

      return sorted;
    };

    const renderInventory = (animate = false) => {
      const matching = getFilteredAndSortedVehicles();
      const totalMatching = matching.length;
      const sliced = matching.slice(0, visibleLimit);

      if (animate) {
        grid.classList.add('is-filtering');
      }

      setTimeout(
        () => {
          if (resultsCountEl) {
            resultsCountEl.innerHTML =
              totalMatching === 1
                ? 'Showing <strong>1</strong> matching vehicle'
                : `Showing <strong>${sliced.length}</strong> of <strong>${totalMatching}</strong> matching vehicles`;
          }

          if (totalMatching === 0) {
            grid.innerHTML = '';
            grid.style.display = 'none';
            if (emptyStateEl) emptyStateEl.hidden = false;
            if (loadMoreWrap) loadMoreWrap.hidden = true;
          } else {
            if (emptyStateEl) emptyStateEl.hidden = true;
            grid.style.display = '';
            grid.innerHTML = sliced.map((v, idx) => createVehicleCardHTML(v, idx)).join('');
            observeRevealElements(grid);

            if (loadMoreWrap && loadMoreBtn && loadMoreStatus) {
              if (sliced.length < totalMatching) {
                loadMoreWrap.hidden = false;
                loadMoreBtn.hidden = false;
                const remaining = totalMatching - sliced.length;
                loadMoreBtn.innerHTML = `Load More Vehicles (${remaining} remaining) <i class="bi bi-arrow-down-short" aria-hidden="true"></i>`;
                loadMoreStatus.textContent = `Displaying ${sliced.length} of ${totalMatching} vehicles in our curated inventory.`;
              } else {
                loadMoreWrap.hidden = false;
                loadMoreBtn.hidden = true;
                loadMoreStatus.textContent = `All ${totalMatching} matching vehicles are displayed.`;
              }
            }
          }

          grid.classList.remove('is-filtering');
        },
        animate ? 140 : 0
      );
    };

    const onFilterChange = () => {
      visibleLimit = PAGE_SIZE;
      renderInventory(true);
    };

    const resetAllFilters = () => {
      if (searchInput) searchInput.value = '';
      if (categorySelect) categorySelect.value = 'all';
      if (fuelSelect) fuelSelect.value = 'all';
      if (transmissionSelect) transmissionSelect.value = 'all';
      if (yearSelect) yearSelect.value = 'all';
      if (minPriceInput) minPriceInput.value = '';
      if (maxPriceInput) maxPriceInput.value = '';
      if (sortSelect) sortSelect.value = 'featured';
      visibleLimit = PAGE_SIZE;
      renderInventory(true);
    };

    [categorySelect, fuelSelect, transmissionSelect, yearSelect, sortSelect].forEach((el) => {
      if (el) el.addEventListener('change', onFilterChange);
    });

    [searchInput, minPriceInput, maxPriceInput].forEach((el) => {
      if (el) el.addEventListener('input', onFilterChange);
    });

    if (clearBtn) clearBtn.addEventListener('click', resetAllFilters);
    if (emptyClearBtn) emptyClearBtn.addEventListener('click', resetAllFilters);

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        visibleLimit += PAGE_SIZE;
        renderInventory(false);
      });
    }

    renderInventory(false);
  };

  /* ------------------------------------------------------------------------
     8. VEHICLE DETAILS PAGE LOGIC (Dynamic Vehicle + Gallery + Lightbox)
     ------------------------------------------------------------------------ */
  const initVehicleDetailsPage = () => {
    const detailRoot = document.getElementById('vehicleDetailsPageRoot');
    if (!detailRoot) return;

    const params = new URLSearchParams(window.location.search);
    const requestedId = params.get('id');
    let currentVehicle =
      AUTONOVA_VEHICLES.find((v) => v.id === requestedId) || AUTONOVA_VEHICLES[0];

    let activeGalleryIndex = 0;

    // Elements to populate
    const switcherContainer = document.getElementById('vehicleQuickSwitcher');
    const breadcrumbModel = document.getElementById('vdBreadcrumbModel');
    const badgeCategory = document.getElementById('vdCategoryBadge');
    const badgeYear = document.getElementById('vdYearBadge');
    const availabilityText = document.getElementById('vdAvailabilityBadge');
    const headingEl = document.getElementById('vdMainHeading');
    const topPriceEl = document.getElementById('vdTopPrice');
    const heroBgImgEl = document.getElementById('vdHeroBgImg');

    // Gallery elements
    const mainImg = document.getElementById('vdGalleryMainImg');
    const mainCaption = document.getElementById('vdGalleryCaption');
    const thumbsContainer = document.getElementById('vdGalleryThumbs');
    const prevBtn = document.getElementById('vdGalleryPrev');
    const nextBtn = document.getElementById('vdGalleryNext');
    const openLightboxTrigger = document.getElementById('vdGalleryMainStage');

    // Overview & Specs elements
    const overviewGrid = document.getElementById('vdOverviewGrid');
    const descriptionContainer = document.getElementById('vdDescriptionBody');
    const specTableBody = document.getElementById('vdSpecTableBody');
    const equipmentList = document.getElementById('vdEquipmentList');

    // Sticky Panel & Form elements
    const stickyPrice = document.getElementById('vdStickyPrice');
    const stickyAvailability = document.getElementById('vdStickyAvailability');
    const stickyTitle = document.getElementById('vdStickyVehicleTitle');
    const stickyFavBtn = document.getElementById('vdStickyFavBtn');
    const bookingVehicleInput = document.getElementById('tdVehicleName');

    // Lightbox elements
    const lightbox = document.getElementById('vdLightboxModal');
    const lightboxImg = document.getElementById('vdLightboxImg');
    const lightboxCaption = document.getElementById('vdLightboxCaption');
    const lightboxCounter = document.getElementById('vdLightboxCounter');
    const lightboxClose = document.getElementById('vdLightboxClose');
    const lightboxPrev = document.getElementById('vdLightboxPrev');
    const lightboxNext = document.getElementById('vdLightboxNext');

    const updateGalleryImage = (index) => {
      const gallery = currentVehicle.gallery;
      activeGalleryIndex = (index + gallery.length) % gallery.length;
      const item = gallery[activeGalleryIndex];

      if (mainImg) {
        mainImg.style.opacity = '0.35';
        setTimeout(() => {
          mainImg.src = item.src;
          mainImg.alt = `${currentVehicle.manufacturer} ${currentVehicle.model} — ${item.label}`;
          mainImg.style.opacity = '1';
        }, 120);
      }
      if (mainCaption) {
        mainCaption.textContent = `${activeGalleryIndex + 1} / ${gallery.length} — ${item.label}`;
      }

      if (thumbsContainer) {
        thumbsContainer.querySelectorAll('.an-thumb-btn').forEach((btn, idx) => {
          const isCurrent = idx === activeGalleryIndex;
          btn.classList.toggle('active', isCurrent);
          btn.setAttribute('aria-current', isCurrent ? 'true' : 'false');
        });
      }

      // Sync lightbox if open
      if (lightbox && lightbox.classList.contains('is-open')) {
        if (lightboxImg) {
          lightboxImg.src = item.src;
          lightboxImg.alt = `${currentVehicle.manufacturer} ${currentVehicle.model} — ${item.label}`;
        }
        if (lightboxCaption) lightboxCaption.textContent = item.label;
        if (lightboxCounter) {
          lightboxCounter.textContent = `Image ${activeGalleryIndex + 1} of ${gallery.length}`;
        }
      }
    };

    const renderVehicleDetails = (vehicle) => {
      currentVehicle = vehicle;
      activeGalleryIndex = 0;

      document.title = `${vehicle.year} ${vehicle.manufacturer} ${vehicle.model} | AutoNova Vehicle Details`;

      if (breadcrumbModel) {
        breadcrumbModel.textContent = `${vehicle.manufacturer} ${vehicle.model}`;
      }
      if (badgeCategory) badgeCategory.textContent = vehicle.category;
      if (badgeYear) badgeYear.textContent = `${vehicle.year} Model Year`;
      if (availabilityText) availabilityText.textContent = vehicle.availability;
      if (headingEl) {
        headingEl.textContent = `${vehicle.year} ${vehicle.manufacturer} ${vehicle.model}`;
      }
      if (topPriceEl) topPriceEl.textContent = formatPrice(vehicle.price);
      if (heroBgImgEl) {
        heroBgImgEl.src = vehicle.image;
        heroBgImgEl.alt = vehicle.imageAlt;
      }

      // Quick Switcher Pills
      if (switcherContainer) {
        switcherContainer.innerHTML = AUTONOVA_VEHICLES.slice(0, 8)
          .map(
            (v) => `
            <button
              type="button"
              class="an-vehicle-pill ${v.id === vehicle.id ? 'active' : ''}"
              data-switch-vehicle="${v.id}"
            >
              ${v.manufacturer} ${v.model.split(' ')[0]}
            </button>
          `
          )
          .join('');

        switcherContainer.querySelectorAll('[data-switch-vehicle]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const nextId = btn.getAttribute('data-switch-vehicle');
            const found = AUTONOVA_VEHICLES.find((item) => item.id === nextId);
            if (found) {
              const newUrl = `${window.location.pathname}?id=${encodeURIComponent(found.id)}`;
              window.history.replaceState({ path: newUrl }, '', newUrl);
              renderVehicleDetails(found);
            }
          });
        });
      }

      // Render Gallery Thumbnails
      if (thumbsContainer) {
        thumbsContainer.innerHTML = vehicle.gallery
          .map(
            (g, idx) => `
            <button
              type="button"
              class="an-thumb-btn ${idx === 0 ? 'active' : ''}"
              data-thumb-index="${idx}"
              aria-label="View image ${idx + 1}: ${g.label}"
              aria-current="${idx === 0 ? 'true' : 'false'}"
            >
              <img src="${g.src}" alt="${g.label}" loading="lazy" width="240" height="150">
            </button>
          `
          )
          .join('');

        thumbsContainer.querySelectorAll('[data-thumb-index]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const idx = Number(btn.getAttribute('data-thumb-index'));
            updateGalleryImage(idx);
          });
        });
      }

      updateGalleryImage(0);

      // Render 10-Point Overview Grid
      if (overviewGrid) {
        const overviewItems = [
          { icon: 'bi-tag', label: 'Transparent Price', value: formatPrice(vehicle.price) },
          { icon: 'bi-calendar-event', label: 'Model Year', value: String(vehicle.year) },
          { icon: 'bi-speedometer2', label: 'Recorded Mileage', value: vehicle.mileage },
          { icon: 'bi-fuel-pump', label: 'Fuel / Energy Type', value: vehicle.fuel },
          { icon: 'bi-gear-wide-connected', label: 'Transmission', value: vehicle.transmission },
          { icon: 'bi-lightning-charge', label: 'Engine / Motor', value: vehicle.engine },
          { icon: 'bi-people', label: 'Seating Capacity', value: vehicle.seating },
          { icon: 'bi-car-front', label: 'Vehicle Category', value: vehicle.category },
          { icon: 'bi-palette', label: 'Exterior Colour', value: vehicle.colour },
          { icon: 'bi-patch-check', label: 'Availability', value: vehicle.availability }
        ];

        overviewGrid.innerHTML = overviewItems
          .map(
            (item) => `
            <div class="an-overview-box">
              <i class="bi ${item.icon} an-overview-icon" aria-hidden="true"></i>
              <span class="an-overview-label">${item.label}</span>
              <span class="an-overview-val">${item.value}</span>
            </div>
          `
          )
          .join('');
      }

      // Render Description
      if (descriptionContainer) {
        descriptionContainer.innerHTML = vehicle.description
          .map((p) => `<p class="mb-3">${p}</p>`)
          .join('');
      }

      // Render Specifications Table
      if (specTableBody) {
        const specs = [
          { label: 'Engine / Motor Architecture (Manufacturer Spec)', val: vehicle.engine },
          { label: 'Transmission System (Manufacturer Spec)', val: vehicle.transmission },
          { label: 'Fuel / Powertrain Type (Manufacturer Spec)', val: vehicle.fuel },
          { label: 'Seating Capacity (Manufacturer Spec)', val: vehicle.seating },
          { label: 'Body Style & Category (Manufacturer Spec)', val: vehicle.category },
          { label: 'Model Year (Sample Vehicle Data)', val: String(vehicle.year) },
          { label: 'Odometer Reading (Sample Vehicle Data)', val: vehicle.mileage },
          { label: 'Exterior Paint Finish (Sample Vehicle Data)', val: vehicle.colour }
        ];
        specTableBody.innerHTML = specs
          .map(
            (row) => `
            <tr>
              <th scope="row">${row.label}</th>
              <td>${row.val}</td>
            </tr>
          `
          )
          .join('');
      }

      // Render Confirmed Equipment
      if (equipmentList) {
        equipmentList.innerHTML = vehicle.equipment
          .map(
            (item) => `
            <div class="an-equipment-item">
              <i class="bi bi-check2-circle" aria-hidden="true"></i>
              <span>${item}</span>
            </div>
          `
          )
          .join('');
      }

      // Sticky Enquiry Panel & Pre-filled Booking Form
      if (stickyPrice) stickyPrice.textContent = formatPrice(vehicle.price);
      if (stickyAvailability) stickyAvailability.textContent = vehicle.availability;
      if (stickyTitle) stickyTitle.textContent = `${vehicle.year} ${vehicle.manufacturer} ${vehicle.model}`;
      if (bookingVehicleInput) {
        bookingVehicleInput.value = `${vehicle.year} ${vehicle.manufacturer} ${vehicle.model} (${formatPrice(vehicle.price)})`;
      }

      if (stickyFavBtn) {
        const isFav = getFavourites().includes(vehicle.id);
        stickyFavBtn.setAttribute('data-fav-toggle', vehicle.id);
        stickyFavBtn.classList.toggle('is-active', isFav);
        stickyFavBtn.setAttribute('aria-pressed', String(isFav));
        const icon = stickyFavBtn.querySelector('i');
        if (icon) icon.className = isFav ? 'bi bi-heart-fill' : 'bi bi-heart';
      }
    };

    // Gallery Controls
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateGalleryImage(activeGalleryIndex - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateGalleryImage(activeGalleryIndex + 1);
      });
    }

    // Lightbox Open/Close & Keyboard/Touch Support
    const openLightbox = () => {
      if (!lightbox) return;
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      updateGalleryImage(activeGalleryIndex);
      if (lightboxClose) lightboxClose.focus();
    };

    const closeLightbox = () => {
      if (!lightbox) return;
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      if (openLightboxTrigger) openLightboxTrigger.focus();
    };

    if (openLightboxTrigger) {
      openLightboxTrigger.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        openLightbox();
      });
      openLightboxTrigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox();
        }
      });
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', () => updateGalleryImage(activeGalleryIndex - 1));
    }
    if (lightboxNext) {
      lightboxNext.addEventListener('click', () => updateGalleryImage(activeGalleryIndex + 1));
    }

    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (!lightbox || !lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        updateGalleryImage(activeGalleryIndex - 1);
      } else if (e.key === 'ArrowRight') {
        updateGalleryImage(activeGalleryIndex + 1);
      }
    });

    // Touch Swipe Support on Gallery & Lightbox
    const attachSwipe = (el) => {
      if (!el) return;
      let startX = 0;
      el.addEventListener(
        'touchstart',
        (e) => {
          startX = e.changedTouches[0].screenX;
        },
        { passive: true }
      );
      el.addEventListener(
        'touchend',
        (e) => {
          const deltaX = e.changedTouches[0].screenX - startX;
          if (Math.abs(deltaX) > 45) {
            if (deltaX < 0) {
              updateGalleryImage(activeGalleryIndex + 1);
            } else {
              updateGalleryImage(activeGalleryIndex - 1);
            }
          }
        },
        { passive: true }
      );
    };

    attachSwipe(openLightboxTrigger);
    attachSwipe(lightbox);

    renderVehicleDetails(currentVehicle);
  };

  /* ------------------------------------------------------------------------
     9. FORM VALIDATION (Test-Drive Form on Details & Contact Form)
     ------------------------------------------------------------------------ */
  const initFormsValidation = () => {
    const todayISO = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('tdPreferredDate');
    if (dateInput) {
      dateInput.setAttribute('min', todayISO);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;

    const setFieldError = (inputEl, hasError, customMsg) => {
      if (!inputEl) return;
      const group = inputEl.closest('.an-field-group');
      if (!group) return;
      group.classList.toggle('has-error', hasError);
      inputEl.setAttribute('aria-invalid', String(hasError));
      const errSpan = group.querySelector('.an-field-error span');
      if (errSpan && customMsg) {
        errSpan.textContent = customMsg;
      }
    };

    // Clear field error on input
    document.querySelectorAll('.an-field-group .an-input, .an-field-group .an-select').forEach((input) => {
      input.addEventListener('input', () => setFieldError(input, false));
      input.addEventListener('change', () => setFieldError(input, false));
    });

    // 9A. Test-Drive Booking Form (vehicle-details.html)
    const tdForm = document.getElementById('testDriveBookingForm');
    if (tdForm) {
      let isSubmittingTd = false;
      tdForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (isSubmittingTd) return;

        const nameEl = document.getElementById('tdFullName');
        const emailEl = document.getElementById('tdEmail');
        const phoneEl = document.getElementById('tdPhone');
        const dateEl = document.getElementById('tdPreferredDate');
        const timeEl = document.getElementById('tdPreferredTime');
        const vehicleEl = document.getElementById('tdVehicleName');
        const feedbackEl = document.getElementById('tdFormFeedback');
        const submitBtn = document.getElementById('tdSubmitBtn');

        let valid = true;

        if (!nameEl.value.trim() || nameEl.value.trim().length < 2) {
          setFieldError(nameEl, true, 'Please enter your full name.');
          valid = false;
        }
        if (!emailRegex.test(emailEl.value.trim())) {
          setFieldError(emailEl, true, 'Please enter a valid email address.');
          valid = false;
        }
        if (!phoneRegex.test(phoneEl.value.trim())) {
          setFieldError(phoneEl, true, 'Please enter a valid phone number (7–15 digits).');
          valid = false;
        }
        if (!dateEl.value || dateEl.value < todayISO) {
          setFieldError(dateEl, true, 'Please select today or a future date for your test drive.');
          valid = false;
        }
        if (!timeEl.value) {
          setFieldError(timeEl, true, 'Please choose a preferred time slot.');
          valid = false;
        }
        if (!vehicleEl.value.trim()) {
          setFieldError(vehicleEl, true, 'Please specify the vehicle name.');
          valid = false;
        }

        if (!valid) {
          const firstErr = tdForm.querySelector('.has-error .an-input, .has-error .an-select');
          if (firstErr) firstErr.focus();
          return;
        }

        isSubmittingTd = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Validating Request...';

        setTimeout(() => {
          isSubmittingTd = false;
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;

          if (feedbackEl) {
            feedbackEl.className = 'an-form-feedback is-visible is-success';
            feedbackEl.innerHTML = `
              <div class="d-flex align-items-start gap-2">
                <i class="bi bi-check-circle-fill text-success fs-5 mt-1" aria-hidden="true"></i>
                <div>
                  <strong>Front-End Demonstration — Request Validated:</strong>
                  Thank you, <strong>${nameEl.value.trim()}</strong>. Your preferred slot on <strong>${dateEl.value}</strong> (${timeEl.value}) for the <strong>${vehicleEl.value.trim()}</strong> has passed client-side validation.
                  <div class="small text-muted mt-1">Note: This is a front-end interface demonstration. No booking data has been transmitted to a live dealership server.</div>
                </div>
              </div>
            `;
          }
          tdForm.reset();
          // Restore current vehicle name
          const headingEl = document.getElementById('vdMainHeading');
          const priceEl = document.getElementById('vdTopPrice');
          if (headingEl && priceEl) {
            vehicleEl.value = `${headingEl.textContent} (${priceEl.textContent})`;
          }
        }, 550);
      });
    }

    // 9B. Contact & Enquiry Form (contact.html)
    const contactForm = document.getElementById('contactEnquiryForm');
    if (contactForm) {
      let isSubmittingContact = false;
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (isSubmittingContact) return;

        const nameEl = document.getElementById('cfFullName');
        const emailEl = document.getElementById('cfEmail');
        const phoneEl = document.getElementById('cfPhone');
        const typeEl = document.getElementById('cfEnquiryType');
        const vehicleEl = document.getElementById('cfVehicleInterest');
        const messageEl = document.getElementById('cfMessage');
        const feedbackEl = document.getElementById('cfFormFeedback');
        const submitBtn = document.getElementById('cfSubmitBtn');

        let valid = true;

        if (!nameEl.value.trim() || nameEl.value.trim().length < 2) {
          setFieldError(nameEl, true, 'Please enter your full name.');
          valid = false;
        }
        if (!emailRegex.test(emailEl.value.trim())) {
          setFieldError(emailEl, true, 'Please enter a valid email address.');
          valid = false;
        }
        if (!phoneRegex.test(phoneEl.value.trim())) {
          setFieldError(phoneEl, true, 'Please enter a valid phone number.');
          valid = false;
        }
        if (!typeEl.value) {
          setFieldError(typeEl, true, 'Please select an enquiry type.');
          valid = false;
        }
        if (!vehicleEl.value) {
          setFieldError(vehicleEl, true, 'Please select a vehicle of interest.');
          valid = false;
        }
        if (!messageEl.value.trim() || messageEl.value.trim().length < 10) {
          setFieldError(messageEl, true, 'Please enter a message of at least 10 characters.');
          valid = false;
        }

        if (!valid) {
          const firstErr = contactForm.querySelector('.has-error .an-input, .has-error .an-select');
          if (firstErr) firstErr.focus();
          return;
        }

        isSubmittingContact = true;
        const originalBtnHTML = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Processing Enquiry...';

        setTimeout(() => {
          isSubmittingContact = false;
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHTML;

          if (feedbackEl) {
            feedbackEl.className = 'an-form-feedback is-visible is-success';
            feedbackEl.innerHTML = `
              <div class="d-flex align-items-start gap-2">
                <i class="bi bi-check-circle-fill text-success fs-5 mt-1" aria-hidden="true"></i>
                <div>
                  <strong>Front-End Demonstration — Enquiry Validated:</strong>
                  Thank you, <strong>${nameEl.value.trim()}</strong>. Your <strong>${typeEl.value}</strong> regarding <strong>${vehicleEl.value}</strong> has been validated on the client side.
                  <div class="small text-muted mt-1">Note: No backend server is connected in this demonstration build; connect an API endpoint or CRM webhook for production delivery.</div>
                </div>
              </div>
            `;
          }
          contactForm.reset();
        }, 600);
      });
    }
  };

  /* ------------------------------------------------------------------------
     10. ACCESSIBLE FAQ ACCORDIONS (Section 8.E)
     ------------------------------------------------------------------------ */
  const initFaqAccordions = () => {
    const triggers = document.querySelectorAll('.an-accordion-trigger');
    if (!triggers.length) return;

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.an-accordion-item');
        const panelId = trigger.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        if (!item || !panel) return;

        const isOpen = item.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', String(isOpen));
        panel.hidden = !isOpen;
      });
    });
  };

  /* ------------------------------------------------------------------------
     11. INTERACTIVE ANIMATION SUITE (Scroll Progress, Back-to-Top, Counters, Ripple, Toast)
     ------------------------------------------------------------------------ */
  let toastTimeoutId = null;

  const showShowroomToast = (message, iconClass = 'bi-heart-fill') => {
    let toast = document.getElementById('anShowroomToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'anShowroomToast';
      toast.className = 'an-toast-notification';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }

    toast.innerHTML = `<i class="bi ${iconClass}" aria-hidden="true"></i><span>${message}</span>`;
    toast.classList.add('is-visible');

    if (toastTimeoutId) clearTimeout(toastTimeoutId);
    toastTimeoutId = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2800);
  };

  const initInteractiveAnimations = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 11.1 Top Scroll Progress Racing Ribbon + Floating Back-to-Top Button with SVG Ring
    const progressBar = document.createElement('div');
    progressBar.className = 'an-scroll-progress';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.prepend(progressBar);

    const backToTopBtn = document.createElement('button');
    backToTopBtn.type = 'button';
    backToTopBtn.className = 'an-back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Scroll back to top');
    backToTopBtn.innerHTML = `
      <svg viewBox="0 0 54 54" aria-hidden="true">
        <circle cx="27" cy="27" r="24"></circle>
      </svg>
      <i class="bi bi-arrow-up" aria-hidden="true"></i>
    `;
    document.body.appendChild(backToTopBtn);
    const ringCircle = backToTopBtn.querySelector('circle');
    const circumference = 2 * Math.PI * 24;
    if (ringCircle) {
      ringCircle.style.strokeDasharray = `${circumference.toFixed(1)}`;
      ringCircle.style.strokeDashoffset = `${circumference.toFixed(1)}`;
    }

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });

    const updateScrollIndicators = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;

      progressBar.style.width = `${(ratio * 100).toFixed(2)}%`;

      if (ringCircle) {
        const offset = circumference - ratio * circumference;
        ringCircle.style.strokeDashoffset = `${offset.toFixed(1)}`;
      }

      backToTopBtn.classList.toggle('is-visible', scrollTop > 280);
    };

    window.addEventListener('scroll', updateScrollIndicators, { passive: true });
    window.addEventListener('resize', updateScrollIndicators, { passive: true });
    updateScrollIndicators();

    // 11.2 Auto-tag Staggered & Directional Scroll-Reveal Elements Across All Pages
    const autoRevealGroups = [
      { selector: '.an-snip-trust-item', mode: 'scale', step: 70 },
      { selector: '.an-bento-item', mode: 'scale', step: 80 },
      { selector: '.an-discovery-block', mode: '', step: 70 },
      { selector: '.an-craft-card', mode: '', step: 75 },
      { selector: '.an-contact-card', mode: 'scale', step: 75 },
      { selector: '.an-overview-box', mode: 'scale', step: 45 },
      { selector: '.an-equipment-item', mode: 'left', step: 40 },
      { selector: '.an-accordion-item', mode: '', step: 65 },
      { selector: '.an-section-title', mode: '', step: 0 },
      { selector: '.an-section-subtitle', mode: '', step: 60 },
      { selector: '.an-eyebrow', mode: 'left', step: 0 },
      { selector: '.an-collage-primary', mode: 'left', step: 0 },
      { selector: '.an-collage-subitem', mode: 'right', step: 90 },
      { selector: '.an-feature-points li', mode: 'right', step: 75 },
      { selector: '.an-footer-heading', mode: '', step: 60 },
      { selector: '.an-footer-links li', mode: 'left', step: 35 }
    ];
    autoRevealGroups.forEach(({ selector, mode, step }) => {
      document.querySelectorAll(selector).forEach((el, idx) => {
        if (!el.hasAttribute('data-reveal')) {
          el.setAttribute('data-reveal', mode);
          if (step > 0) {
            el.style.setProperty('--reveal-delay', `${(idx % 6) * step}ms`);
          }
        }
      });
    });

    // 11.3 Interactive Radial Spotlight & 3D Tilt Tracking on Cards
    if (!prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
      let activeHoveredCard = null;

      document.addEventListener(
        'mousemove',
        (e) => {
          const card = e.target.closest('.an-vehicle-card, .an-craft-card, .an-contact-card');
          if (activeHoveredCard && activeHoveredCard !== card) {
            activeHoveredCard.style.transform = '';
            activeHoveredCard = null;
          }
          if (!card) return;

          activeHoveredCard = card;
          const rect = card.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${mouseX.toFixed(1)}px`);
          card.style.setProperty('--mouse-y', `${mouseY.toFixed(1)}px`);

          // Subtle luxury 3D tilt on wide desktop screens (clamped to prevent overflow)
          if (window.innerWidth >= 992) {
            const xPercent = mouseX / rect.width - 0.5;
            const yPercent = mouseY / rect.height - 0.5;
            const rotateX = (-yPercent * 4.5).toFixed(2);
            const rotateY = (xPercent * 5.5).toFixed(2);
            card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
          }
        },
        { passive: true }
      );

      document.addEventListener(
        'mouseleave',
        () => {
          if (activeHoveredCard) {
            activeHoveredCard.style.transform = '';
            activeHoveredCard = null;
          }
        },
        { passive: true }
      );
    }

    // 11.4 Animated Number Counter-Up on Scroll for Credibility Metrics
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      const counterTargets = document.querySelectorAll('.an-snip-cred-title, .an-snip-cred-sub');
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            counterObserver.unobserve(el);

            const originalText = el.textContent;
            const match = originalText.match(/^(\d+)(\+?\s+.*)$/);
            if (!match) return;

            const targetNum = parseInt(match[1], 10);
            const suffix = match[2];
            if (isNaN(targetNum) || targetNum <= 1) return;

            const duration = 1100;
            const startTime = performance.now();

            const tick = (now) => {
              const elapsed = Math.min(1, (now - startTime) / duration);
              const eased = 1 - Math.pow(1 - elapsed, 4);
              const current = Math.round(targetNum * eased);
              el.textContent = `${current}${suffix}`;
              if (elapsed < 1) {
                requestAnimationFrame(tick);
              } else {
                el.textContent = originalText;
              }
            };
            requestAnimationFrame(tick);
          });
        },
        { threshold: 0.5 }
      );

      counterTargets.forEach((el) => counterObserver.observe(el));
    }

    // 11.4 Tactile Button Ripple Wave on Click
    if (!prefersReducedMotion) {
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-an-primary, .btn-an-secondary, .btn-an-outline');
        if (!btn) return;

        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const ripple = document.createElement('span');
        ripple.className = 'an-btn-ripple';
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 620);
      });
    }
  };

  /* ------------------------------------------------------------------------
     12. INITIALIZE ON DOM READY
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.add('js-ready');
    initGlobalNavigation();
    initHomePage();
    initInventoryPage();
    initVehicleDetailsPage();
    initFormsValidation();
    initFaqAccordions();
    initInteractiveAnimations();
    observeRevealElements(document);
  });
})();

