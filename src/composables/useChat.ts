import type { ChatMessage } from '@/interfaces/chat-message-interface';
import type { YesnoResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getHerResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesnoResponse;

    return data;
  };

  const onMessage = async (text: string) => {
    if (text.length === 0) return;

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    //evaluar si termina con un ?
    if (!text.endsWith('?')) return;
    const { answer, image } = await getHerResponse();
    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
  };

  return {
    //properties
    messages,

    //methods
    onMessage,
  };
};
