import React, { useState } from "react";
import "./Home.css";


// ================= HEADER =================

function Header() {

  return (
    <header className="header">

      {/* LOGO */}

      <div className="logo-area">

        <div>

          <img
            src="https://www.yashvitech.com/static/media/logo(b).c451bf22349ad8c51a6c.png"
            alt="Yashvitech Logo"
          />

        </div>

      </div>


      {/* NAVIGATION */}

      <nav className="nav-menu">

        <a href="#features">
          Key Features
        </a>

        <a href="#demo">
          Interactive Demo
        </a>

        <a href="#stories">
          Success Stories
        </a>

        <a href="#faq">
          FAQ
        </a>

      </nav>


      {/* RIGHT */}

      <div className="header-right">

        <div className="phone">
          ☎ <span>+91 98765 43210</span>
        </div>

        <a
          href="#Book"
          className="demo-btn"
        >
          Book Free Demo
        </a>

      </div>

    </header>
  );
}



// ================= HOME =================

function Home() {

  return (

    <section
      id="home"
      className="home"
    >

      <div className="home-top">


        {/* LEFT */}

        <div className="home-left">

          <div className="badge">
            🚚 #1 Transport & Fleet Management Software in India
          </div>


          <h1>

            Transform Fleet

            <br />

            Operations & Stop Profit

            <br />

            Leakage with

            <span>
              {" "}Yashvitech TMS
            </span>

          </h1>


          <p>
            A powerful cloud-based Transport Management System designed
            for transporters, fleet owners and logistics businesses.
          </p>


          <div className="home-buttons">

            <button>
              Book Free Demo →
            </button>

            <button>
              Explore Features
            </button>

          </div>

        </div>



        {/* RIGHT */}

        <div className="home-right">

          <img
            src="truck.png"
            alt="Transport Trucks"
          />

        </div>

      </div>



      {/* HOME STATS */}

      <div className="home-stats">

        <div>

          <h2>
            500+
          </h2>

          <p>
            Fleets Managed
          </p>

        </div>


        <div>

          <h2>
            10M+
          </h2>

          <p>
            Bilties Generated
          </p>

        </div>


        <div>

          <h2>
            99.9%
          </h2>

          <p>
            Uptime
          </p>

        </div>

      </div>



      {/* TRUSTED */}

      <div className="trusted">

        <p>
          TRUSTED BY 500+ LOGISTICS OPERATORS, FLEET OWNERS &
          GOODS TRANSPORT COMPANIES
        </p>


        <div className="companies">

          <h3>
            ▣ Apex Express Logistics
          </h3>

          <h3>
            ▰ SpeedCargo Roadlines
          </h3>

          <h3>
            ▤ Global Freight Corp
          </h3>

          <h3>
            ▥ National Transporters
          </h3>

          <h3>
            ♧ Royal Logistics India
          </h3>

        </div>

      </div>

    </section>

  );
}



// ================= FEATURES =================

