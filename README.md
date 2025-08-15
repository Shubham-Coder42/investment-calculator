# Investment Calculator

A modern, responsive investment calculator built with React and Vite that helps users visualize their investment growth over time. Calculate potential returns based on initial investment, annual contributions, expected return rate, and investment duration.

![Investment Calculator Preview](public/investment-calculator-logo.png)

## Features

- **Interactive Input Controls**: Real-time calculation as you adjust parameters
- **Visual Results Display**: Clean table showing year-by-year investment growth
- **Input Validation**: Real-time validation with helpful error messages
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Indian Currency Format**: Displays amounts in Indian Rupees (₹)
- **Year-by-Year Breakdown**: Detailed view of interest earned and total value

## Tech Stack

- **Frontend**: React 19 with Hooks
- **Build Tool**: Vite
- **Styling**: CSS3 with responsive design
- **Deployment**: GitHub Pages
- **Language**: JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/investment-calculator.git
cd investment-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Initial Investment**: Enter your starting investment amount
2. **Annual Investment**: Set how much you plan to invest each year
3. **Expected Return**: Input your expected annual return rate (as percentage)
4. **Duration**: Specify the investment period in years

The calculator will instantly show:
- Year-by-year investment growth
- Interest earned each year
- Total investment value at the end of each year
- Total interest accumulated over the investment period

## Calculation Formula

The calculator uses compound interest formula with annual contributions:

```
For each year:
- Interest Earned = Current Value × (Expected Return / 100)
- New Value = Current Value + Interest Earned + Annual Investment
```

## Project Structure

```
investment-calculator/
├── public/
│   └── investment-calculator-logo.png
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Application header
│   │   ├── UserInput.jsx       # Input form component
│   │   └── Results.jsx         # Results display component
│   ├── util/
│   │   └── investment.js       # Calculation logic & currency formatter
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Global styles
│   └── index.jsx               # Application entry point
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint for code quality

## Deployment

This project is configured for easy deployment to GitHub Pages:

1. Update the `homepage` field in `package.json`:
```json
"homepage": "https://yourusername.github.io/investment-calculator"
```

2. Deploy:
```bash
npm run deploy
```

## Customization

### Changing Currency Format

To use a different currency, modify the formatter in `src/util/investment.js`:

```javascript
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD", // Change to your preferred currency
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
```

### Styling

Global styles are in `src/index.css`. Component-specific styles can be added to individual component files.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or find any issues, please open an issue on the GitHub repository.
