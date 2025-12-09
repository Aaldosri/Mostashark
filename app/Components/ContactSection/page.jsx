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
    // هنا تضيف منطق إرسال النموذج
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-neutral-50 via-amber-50/30 to-neutral-50 mt-10">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(180,83,9,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(180,83,9,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Animated Shapes */}
        <motion.div
          className="absolute top-1/4 -left-20 w-[30rem] lg:w-[40rem] h-[30rem] lg:h-[40rem] bg-gradient-to-br from-amber-300/30 to-amber-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-[30rem] lg:w-[40rem] h-[30rem] lg:h-[40rem] bg-gradient-to-br from-yellow-300/25 to-amber-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Glass Layer */}
        <div className="absolute inset-0 backdrop-blur-[50px] sm:backdrop-blur-[100px]"></div>
      </div>

      {/* Content */}
      <div
        dir="rtl"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-lg rounded-full border border-amber-600/30 shadow-lg mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-amber-600 ml-2"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-amber-900 text-2xl font-medium">
              تواصل معنا
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
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
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            تواصل معنا الآن واحصل على استشارة قانونية مجانية
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CONTACT_INFO.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href={item.link}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 400 },
                }}
                className="relative group cursor-pointer"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 border-2 border-amber-500/20 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-xl mb-4 shadow-lg mx-auto`}
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>

                  {/* Info */}
                  <p className="text-amber-600 font-semibold mb-1">
                    {item.info}
                  </p>

                  {/* Sub Info */}
                  <p className="text-sm text-neutral-600">{item.subInfo}</p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 border-2 border-amber-500/30 shadow-xl">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg">
                  <Send className="w-5 h-5 text-white" />
                </div>
                أرسل لنا رسالة
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label className="block text-neutral-700 font-medium mb-2">
                    الاسم الكامل
                  </label>
                  <div className="relative">
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pr-11 pl-4 py-3 bg-white/60 border-2 border-amber-500/20 rounded-xl focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-neutral-700 font-medium mb-2">
                    رقم الجوال
                  </label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pr-11 pl-4 py-3 bg-white/60 border-2 border-amber-500/20 rounded-xl focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="05xxxxxxxx"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-neutral-700 font-medium mb-2">
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pr-11 pl-4 py-3 bg-white/60 border-2 border-amber-500/20 rounded-xl focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Message Input */}
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
                      className="w-full pr-11 pl-4 py-3 bg-white/60 border-2 border-amber-500/20 rounded-xl focus:border-amber-500 focus:outline-none transition-colors resize-none"
                      placeholder="اكتب رسالتك هنا..."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-xl shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  إرسال الرسالة
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Info and Working Hours */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Map Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 border-2 border-amber-500/30 shadow-xl">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  موقع المكتب
                </h3>

                <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl overflow-hidden border-2 border-amber-500/20 mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68288096984!2d46.538447!3d24.774265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-neutral-700">
                    <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold">المملكة العربية السعودية</p>
                      <p className="text-sm">الرياض</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 border-2 border-amber-500/30 shadow-xl">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  ساعات العمل
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-amber-500/20">
                    <span className="text-neutral-700 font-medium">
                      الأحد - الخميس
                    </span>
                    <span className="text-amber-600 font-bold">
                      9:00 ص - 9:00 م
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-amber-500/20">
                    <span className="text-neutral-700 font-medium">الجمعة</span>
                    <span className="text-amber-600 font-bold">
                      4:00 م - 9:00 م
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-neutral-700 font-medium">السبت</span>
                    <span className="text-red-600 font-bold">مغلق</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-500/20">
                  <p className="text-sm text-neutral-700 text-center">
                    <span className="font-bold text-amber-600">ملاحظة:</span>{" "}
                    خدمة الطوارئ متاحة 24/7
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