function Features() {

  const [activeTab, setActiveTab] =
    useState("Operations & Dispatch");


  const featureData = {

    "Operations & Dispatch": [

      {
        icon: "🏢",
        title: "Manage Multiple Companies",
        desc: "Manage multiple companies, branches and transport operations from one platform."
      },

      {
        icon: "👥",
        title: "Customer & Consignor Master",
        desc: "Maintain complete customer and consignor information in one place."
      },

      {
        icon: "📍",
        title: "Order Booking & Dispatch",
        desc: "Create orders, assign vehicles and manage dispatch operations easily."
      }

    ],


    "Accounts & Bilty": [

      {
        icon: "🧾",
        title: "Bilty Management",
        desc: "Create and manage digital bilty records quickly and efficiently."
      },

      {
        icon: "💰",
        title: "Accounts Management",
        desc: "Track income, expenses, payments and outstanding balances."
      },

      {
        icon: "📊",
        title: "Financial Reports",
        desc: "Get detailed reports for your complete transport business."
      }

    ],


    "Diesel, Tyre & Repairs": [

      {
        icon: "⛽",
        title: "Diesel Management",
        desc: "Track diesel usage, fuel expenses and vehicle-wise consumption."
      },

      {
        icon: "🛞",
        title: "Tyre Management",
        desc: "Monitor tyre usage, replacement and maintenance records."
      },

      {
        icon: "🔧",
        title: "Repair & Maintenance",
        desc: "Manage vehicle servicing, repairs and maintenance schedules."
      }

    ],


    "Driver & Document Alerts": [

      {
        icon: "🚚",
        title: "Driver Management",
        desc: "Maintain driver details, assignments and performance records."
      },

      {
        icon: "📄",
        title: "Document Management",
        desc: "Keep vehicle and driver documents organized in one place."
      },

      {
        icon: "🔔",
        title: "Expiry Alerts",
        desc: "Get timely alerts for licence, insurance, permit and document expiry."
      }

    ]

  };


  return (

    <section
      className="features"
      id="features"
    >


      {/* HEADING */}

      <div className="features-heading">

        <div className="feature-badge">
          COMPLETE LOGISTICS STACK
        </div>


        <h1>

          Every Feature You Need to Run a Profitable

          <br />

          Transport Business

        </h1>


        <p>
          Replaces manual registers, Excel spreadsheets, and fragmented software
          with one end-to-end cloud platform.
        </p>

      </div>



      {/* TABS */}

      <div className="feature-tabs">

        {Object.keys(featureData).map((tab) => (

          <button
            key={tab}
            className={
              activeTab === tab
                ? "active-tab"
                : ""
            }
            onClick={() =>
              setActiveTab(tab)
            }
          >
            {tab}
          </button>

        ))}

      </div>



      {/* CARDS */}

      <div className="feature-cards">

        {featureData[activeTab].map(
          (item, index) => (

            <div
              className="feature-card"
              key={index}
            >

              <div className="feature-icon">
                {item.icon}
              </div>


              <h2>
                {item.title}
              </h2>


              <p>
                {item.desc}
              </p>

            </div>

          )
        )}

      </div>


      {/* WHATSAPP */}

      <div className="whatsapp-button">
        ☎
      </div>

    </section>

  );
}



// ================= INTERACTIVE DEMO =================

