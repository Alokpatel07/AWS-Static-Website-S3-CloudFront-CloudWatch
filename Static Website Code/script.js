const books = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "IT",
      rating: 4.8,
      description: "A handbook of agile software craftsmanship.",
      summary: "Clean Code by Robert C. Martin is a must-read for developers who want to improve the quality of their code...",
      amazon: "https://www.amazon.com/dp/0132350882"
    },
    {
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      category: "IT",
      rating: 4.7,
      description: "A comprehensive guide to algorithms in computer science.",
      summary: "Introduction to Algorithms, often referred to as CLRS, is a cornerstone text for computer science students...",
      amazon: "https://www.amazon.com/dp/0262033844"
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt and David Thomas",
      category: "IT",
      rating: 4.6,
      description: "Classic advice on becoming a better programmer.",
      summary: "The Pragmatic Programmer offers practical advice for software developers to improve their coding practices, problem-solving mindset, and long-term career in the tech industry.",
      amazon: "https://www.amazon.com/dp/0135957052"
    },
    {
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
      category: "IT",
      rating: 4.5,
      description: "A foundational book on software design patterns.",
      summary: "This book introduces key design patterns that help developers build flexible and reusable object-oriented software systems using proven architectural solutions.",
      amazon: "https://www.amazon.com/dp/0201633612"
    },
    {
      title: "You Don't Know JS Yet",
      author: "Kyle Simpson",
      category: "IT",
      rating: 4.7,
      description: "A deep dive into the core mechanisms of JavaScript.",
      summary: "You Don't Know JS Yet is an in-depth series that demystifies how JavaScript really works, perfect for developers who want to truly master the language beyond just syntax.",
      amazon: "https://www.amazon.com/dp/B0867Y2356"
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      category: "Business & Management",
      rating: 4.5,
      description: "A guide to building startups using lean principles.",
      summary: "The Lean Startup by Eric Ries introduces a systematic, scientific approach to creating and managing successful startups...",
      amazon: "https://www.amazon.com/dp/0307887898"
    },
    {
      title: "Principles of Corporate Finance",
      author: "Richard A. Brealey",
      category: "Finance & Investment",
      rating: 4.6,
      description: "A comprehensive text on corporate finance.",
      summary: "Principles of Corporate Finance by Richard A. Brealey is one of the most widely used textbooks on corporate finance...",
      amazon: "https://www.amazon.com/dp/0077861699"
    },
    {
      title: "Contagious: How to Build Word of Mouth in the Digital Age",
      author: "Jonah Berger",
      category: "Marketing & Sales",
      rating: 4.7,
      description: "A look at why things go viral and how to make your product contagious.",
      summary: "Contagious by Jonah Berger explores the science behind why people share ideas, products, and experiences...",
      amazon: "https://www.amazon.com/dp/1451686579"
    },
    {
      title: "Harrison's Principles of Internal Medicine",
      author: "Dennis L. Kasper",
      category: "Medicine & Healthcare",
      rating: 4.8,
      description: "The go-to textbook for internal medicine.",
      summary: "Harrison's Principles of Internal Medicine is the definitive textbook for internal medicine...",
      amazon: "https://www.amazon.com/dp/1264268832"
    },
    {
      title: "The Law of Contracts",
      author: "John D. Calamari",
      category: "Law",
      rating: 4.5,
      description: "An in-depth look at contract law and principles.",
      summary: "The Law of Contracts by John D. Calamari offers a thorough analysis of the legal principles governing contracts...",
      amazon: "https://www.amazon.com/dp/0314103998"
    },
    {
      title: "Architecture: Form, Space, and Order",
      author: "Francis D.K. Ching",
      category: "Architecture",
      rating: 4.9,
      description: "A guide to the fundamental principles of architectural design.",
      summary: "Architecture: Form, Space, and Order by Francis D.K. Ching is a classic resource for architecture students...",
      amazon: "https://www.amazon.com/dp/1118745082"
    },
    {
      title: "Engineering Mechanics: Statics",
      author: "J.L. Meriam and L.G. Kraige",
      category: "Engineering",
      rating: 4.6,
      description: "Fundamentals of statics in engineering mechanics.",
      summary: "This book offers a detailed understanding of forces and equilibrium, making it an essential resource for students beginning their journey in mechanical and civil engineering.",
      amazon: "https://www.amazon.com/dp/1118807335"
    },
    {
      title: "Thermodynamics: An Engineering Approach",
      author: "Yunus A. Cengel and Michael A. Boles",
      category: "Engineering",
      rating: 4.7,
      description: "Comprehensive thermodynamics textbook for engineers.",
      summary: "Cengel and Boles present core thermodynamic principles with practical engineering applications, making this book a standard reference for mechanical engineering students.",
      amazon: "https://www.amazon.com/dp/0073398179"
    },
    {
      title: "Introduction to Flight",
      author: "John D. Anderson Jr.",
      category: "Engineering",
      rating: 4.5,
      description: "Basics of aerospace engineering and flight mechanics.",
      summary: "This book introduces students to the principles of flight, aircraft performance, and aerospace history, combining theory with real-world insights from aviation.",
      amazon: "https://www.amazon.com/dp/0078027671"
    },
    {
      title: "Materials Science and Engineering: An Introduction",
      author: "William D. Callister Jr. and David G. Rethwisch",
      category: "Engineering",
      rating: 4.6,
      description: "Foundational text on materials science.",
      summary: "Callister’s book provides a balanced and clear introduction to materials science, covering the relationships between structure, properties, processing, and performance.",
      amazon: "https://www.amazon.com/dp/1119405490"
    },
    {
      title: "Signals and Systems",
      author: "Alan V. Oppenheim and Alan S. Willsky",
      category: "Engineering",
      rating: 4.4,
      description: "Core concepts in signal processing and system analysis.",
      summary: "This classic text explores time and frequency domain analysis, helping electrical engineering students grasp the essential theories of signals and systems.",
      amazon: "https://www.amazon.com/dp/0138147574"
    },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "Business & Management",
    rating: 4.6,
    description: "A guide to building successful startups using lean principles.",
    summary: "The Lean Startup provides a scientific approach to creating and managing successful startups by encouraging rapid experimentation, validated learning, and customer feedback.",
    amazon: "https://www.amazon.com/dp/0307887898"
  },
  {
    title: "Good to Great",
    author: "Jim Collins",
    category: "Business & Management",
    rating: 4.7,
    description: "Insights on transforming good companies into great ones.",
    summary: "Good to Great explores the factors that enable companies to make the leap from mediocrity to excellence, based on extensive research and real-world case studies.",
    amazon: "https://www.amazon.com/dp/0066620996"
  },
  {
    title: "Start with Why",
    author: "Simon Sinek",
    category: "Business & Management",
    rating: 4.5,
    description: "Explores how leaders can inspire action through purpose.",
    summary: "Start with Why encourages individuals and organizations to identify and communicate their core purpose, showing how great leaders inspire others by putting 'why' before 'what'.",
    amazon: "https://www.amazon.com/dp/1591846447"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Business & Management",
    rating: 4.6,
    description: "An exploration of the dual systems that drive our thinking.",
    summary: "Written by Nobel laureate Daniel Kahneman, this book explains how our minds operate using two systems—fast, intuitive thinking and slow, rational analysis—and how they affect our decision-making.",
    amazon: "https://www.amazon.com/dp/0374533555"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    category: "Finance & Investment",
    rating: 4.7,
    description: "A personal finance classic on building wealth.",
    summary: "Rich Dad Poor Dad challenges traditional views about money and investing, sharing lessons learned from two father figures to build financial independence and wealth.",
    amazon: "https://www.amazon.com/dp/1612681131"
  },
  {
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    category: "Finance & Investment",
    rating: 4.8,
    description: "The definitive book on value investing.",
    summary: "Written by legendary investor Benjamin Graham, this book lays out the principles of value investing, focusing on long-term strategies, risk management, and market psychology.",
    amazon: "https://www.amazon.com/dp/0060555661"
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance & Investment",
    rating: 4.7,
    description: "Timeless lessons on wealth, greed, and happiness.",
    summary: "The Psychology of Money explores how behavior and emotions affect our financial decisions, offering powerful insights into making smarter choices with money over time.",
    amazon: "https://www.amazon.com/dp/0857197681"
  },
  {
    title: "Common Stocks and Uncommon Profits",
    author: "Philip A. Fisher",
    category: "Finance & Investment",
    rating: 4.6,
    description: "A guide to growth investing strategies.",
    summary: "Philip Fisher outlines key techniques for identifying high-potential companies, emphasizing long-term growth investing and in-depth research of a company’s management and operations.",
    amazon: "https://www.amazon.com/dp/0471445509"
  },
{
  title: "Influence: The Psychology of Persuasion",
  author: "Robert B. Cialdini",
  category: "Marketing & Sales",
  rating: 4.8,
  description: "A classic book on the psychology behind persuasion techniques.",
  summary: "Cialdini explains six key principles of influence that marketers and sales professionals can use to ethically and effectively persuade others in various settings.",
  amazon: "https://www.amazon.com/dp/006124189X"
},
{
  title: "Contagious: How to Build Word of Mouth in the Digital Age",
  author: "Jonah Berger",
  category: "Marketing & Sales",
  rating: 4.6,
  description: "Explores why certain ideas and products become viral.",
  summary: "Contagious uncovers the science behind why things catch on and provides actionable techniques to make products, ideas, and messages more shareable and engaging.",
  amazon: "https://www.amazon.com/dp/1451686587"
},
{
  title: "Building a StoryBrand",
  author: "Donald Miller",
  category: "Marketing & Sales",
  rating: 4.7,
  description: "A marketing guide based on storytelling principles.",
  summary: "Donald Miller teaches businesses how to clarify their messaging using a proven storytelling framework that engages customers and increases conversions.",
  amazon: "https://www.amazon.com/dp/0718033329"
},

