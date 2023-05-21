import openai from './chatgpt';

const query = async (prompt: string, chatId: string, model: string) => {
  const response = await openai
    .createChatCompletion({
      // model,
      model: 'gpt-3.5-turbo',
      messages: [
        // {
        //   role: 'system',
        //   content:
        //     "you're an a AI assistant that replies to all my questions in markdown format.",
        // },
        // { role: 'user', content: 'hi' },
        // { role: 'assistant', content: 'Hi! How can I help you?' },
        { role: 'user', content: `${prompt}?` },
      ],
      temperature: 0.9,
      top_p: 0.3,
      max_tokens: 1000,
      frequency_penalty: 0.5,
      presence_penalty: 0.2,
    })
    .then((res) => {
      console.log(res.data);
      return res.data.choices[0].message?.content;
    })
    .catch(
      (err) =>
        `ChatGpt was to find an answer for that! (errpre: ${err.message})`
    );

  return response;
};

export default query;
