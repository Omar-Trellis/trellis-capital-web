import React from 'react';
import { Download } from 'lucide-react';

const InvestorOpportunity: React.FC = () => {
  const handlePrint = () => {
    // Create a new window with just the investor opportunity content
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Trellis Investment Group - Investor Opportunity Report</title>
          <style>
            @page {
              margin: 0.5in;
              size: letter;
            }
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: Arial, sans-serif;
              background: white;
              color: black;
              font-size: 10px;
              line-height: 1.2;
            }
            .container {
              max-width: 100%;
              padding: 0;
            }
            .header {
              text-align: center;
              margin-bottom: 15px;
              border-bottom: 2px solid #000;
              padding-bottom: 10px;
            }
            .logo {
              max-width: 120px;
              height: auto;
              margin: 0 auto 10px;
            }
            h1 {
              font-size: 18px;
              font-weight: bold;
              margin: 5px 0;
            }
            h2 {
              font-size: 14px;
              margin: 3px 0;
            }
            .main-title {
              font-size: 14px;
              font-weight: bold;
              text-align: center;
              margin: 10px 0;
              border-bottom: 1px solid #000;
              padding-bottom: 5px;
            }
            .section-title {
              font-size: 11px;
              font-weight: bold;
              margin: 10px 0 5px 0;
            }
            .two-column {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
              margin-bottom: 15px;
            }
            .three-column {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              gap: 15px;
              margin-bottom: 10px;
            }
            ul {
              list-style: none;
              padding: 0;
              margin: 0 0 10px 0;
            }
            li {
              margin-bottom: 2px;
              font-size: 9px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 10px;
              font-size: 8px;
            }
            th, td {
              border: 1px solid #666;
              padding: 3px;
              text-align: left;
            }
            th {
              background-color: #f0f0f0;
              font-weight: bold;
            }
            .contact {
              text-align: center;
              margin-top: 15px;
              font-size: 9px;
            }
            .break-inside-avoid {
              break-inside: avoid;
            }
            a {
              color: #0066cc;
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="/logos/Dark BG.png" alt="Trellis Investment Group Logo" class="logo" />
              <h1>TRELLIS</h1>
              <h2>INVESTMENT GROUP</h2>
            </div>

            <div class="main-title">Investor Opportunity: Forced Appreciation – 3611 SW 36 Street, Hollywood, FL 33023</div>

            <div class="two-column">
              <div>
                <div class="section-title">🔹 Investment Snapshot</div>
                <ul>
                  <li>Capital Needed: $100,000</li>
                  <li>Hold Period: 6 Months</li>
                  <li>Return to Investor: 12% Fixed</li>
                  <li>Total Payout: $112,000</li>
                  <li>Use of Funds:
                    <ul style="margin-left: 15px; list-style: disc;">
                      <li>Bridge equity gap on construction financing</li>
                      <li>Trigger first draw</li>
                      <li>Satisfy short-term debt service</li>
                    </ul>
                  </li>
                </ul>

                <div class="section-title">🔹 Project Overview</div>
                <ul>
                  <li>Acquisition Price: $275,000</li>
                  <li>CapEx Budget: $91,000</li>
                  <li>All-In Cost: $366,000</li>
                  <li>Targeted ARV: $525,000</li>
                  <li>Gross Profit Potential: ~$159,000</li>
                  <li>Exit Strategy: Resale upon completion</li>
                </ul>
              </div>
              <div>
                <div class="section-title">🔹 Use of Investor Capital</div>
                <table>
                  <thead>
                    <tr>
                      <th>Allocation</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Equity Injection</td><td>$46,750</td></tr>
                    <tr><td>CapEx Draw Trigger</td><td>$20,000</td></tr>
                    <tr><td>Debt Service Reserve</td><td>$16,750</td></tr>
                    <tr><td>Carry/Contingency Buffer</td><td>$16,500</td></tr>
                    <tr><td><strong>Total</strong></td><td><strong>$100,000</strong></td></tr>
                  </tbody>
                </table>

                <div class="section-title">🔹 Why This Deal Works</div>
                <ul>
                  <li>Undervalued acquisition in appreciating submarket</li>
                  <li>Hollywood, FL is a supply-constrained, high-demand area</li>
                  <li>Renovation targets high-ROI improvements</li>
                  <li>Strong comps support $500K+ resale</li>
                  <li>Efficient, short timeline reduces exposure</li>
                </ul>
              </div>
            </div>

            <div class="section-title">🔹 Investor Terms & Summary</div>
            <table>
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Investment</td><td>$100,000</td></tr>
                <tr><td>Return</td><td>12% Fixed</td></tr>
                <tr><td>Term</td><td>6 Months</td></tr>
                <tr><td>Total Payout</td><td>$112,000</td></tr>
                <tr><td>Security</td><td>Subordinate Lien (negotiable)</td></tr>
                <tr><td>Reporting</td><td>Monthly updates & progress photos</td></tr>
              </tbody>
            </table>

            <div class="section-title">🔹 Detailed Capex Breakdown</div>
            
            <div class="three-column">
              <div class="break-inside-avoid">
                <div class="section-title">New Roof</div>
                <table>
                  <thead><tr><th>Task</th><th>Cost</th></tr></thead>
                  <tbody>
                    <tr><td>Removal</td><td>$5,000</td></tr>
                    <tr><td>Replace</td><td>$20,000</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="break-inside-avoid">
                <div class="section-title">Kitchen</div>
                <table>
                  <thead><tr><th>Task</th><th>Cost</th></tr></thead>
                  <tbody>
                    <tr><td>Removal</td><td>$1,500</td></tr>
                    <tr><td>Boxes and Doors</td><td>$3,500</td></tr>
                    <tr><td>Countertop</td><td>$2,000</td></tr>
                    <tr><td>Appliances</td><td>$3,000</td></tr>
                    <tr><td>Backsplash</td><td>$500</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="break-inside-avoid">
                <div class="section-title">Bathrooms (2)</div>
                <table>
                  <thead><tr><th>Task</th><th>Cost</th></tr></thead>
                  <tbody>
                    <tr><td>Removal</td><td>$3,000</td></tr>
                    <tr><td>Plumbing</td><td>$2,000</td></tr>
                    <tr><td>Vanity | Toilet | Shower</td><td>$2,500</td></tr>
                    <tr><td>Fixtures</td><td>$1,000</td></tr>
                    <tr><td>Paint</td><td>$1,500</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="break-inside-avoid">
                <div class="section-title">Flooring</div>
                <table>
                  <thead><tr><th>Task</th><th>Cost</th></tr></thead>
                  <tbody>
                    <tr><td>Removal</td><td>$2,100</td></tr>
                    <tr><td>LBP</td><td>$5,625</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="break-inside-avoid">
                <div class="section-title">HVAC</div>
                <table>
                  <thead><tr><th>Task</th><th>Cost</th></tr></thead>
                  <tbody>
                    <tr><td>Removal</td><td>$1,000</td></tr>
                    <tr><td>Air Handler</td><td>$550</td></tr>
                    <tr><td>Condenser</td><td>$1,500</td></tr>
                    <tr><td>Thermostat</td><td>$150</td></tr>
                    <tr><td>Installation</td><td>$3,300</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="break-inside-avoid">
                <div class="section-title">Electrical</div>
                <table>
                  <thead><tr><th>Task</th><th>Cost</th></tr></thead>
                  <tbody>
                    <tr><td>Breaker Removal</td><td>$500</td></tr>
                    <tr><td>Breaker Panel + Install</td><td>$2,500</td></tr>
                    <tr><td>Outlets (USB-C) + Dimmers</td><td>$2,000</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="break-inside-avoid">
                <div class="section-title">Water Heater</div>
                <table>
                  <thead><tr><th>Task</th><th>Cost</th></tr></thead>
                  <tbody>
                    <tr><td>Removal</td><td>$250</td></tr>
                    <tr><td>Tankless Waterheater + Install</td><td>$1,250</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="break-inside-avoid">
                <div class="section-title">Windows + Doors</div>
                <table>
                  <thead><tr><th>Task</th><th>Cost</th></tr></thead>
                  <tbody>
                    <tr><td>Removal</td><td>$1,000</td></tr>
                    <tr><td>Doors</td><td>$6,500</td></tr>
                    <tr><td>Windows</td><td>$7,500</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="break-inside-avoid">
                <div class="section-title">Paint</div>
                <table>
                  <thead><tr><th>Task</th><th>Cost</th></tr></thead>
                  <tbody>
                    <tr><td>Exterior Paint</td><td>$5,000</td></tr>
                    <tr><td>Interior Paint</td><td>$3,500</td></tr>
                    <tr><td>Molding + Baseboards</td><td>$1,000</td></tr>
                    <tr><td>Misc</td><td>$500</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p style="font-size: 9px; margin: 10px 0;">We're currently finalizing funding commitments for this project and invite you to secure your position today.</p>

            <ul style="font-size: 9px;">
              <li>✅ Investment Amount: $100,000</li>
              <li>✅ Return: 12% Fixed over 6 months</li>
              <li>✅ Payout: $112,000 at maturity</li>
              <li>✅ Timeline: Capital deployed within 14 days</li>
              <li>✅ Reporting: Full transparency with monthly updates</li>
            </ul>

            <div class="contact">
              <p>To proceed, contact Jonathan Paz | CEO at <a href="mailto:jon@trellisinvest.com">jon@trellisinvest.com</a> or call <a href="tel:305-504-4884">305-504-4884</a>.</p>
              <p>We look forward to aligning with you on this and future opportunities at Trellis Investment Group.</p>
            </div>
          </div>
        </body>
        </html>
      `);
      printWindow.document.close();
      
      // Wait for the content to load, then print
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    }
  };

  return (
    <div className="bg-black text-yellow-400 p-5 font-sans print:bg-white print:text-black">
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-[0_0_15px_rgba(255,215,0,0.7)] relative print:shadow-none print:bg-white print:p-4">
        <button 
          onClick={handlePrint} 
          className="absolute top-4 right-4 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500 transition-all print:hidden"
          aria-label="Download as PDF"
        >
          <Download className="w-5 h-5" />
        </button>

        <div className="text-center mb-8 print:mb-4">
          <img src="/logos/Dark BG.png" alt="Trellis Investment Group Logo" className="max-w-[150px] h-auto mx-auto hidden print:block print:max-w-[120px]" />
          <img src="/logos/White BG.png" alt="Trellis Investment Group Logo" className="max-w-[150px] h-auto mx-auto drop-shadow-[0_0_10px_rgba(255,215,0,0.9)] print:hidden" />
          <h1 className="text-3xl font-bold text-yellow-400 mt-2 print:text-black print:text-2xl">TRELLIS</h1>
          <h2 className="text-xl text-yellow-400 print:text-black print:text-lg">INVESTMENT GROUP</h2>
        </div>

        <h2 className="text-2xl mt-8 mb-4 border-b-2 border-yellow-400 pb-2 text-center text-yellow-400 print:text-black print:border-black print:text-xl print:mt-4 print:mb-2">Investor Opportunity: Forced Appreciation – 3611 SW 36 Street, Hollywood, FL 33023</h2>

        <div className="print:grid print:grid-cols-2 print:gap-x-8">
            <div>
                <div className="text-xl mt-6 mb-3 text-yellow-400 print:text-black print:text-base print:font-bold print:mt-3 print:mb-1">🔹 Investment Snapshot</div>
                <ul className="list-none p-0 mb-4 print:text-xs">
                  <li className="mb-2 print:mb-1">Capital Needed: $100,000</li>
                  <li className="mb-2 print:mb-1">Hold Period: 6 Months</li>
                  <li className="mb-2 print:mb-1">Return to Investor: 12% Fixed</li>
                  <li className="mb-2 print:mb-1">Total Payout: $112,000</li>
                  <li className="mb-2 print:mb-1">Use of Funds:
                    <ul className="list-disc pl-5 mt-1 print:text-xs">
                      <li>Bridge equity gap on construction financing</li>
                      <li>Trigger first draw</li>
                      <li>Satisfy short-term debt service</li>
                    </ul>
                  </li>
                </ul>

                <div className="text-xl mt-6 mb-3 text-yellow-400 print:text-black print:text-base print:font-bold print:mt-3 print:mb-1">🔹 Project Overview</div>
                <ul className="list-none p-0 mb-4 print:text-xs">
                  <li className="mb-2 print:mb-1">Acquisition Price: $275,000</li>
                  <li className="mb-2 print:mb-1">CapEx Budget: $91,000</li>
                  <li className="mb-2 print:mb-1">All-In Cost: $366,000</li>
                  <li className="mb-2 print:mb-1">Targeted ARV: $525,000</li>
                  <li className="mb-2 print:mb-1">Gross Profit Potential: ~$159,000</li>
                  <li className="mb-2 print:mb-1">Exit Strategy: Resale upon completion</li>
                </ul>
            </div>
            <div>
                <div className="text-xl mt-6 mb-3 text-yellow-400 print:text-black print:text-base print:font-bold print:mt-3 print:mb-1">🔹 Use of Investor Capital</div>
                <table className="w-full border-collapse mt-4 mb-5 text-white print:text-black print:text-xs print:mt-2 print:mb-3">
                  <thead>
                    <tr>
                      <th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Allocation</th>
                      <th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Equity Injection</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$46,750</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">CapEx Draw Trigger</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$20,000</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Debt Service Reserve</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$16,750</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Carry/Contingency Buffer</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$16,500</td></tr>
                    <tr><td className="border border-yellow-400 p-3 font-bold print:border-gray-400 print:p-1">Total</td><td className="border border-yellow-400 p-3 font-bold print:border-gray-400 print:p-1">$100,000</td></tr>
                  </tbody>
                </table>

                <div className="text-xl mt-6 mb-3 text-yellow-400 print:text-black print:text-base print:font-bold print:mt-3 print:mb-1">🔹 Why This Deal Works</div>
                <ul className="list-disc pl-5 mb-4 print:text-xs">
                  <li className="print:mb-1">Undervalued acquisition in appreciating submarket</li>
                  <li className="print:mb-1">Hollywood, FL is a supply-constrained, high-demand area</li>
                  <li className="print:mb-1">Renovation targets high-ROI improvements</li>
                  <li className="print:mb-1">Strong comps support $500K+ resale</li>
                  <li className="print:mb-1">Efficient, short timeline reduces exposure</li>
                </ul>
            </div>
        </div>

        <div className="text-xl mt-6 mb-3 text-yellow-400 print:text-black print:text-base print:font-bold print:mt-3 print:mb-1">🔹 Investor Terms & Summary</div>
        <table className="w-full border-collapse mt-4 mb-5 text-white print:text-black print:text-xs print:mt-2 print:mb-3">
          <thead>
            <tr>
              <th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Term</th>
              <th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Investment</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$100,000</td></tr>
            <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Return</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">12% Fixed</td></tr>
            <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Term</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">6 Months</td></tr>
            <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Total Payout</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$112,000</td></tr>
            <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Security</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Subordinate Lien (negotiable)</td></tr>
            <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Reporting</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Monthly updates & progress photos</td></tr>
          </tbody>
        </table>

        <div className="text-2xl mt-8 mb-4 border-b-2 border-yellow-400 pb-2 text-center text-yellow-400 print:text-black print:border-black print:text-lg print:mt-4 print:mb-2">🔹 Detailed Capex Breakdown</div>
        
        <div className="print:grid print:grid-cols-3 print:gap-x-6">
            <div className="break-inside-avoid">
                <div className="text-xl mt-6 mb-3 text-yellow-400 print:text-black print:text-base print:font-bold print:mt-3 print:mb-1">New Roof</div>
                <table className="w-full border-collapse mt-4 mb-5 text-white print:text-black print:text-xs print:mt-2 print:mb-3">
                  <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Cost</th></tr></thead>
                  <tbody>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Removal</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$5,000</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Replace</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$20,000</td></tr>
                  </tbody>
                </table>
            </div>
            <div className="break-inside-avoid">
                <div className="text-xl mt-6 mb-3 text-yellow-400 print:text-black print:text-base print:font-bold print:mt-3 print:mb-1">Kitchen</div>
                <table className="w-full border-collapse mt-4 mb-5 text-white print:text-black print:text-xs print:mt-2 print:mb-3">
                  <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Cost</th></tr></thead>
                  <tbody>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Removal</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$1,500</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Boxes and Doors</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$3,500</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Countertop</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$2,000</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Appliances</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$3,000</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Backsplash</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$500</td></tr>
                  </tbody>
                </table>
            </div>
            <div className="break-inside-avoid">
                <div className="text-xl mt-6 mb-3 text-yellow-400 print:text-black print:text-base print:font-bold print:mt-3 print:mb-1">Bathrooms (2)</div>
                <table className="w-full border-collapse mt-4 mb-5 text-white print:text-black print:text-xs print:mt-2 print:mb-3">
                  <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Cost</th></tr></thead>
                  <tbody>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Removal</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$3,000</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Plumbing</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$2,000</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Vanity | Toilet | Shower</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$2,500</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Fixtures</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$1,000</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Paint</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$1,500</td></tr>
                  </tbody>
                </table>
            </div>
            <div className="break-inside-avoid">
                <div className="text-xl mt-6 mb-3 text-yellow-400 print:text-black print:text-base print:font-bold print:mt-3 print:mb-1">Flooring</div>
                <table className="w-full border-collapse mt-4 mb-5 text-white print:text-black print:text-xs print:mt-2 print:mb-3">
                  <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Cost</th></tr></thead>
                  <tbody>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Removal</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$2,100</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">LBP</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$5,625</td></tr>
                  </tbody>
                </table>
            </div>
            <div className="break-inside-avoid">
                <div className="text-xl mt-6 mb-3 text-yellow-400 print:text-black print:text-base print:font-bold print:mt-3 print:mb-1">HVAC</div>
                <table className="w-full border-collapse mt-4 mb-5 text-white print:text-black print:text-xs print:mt-2 print:mb-3">
                  <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Cost</th></tr></thead>
                  <tbody>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Removal</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$1,000</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Air Handler</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$550</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Condenser</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$1,500</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Thermostat</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$150</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Installation</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$3,300</td></tr>
                  </tbody>
                </table>
            </div>
            <div className="break-inside-avoid">
                <div className="text-xl mt-6 mb-3 text-yellow-400 print:text-black print:text-base print:font-bold print:mt-3 print:mb-1">Electrical</div>
                <table className="w-full border-collapse mt-4 mb-5 text-white print:text-black print:text-xs print:mt-2 print:mb-3">
                  <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Cost</th></tr></thead>
                  <tbody>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Breaker Removal</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$500</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Breaker Panel + Install</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$2,500</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Outlets (USB-C) + Dimmers</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$2,000</td></tr>
                  </tbody>
                </table>
            </div>
            <div className="break-inside-avoid">
                <div className="text-xl mt-6 mb-3 text-yellow-400 print:text-black print:text-base print:font-bold print:mt-3 print:mb-1">Water Heater</div>
                <table className="w-full border-collapse mt-4 mb-5 text-white print:text-black print:text-xs print:mt-2 print:mb-3">
                  <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Cost</th></tr></thead>
                  <tbody>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Removal</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$250</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Tankless Waterheater + Install</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$1,250</td></tr>
                  </tbody>
                </table>
            </div>
            <div className="break-inside-avoid">
                <div className="text-xl mt-6 mb-3 text-yellow-400 print:text-black print:text-base print:font-bold print:mt-3 print:mb-1">Windows + Doors</div>
                <table className="w-full border-collapse mt-4 mb-5 text-white print:text-black print:text-xs print:mt-2 print:mb-3">
                  <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Cost</th></tr></thead>
                  <tbody>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Removal</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$1,000</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Doors</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$6,500</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Windows</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$7,500</td></tr>
                  </tbody>
                </table>
            </div>
            <div className="break-inside-avoid">
                <div className="text-xl mt-6 mb-3 text-yellow-400 print:text-black print:text-base print:font-bold print:mt-3 print:mb-1">Paint</div>
                <table className="w-full border-collapse mt-4 mb-5 text-white print:text-black print:text-xs print:mt-2 print:mb-3">
                  <thead><tr><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Task</th><th className="border border-yellow-400 p-3 text-left bg-gray-700 text-yellow-400 print:bg-gray-200 print:text-black print:border-gray-400 print:p-1">Cost</th></tr></thead>
                  <tbody>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Exterior Paint</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$5,000</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Interior Paint</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$3,500</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Molding + Baseboards</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$1,000</td></tr>
                    <tr><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">Misc</td><td className="border border-yellow-400 p-3 print:border-gray-400 print:p-1">$500</td></tr>
                  </tbody>
                </table>
            </div>
        </div>

        <p className="leading-relaxed mt-6 print:text-xs print:mt-3">We’re currently finalizing funding commitments for this project and invite you to secure your position today.</p>

        <ul className="list-none p-0 mt-4 print:text-xs">
          <li className="mb-2 print:mb-1">✅ Investment Amount: $100,000</li>
          <li className="mb-2 print:mb-1">✅ Return: 12% Fixed over 6 months</li>
          <li className="mb-2 print:mb-1">✅ Payout: $112,000 at maturity</li>
          <li className="mb-2 print:mb-1">✅ Timeline: Capital deployed within 14 days</li>
          <li className="mb-2 print:mb-1">✅ Reporting: Full transparency with monthly updates</li>
        </ul>

        <div className="text-center mt-10 text-lg print:text-xs print:mt-4">
          <p className="leading-relaxed">To proceed, contact Jonathan Paz | CEO at <a href="mailto:jon@trellisinvest.com" className="text-yellow-400 no-underline hover:underline print:text-blue-600 print:underline">jon@trellisinvest.com</a> or call <a href="tel:305-504-4884" className="text-yellow-400 no-underline hover:underline print:text-blue-600 print:underline">305-504-4884</a>.</p>
          <p className="leading-relaxed mt-2">We look forward to aligning with you on this and future opportunities at Trellis Investment Group.</p>
        </div>
      </div>
    </div>
  );
};

export default InvestorOpportunity; 