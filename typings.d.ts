interface Message {
  text: string;
  createdAt: admin.fireStore.Timestamp;
  user: {
      _id: string;
    name: string;
    avatar: string;
  };
}