function InteractiveDemo() {

  const [activeModule, setActiveModule] =
    useState("Bilty Generator");


  const moduleData = {


    "Bilty Generator": {

      icon: "📄",

      title:
        "New Lorry Receipt / Bilty #LR-2026-8902",

      company:
        "Yashvitech Roadlines Ltd.",

      date:
        "19-Aug-2026",


      leftTitle:
        "CONSIGNER (SENDER)",

      leftName:
        "Reliance Industries Ltd.",

      leftGst:
        "GST: 27AAAAA0000A1Z5",

      leftHub:
        "Hub: Hazira, Gujarat",


      middleTitle:
        "CONSIGNEE (RECEIVER)",

      middleName:
        "Tata Motors Auto Hub",

      middleGst:
        "GST: 27BBBBB1111B2Z9",

      middleHub:
        "Hub: Chakan, Pune",


      rightTitle:
        "TRUCK & FREIGHT DETAILS",

      rightVehicle:
        "MH-12-VT-9821",

      rightDriver:
        "Driver: Ramesh Kumar (DL Valid)",

      rightAmount:
        "Freight Amount: ₹ 48,500"

    },


    "Fleet Dispatch Board": {

      icon: "🚚",

      title:
        "Fleet Dispatch Board",

      company:
        "Yashvitech Roadlines Ltd.",

      date:
        "19-Aug-2026",


      leftTitle:
        "AVAILABLE TRUCKS",

      leftName:
        "MH-12-AB-4521",

      leftGst:
        "Driver: Amit Kumar",

      leftHub:
        "Hub: Pune",


      middleTitle:
        "IN TRANSIT",

      middleName:
        "MH-14-CD-7821",

      middleGst:
        "Driver: Rahul Singh",

      middleHub:
        "Mumbai → Delhi",


      rightTitle:
        "DISPATCH STATUS",

      rightVehicle:
        "MH-15-XY-8821",

      rightDriver:
        "Driver: Suresh Yadav",

      rightAmount:
        "Status: On Route"

    },


    "Diesel & Tyre Log": {

      icon: "⛽",

      title:
        "Diesel & Tyre Log",

      company:
        "Yashvitech Roadlines Ltd.",

      date:
        "19-Aug-2026",


      leftTitle:
        "DIESEL ENTRY",

      leftName:
        "MH-12-VT-9821",

      leftGst:
        "Fuel: Diesel",

      leftHub:
        "120 Litres",


      middleTitle:
        "TYRE DETAILS",

      middleName:
        "Front Left Tyre",

      middleGst:
        "Brand: MRF",

      middleHub:
        "Good Condition",


      rightTitle:
        "TOTAL EXPENSE",

      rightVehicle:
        "Diesel Cost",

      rightDriver:
        "₹ 10,800",

      rightAmount:
        "Tyre Cost: ₹ 7,500"

    },


    "Vehicle P&L Report": {

      icon: "📈",

      title:
        "Vehicle Profit & Loss Report",

      company:
        "Yashvitech Roadlines Ltd.",

      date:
        "19-Aug-2026",


      leftTitle:
        "TOTAL REVENUE",

      leftName:
        "MH-12-VT-9821",

      leftGst:
        "Freight Revenue",

      leftHub:
        "₹ 48,500",


      middleTitle:
        "TOTAL EXPENSE",

      middleName:
        "Fuel + Repair",

      middleGst:
        "Operating Cost",

      middleHub:
        "₹ 21,400",


      rightTitle:
        "NET PROFIT",

      rightVehicle:
        "Vehicle Profit",

      rightDriver:
        "₹ 27,100",

      rightAmount:
        "56% Margin"

    }

  };


  const data =
    moduleData[activeModule];


  return (

    <section
      className="interactive-demo"
      id="demo"
    >


      {/* HEADING */}

      <div className="demo-heading">

        <div className="demo-badge">
          INTERACTIVE PREVIEW
        </div>


        <h1>
          Experience Yashvitech TMS in Action
        </h1>


        <p>
          Click the modules below to see how easy it is to manage your
          transport business.
        </p>

      </div>



      {/* MODULE BUTTONS */}

      <div className="demo-tabs">

        {Object.keys(moduleData).map(
          (module) => (

            <button
              key={module}
              className={
                activeModule === module
                  ? "demo-tab active"
                  : "demo-tab"
              }
              onClick={() =>
                setActiveModule(module)
              }
            >

              <span className="tab-icon">

                {module === "Bilty Generator" &&
                  "📄"}

                {module === "Fleet Dispatch Board" &&
                  "🚚"}

                {module === "Diesel & Tyre Log" &&
                  "⛽"}

                {module === "Vehicle P&L Report" &&
                  "📈"}

              </span>


              <span>
                {module}
              </span>

            </button>

          )
        )}

      </div>



      {/* PREVIEW CARD */}

      <div className="bilty-preview">


        {/* HEADER */}

        <div className="bilty-header">

          <div>

            <h2>
              {data.icon} {data.title}
            </h2>


            <p>
              Company: {data.company} | Date: {data.date}
            </p>

          </div>


          <span className="ready-status">
            Ready to Print
          </span>

        </div>



        {/* LINE */}

        <div className="bilty-line"></div>



        {/* DETAILS */}

        <div className="bilty-details">


          {/* LEFT */}

          <div className="bilty-box">

            <h4>
              {data.leftTitle}
            </h4>


            <strong>
              {data.leftName}
            </strong>


            <p>
              {data.leftGst}
            </p>


            <p>
              {data.leftHub}
            </p>

          </div>



          {/* MIDDLE */}

          <div className="bilty-box">

            <h4>
              {data.middleTitle}
            </h4>


            <strong>
              {data.middleName}
            </strong>


            <p>
              {data.middleGst}
            </p>


            <p>
              {data.middleHub}
            </p>

          </div>



          {/* RIGHT */}

          <div className="bilty-box">

            <h4>
              {data.rightTitle}
            </h4>


            <p>
              Vehicle:
              {" "}
              <strong>
                {data.rightVehicle}
              </strong>
            </p>


            <p>
              {data.rightDriver}
            </p>


            <strong className="amount">
              {data.rightAmount}
            </strong>

          </div>

        </div>



        {/* BOTTOM */}

        <div className="preview-bottom">

          <span>
            ✓ Verified Information
          </span>


          <span>
            Digital Record
          </span>


          <button>
            Print Preview
          </button>

        </div>

      </div>



      {/* WHATSAPP */}

      <div className="demo-whatsapp">
        ☎
      </div>

    </section>

  );
}



