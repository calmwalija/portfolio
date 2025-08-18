"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      toast({
        title: "Message sent",
        description: "Thanks for reaching out. I’ll get back to you shortly!",
      })
      setFormData({ name: "", email: "", message: "" })
    }, 900)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to create healthcare technology that makes a difference? Let's collaborate on your next digital health
            project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full"
                  placeholder="Tell me about your healthcare technology project..."
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-emerald-600 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Email</h4>
                    <a
                      href="mailto:calmwalija@gmail.com"
                      className="text-emerald-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      calmwalija@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Phone</h4>
                    <div className="space-y-1">
                      <a
                        href="tel:+265993563408"
                        className="block text-emerald-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        +265 993 563 408
                      </a>
                      <a
                        href="tel:+265881154800"
                        className="block text-emerald-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        +265 881 154 800
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Location</h4>
                    <p className="text-slate-600">Lilongwe, Area 18, Malawi</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-emerald-600" />
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">GitHub</h4>
                    <a
                      href="https://github.com/calmwalija"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      github.com/calmwalija
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-emerald-600" />
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/calmwalija"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      linkedin.com/in/calmwalija
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-4 h-4 text-emerald-600" />
                  <h4 className="font-medium text-slate-800">Interests</h4>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  When I'm not coding, you'll find me playing volleyball or listening to music.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  I'm passionate about building healthcare technology that improves lives. Let's discuss how we can work
                  together to create meaningful digital health solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
