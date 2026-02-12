import random

def get_ai_response(question):
    """
    Generate AI response to user questions
    For hackathon: Use rule-based responses or integrate with OpenAI/Gemini API
    """
    question_lower = question.lower()
    
    # Simple keyword-based responses
    if any(word in question_lower for word in ['species', 'animal', 'extinction']):
        return {
            "answer": "Climate change significantly impacts species through habitat loss, temperature changes, and disrupted food chains. Currently, we're tracking major threats to polar bears, coral reefs, and rainforest species.",
            "confidence": 0.85,
            "sources": ["IPCC Reports", "Conservation Biology Studies"]
        }
    
    elif any(word in question_lower for word in ['temperature', 'warming', 'heat']):
        return {
            "answer": "Global temperatures are rising at an unprecedented rate. A 2°C increase can lead to severe ecosystem disruptions, species migration, and loss of critical habitats. Limiting warming to 1.5°C is crucial.",
            "confidence": 0.90,
            "sources": ["IPCC AR6", "NASA Climate Data"]
        }
    
    elif any(word in question_lower for word in ['ocean', 'sea', 'marine']):
        return {
            "answer": "Ocean acidification and warming are causing massive coral bleaching events and disrupting marine ecosystems. Sea levels are rising, threatening coastal communities and habitats.",
            "confidence": 0.88,
            "sources": ["NOAA Ocean Studies", "Marine Biology Research"]
        }
    
    elif any(word in question_lower for word in ['forest', 'trees', 'amazon']):
        return {
            "answer": "Deforestation combined with climate change is creating a dual threat. Forests act as carbon sinks, and their loss accelerates warming while destroying critical habitats for countless species.",
            "confidence": 0.87,
            "sources": ["Amazon Research Institute", "Forest Conservation Reports"]
        }
    
    elif any(word in question_lower for word in ['solution', 'help', 'what can']):
        return {
            "answer": "Key solutions include: reducing carbon emissions, protecting existing ecosystems, supporting renewable energy, implementing conservation programs, and promoting sustainable practices. Individual actions matter when combined with systemic change.",
            "confidence": 0.92,
            "sources": ["UN Climate Action", "Environmental Policy Research"]
        }
    
    else:
        return {
            "answer": "Climate change is a complex issue affecting ecosystems worldwide. Our simulation shows impacts on species, habitats, and ecosystem stability. Try asking about specific topics like species, oceans, forests, or solutions.",
            "confidence": 0.75,
            "sources": ["General Climate Science"]
        }