// ================= SUCCESS STORIES =================

function SuccessStories() {

  const reviews = [

    {
      text:
        "Earlier, generating 50+ bilties every day and reconciling driver advances was a nightmare. Yashvitech TMS automated our entire dispatch. Driver DL alerts alone saved us thousands in RTO fines.",

      name:
        "Rajesh Patel",

      role:
        "Managing Director, Gujarat Roadlines",

      company:
        "65 Truck Fleet",

      initials:
        "RP",

      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",

      result:
        "Faster Dispatch & Fewer RTO Issues",

      number:
        "40%",

      label:
        "Faster Daily Operations"
    },


    {
      text:
        "The Truck Profit & Loss report feature is a game-changer. I can instantly see which route and which truck is giving us profits versus losses. Diesel tracking eliminated theft completely.",

      name:
        "Suresh Khatri",

      role:
        "Owner, SpeedCargo Logistics",

      company:
        "110 Vehicle Fleet",

      initials:
        "SK",

      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c3070?auto=format&fit=crop&w=500&q=80",

      result:
        "Better Profit & Expense Control",

      number:
        "25%",

      label:
        "Expense Leakage Reduced"
    },


    {
      text:
        "Excellent support team from Yashvitech. They migrated all our old data seamlessly. The software works smoothly on mobile browsers so our branch managers can create bilty anywhere.",

      name:
        "Anil Sharma",

      role:
        "Operations Head, Apex Freight Movers",

      company:
        "Pan India Operations",

      initials:
        "AS",

      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=500&q=80",

      result:
        "Easy Mobile & Branch Operations",

      number:
        "3x",

      label:
        "Faster Bilty Processing"
    }

  ];


  return (

    <section
      className="success-section"
      id="stories"
    >


      {/* TOP */}

      <div className="success-top">

        <span className="success-badge">
          ★ CLIENT SUCCESS STORIES
        </span>


        <h1>

          Trusted by Transporters.

          <br />

          <span>
            Loved by Fleet Owners.
          </span>

        </h1>


        <p className="success-description">
          From growing transport companies to large fleet operators,
          Yashvitech TMS helps businesses simplify operations,
          control expenses and increase profitability.
        </p>

      </div>



      {/* HIGHLIGHTS */}

      <div className="success-highlights">

        <div className="success-highlight">

          <strong>
            500+
          </strong>

          <span>
            Transport Businesses
          </span>

        </div>


        <div className="success-highlight">

          <strong>
            10M+
          </strong>

          <span>
            Bilties Generated
          </span>

        </div>


        <div className="success-highlight">

          <strong>
            4.9/5
          </strong>

          <span>
            Customer Satisfaction
          </span>

        </div>


        <div className="success-highlight">

          <strong>
            99.9%
          </strong>

          <span>
            System Uptime
          </span>

        </div>

      </div>



      {/* REVIEW HEADING */}

      <div className="review-heading">

        <span className="review-label">
          REAL CUSTOMERS • REAL RESULTS
        </span>


        <h2>
          See the Impact of Yashvitech TMS
        </h2>


        <p>
          Transport businesses are saving time, reducing operational
          leakage and making smarter decisions every day.
        </p>

      </div>



      {/* REVIEWS */}

      <div className="success-cards">

        {reviews.map(
          (review, index) => (

            <div
              className="success-card"
              key={index}
            >


              <div className="success-card-top">

                <div className="stars">
                  ★★★★★
                </div>


                <span className="verified-review">
                  ✓ Verified Customer
                </span>

              </div>



              <p className="review-text">
                "{review.text}"
              </p>



              <div className="review-result">

                <span className="impact-label">
                  BUSINESS IMPACT
                </span>


                <strong>
                  {review.result}
                </strong>

              </div>



              <div className="review-performance">

                <div>

                  <strong>
                    {review.number}
                  </strong>


                  <span>
                    {review.label}
                  </span>

                </div>


                <span className="performance-icon">
                  ↗
                </span>

              </div>



              <div className="review-person">

                <div className="review-image">

                  <img
                    src={review.image}
                    alt={review.name}
                  />

                </div>


                <div className="review-person-info">

                  <h4>
                    {review.name}
                  </h4>


                  <p>
                    {review.role}
                  </p>


                  <span>
                    🚚 {review.company}
                  </span>

                </div>


                <div className="customer-check">
                  ✓
                </div>

              </div>

            </div>

          )
        )}

      </div>



      {/* TRUST BADGES */}

      <div className="success-trust">

        <span>
          ✓ Secure Cloud Platform
        </span>

        <span>
          ✓ Dedicated Support
        </span>

        <span>
          ✓ Easy Data Migration
        </span>

        <span>
          ✓ Mobile Friendly
        </span>

      </div>



      {/* BOTTOM CTA */}

      <div className="success-bottom">

        <div className="success-bottom-content">

          <span className="join-tag">
            JOIN 500+ TRANSPORT BUSINESSES
          </span>


          <h2>

            Ready to make your transport

            <br />

            business more profitable?

          </h2>


          <p>
            Discover how Yashvitech TMS can simplify your
            billing, dispatch, fleet management and reporting.
          </p>

        </div>


        <a
          href="#Book"
          className="success-demo-btn"
        >
          Book Free Demo
          <span>
            →
          </span>
        </a>

      </div>

    </section>

  );
}



