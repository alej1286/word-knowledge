/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
const words = require('./words');
let start = 0;
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = "Ok, let's go over the words for the ASVAB test";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const FlashCardIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FlashCardIntent';
    },
    handle(handlerInput) {
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput2 = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput3 = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput4 = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput5 = words[start];
        start += 1;
        
        speakOutput = speakOutput[0].toUpperCase() + speakOutput.substring(1);
        speakOutput2 = speakOutput2[0].toUpperCase() + speakOutput2.substring(1);
        speakOutput3 = speakOutput3[0].toUpperCase() + speakOutput3.substring(1);
        speakOutput4 = speakOutput4[0].toUpperCase() + speakOutput4.substring(1);
        speakOutput5 = speakOutput5[0].toUpperCase() + speakOutput5.substring(1);
        
        
        return handlerInput.responseBuilder
            .speak(speakOutput + ". " + speakOutput2 + ". " + speakOutput3 + ". " + speakOutput4 + ". " + speakOutput5)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const FlashCardGoStartIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FlashCardGoStartIntent';
    },
    handle(handlerInput) {
        
        start = 0;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput2 = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput3 = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput4 = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput5 = words[start];
        start += 1;
        
        speakOutput = speakOutput[0].toUpperCase() + speakOutput.substring(1);
        speakOutput2 = speakOutput2[0].toUpperCase() + speakOutput2.substring(1);
        speakOutput3 = speakOutput3[0].toUpperCase() + speakOutput3.substring(1);
        speakOutput4 = speakOutput4[0].toUpperCase() + speakOutput4.substring(1);
        speakOutput5 = speakOutput5[0].toUpperCase() + speakOutput5.substring(1);
        
        
        return handlerInput.responseBuilder
            .speak(speakOutput + ". " + speakOutput2 + ". " + speakOutput3 + ". " + speakOutput4 + ". " + speakOutput5)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};


const FlashCardRepeatIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FlashCardRepeatIntent';
    },
    handle(handlerInput) {
        
        if(start === 0){
            start = words.length - 5;
        } else {
            start = start - 5;
        }
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput2 = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput3 = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput4 = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput5 = words[start];
        start += 1;
        
        speakOutput = speakOutput[0].toUpperCase() + speakOutput.substring(1);
        speakOutput2 = speakOutput2[0].toUpperCase() + speakOutput2.substring(1);
        speakOutput3 = speakOutput3[0].toUpperCase() + speakOutput3.substring(1);
        speakOutput4 = speakOutput4[0].toUpperCase() + speakOutput4.substring(1);
        speakOutput5 = speakOutput5[0].toUpperCase() + speakOutput5.substring(1);
        
        
        return handlerInput.responseBuilder
            .speak(speakOutput + ". " + speakOutput2 + ". " + speakOutput3 + ". " + speakOutput4 + ". " + speakOutput5)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const FlashCardBackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FlashCardBackIntent';
    },
    handle(handlerInput) {
        
        if(start === 0){
            start = words.length - 10;
        } else {
            start = start - 10
        }
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput2 = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput3 = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput4 = words[start];
        start += 1;
        
        if(start === words.length){
            start = 0;
        }
        let speakOutput5 = words[start];
        start += 1;
        
        speakOutput = speakOutput[0].toUpperCase() + speakOutput.substring(1);
        speakOutput2 = speakOutput2[0].toUpperCase() + speakOutput2.substring(1);
        speakOutput3 = speakOutput3[0].toUpperCase() + speakOutput3.substring(1);
        speakOutput4 = speakOutput4[0].toUpperCase() + speakOutput4.substring(1);
        speakOutput5 = speakOutput5[0].toUpperCase() + speakOutput5.substring(1);
        
        
        return handlerInput.responseBuilder
            .speak(speakOutput + ". " + speakOutput2 + ". " + speakOutput3 + ". " + speakOutput4 + ". " + speakOutput5)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say Back or previous! to return 10 or 5 words earlier or you can say word, more, next to proceed to the following words.Did you understood?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        FlashCardIntentHandler,
        FlashCardBackIntentHandler,
        FlashCardRepeatIntentHandler,
        FlashCardGoStartIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();