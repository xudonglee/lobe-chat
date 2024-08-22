import { LOBE_DEFAULT_MODEL_LIST } from '@/config/modelProviders';

import { ModelProvider } from '../types';
import { LobeOpenAICompatibleFactory } from '../utils/openaiCompatibleFactory';
import { OpenRouterModelCard } from './type';

export const LobeOpenRouterAI = LobeOpenAICompatibleFactory({
  // baseURL: 'https://openrouter.ai/api/v1',
  baseURL: 'https://api.agiark2.com/api/v1',
  constructorOptions: {
    defaultHeaders: {
      // Need to change HTTP-Referer
      'HTTP-Referer': 'https://chat-preview.lobehub.com',
      'X-Title': 'Ark Chat',
    },
  },
  debug: {
    chatCompletion: () => process.env.DEBUG_OPENROUTER_CHAT_COMPLETION === '1',
  },
  models: {
    transformModel: (m) => {
      const model = m as unknown as OpenRouterModelCard;

      return {
        description: model.description,
        displayName: model.name,
        enabled: LOBE_DEFAULT_MODEL_LIST.find((m) => model.id.endsWith(m.id))?.enabled || false,
        functionCall: model.description.includes('function calling'),
        id: model.id,
        maxTokens:
          typeof model.top_provider.max_completion_tokens === 'number'
            ? model.top_provider.max_completion_tokens
            : undefined,
        tokens: model.context_length,
        vision:
          model.description.includes('vision') ||
          model.description.includes('multimodal') ||
          model.id.includes('vision'),
      };
    },
  },
  provider: ModelProvider.OpenRouter,
});
