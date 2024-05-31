import React from "react";

const OtpVerification = () => {
  return (
    <div class="container mt-4 border-2 mx-auto ">
      <div className="flex justify-center">
        <div class="w-full max-w-md">
          <p className="gap-3 p-3">
            Please enter the OTP sent to your Email address.
          </p>
          <form action="/otp" method="POST" id="otpForm">
            <div class="mb-4">
              <input
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded"
                id="otpInput"
                name="otp"
                placeholder="Enter OTP"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Verify OTP
            </button>

            <a href="/resendOTP">
              <p class="mt-3">
                Didn't receive OTP?{" "}
                <span
                  id="ResendOTP"
                  class="text-blue-500 underline cursor-pointer"
                >
                  Resend
                </span>
              </p>
            </a>

            <div class="mt-4">
              <label>Time Left: </label>
              <h4 id="timer"></h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
