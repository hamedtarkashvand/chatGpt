interface Message {
  text: string;
  createdAt: admin.fireStore.Timestamp;
  user: {
      _id: string;
    name: string;
    avatar: string;
  };
}
interface Question {
  _id: string;
  prompt: string;
  model: string;
}

interface Questions {
  user: {
    _id: string;
    name: 'client' | 'chatGpt';
    avatar: string;
  };
  text: string;
};
