"use client";

import { useState } from "react";
import AnimateIn from "../../components/AnimateIn";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    phone: "",
    serviceOfInterest: "web-design",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Prepare payload for Web3Forms API
    const payload = {
      access_key: "6bde9281-2f82-41c0-b2c5-43ac016e3818",
      subject: `New Lead from ${formData.businessName || formData.name} - Summit Webcraft`,
      from_name: "Summit Webcraft Inbound System",
      ...formData,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        // Clear form options upon zero-error confirmation
        setFormData({
          name: "",
          email: "",
          businessName: "",
          phone: "",
          serviceOfInterest: "web-design",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form transmission fault:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="page-hero section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <AnimateIn type="fade-up" duration={800}>
            <span className="section-label" style={{ justifyContent: "center" }}>Let's Build</span>
            <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>Lock in your infrastructure.</h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-dim)" }}>
              Configure your requirements below. An engineering brief will be issued straight to your inbox within 24 hours.
            </p>
          </AnimateIn>
        </div>
      </div>

      <section className="section-light" style={{ padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "650px" }}>
          <AnimateIn type="fade-up" delay={200}>
            <div style={{
              backgroundColor: "#FFFFFF",
              padding: "3rem 2.5rem",
              borderRadius: "12px",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.02)"
            }}>
              
              {submitStatus === "success" && (
                <div style={{
                  backgroundColor: "#F0FDF4",
                  border: "1px solid #BBF7D0",
                  color: "#166534",
                  padding: "1.25rem",
                  borderRadius: "8px",
                  marginBottom: "2rem",
                  fontSize: "0.95rem",
                  lineHeight: "1.5"
                }}>
                  <strong>Configuration Received.</strong> Your specifications have been parsed successfully. Check your email (including spam) for an instant confirmation tracking note from <strong>summitdev.contact@gmail.com</strong>.
                </div>
              )}

              {submitStatus === "error" && (
                <div style={{
                  backgroundColor: "#FEF2F2",
                  border: "1px solid #FEE2E2",
                  color: "#991B1B",
                  padding: "1.25rem",
                  borderRadius: "8px",
                  marginBottom: "2rem",
                  fontSize: "0.95rem"
                }}>
                  <strong>Transmission Interface Warning:</strong> We were unable to dispatch your route request. Please try again or reach out directly to our backup hub at summitdev.contact@gmail.com.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <label htmlFor="name" style={{ display: "block", color: "var(--text-navy, #0B2545)", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.5rem" }}>Full Name *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} style={{ width: "100%", padding: "0.85rem 1rem", borderRadius: "6px", border: "1px solid #CBD5E1", fontSize: "1rem", color: "#0F172A" }} placeholder="John Doe" />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: "block", color: "var(--text-navy, #0B2545)", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.5rem" }}>Work Email *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} style={{ width: "100%", padding: "0.85rem 1rem", borderRadius: "6px", border: "1px solid #CBD5E1", fontSize: "1rem", color: "#0F172A" }} placeholder="john@company.com" />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  <div>
                    <label htmlFor="businessName" style={{ display: "block", color: "var(--text-navy, #0B2545)", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.5rem" }}>Business Name</label>
                    <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} style={{ width: "100%", padding: "0.85rem 1rem", borderRadius: "6px", border: "1px solid #CBD5E1", fontSize: "1rem", color: "#0F172A" }} placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label htmlFor="phone" style={{ display: "block", color: "var(--text-navy, #0B2545)", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.5rem" }}>Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} style={{ width: "100%", padding: "0.85rem 1rem", borderRadius: "6px", border: "1px solid #CBD5E1", fontSize: "1rem", color: "#0F172A" }} placeholder="(555) 000-0000" />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceOfInterest" style={{ display: "block", color: "var(--text-navy, #0B2545)", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.5rem" }}>Primary Architecture Target</label>
                  <select id="serviceOfInterest" name="serviceOfInterest" value={formData.serviceOfInterest} onChange={handleChange} style={{ width: "100%", padding: "0.85rem 1rem", borderRadius: "6px", border: "1px solid #CBD5E1", fontSize: "1rem", color: "#0F172A", backgroundColor: "#FFFFFF" }}>
                    <option value="web-design">Custom Web Design (Static Layout)</option>
                    <option value="web-dev">High-Performance Next.js Web App</option>
                    <option value="seo">Technical SEO & Maps Dominance</option>
                    <option value="ads">Google & Meta Paid Ad Systems</option>
                    <option value="ai">AI Receptionist Core Integration</option>
                    <option value="support">Managed Tier Ongoing Maintenance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={{ display: "block", color: "var(--text-navy, #0B2545)", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.5rem" }}>Project Scope Brief *</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} style={{ width: "100%", padding: "0.85rem 1rem", borderRadius: "6px", border: "1px solid #CBD5E1", fontSize: "1rem", color: "#0F172A", resize: "vertical" }} placeholder="Describe your target outcomes, operational model, or special feature checklist requirements..." />
                </div>

                <button type="submit" disabled={isSubmitting} style={{
                  width: "100%",
                  padding: "1rem",
                  backgroundColor: "var(--accent, #0B2545)",
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  fontWeight: "700",
                  borderRadius: "6px",
                  border: "none",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: "background-color 0.2s"
                }}>
                  {isSubmitting ? "Configuring Endpoint Route..." : "Initialize Project Intake"}
                </button>
              </form>
              
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}