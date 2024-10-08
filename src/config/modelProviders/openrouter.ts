import { ModelProviderCard } from '@/types/llm';

// ref https://openrouter.ai/docs#models
const OpenRouter: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'Auto (best for prompt)',
      enabled: true,
      functionCall: false,
      id: 'openrouter/auto',
      tokens: 128_000,
      vision: false,
    },
    {
      displayName: 'Mistral 7B Instruct (free)',
      enabled: true,
      functionCall: false,
      id: 'mistralai/mistral-7b-instruct:free',
      tokens: 32_768,
      vision: false,
    },
    {
      displayName: 'Google: Gemma 7B (free)',
      enabled: true,
      functionCall: false,
      id: 'google/gemma-7b-it:free',
      tokens: 8192,
      vision: false,
    },
    {
      displayName: 'OpenChat 3.5 (free)',
      enabled: true,
      functionCall: false,
      id: 'openchat/openchat-7b:free',
      tokens: 8192,
      vision: false,
    },
    {
      displayName: 'Nous: Capybara 7B (free)',
      enabled: true,
      functionCall: false,
      id: 'nousresearch/nous-capybara-7b:free',
      tokens: 4096,
      vision: false,
    },
    {
      displayName: 'Hugging Face: Zephyr 7B (free)',
      enabled: true,
      functionCall: false,
      id: 'huggingfaceh4/zephyr-7b-beta:free',
      tokens: 4096,
      vision: false,
    },
    {
      displayName: 'MythoMist 7B (free)',
      enabled: true,
      functionCall: false,
      id: 'gryphe/mythomist-7b:free',
      tokens: 32_768,
      vision: false,
    },
    {
      displayName: 'Toppy M 7B (free)',
      enabled: true,
      functionCall: false,
      id: 'undi95/toppy-m-7b:free',
      tokens: 4096,
      vision: false,
    },
    {
      displayName: 'Cinematika 7B (alpha) (free)',
      enabled: true,
      functionCall: false,
      id: 'openrouter/cinematika-7b:free',
      tokens: 8000,
      vision: false,
    },
    {
      displayName: 'RWKV v5 World 3B (free)',
      enabled: true,
      functionCall: false,
      id: 'rwkv/rwkv-5-world-3b',
      tokens: 10_000,
      vision: false,
    },
    {
      displayName: 'RWKV v5 3B AI Town (free)',
      enabled: true,
      functionCall: false,
      id: 'recursal/rwkv-5-3b-ai-town',
      tokens: 10_000,
      vision: false,
    },
    {
      displayName: 'RWKV v5: Eagle 7B (free)',
      enabled: true,
      functionCall: false,
      id: 'recursal/eagle-7b',
      tokens: 10_000,
      vision: false,
    },
    {
      displayName: 'Mistral: Mixtral 8x22B (base)',
      enabled: true,
      functionCall: false,
      id: 'mistralai/mixtral-8x22b',
      tokens: 64_000,
      vision: false,
    },
    {
      displayName: 'Microsoft: WizardLM-2 8x22B',
      enabled: true,
      functionCall: false,
      id: 'microsoft/wizardlm-2-8x22b',
      tokens: 65_536,
      vision: false,
    },
  ],
  checkModel: 'mistralai/mistral-7b-instruct:free',
  id: 'openrouter',
  modelList: { showModelFetcher: true },
  // name: 'OpenRouter',
  name: 'Ark',
};

export default OpenRouter;
