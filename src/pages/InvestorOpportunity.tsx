import React from 'react';

const InvestorOpportunity: React.FC = () => {
  return (
    <div className="bg-black text-yellow-400 p-5 font-sans">
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-[0_0_15px_rgba(255,215,0,0.7)]">
        <div className="text-center mb-8">
          <img src="/logos/White BG.png" alt="Trellis Investment Group Logo" className="max-w-[150px] h-auto mx-auto drop-shadow-[0_0_10px_rgba(255,215,0,0.9)]" />
          <h1 className="text-3xl font-bold text-yellow-400 mt-2">TRELLIS</h1>
          <h2 className="text-xl text-yellow-400">INVESTMENT GROUP</h2>
        </div>

        <h2 className="text-2xl mt-8 mb-4 border-b-2 border-yellow-400 pb-2 text-center text-yellow-400">Investor Opportunity: Forced Appreciation – 3611 SW 36 Street, Hollywood, FL 33023</h2>

        <div className="text-xl mt-6 mb-3 text-yellow-400">🔹 Investment Snapshot</div>
        <ul className="list-none p-0 mb-4">
          <li className="mb-2">Capital Needed: $100,000</li>
          <li className="mb-2">Hold Period: 6 Months</li>
          <li className="mb-2">Return to Investor: 12% Fixed</li>
          <li className="mb-2">Total Payout: $112,000</li>
          <li className="mb-2">Use of Funds:
            <ul className="list-disc pl-5 mt-1">
              <li>Bridge equity gap on construction financing</li>
              <li>Trigger first draw</li>
              <li>Satisfy short-term debt service</li>
            </ul>
          </li>
        </ul>

        <div className="text-xl mt-6 mb-3 text-yellow-400">🔹 Project Overview</div>
        <ul className="list-none p-0 mb-4">
          <li className="mb-2">Acquisition Price: $275,000</li>
          <li className="mb-2">CapEx Budget: $91,000</li>
          <li className="mb-2">All-In Cost: $366,000</li>
          <li className="mb-2">Targeted ARV: $525,000</li>
          <li className="mb-2">Gross Profit Potential: ~$159,000</li>
          <li className="mb-2">Exit Strategy: Resale upon completion</li>
        </ul>

        <div className="text-xl mt-6 mb-3 text-yellow-400">🔹 Use of Investor Capital</div>
        <table className="w-full border-collapse mt-4 mb-5 text-white">
          <thead>
            <tr>
              <th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Allocation</th>
              <th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-yellow-400 p-3">Equity Injection</td><td className="border border-yellow-400 p-3">$46,750</td></tr>
            <tr><td className="border border-yellow-400 p-3">CapEx Draw Trigger</td><td className="border border-yellow-400 p-3">$20,000</td></tr>
            <tr><td className="border border-yellow-400 p-3">Debt Service Reserve</td><td className="border border-yellow-400 p-3">$16,750</td></tr>
            <tr><td className="border border-yellow-400 p-3">Carry/Contingency Buffer</td><td className="border border-yellow-400 p-3">$16,500</td></tr>
            <tr><td className="border border-yellow-400 p-3 font-bold">Total</td><td className="border border-yellow-400 p-3 font-bold">$100,000</td></tr>
          </tbody>
        </table>

        <div className="text-xl mt-6 mb-3 text-yellow-400">🔹 Why This Deal Works</div>
        <ul className="list-disc pl-5 mb-4">
          <li>Undervalued acquisition in appreciating submarket</li>
          <li>Hollywood, FL is a supply-constrained, high-demand area</li>
          <li>Renovation targets high-ROI improvements</li>
          <li>Strong comps support $500K+ resale</li>
          <li>Efficient, short timeline reduces exposure</li>
        </ul>

        <div className="text-xl mt-6 mb-3 text-yellow-400">🔹 Investor Terms & Summary</div>
        <table className="w-full border-collapse mt-4 mb-5 text-white">
          <thead>
            <tr>
              <th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Term</th>
              <th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-yellow-400 p-3">Investment</td><td className="border border-yellow-400 p-3">$100,000</td></tr>
            <tr><td className="border border-yellow-400 p-3">Return</td><td className="border border-yellow-400 p-3">12% Fixed</td></tr>
            <tr><td className="border border-yellow-400 p-3">Term</td><td className="border border-yellow-400 p-3">6 Months</td></tr>
            <tr><td className="border border-yellow-400 p-3">Total Payout</td><td className="border border-yellow-400 p-3">$112,000</td></tr>
            <tr><td className="border border-yellow-400 p-3">Security</td><td className="border border-yellow-400 p-3">Subordinate Lien (negotiable)</td></tr>
            <tr><td className="border border-yellow-400 p-3">Reporting</td><td className="border border-yellow-400 p-3">Monthly updates & progress photos</td></tr>
          </tbody>
        </table>

        <div className="text-2xl mt-8 mb-4 border-b-2 border-yellow-400 pb-2 text-center text-yellow-400">🔹 Detailed Capex Breakdown</div>

        <div className="text-xl mt-6 mb-3 text-yellow-400">New Roof</div>
        <table className="w-full border-collapse mt-4 mb-5 text-white">
          <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Cost</th></tr></thead>
          <tbody>
            <tr><td className="border border-yellow-400 p-3">Removal</td><td className="border border-yellow-400 p-3">$5,000</td></tr>
            <tr><td className="border border-yellow-400 p-3">Replace</td><td className="border border-yellow-400 p-3">$20,000</td></tr>
          </tbody>
        </table>
        <div className="text-xl mt-6 mb-3 text-yellow-400">Kitchen</div>
        <table className="w-full border-collapse mt-4 mb-5 text-white">
          <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Cost</th></tr></thead>
          <tbody>
            <tr><td className="border border-yellow-400 p-3">Removal</td><td className="border border-yellow-400 p-3">$1,500</td></tr>
            <tr><td className="border border-yellow-400 p-3">Boxes and Doors</td><td className="border border-yellow-400 p-3">$3,500</td></tr>
            <tr><td className="border border-yellow-400 p-3">Countertop</td><td className="border border-yellow-400 p-3">$2,000</td></tr>
            <tr><td className="border border-yellow-400 p-3">Appliances</td><td className="border border-yellow-400 p-3">$3,000</td></tr>
            <tr><td className="border border-yellow-400 p-3">Backsplash</td><td className="border border-yellow-400 p-3">$500</td></tr>
          </tbody>
        </table>
        <div className="text-xl mt-6 mb-3 text-yellow-400">Bathrooms (2)</div>
        <table className="w-full border-collapse mt-4 mb-5 text-white">
          <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Cost</th></tr></thead>
          <tbody>
            <tr><td className="border border-yellow-400 p-3">Removal</td><td className="border border-yellow-400 p-3">$3,000</td></tr>
            <tr><td className="border border-yellow-400 p-3">Plumbing</td><td className="border border-yellow-400 p-3">$2,000</td></tr>
            <tr><td className="border border-yellow-400 p-3">Vanity | Toilet | Shower</td><td className="border border-yellow-400 p-3">$2,500</td></tr>
            <tr><td className="border border-yellow-400 p-3">Fixtures</td><td className="border border-yellow-400 p-3">$1,000</td></tr>
            <tr><td className="border border-yellow-400 p-3">Paint</td><td className="border border-yellow-400 p-3">$1,500</td></tr>
          </tbody>
        </table>
        <div className="text-xl mt-6 mb-3 text-yellow-400">Flooring</div>
        <table className="w-full border-collapse mt-4 mb-5 text-white">
          <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Cost</th></tr></thead>
          <tbody>
            <tr><td className="border border-yellow-400 p-3">Removal</td><td className="border border-yellow-400 p-3">$2,100</td></tr>
            <tr><td className="border border-yellow-400 p-3">LBP</td><td className="border border-yellow-400 p-3">$5,625</td></tr>
          </tbody>
        </table>
        <div className="text-xl mt-6 mb-3 text-yellow-400">HVAC</div>
        <table className="w-full border-collapse mt-4 mb-5 text-white">
          <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Cost</th></tr></thead>
          <tbody>
            <tr><td className="border border-yellow-400 p-3">Removal</td><td className="border border-yellow-400 p-3">$1,000</td></tr>
            <tr><td className="border border-yellow-400 p-3">Air Handler</td><td className="border border-yellow-400 p-3">$550</td></tr>
            <tr><td className="border border-yellow-400 p-3">Condenser</td><td className="border border-yellow-400 p-3">$1,500</td></tr>
            <tr><td className="border border-yellow-400 p-3">Thermostat</td><td className="border border-yellow-400 p-3">$150</td></tr>
            <tr><td className="border border-yellow-400 p-3">Installation</td><td className="border border-yellow-400 p-3">$3,300</td></tr>
          </tbody>
        </table>
        <div className="text-xl mt-6 mb-3 text-yellow-400">Electrical</div>
        <table className="w-full border-collapse mt-4 mb-5 text-white">
          <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Cost</th></tr></thead>
          <tbody>
            <tr><td className="border border-yellow-400 p-3">Breaker Removal</td><td className="border border-yellow-400 p-3">$500</td></tr>
            <tr><td className="border border-yellow-400 p-3">Breaker Panel + Install</td><td className="border border-yellow-400 p-3">$2,500</td></tr>
            <tr><td className="border border-yellow-400 p-3">Outlets (USB-C) + Dimmers</td><td className="border border-yellow-400 p-3">$2,000</td></tr>
          </tbody>
        </table>
        <div className="text-xl mt-6 mb-3 text-yellow-400">Water Heater</div>
        <table className="w-full border-collapse mt-4 mb-5 text-white">
          <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Cost</th></tr></thead>
          <tbody>
            <tr><td className="border border-yellow-400 p-3">Removal</td><td className="border border-yellow-400 p-3">$250</td></tr>
            <tr><td className="border border-yellow-400 p-3">Tankless Waterheater + Install</td><td className="border border-yellow-400 p-3">$1,250</td></tr>
          </tbody>
        </table>
        <div className="text-xl mt-6 mb-3 text-yellow-400">Windows + Doors</div>
        <table className="w-full border-collapse mt-4 mb-5 text-white">
          <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Cost</th></tr></thead>
          <tbody>
            <tr><td className="border border-yellow-400 p-3">Removal</td><td className="border border-yellow-400 p-3">$1,000</td></tr>
            <tr><td className="border border-yellow-400 p-3">Doors</td><td className="border border-yellow-400 p-3">$6,500</td></tr>
            <tr><td className="border border-yellow-400 p-3">Windows</td><td className="border border-yellow-400 p-3">$7,500</td></tr>
          </tbody>
        </table>
        <div className="text-xl mt-6 mb-3 text-yellow-400">Paint</div>
        <table className="w-full border-collapse mt-4 mb-5 text-white">
          <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400">Cost</th></tr></thead>
          <tbody>
            <tr><td className="border border-yellow-400 p-3">Exterior Paint</td><td className="border border-yellow-400 p-3">$5,000</td></tr>
            <tr><td className="border border-yellow-400 p-3">Interior Paint</td><td className="border border-yellow-400 p-3">$3,500</td></tr>
            <tr><td className="border border-yellow-400 p-3">Molding + Baseboards</td><td className="border border-yellow-400 p-3">$1,000</td></tr>
            <tr><td className="border border-yellow-400 p-3">Misc</td><td className="border border-yellow-400 p-3">$500</td></tr>
          </tbody>
        </table>

        <p className="leading-relaxed mt-6">We’re currently finalizing funding commitments for this project and invite you to secure your position today.</p>

        <ul className="list-none p-0 mt-4">
          <li className="mb-2">✅ Investment Amount: $100,000</li>
          <li className="mb-2">✅ Return: 12% Fixed over 6 months</li>
          <li className="mb-2">✅ Payout: $112,000 at maturity</li>
          <li className="mb-2">✅ Timeline: Capital deployed within 14 days</li>
          <li className="mb-2">✅ Reporting: Full transparency with monthly updates</li>
        </ul>

        <div className="text-center mt-10 text-lg">
          <p className="leading-relaxed">To proceed, contact Jonathan Paz | CEO at <a href="mailto:jon@trellisinvest.com" className="text-yellow-400 no-underline hover:underline">jon@trellisinvest.com</a> or call <a href="tel:305-504-4884" className="text-yellow-400 no-underline hover:underline">305-504-4884</a>.</p>
          <p className="leading-relaxed mt-2">We look forward to aligning with you on this and future opportunities at Trellis Investment Group.</p>
        </div>
      </div>
    </div>
  );
};

export default InvestorOpportunity; 