{
  title: "Sell Like Crazy",
  author: "Sabri Suby",
  category: "Marketing & Sales",
  rating: 4.6,
  description: "A modern strategy for driving traffic and sales.",
  summary: "Sell Like Crazy presents an aggressive yet effective digital marketing blueprint that helps businesses generate leads, convert sales, and grow revenue fast.",
  amazon: "https://www.amazon.com/dp/0648578308"
  },
{
  title: "Understanding Criminal Law",
  author: "Joshua Dressler",
  category: "Law",
  rating: 4.6,
  description: "An essential guide to American criminal law principles.",
  summary: "This book provides a thorough explanation of key criminal law concepts including intent, liability, and punishment, making it ideal for law students and legal professionals.",
  amazon: "https://www.amazon.com/dp/1531007917"
},
{
  title: "Constitutional Law: Principles and Policies",
  author: "Erwin Chemerinsky",
  category: "Law",
  rating: 4.8,
  description: "Comprehensive resource on U.S. constitutional law.",
  summary: "Erwin Chemerinsky’s text is widely used in law schools and offers in-depth analysis of constitutional doctrines, cases, and debates surrounding individual rights and federalism.",
  amazon: "https://www.amazon.com/dp/154381307X"
},
{
  title: "International Law",
  author: "Malcolm N. Shaw",
  category: "Law",
  rating: 4.5,
  description: "A leading textbook on international legal systems.",
  summary: "This book provides a detailed overview of the principles and institutions of international law, covering subjects like sovereignty, treaties, and human rights.",
  amazon: "https://www.amazon.com/dp/1108706217"
},
{
  title: "The Rule of Law",
  author: "Tom Bingham",
  category: "Law",
  rating: 4.7,
  description: "An accessible and powerful defense of the rule of law.",
  summary: "Lord Bingham explores what the rule of law means in modern society, why it matters, and how it underpins fair governance, liberty, and justice in democratic systems.",
  amazon: "https://www.amazon.com/dp/014103453X"
  },
{
  title: "Robbins and Cotran Pathologic Basis of Disease",
  author: "Vinay Kumar, Abul K. Abbas, Jon C. Aster",
  category: "Medicine & Healthcare",
  rating: 4.8,
  description: "Standard reference for pathology in medical education.",
  summary: "This textbook offers detailed explanations of disease mechanisms, clinical implications, and pathology concepts with high-quality illustrations, widely used in medical schools.",
  amazon: "https://www.amazon.com/dp/0323531130"
},
{
  title: "Gray's Anatomy for Students",
  author: "Richard Drake, A. Wayne Vogl, Adam W. M. Mitchell",
  category: "Medicine & Healthcare",
  rating: 4.7,
  description: "Illustrated anatomy book for medical students.",
  summary: "Gray's Anatomy for Students simplifies complex anatomy through visual guides, clinical correlations, and easy-to-follow content designed for future healthcare professionals.",
  amazon: "https://www.amazon.com/dp/0323934232"
},
{
  title: "Bates' Guide to Physical Examination and History Taking",
  author: "Lynn S. Bickley",
  category: "Medicine & Healthcare",
  rating: 4.6,
  description: "Essential guide for clinical examination skills.",
  summary: "Bates' Guide teaches comprehensive physical assessment techniques, combining step-by-step examination methods with patient history to support clinical reasoning.",
  amazon: "https://www.amazon.com/dp/1496398173"
},
{
  title: "Essentials of Family Medicine",
  author: "Philip D. Sloane, Lisa M. Slatt, Mark H. Ebell",
  category: "Medicine & Healthcare",
  rating: 4.5,
  description: "A practical reference for primary care.",
  summary: "Focused on clinical management of common conditions, this book is ideal for students and residents in family medicine, emphasizing evidence-based care and patient communication.",
  amazon: "https://www.amazon.com/dp/1451125435"
  },
{
  title: "Architecture: Form, Space, and Order",
  author: "Francis D. K. Ching",
  category: "Architecture",
  rating: 4.8,
  description: "Classic reference on architectural design principles.",
  summary: "Ching's book breaks down architectural elements into visual concepts, offering clear explanations of space organization, structure, and spatial form for design students.",
  amazon: "https://www.amazon.com/dp/1118745086"
},
{
  title: "Towards a New Architecture",
  author: "Le Corbusier",
  category: "Architecture",
  rating: 4.6,
  description: "Influential architectural theory work.",
  summary: "In this revolutionary text, Le Corbusier advocates for modernism and functional design, reshaping 20th-century architecture with his bold vision of form following purpose.",
  amazon: "https://www.amazon.com/dp/1614276053"
},
{
  title: "The Architect's Studio Companion",
  author: "Edward Allen and Joseph Iano",
  category: "Architecture",
  rating: 4.7,
  description: "Technical reference for building design and construction.",
  summary: "A must-have for architecture students and professionals, this guide provides design solutions, building systems data, and structural integration advice for real-world projects.",
  amazon: "https://www.amazon.com/dp/1119583086"
},
{
  title: "101 Things I Learned in Architecture School",
  author: "Matthew Frederick",
  category: "Architecture",
  rating: 4.6,
  description: "Quick insights and lessons from architecture education.",
  summary: "This book delivers bite-sized wisdom and visual diagrams that simplify complex architectural ideas, making it perfect for both aspiring architects and practicing designers.",
  amazon: "https://www.amazon.com/dp/0262062666"
  }
  ];
  
  const categoryButtons = document.querySelectorAll('.category-btn');
  const bookList = document.getElementById('bookList');
  
  // Add event listeners to each category button
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      showBooksForCategory(category);
    });
  });
  
  // Function to display books for a specific category
  function showBooksForCategory(category) {
    const filteredBooks = books.filter(book => book.category === category);
    bookList.innerHTML = ''; // Clear current book list
  
    if (filteredBooks.length === 0) {
      bookList.innerHTML = '<p>No books found for this category.</p>';
    } else {
      filteredBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
          <h2>${book.title}</h2>
          <p><strong>Author:</strong> ${book.author}</p>
          <p>${book.description}</p>
          <p>⭐ ${book.rating}</p>
          <a href="${book.amazon}" target="_blank">Buy on Amazon</a>
          <div class="book-summary">
            <h3>Summary:</h3>
            <p>${book.summary}</p>
          </div>
        `;
        bookList.appendChild(card);
      });
    }
  }
  