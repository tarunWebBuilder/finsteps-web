import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: May 8, 2026</p>
      <p className="mb-4">This Privacy Policy describes how Finsteps ("we", "us", or "our") collects, uses, and protects your information when you use our personal finance application (the "App").</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p className="mb-4">We may collect personal information, including but not limited to your name, messages email address,messages and financial data. If you grant permission, our App may access your messages  to read transaction-related messages (such as receipts, bank statements, or payment notifications) to help you automatically track and categorize your finances.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To analyze transaction data from your messages to provide financial insights and budgeting tools.</li>
        <li>To improve and personalize your experience within the App.</li>
        <li>To communicate with you about updates, features, or support.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">3. Messages Data Access</h2>
      <p className="mb-4">We only access messages data that is relevant to your financial transactions. We do not store, share, or use your messages content for any purpose other than providing the core finance features of the App. Your messages data is processed securely and is not sold to third parties.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Security</h2>
      <p className="mb-4">We implement industry-standard security measures to protect your information. Access to your data is restricted to authorized personnel only.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Rights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You can revoke messages access at any time in your account settings.</li>
        <li>You may request deletion of your data by contacting support.</li>
        <li>You have the right to know what data we collect and how it is used.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">6. Changes to This Policy</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at support@finsteps.com.</p>
    </div>
  );
}
