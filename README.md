
# Ramigo.in

**Ramigo.in** is a versatile web application that integrates features from cryptocurrency tracking, forex market analysis, and cybersecurity tools. Built using **React** and powered by **open APIs**, this application aims to provide users with a seamless and secure experience for monitoring financial markets and safeguarding their online presencee.

---

## Features

### Cryptocurrency Tracker
- View live cryptocurrency prices and market trends.
- Detailed insights into market cap, trading volume, and price changes.
- Powered by **CoinGecko API** for real-time crypto data.

### Forex Market Explorer
- Track live exchange rates for major currencies.
- Compare currency trends over time.
- Detailed charts and analysis for informed trading decisions.
- Powered by **Finnhub.io API** or other open APIs.

### Cybersecurity Tools
- IP Address Finder using **IPinfo API**.
- User authentication system for secure access.
- Restricted content for logged-in users.
- Notifications with sound alerts for cybersecurity events.

---

## Technologies Used
- **Frontend**: React, Context API, and localStorage for state and authentication management.
- **APIs**:  
  - [CoinGecko API](https://www.coingecko.com/) for cryptocurrency data.  
  - [Finnhub.io API](https://finnhub.io/) for forex data.  
  - [IPinfo API](https://ipinfo.io/) for IP address tracking.
- **Styling**: Tailwind CSS / CSS modules.
- **Charting Libraries**: Chart.js or Recharts for data visualization.

---

## Installation and Setup

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/ramigo.in.git
   cd ramigo.in
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Add Environment Variables**  
   Create a `.env` file in the root directory and add your API keys:  
   ```env
   REACT_APP_COINGECKO_API_KEY=your-coingecko-api-key
   REACT_APP_FINNHUB_API_KEY=your-finnhub-api-key
   REACT_APP_IPINFO_API_KEY=your-ipinfo-api-key
   ```

4. **Run the Application**  
   ```bash
   npm start
   ```

---

## Usage

- Navigate to the cryptocurrency section to view live crypto market data.
- Explore the forex section to track currency rates and trends.
- Use the cybersecurity tools to track IP addresses or access secure content.

---

## Future Enhancements
- Add more advanced cybersecurity tools, such as a password strength checker.
- Integrate machine learning to predict cryptocurrency and forex trends.
- Create a mobile-friendly version of the application.

---

## Contributing
We welcome contributions from the community! Feel free to submit pull requests or open issues for any suggestions or bugs.

---

## License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
- Thanks to **CoinGecko**, **Finnhub**, and **IPinfo** for their amazing APIs.
- Inspired by the need for a secure and feature-rich financial tool.