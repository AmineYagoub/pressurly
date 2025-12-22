export enum EventPatterns {
  STREAM_DATA_RECEIVED = 'stream.data_received',
  ANALYSIS_FEEDBACK = 'analysis.feedback',
}

export interface StreamDataPayload {
  sessionId: string;
  timestamp: number;
  userId: string;
  audioChunk?: string; // base64
  videoFrame?: string; // base64
}

export interface AnalysisFeedbackPayload {
  sessionId: string;
  status: 'STABLE' | 'STRAINING' | 'OVERLOADED';
  adjustment: number;
  message: string;
}
