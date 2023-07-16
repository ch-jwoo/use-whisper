type UseWhisperConfig = {
    apiKey?: string;
    autoStart?: boolean;
    timeSlice?: number;
    whisperConfig?: WhisperApiConfig;
    onTranscribe?: (blob: Blob) => Promise<UseWhisperTranscript>;
    bufferSize?: number;
};
type UseWhisperTranscript = {
    blob?: Blob;
    text?: string;
};
type UseWhisperReturn = {
    recording: boolean;
    speaking: boolean;
    transcribing: boolean;
    transcript: UseWhisperTranscript;
    startRecording: () => Promise<void>;
    stopRecording: () => Promise<void>;
};
type UseWhisperHook = (config?: UseWhisperConfig) => UseWhisperReturn;
type WhisperApiConfig = {
    mode?: 'transcriptions' | 'translations';
    model?: 'whisper-1' | string;
    prompt?: string;
    response_format?: 'json' | 'text' | 'srt' | 'verbose_json' | 'vtt';
    temperature?: number;
    language?: string;
};

export { UseWhisperConfig, UseWhisperHook, UseWhisperReturn, UseWhisperTranscript, WhisperApiConfig };
