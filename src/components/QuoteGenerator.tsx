import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RefreshCw, Quote } from "lucide-react";

const inspirationalQuotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
    author: "Unknown"
  },
  {
    text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    author: "Steve Jobs"
  },
  {
    text: "Experience is a hard teacher because she gives the test first, the lesson afterward.",
    author: "Vernon Law"
  },
  {
    text: "To live a creative life, we must lose our fear of being wrong.",
    author: "Joseph Chilton Pearce"
  },
  {
    text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart"
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  }
];

export const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState(inspirationalQuotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateNewQuote = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
      const newQuote = inspirationalQuotes[randomIndex];
      
      // Ensure we don't get the same quote twice in a row
      if (newQuote.text === currentQuote.text && inspirationalQuotes.length > 1) {
        generateNewQuote();
        return;
      }
      
      setCurrentQuote(newQuote);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        
        {/* Header */}
        <div className="space-y-4 animate-slide-up">
          <div className="flex items-center justify-center space-x-3">
            <Quote className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Inspirational Quotes
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Find motivation and inspiration with our collection of powerful quotes from great minds
          </p>
        </div>

        {/* Quote Card */}
        <Card className={`
          p-8 md:p-12 shadow-glow border-2 border-primary/20 
          transition-all duration-500 ease-in-out transform
          ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100 animate-fade-in'}
        `}>
          <div className="space-y-6">
            <blockquote className="text-2xl md:text-4xl font-serif leading-relaxed text-foreground">
              "{currentQuote.text}"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="h-px bg-gradient-primary w-24 mr-4"></div>
              <cite className="text-lg md:text-xl font-medium text-muted-foreground not-italic">
                {currentQuote.author}
              </cite>
              <div className="h-px bg-gradient-primary w-24 ml-4"></div>
            </div>
          </div>
        </Card>

        {/* Generate Button */}
        <div className="animate-slide-up">
          <Button
            onClick={generateNewQuote}
            size="lg"
            disabled={isAnimating}
            className="
              bg-gradient-primary hover:shadow-glow 
              text-primary-foreground font-semibold px-8 py-4 
              text-lg transition-all duration-300 transform 
              hover:scale-105 disabled:scale-100 disabled:opacity-70
              shadow-soft
            "
          >
            <RefreshCw className={`mr-2 h-5 w-5 ${isAnimating ? 'animate-spin' : ''}`} />
            {isAnimating ? 'Generating...' : 'Get New Quote'}
          </Button>
        </div>

        {/* Footer */}
        <div className="pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Share inspiration • Spread positivity • Make a difference
          </p>
        </div>
      </div>
    </div>
  );
};