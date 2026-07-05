import { defineAgent, voice, type JobContext } from '@livekit/agents';
import * as bey from '@livekit/agents-plugin-bey';
import * as google from '@livekit/agents-plugin-google';
import * as deepgram from '@livekit/agents-plugin-deepgram';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export default defineAgent({
  entry: async (ctx: JobContext) => {
    await ctx.connect();
    console.log('waiting for participant');
    
    // Wait for the participant to connect
    const participant = await ctx.waitForParticipant();
    console.log(`starting assistant for room ${ctx.room.name}`);

    // Create the Beyond Presence Avatar session
    const avatar = new bey.AvatarSession({
      avatarId: process.env.BEYOND_PRESENCE_AGENT_ID || "694c83e2-8895-4a98-bd16-56332ca3f449",
      apiKey: process.env.BEYOND_PRESENCE_API_KEY || "sk-kjik3DfNHL2QtLAaUS6MoczlHRyNoQiZZKP1GMaAXzA",
    });

    const agent = new voice.Agent({
      instructions: `You are a highly professional, friendly, and efficient AI Support Agent for Reddot. 
      
Your primary roles are:
1. Handle Inquiries: Answer questions about Reddot's services and our flagship product, SEM (Student Event Management) — a premier campus orchestration suite that unifies space booking, club scheduling, digital ticketing, and approval workflows.
2. Book Appointments: Guide users who want to schedule a consultation by politely asking for their preferred time and contact details, then confirming the booking request.
3. Technical Support: Assist users with website or SEM issues by asking clarifying questions and offering basic troubleshooting steps.

CRITICAL: You are driving a 3D visual avatar! You MUST prepend every sentence with an emotion tag so the avatar can express it. 
Available emotions: [happy], [sad], [angry], [fear], [disgust], [surprise], [neutral], [thinking], [empathetic].
Example: "[happy] Hello! Welcome to Reddot." or "[empathetic] I understand that you're having issues with your website."

Guidelines:
- Always be polite, empathetic, and professional.
- Keep your answers concise and conversational (1-3 sentences maximum per response) to ensure smooth voice interaction.
- Do NOT use markdown formatting, bullet points, or complex lists because your output will be spoken aloud.
- If you don't know the answer, politely inform the user that you will have a human expert reach out to them.`,
    });

    const session = new voice.AgentSession({
      stt: new deepgram.STT(),
      llm: new google.LLM({ model: "gemini-2.5-flash" }),
      tts: new deepgram.TTS({ model: "aura-asteria-en" }),
      // Disable auto-provisioned Silero VAD — it downloads an ONNX model and
      // triggers the lk_eot_audio inference runner which times out on Windows.
      vad: null,
      // Use Deepgram STT-based turn detection instead of the local ONNX runner.
      turnDetection: 'stt',
    });

    // Bind the avatar to the agent session and room explicitly passing credentials
    await avatar.start(session, ctx.room, {
      livekitUrl: process.env.LIVEKIT_URL,
      livekitApiKey: process.env.LIVEKIT_API_KEY,
      livekitApiSecret: process.env.LIVEKIT_API_SECRET
    });
    
    // Start the session processing audio
    // Disable RoomIO audio so DataStreamAudioOutput is not overwritten
    // This allows audio to be sent via DataChannel to the avatar for lip sync
    await session.start({ 
      agent, 
      room: ctx.room,
      outputOptions: { audioEnabled: false } 
    });

    await session.say("Hello! Welcome to Reddot. How can I assist you today?", { allowInterruptions: true });
  },
});

import { cli, ServerOptions } from '@livekit/agents';
import { fileURLToPath } from 'url';

if (process.argv.includes('dev') || process.argv.includes('start')) {
  if (process.env.LIVEKIT_URL && process.env.LIVEKIT_API_KEY && process.env.LIVEKIT_API_SECRET) {
    cli.runApp(new ServerOptions({ 
      agent: fileURLToPath(import.meta.url),
      initializeProcessTimeout: 30000 // Increase timeout to 30s to allow tsx to start on Windows
    }));
  } else {
    console.warn("LiveKit credentials not found. The AI Voice Agent worker will NOT start.");
  }
}