// ================= FAQ =================

function Faq() {

  const [openIndex, setOpenIndex] =
    useState(null);


  function toggle(index) {

    if (openIndex === index) {

      setOpenIndex(null);

    } else {

      setOpenIndex(index);

    }

  }


  const questions = [

    {
      q: "What is Transport Management System (TMS) software?",

      a: "A TMS is a cloud platform that helps transporters manage bilty generation, fleet dispatch, driver documents, diesel expenses and profit tracking in one place."
    },


    {
      q: "Can I access Yashvitech TMS on mobile phones or tablets?",

      a: "Yes, Yashvitech TMS works smoothly on any mobile browser so branch managers and drivers can use it on the go."
    },


    {
      q: "How does the Driver DL and Vehicle Permit alert system work?",

      a: "The system automatically tracks driver license and vehicle permit expiry dates and sends alerts before they expire, helping avoid RTO fines."
    },


    {
      q: "Can Yashvitech TMS generate Truck Profit and Loss reports?",

      a: "Yes, you can view route-wise and truck-wise profit and loss reports including diesel, tyre and maintenance costs."
    }

  ];


  return (

    <section
      className="faq-section"
      id="faq"
    >


      {/* FAQ TOP */}

      <div className="faq-top">

        <span className="faq-tag">
          GOT QUESTIONS?
        </span>


        <h1>

          Frequently Asked Questions

          <span>
            {" "}About Yashvitech TMS
          </span>

        </h1>


        <p className="faq-sub">
          Everything you need to know about managing your transport
          operations, fleet, expenses and profitability with Yashvitech TMS.
        </p>

      </div>



      {/* FAQ MAIN */}

      <div className="faq-main">


        {/* LEFT IMAGE */}

        <div className="faq-image-area">

          <div className="faq-image-box">

            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=85"
              alt="Transport Management"
            />


            <div className="faq-image-content">

              <span>
                YASHVITECH TMS
              </span>


              <h2>

                Run Your Transport

                <br />

                Business Smarter.

              </h2>


              <p>
                Manage vehicles, drivers, bilty, diesel,
                documents and profits from one powerful platform.
              </p>

            </div>

          </div>



          <div className="faq-stat-card">

            <strong>
              24/7
            </strong>


            <span>

              Business

              <br />

              Visibility

            </span>

          </div>



          <div className="faq-live-card">

            <span className="live-dot"></span>


            <div>

              <strong>
                TMS Dashboard
              </strong>


              <small>
                Operations running smoothly
              </small>

            </div>

          </div>

        </div>



        {/* RIGHT FAQ */}

        <div className="faq-content">

          <div className="faq-content-title">

            <span>
              TRANSPORT SOFTWARE FAQ
            </span>


            <h2>

              Simple answers.

              <br />

              Powerful solutions.

            </h2>

          </div>



          <div className="faq-list">

            {questions.map(
              (item, index) => (

                <div
                  className={
                    `faq-item ${
                      openIndex === index
                        ? "faq-active"
                        : ""
                    }`
                  }
                  key={index}
                >


                  <div
                    className="faq-question"
                    onClick={() =>
                      toggle(index)
                    }
                  >

                    <span className="faq-number">
                      0{index + 1}
                    </span>


                    <h3>
                      {item.q}
                    </h3>


                    <span className="faq-icon">

                      {openIndex === index
                        ? "−"
                        : "+"}

                    </span>

                  </div>



                  {openIndex === index && (

                    <p className="faq-answer">
                      {item.a}
                    </p>

                  )}

                </div>

              )
            )}

          </div>

        </div>

      </div>



      {/* FAQ FEATURES */}

      <div className="faq-features">


        <div className="faq-feature-card">

          <span className="faq-feature-icon">
            🚛
          </span>


          <div>

            <h3>
              Fleet Management
            </h3>


            <p>
              Keep complete control over vehicles, drivers and daily dispatch operations.
            </p>

          </div>

        </div>



        <div className="faq-feature-card">

          <span className="faq-feature-icon">
            ₹
          </span>


          <div>

            <h3>
              Expense Management
            </h3>


            <p>
              Track diesel, tyre, maintenance and other running expenses in one place.
            </p>

          </div>

        </div>



        <div className="faq-feature-card">

          <span className="faq-feature-icon">
            📊
          </span>


          <div>

            <h3>
              Business Analytics
            </h3>


            <p>
              Get clear truck-wise and route-wise profit and loss insights.
            </p>

          </div>

        </div>

      </div>



      {/* FAQ CTA */}

      <div className="faq-bottom">

        <div>

          <span>
            NEED MORE INFORMATION?
          </span>


          <h2>

            Ready to simplify your

            <br />

            transport operations?

          </h2>


          <p>
            See how Yashvitech TMS can help you manage your complete transport business from one place.
          </p>

        </div>


        <button
          onClick={() => {

            document
              .getElementById("demo")
              ?.scrollIntoView({
                behavior: "smooth"
              });

          }}
        >

          Explore TMS

          <span>
            →
          </span>

        </button>

      </div>

    </section>

  );
}



