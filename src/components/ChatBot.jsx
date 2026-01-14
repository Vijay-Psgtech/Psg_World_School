import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone, Mail, MapPin, GraduationCap, BookOpen, Info } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      sender: "bot", 
      text: "Hello! 👋 Welcome to our School. How can I assist you today?",
      timestamp: new Date()
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  // Content categories
  const contentData = {
    admission: {
      title: "Path to Admission",
      details: [
        "Step 1️⃣: Online inquiry form submission",
        "Step 2️⃣: Campus tour & interaction",
        "Step 3️⃣: Entrance assessment & student profile review",
        "Step 4️⃣: Parent meeting and offer of admission",
        "",
        "📞 For queries, contact our admission team",
      ]
    },
    programmes: {
      title: "The IB Continuum",
      details: [
        "🌱 Primary Years Programme (PYP)",
        "   Nurturing inquiry, creativity, and confidence in young learners",
        "   Ages 3– 12",
        "",
        "🎯 Middle Years Programme (MYP)",
        "   Developing analytical skills, intercultural understanding, and personal responsibility",
        "   Ages 11–16",
        "",
        "🎓 Diploma Programme (DP)",
        "   Globally recognized, academically rigorous preparation for top universities",
        "   Ages 16–19",
        "",
        "💼 Career-related Programme (CP)",
        "   Blending academic studies with career-oriented pathways, designed for future leaders",
        "   Ages 16–19"
      ]
    },
    contact: {
      title: "Contact Information",
      details: [
        "📍 PSG World School",
        "   S.F. No. 472, Civil Aerodrome Post",
        "   Coimbatore, Tamil Nadu – 641014",
        "",
        "📧 Email: info@psgworldschool.ac.in",
        "",
        "📞 Phone: +91 XXXXX XXXXX",
        "",
        "🕐 Visit us for more information",
        "💬 We're here to help with your queries"
      ]
    }
  };

  const quickActions = [
    { id: "admission", label: "Admissions", icon: "📚" },
    { id: "programmes", label: "Programmes", icon: "🎓" },
    { id: "contact", label: "Contact", icon: "📞" }
  ];

  const handleQuickAction = (actionId) => {
    const userMessage = {
      sender: "user",
      text: `Tell me about ${quickActions.find(a => a.id === actionId).label}`,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const content = contentData[actionId];
      const botResponse = {
        sender: "bot",
        text: content.title,
        details: content.details,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = {
        sender: "bot",
        text: "",
        timestamp: new Date()
      };

      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes("admission") || lowerInput.includes("apply")) {
        botResponse.text = contentData.admission.title;
        botResponse.details = contentData.admission.details;
      } else if (lowerInput.includes("programme") || lowerInput.includes("course") || lowerInput.includes("degree")) {
        botResponse.text = contentData.programmes.title;
        botResponse.details = contentData.programmes.details;
      } else if (lowerInput.includes("contact") || lowerInput.includes("phone") || lowerInput.includes("email")) {
        botResponse.text = contentData.contact.title;
        botResponse.details = contentData.contact.details;
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        botResponse.text = "Hello! How can I help you today? You can ask about admissions, programmes, or contact information.";
      } else {
        botResponse.text = "I can help you with information about Admissions, Programmes, and Contact details. Please use the quick action buttons below or ask me directly!";
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-24 right-6 z-50 p-3 sm:p-4 rounded-full shadow-2xl bg-gradient-to-r from-[#B18141]/80 to-blue-900 hover:from-[#B18141] hover:to-blue-900 text-white transition-all duration-300 hover:scale-110 group"
          aria-label="Open chat"
        >
          <MessageCircle size={24} className="sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full h-full sm:w-96 sm:h-[600px] sm:max-h-[90vh] bg-white sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border-0 sm:border sm:border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-[#B18141] to-blue-900 text-white p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                <GraduationCap size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold">Academic Assistant</h3>
                <p className="text-xs text-blue-100">Online • Ready to help</p>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="p-2 sm:p-3 bg-gradient-to-b from-gray-50 to-white border-b">
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => handleQuickAction(action.id)}
                  className="flex flex-col items-center gap-0.5 sm:gap-1 p-1.5 sm:p-2 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform">{action.icon}</span>
                  <span className="text-[10px] sm:text-xs text-gray-700 font-medium text-center">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gray-50 space-y-3 sm:space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-2.5 sm:p-3 shadow-sm ${
                    msg.sender === "user"
                      ? "bg-gradient-to-br from-[#B18141] to-blue-900 text-white rounded-br-sm"
                      : "bg-white text-gray-800 rounded-bl-sm border border-gray-200"
                  }`}
                >
                  {msg.text && <p className="text-xs sm:text-sm font-medium mb-1">{msg.text}</p>}
                  {msg.details && (
                    <div className="mt-2 space-y-1">
                      {msg.details.map((detail, idx) => (
                        <p key={idx} className="text-xs sm:text-sm leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  )}
                  <p className={`text-[10px] sm:text-xs mt-1 ${msg.sender === "user" ? "text-blue-100" : "text-gray-400"}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-sm p-3 shadow-sm border border-gray-200">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t bg-white p-2 sm:p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about admissions, programmes..."
              className="flex-1 p-2 sm:p-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-2 sm:p-3 bg-gradient-to-br from-[#B18141]/70 to-blue-900 hover:from-from-[#B18141] hover:to-blue-900 text-white rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              aria-label="Send message"
            >
              <Send size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;