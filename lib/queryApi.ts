import openai from './chatgpt';

const query = async (prompt: string, chatId: string, model: string) => {
  const response = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChatGpt was to find an answer for that! (errpre: ${err.message})`
    );

  return response;
};

export default query;