// ================= DEMO FORM =================

function DemoForm() {

  return (

    <section
      className="demo-form-section"
      id="Book"
    >


      {/* LEFT */}

      <div className="demo-left">

        <span className="demo-tag">
          FREE PERSONALIZED DEMO
        </span>


        <h1>
          Ready to Automate Your Logistics & Multiply Fleet Profits?
        </h1>


        <p>
          Schedule a 15-minute live demo with our Transport Management
          System specialists. We will show you how Yashvitech TMS can fit
          your exact fleet size and business workflow.
        </p>


        <p>
          ✔ Zero Setup Fee & Custom Onboarding Assistance
        </p>


        <p>
          ✔ Instant Data Import from Excel / Tally
        </p>


        <p>
          ✔ Dedicated Account Manager & 24/7 Support
        </p>


        <p>
          Prefer to speak directly with us?
        </p>


        <h3>
          Call Sales: +91 98765 43210
        </h3>

      </div>



      {/* RIGHT */}

      <div className="demo-right">

        <h2>
          Request Your Free TMS Demo
        </h2>


        <p>
          Fill in your details below. Our team will contact you within 15 minutes.
        </p>


        <label>
          Full Name *
        </label>


        <input
          type="text"
          placeholder="e.g. Ramesh Shah"
        />



        <label>
          Company / Firm Name *
        </label>


        <input
          type="text"
          placeholder="e.g. Shah Transporters"
        />



        <label>
          Phone Number (WhatsApp) *
        </label>


        <input
          type="text"
          placeholder="+91 98765 43210"
        />



        <label>
          Business Email
        </label>


        <input
          type="email"
          placeholder="ramesh@shahtrans.com"
        />



        <label>
          Fleet Size (Number of Vehicles)
        </label>


        <select>

          <option>
            1 to 10 Trucks
          </option>

          <option>
            11 to 30 Trucks
          </option>

          <option>
            31 to 100 Trucks
          </option>

          <option>
            100+ Trucks
          </option>

        </select>



        <label>
          Primary Challenge
        </label>


        <select>

          <option>
            Automating Bilty & Billing
          </option>

          <option>
            Fleet Tracking
          </option>

          <option>
            Driver Management
          </option>

          <option>
            Diesel & Expense Control
          </option>

        </select>



        <button className="submit-btn">
          Submit & Book My Demo →
        </button>


        <p className="privacy-text">
          🔒 We respect your privacy. No spam guaranteed.
        </p>

      </div>

    </section>

  );
}



