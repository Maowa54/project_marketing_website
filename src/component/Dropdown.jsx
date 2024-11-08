const Dropdown = () => {
  return (
    <div>
      <select className="border text-xs md:text-sm text-gray-700 border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option  value="digitalMarketingServices" disabled selected>
          Service Type{" "}
        </option>
        <option value="seoOptimization">SEO Optimization</option>
        <option value="contentMarketing">Content Marketing</option>
        <option value="socialMediaMarketing">Social Media Marketing</option>
        <option value="payPerClick">Pay-Per-Click (PPC) Advertising</option>
        <option value="emailMarketing">Email Marketing</option>
        <option value="affiliateMarketing">Affiliate Marketing</option>
        <option value="onlineBranding">Online Branding</option>
      </select>
    </div>
  );
};

export default Dropdown;
