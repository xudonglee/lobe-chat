import { ModelProvider } from '@/libs/agent-runtime';
import { genUserLLMConfig } from '@/utils/genUserLLMConfig';

export const DEFAULT_LLM_CONFIG = genUserLLMConfig({
  ollama: {
    enabled: false, // This will hide the ollama in the chat list default
    fetchOnClient: true,
  },
  openai: {
    enabled: true,
  },

  // Display this two default
  anthropic: {
    enabled: true,
  },
  deepseek: {
    enabled: true,
  },

});

export const DEFAULT_MODEL = 'gpt-4o-mini';
export const DEFAULT_EMBEDDING_MODEL = 'text-embedding-3-small';

export const DEFAULT_PROVIDER = ModelProvider.OpenAI;
