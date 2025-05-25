import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";
import { Input } from "../components/input";
import { AnimatedSection } from "../components/AnimatedSection";

export const SignupScreen = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center p-4">
      <AnimatedSection animation="fadeIn" duration={800}>
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <AnimatedSection animation="fadeInUp" delay={200}>
              <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 font-['Labrada',Helvetica] text-[#544c4c]">
                Create Account
              </h1>
            </AnimatedSection>
            <form onSubmit={handleSignup} className="space-y-4">
              <AnimatedSection animation="fadeInUp" delay={300}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeInUp" delay={500}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeInUp" delay={600}>
                <Button type="submit" className="w-full bg-[#2c282a] text-white">
                  Sign Up
                </Button>
              </AnimatedSection>
            </form>
            <AnimatedSection animation="fadeIn" delay={700}>
              <p className="text-center mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-[#2c282a] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2c282a]"
                >
                  Login
                </button>
              </p>
            </AnimatedSection>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
};