// ================= FOOTER =================

function Footer() {

  return (

    <footer className="footer-section">


      <div className="footer-columns">


        {/* ABOUT */}

        <div className="footer-about">

          <div className="footer-logo">

            <div className="logo-box">
               <img
            src="https://www.yashvitech.com/static/media/logo(b).c451bf22349ad8c51a6c.png"
            alt="Yashvitech Logo"
          />

            </div>



          </div>


          <p>
            Yashvitech is a pioneer in web-based transport management
            solutions, empowering goods transport companies, fleet owners,
            and dispatchers across India with cutting-edge cloud automation.
          </p>


          <div className="footer-socials">

            <span>
              🌐
            </span>

            <span>
              in
            </span>

            <span>
              f
            </span>

          </div>

        </div>



        {/* TMS MODULES */}

        <div className="footer-links">

          <h3>
            TMS Modules
          </h3>


          <p>
            Bilty / LR Generator
          </p>

          <p>
            Truck Dispatch Tracker
          </p>

          <p>
            Diesel & Tyre Logs
          </p>

          <p>
            Permit & DL Alerts
          </p>

          <p>
            Daily Cashbook Log
          </p>

        </div>



        {/* REPORTS */}

        <div className="footer-links">

          <h3>
            Reports & Accounts
          </h3>


          <p>
            Truck Profit & Loss
          </p>

          <p>
            Party Ledger & Billing
          </p>

          <p>
            Driver Payroll & Book
          </p>

          <p>
            Consignee Directory
          </p>

          <p>
            Inventory Reports
          </p>

        </div>



        {/* CONTACT */}

        <div className="footer-contact">

          <h3>
            Contact Yashvitech
          </h3>


          <p>
            📍 Yashvitech Tech Park, Logistics Wing, India
          </p>


          <p>
            ✉ info@yashvitech.com
          </p>


          <p>
            🌐 www.yashvitech.com
          </p>

        </div>

      </div>



      <hr />



      <div className="footer-bottom">

        <p>
          © 2026 Yashvitech Technologies. All rights reserved.
          Transport Management System (TMS).
        </p>


        <div className="footer-bottom-links">

          <span>
            Privacy Policy
          </span>

          <span>
            Terms of Service
          </span>

          <span>
            Security
          </span>

        </div>

      </div>

    </footer>

  );
}



// ================= MAIN APP =================

function App() {

  return (

    <>

      <Header />

      <Home />

      <Features />

      <InteractiveDemo />

      <SuccessStories />

      <Faq />

      <DemoForm />

      <Footer />

    </>

  );
}


export default App;