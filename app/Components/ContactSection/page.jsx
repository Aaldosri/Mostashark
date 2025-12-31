"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  User,
  FileText,
} from "lucide-react";

// Contact Info Data
const CONTACT_INFO = [
  {
    id: 1,
    icon: MapPin,
    title: "موقعنا",
    info: "المملكة العربية السعودية",
    subInfo: "الرياض",
    color: "from-amber-500 to-amber-600",
    link: "#",
  },
  {
    id: 2,
    icon: Phone,
    title: "اتصل بنا",
    info: "+966 50 123 4567",
    subInfo: "متاح 24/7",
    color: "from-amber-600 to-yellow-600",
    link: "tel:+966501234567",
  },
  {
    id: 3,
    icon: MessageCircle,
    title: "واتساب",
    info: "+966 50 123 4567",
    subInfo: "رد فوري",
    color: "from-amber-500 to-amber-700",
    link: "https://wa.me/966501234567",
  },
  {
    id: 4,
    icon: Mail,
    title: "البريد الإلكتروني",
    info: "info@lawfirm.sa",
    subInfo: "نرد خلال 24 ساعة",
    color: "from-amber-500 to-amber-700",
    link: "mailto:info@lawfirm.sa",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-neutral-50 via-amber-50/20 to-neutral-50 mt-10">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(180,83,9,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(180,83,9,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

        <motion.div
          className="absolute top-1/4 -left-20 w-[25rem] lg:w-[35rem] h-[25rem] lg:h-[35rem] bg-gradient-to-br from-amber-300/20 to-amber-400/15 rounded-full blur-2xl"
          animate={{
            x: [0, 15, -10, 0],
            y: [0, -15, 10, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-[25rem] lg:w-[35rem] h-[25rem] lg:h-[35rem] bg-gradient-to-br from-yellow-300/15 to-amber-400/15 rounded-full blur-2xl"
          animate={{
            x: [0, -15, 10, 0],
            y: [0, 15, -10, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="absolute inset-0 backdrop-blur-[20px] sm:backdrop-blur-[40px]" />
      </div>

      {/* Content */}
      <div
        dir="rtl"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-amber-600/25 shadow-md mb-4"
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-amber-600 ml-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-amber-900 text-2xl font-medium">
              تواصل معنا
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            نحن هنا{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              لمساعدتك
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-neutral-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            تواصل معنا الآن واحصل على استشارة قانونية مجانية
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CONTACT_INFO.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.link}
                className="relative group cursor-pointer bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-amber-500/20 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
              >
                <div
                  className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-xl mb-4 shadow-md mx-auto`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-amber-600 font-semibold mb-1">{item.info}</p>
                <p className="text-sm text-neutral-600">{item.subInfo}</p>
                {/* Glow Effect */}
                <div className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 bg-gradient-to-r from-amber-500/20 to-amber-600/20 transition-opacity duration-300"></div>
              </a>
            );
          })}
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="relative group bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-amber-500/25 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg">
                <Send className="w-5 h-5 text-white" />
              </div>
              أرسل لنا رسالة
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {["name", "phone", "email"].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-neutral-700 font-medium mb-2">
                    {field === "name"
                      ? "الاسم الكامل"
                      : field === "phone"
                      ? "رقم الجوال"
                      : "البريد الإلكتروني"}
                  </label>
                  <div className="relative">
                    {field === "name" && (
                      <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600" />
                    )}
                    {field === "phone" && (
                      <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600" />
                    )}
                    {field === "email" && (
                      <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600" />
                    )}
                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                          ? "tel"
                          : "text"
                      }
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={
                        field === "name"
                          ? "أدخل اسمك الكامل"
                          : field === "phone"
                          ? "05xxxxxxxx"
                          : "example@email.com"
                      }
                      className="w-full pr-11 pl-4 py-3 bg-white/60 border border-amber-500/20 rounded-xl focus:border-amber-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
              ))}
              <div>
                <label className="block text-neutral-700 font-medium mb-2">
                  رسالتك
                </label>
                <div className="relative">
                  <FileText className="absolute right-3 top-4 w-5 h-5 text-amber-600" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full pr-11 pl-4 py-3 bg-white/60 border border-amber-500/20 rounded-xl focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-xl shadow-md flex items-center justify-center gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                إرسال الرسالة <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Info and Working Hours */}
          <div className="space-y-6">
            {/* Map */}
            <div className="relative bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-amber-500/25 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                موقع المكتب
              </h3>
              <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl overflow-hidden border border-amber-500/20 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68288096984!2d46.538447!3d24.774265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-sm text-neutral-600 text-center">
                المملكة العربية السعودية - الرياض
              </p>
            </div>

            {/* Working Hours */}
            <div className="relative bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-amber-500/25 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                ساعات العمل
              </h3>
              <div className="space-y-3 text-neutral-700 font-medium">
                <div className="flex justify-between border-b border-amber-500/20 py-2">
                  <span>الأحد - الخميس</span>
                  <span className="text-amber-600 font-bold">
                    9:00 ص - 9:00 م
                  </span>
                </div>
                <div className="flex justify-between border-b border-amber-500/20 py-2">
                  <span>الجمعة</span>
                  <span className="text-amber-600 font-bold">
                    4:00 م - 9:00 م
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span>السبت</span>
                  <span className="text-red-600 font-bold">مغلق</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-center text-neutral-700">
                <span className="font-bold text-amber-600">ملاحظة:</span> خدمة
                الطوارئ متاحة 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
