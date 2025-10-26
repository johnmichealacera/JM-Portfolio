<template>
  <!-- Floating Chat Button -->
  <button
    v-if="!isOpen"
    @click="toggleChat"
    class="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
    aria-label="Open AI Assistant"
  >
    <span class="text-3xl">🤖</span>
    <span v-if="unreadCount > 0" class="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
      {{ unreadCount > 9 ? '9+' : unreadCount }}
    </span>
  </button>

  <!-- Chat Window -->
  <div
    v-if="isOpen"
    class="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col animate-slide-up"
  >
    <!-- Header -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl p-4 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span class="text-2xl">🤖</span>
        </div>
        <div>
          <h3 class="text-white font-semibold">JM Assistant</h3>
          <p class="text-blue-100 text-xs">I'm here to help!</p>
        </div>
      </div>
      <button
        @click="toggleChat"
        class="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Close chat"
      >
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Messages Area -->
    <div 
      ref="messagesContainer"
      class="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white space-y-4"
    >
      <!-- Welcome Message -->
      <div v-if="messages.length === 0" class="flex items-start space-x-3 animate-fade-in">
        <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
          <span class="text-lg">🤖</span>
        </div>
        <div class="flex-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-3 border border-blue-100">
          <p class="text-gray-700 text-sm leading-relaxed">
            👋 Hi! I'm your friendly JM assistant. Feel free to ask me anything about development, my projects, or just chat!
          </p>
        </div>
      </div>

      <!-- Chat Messages -->
      <div 
        v-for="(message, index) in messages" 
        :key="index"
        class="flex items-start space-x-3 animate-fade-in"
        :class="message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''"
      >
        <!-- Avatar -->
        <div 
          class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
          :class="message.role === 'user' 
            ? 'bg-gradient-to-br from-purple-600 to-indigo-600' 
            : 'bg-gradient-to-br from-blue-600 to-purple-600'"
        >
          <span class="text-lg">{{ message.role === 'user' ? '👤' : '🤖' }}</span>
        </div>
        
        <!-- Message Content -->
        <div 
          class="flex-1 rounded-2xl p-3 shadow-md max-w-[80%]"
          :class="message.role === 'user' 
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
            : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 text-gray-700'"
        >
          <p class="text-sm leading-relaxed whitespace-pre-wrap">{{ message.content }}</p>
        </div>
      </div>

      <!-- Loading Indicator -->
      <div v-if="isLoading" class="flex items-start space-x-3 animate-fade-in">
        <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
          <span class="text-lg">🤖</span>
        </div>
        <div class="flex-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-3 border border-blue-100">
          <div class="flex space-x-2">
            <div class="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0s"></div>
            <div class="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            <div class="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Input Area -->
    <div class="p-3 border-t border-gray-200 bg-gray-50">
      <div class="flex items-end space-x-2">
        <input
          v-model="question"
          @keyup.enter="sendMessage"
          @input="handleInput"
          type="text"
          placeholder="Type a message..."
          class="flex-1 px-4 py-2 bg-white rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 text-sm text-gray-800 placeholder-gray-400"
          :disabled="isLoading"
        />
        <button
          @click="sendMessage"
          :disabled="isLoading || !question.trim()"
          class="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          style="min-width: 40px;"
        >
          <svg v-if="!isLoading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <div v-else class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue';

export default {
  name: 'FloatingChatWidget',
  setup() {
    const isOpen = ref(false);
    const question = ref('');
    const messages = ref([]);
    const isLoading = ref(false);
    const unreadCount = ref(0);
    const messagesContainer = ref(null);

    // Hugging Face configuration
    const HF_API_URL = 'https://router.huggingface.co/v1';
    const HF_API_TOKEN = process.env.VUE_APP_HF_API_TOKEN;

    // Toggle chat window
    const toggleChat = () => {
      isOpen.value = !isOpen.value;
      if (isOpen.value) {
        unreadCount.value = 0;
      }
      // Scroll to bottom when opening
      if (isOpen.value) {
        nextTick(() => {
          scrollToBottom();
        });
      }
    };

    // Scroll to bottom of messages
    const scrollToBottom = () => {
      nextTick(() => {
        if (messagesContainer.value) {
          messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
        }
      });
    };

    // Handle input event
    const handleInput = () => {
      // Could add typing indicator or other features here
    };

    // Send message
    const sendMessage = async () => {
      if (!question.value.trim() || isLoading.value) {
        return;
      }

      const userMessage = question.value.trim();
      const userQuestion = userMessage;

      // Add user message to chat
      messages.value.push({
        role: 'user',
        content: userQuestion,
        timestamp: new Date()
      });

      isLoading.value = true;
      question.value = ''; // Clear input immediately
      scrollToBottom();

      try {
        const response = await fetch(`${HF_API_URL}/chat/completions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${HF_API_TOKEN}`
          },
          body: JSON.stringify({
            model: "Qwen/Qwen3-Next-80B-A3B-Instruct",
            messages: [
              {
                role: "system",
                content: "You are John Micheal Acera's friendly AI assistant on his portfolio website. You help visitors learn about him, his projects, and his expertise in software development. Be warm, professional, and helpful. If asked about John, mention he's a purpose-driven fullstack developer passionate about backend systems, mentoring, and building meaningful software."
              },
              ...messages.value.map(msg => ({
                role: msg.role,
                content: msg.content
              }))
            ],
            max_tokens: 500,
            temperature: 0.7
          })
        });

        const data = await response.json();

        if (data.choices && data.choices.length > 0) {
          const aiResponse = data.choices[0].message.content;
          
          messages.value.push({
            role: 'assistant',
            content: aiResponse,
            timestamp: new Date()
          });
        } else if (data.error) {
          messages.value.push({
            role: 'assistant',
            content: `Sorry, I encountered an error: ${data.error.message || data.error}. Please try again!`,
            timestamp: new Date()
          });
        } else {
          messages.value.push({
            role: 'assistant',
            content: "I'm here to chat! How can I help you today?",
            timestamp: new Date()
          });
        }

      } catch (error) {
        console.error('Error calling AI:', error);
        
        messages.value.push({
          role: 'assistant',
          content: `Sorry, I encountered an error: ${error.message}. Please make sure the AI service is configured correctly.`,
          timestamp: new Date()
        });
      } finally {
        isLoading.value = false;
        scrollToBottom();
      }
    };

    return {
      isOpen,
      question,
      messages,
      isLoading,
      unreadCount,
      toggleChat,
      sendMessage,
      handleInput,
      messagesContainer
    };
  }
}
</script>

<style scoped>
/* Custom scrollbar for messages container */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Animation for messages */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

/* Slide up animation for chat window */
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}

/* Custom bounce animation */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.animate-bounce {
  animation: bounce 1.4s ease-in-out infinite;
}
</style>
