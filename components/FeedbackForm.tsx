"use client";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import { Button } from "./ui/button";
import Input from "./ui/input";
import Label from "./ui/label";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Menu, MenuItem } from "./fluid-menu";
import { ChevronDown } from "lucide-react";
import { useToast } from "../frontend/src/hooks/use-toast";
import { useNavigate } from "react-router-dom";

type FeedbackType = "Complaint" | "Suggestion" | "Praise";

export default function FeedbackForm() {
  const [formState, setFormState] = useState({
    feedbackType: "Complaint" as FeedbackType,
    message: "",
    isAnonymous: false
  });

  const { toast } = useToast() ?? { toast: () => {} };
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!formState.message) {
      toast?.({
        title: "Error",
        description: "Please enter your feedback message",
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: formState.message,
          type: formState.feedbackType,
          isAnonymous: formState.isAnonymous,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      await response.json();
      
      toast?.({
        title: "Success",
        description: "Feedback submitted successfully",
      });

      // Clear form
      setFormState({
        feedbackType: "Complaint",
        message: "",
        isAnonymous: false
      });

      // Navigate back
      navigate(-1);
      
    } catch (error) {
      toast?.({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
      });
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-12">
      <CardHeader>
        <h2 className="text-2xl font-bold text-center">Submit Feedback</h2>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Fluid Menu Implementation */}
        <div className="space-y-2">
          <Label>Feedback Type</Label>
          <Menu
            trigger={
              <div className="flex items-center justify-between w-full px-4 py-2 border rounded-md">
                {formState.feedbackType}
                <ChevronDown className="ml-2 h-4 w-4" />
              </div>
            }
            align="left"
            showChevron={false}
          >
            {(["Complaint", "Suggestion", "Praise"] as const).map((type) => (
              <MenuItem
                key={type}
                onClick={() => setFormState({...formState, feedbackType: type})}
              >
                {type}
              </MenuItem>
            ))}
          </Menu>
        </div>

        {/* Message Input */}
        <div className="space-y-2">
          <Label>Your Feedback</Label>
          <Input
            placeholder="Describe your experience..."
            value={formState.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormState({...formState, message: e.target.value})}
            className="h-32"
            multiline
          />
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
        >
          Submit Feedback
        </Button>

        {/* QR Code Section */}
        <div className="mt-6 text-center">
          <div className="inline-block p-3 bg-white rounded-lg">
            <QRCode 
              value={window.location.href}
              size={128}
              className="border rounded-md"
            />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Scan to share this form
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
