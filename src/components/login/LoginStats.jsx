import React from "react";

export function LoginStats() {
  return (
    <div className="flex justify-center space-x-8 py-6">
      <div className="text-center">
        <div className="text-xl font-bold">30+</div>
        <div className="text-sm text-gray-600">Language Support</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold">10K+</div>
        <div className="text-sm text-gray-600">Developers</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold">100K+</div>
        <div className="text-sm text-gray-600">Users Served</div>
      </div>
    </div>
  );
}
