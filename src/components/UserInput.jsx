export default function UserInput({ userInput, onInputChange }) {
    return (
        <>
            <section id="user-input">
                <div className="input-group">
                    <p>
                        <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
                        <input type="number" id="initial-investment" placeholder="Enter amount" required onChange={(e) => onInputChange("initialInvestment", e.target.value)} value={userInput.initialInvestment} />
                    </p>
                    <p>
                        <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
                        <input type="number" id="annual-investment" placeholder="Enter amount" required onChange={(e) => onInputChange("annualInvestment", e.target.value)} value={userInput.annualInvestment}  />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label htmlFor="expected-return">EXPECTED RETURN</label>
                        <input type="number" id="expected-return" placeholder="Enter amount" required onChange={(e) => onInputChange("expectedReturn", e.target.value)} value={userInput.expectedReturn} />
                    </p>
                    <p>
                        <label htmlFor="duration">DURATION</label>
                        <input type="number" id="duration" placeholder="Enter amount" required onChange={(e) => onInputChange("duration", e.target.value)} value={userInput.duration} />
                    </p>
                </div>
            </section>
        </>
    )
}
