# IPL Dashboard

## 📌 Project Overview
The **IPL Dashboard** is a web application that provides insightful visualizations and analytics on Indian Premier League (IPL) matches. It is built using **Spring Boot (backend), React (frontend), and Chart.js (data visualization)** to deliver an interactive and real-time experience for cricket enthusiasts.

## 🎯 Features
- 📊 **Interactive Charts**: Visual representation of match statistics using **Chart.js**.
- 🔍 **Team-wise Performance**: View performance trends of different IPL teams over the years.
- 📅 **Season-wise Insights**: Analyze statistics based on different IPL seasons.
- 🏏 **Match Details**: View details of individual matches, including scores, top performers, and highlights.
- 📈 **Leaderboard & Stats**: Track the best players, highest scorers, and most wicket-takers.

## 🛠️ Tech Stack
### Backend:
- **Spring Boot** (Java) - REST API development
- **Spring Data JPA** - Database interaction
- **MySQL/PostgreSQL** - Relational database for storing match data

### Frontend:
- **React.js** - Frontend UI development
- **Chart.js** - Data visualization
- **Axios** - API requests
- **Tailwind CSS/Bootstrap** - Styling & responsiveness

## 🚀 Installation & Setup
### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/ipl-dashboard.git
   cd ipl-dashboard/backend
   ```
2. Configure **application.properties** (MySQL/PostgreSQL details)
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/ipl_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   ```
3. Build and run the Spring Boot application:
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```
4. The backend API will be available at `http://localhost:8080`

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm start
   ```
4. Open `http://localhost:3000` in your browser.

## 📡 API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/teams` | GET | Fetch all IPL teams |
| `/api/teams/{teamName}` | GET | Fetch specific team details |
| `/api/matches/{year}` | GET | Fetch match details for a given year |

## 📷 Screenshots
![Dashboard Screenshot](https://github.com/Aniketpatil4308/IPL-DASHBOARD/blob/065bd179d7a234ecfc99ec4862d5043cbc93b478/Team-DashBoard.jpeg)

![Teams-List Screenshot](https://github.com/Aniketpatil4308/IPL-DASHBOARD/blob/5bf04732b9d311f19a427cb222fa2e18f68871b9/Teams-IMG.jpeg)

### 📌 **Video Section **  
## 🎥 IPL Dashboard Demo  

- **🏏 Team Performance Analysis** – Explore the statistics of different IPL teams.  
- **📊 Interactive Charts** – Visual representation of match data using **Chart.js**.  
- **📅 Season-Wise Statistics** – View insights for different IPL seasons.  
- **🔍 Match Details** – Analyze individual match scores, top players, and highlights.  
- **📈 Player Leaderboard** – Track top batsmen, bowlers, and all-rounders.  

👉 Watch the demo here: **[IPL Dashboard Video](https://github.com/Aniketpatil4308/IPL-DASHBOARD/blob/4eb5d9e359e0a6ea7ff236e54a8c3575f9a48cea/IPL-Demo.mp4)**



🏗️ Future Enhancements
- Add player profiles and performance analytics
- Implement user authentication for personalized dashboards
- Enhance UI with animations and improved charts

## 🤝 Contributing
Feel free to fork the repository and submit pull requests. Contributions are welcome!

## 👨‍💻 Author
- **Aniket Patil** - [LinkedIn]([(https://www.linkedin.com/in/aniket-patil1))
