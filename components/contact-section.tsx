"use client"

import type React from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Heart } from "lucide-react"

export function ContactSection() {

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

        <div className="grid gap-12 items-start">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[var(--primary)]" />
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Email</h4>
                    <a
                      href="mailto:calmwalija@gmail.com"
                      className="text-[var(--primary)] hover:opacity-90 transition-colors duration-300"
                    >
                      calmwalija@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[var(--primary)]" />
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Phone</h4>
                    <div className="space-y-1">
                      <a
                        href="tel:+265993563408"
                        className="block text-[var(--primary)] hover:opacity-90 transition-colors duration-300"
                      >
                        +265 993 563 408
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[var(--primary)]" />
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Location</h4>
                    <p className="text-slate-600">Lilongwe, Area 18, Malawi</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-[var(--primary)]" />
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">GitHub</h4>
                    <a
                      href="https://github.com/calmwalija"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--primary)] hover:opacity-90 transition-colors duration-300"
                    >
                      github.com/calmwalija
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-[var(--primary)]" />
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/calmwalija"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--primary)] hover:opacity-90 transition-colors duration-300"
                    >
                      linkedin.com/in/calmwalija
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-4 h-4 text-[var(--primary)]" />
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
