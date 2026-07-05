import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MessageSquare,
  Maximize2,
  Minimize2,
  Loader2,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LiveKitRoom,
  RoomAudioRenderer,
  StartAudio,
  useVoiceAssistant,
  BarVisualizer,
  VoiceAssistantControlBar,
  VideoTrack,
  useTracks,
} from "@livekit/components-react";
import { Track } from "livekit-client";

interface AvatarWidgetProps {
  position?: "bottom-right" | "bottom-left";
  startOpen?: boolean;
}

export default function AvatarWidget({
  position = "bottom-right",
  startOpen = false,
}: AvatarWidgetProps) {
  const [isOpen, setIsOpen] = useState(startOpen);
  const [isExpanded, setIsExpanded] = useState(false);
  const [roomToken, setRoomToken] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const liveKitUrl =
    import.meta.env.VITE_LIVEKIT_URL || "wss://your-project.livekit.cloud";

  const handleStartConversation = async () => {
    setIsConnecting(true);
    try {
      const res = await fetch("/api/livekit-token");
      const data = await res.json();
      if (data.token) {
        setRoomToken(data.token);
        setHasStarted(true);
      } else {
        console.error("Failed to get LiveKit token:", data.error);
      }
    } catch (err) {
      console.error("Error fetching LiveKit token:", err);
    } finally {
      setIsConnecting(false);
    }
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    // Optional: Reset state when closing completely
    if (isOpen) {
      setHasStarted(false);
      setRoomToken(null);
    }
  };

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={cn(
        "fixed z-50 flex flex-col items-end",
        position === "bottom-right" ? "bottom-6 right-6" : "bottom-6 left-6"
      )}
    >
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={toggleOpen}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl flex items-center justify-center hover:shadow-blue-500/25 hover:scale-105 transition-all group relative overflow-hidden"
            title="Open AI Support"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <MessageSquare size={28} className="relative z-10" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{ originX: 1, originY: 1 }}
            className={cn(
              "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 flex flex-col overflow-hidden ring-1 ring-black/5 will-change-transform",
              isExpanded
                ? "fixed inset-4 sm:inset-auto sm:w-[800px] sm:h-[600px] sm:bottom-24 sm:right-6 z-[60]"
                : "w-[calc(100vw-48px)] sm:w-[380px] h-[75vh] sm:h-[600px] max-h-[600px]"
            )}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-lg">
                    R
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Reddot AI Assistant
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Powered by Beyond Presence
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleExpand}
                  className="h-8 w-8 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  title={isExpanded ? "Collapse" : "Expand"}
                >
                  {isExpanded ? (
                    <Minimize2 size={16} />
                  ) : (
                    <Maximize2 size={16} />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  title="Settings"
                >
                  <Settings size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleOpen}
                  className="h-8 w-8 text-slate-500 hover:text-red-500"
                  title="Close"
                >
                  <X size={18} />
                </Button>
              </div>
            </div>

            {/* LiveKit Room */}
            <div className="flex-1 flex flex-col relative bg-slate-50/50 dark:bg-slate-900/50">
              {!hasStarted ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-500">
                  <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <MessageSquare
                      size={40}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                    Ready to help
                  </h4>
                  <p className="mb-8 max-w-[250px] text-sm">
                    Click below to start a live voice conversation with our AI
                    support agent.
                  </p>
                  <Button
                    onClick={handleStartConversation}
                    disabled={isConnecting}
                    className="w-full max-w-[200px] bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6 shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
                  >
                    {isConnecting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      "Start Conversation"
                    )}
                  </Button>
                </div>
              ) : (
                <LiveKitRoom
                  serverUrl={liveKitUrl}
                  token={roomToken!}
                  connect={true}
                  audio={true}
                  video={false}
                  className="flex-1 flex flex-col"
                >
                  <AgentInterface />
                </LiveKitRoom>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AgentInterface() {
  const { state, audioTrack } = useVoiceAssistant();

  // The Beyond Presence plugin publishes a video track when it connects
  const tracks = useTracks([Track.Source.Camera]);

  // Find the avatar track: look for 'avatar' in the identity, or fallback to any available camera track
  const avatarVideoTrack =
    tracks.find(
      t => t.participant.isAgent || t.participant.identity.includes("avatar")
    ) || tracks[0];

  return (
    <div className="flex-1 flex flex-col items-center relative overflow-hidden">
      {/* 3D Avatar or Video View */}
      <div className="flex-1 w-full relative flex items-center justify-center bg-slate-900">
        {avatarVideoTrack ? (
          <VideoTrack
            trackRef={avatarVideoTrack}
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900" />

            {(state === "disconnected" || state === "connecting") && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80">
                <Loader2 className="h-8 w-8 animate-spin mb-4" />
                <p className="font-medium text-lg">Connecting to AI Agent...</p>
                <p className="text-xs mt-2 opacity-60">
                  (Initializing neural pathways)
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Control Bar Overlay */}
      <div className="absolute bottom-4 left-0 right-0 px-4 z-10">
        <div className="flex flex-col items-center gap-4">
          <StartAudio 
            label="Click here to allow audio" 
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 animate-bounce shadow-xl border-2 border-white/20" 
          />
          <div className="w-full flex justify-center h-12">
            {audioTrack && (
              <BarVisualizer
                state={state}
                trackRef={audioTrack}
                barCount={7}
                className="h-full w-full max-w-[200px]"
              />
            )}
          </div>

          <VoiceAssistantControlBar className="[&>button]:bg-blue-600 [&>button:hover]:bg-blue-700 shadow-xl border border-white/20 rounded-2xl" />
        </div>
      </div>

      <RoomAudioRenderer />
    </div>
  );
}
